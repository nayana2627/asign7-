import json
from fastapi import FastAPI, Form
from fastapi.middleware.cors import CORSMiddleware
from collections import deque

app = FastAPI()

# Enable CORS for frontend integration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get('/')
def read_root():
    return {'Ping': 'Pong'}

@app.post('/pipelines/parse')
def parse_pipeline(pipeline: str = Form(...)):
    parsed_data = json.loads(pipeline)
    nodes = parsed_data.get('nodes', [])
    edges = parsed_data.get('edges', [])
    
    num_nodes = len(nodes)
    num_edges = len(edges)
    
    # DAG detection using Kahn's algorithm
    # 1. Build Adjacency list and compute in-degrees
    adj = {node['id']: [] for node in nodes}
    in_degree = {node['id']: 0 for node in nodes}
    
    for edge in edges:
        source = edge['source']
        target = edge['target']
        # Ensure nodes exist in our tracking
        if source in adj and target in in_degree:
            adj[source].append(target)
            in_degree[target] += 1
            
    # 2. Add all nodes with in-degree 0 to queue
    queue = deque([node_id for node_id, degree in in_degree.items() if degree == 0])
    visited_count = 0
    
    while queue:
        u = queue.popleft()
        visited_count += 1
        for v in adj[u]:
            in_degree[v] -= 1
            if in_degree[v] == 0:
                queue.append(v)
                
    # 3. If visited count matches total nodes, it's a DAG
    is_dag = (visited_count == num_nodes)
    
    return {
        'num_nodes': num_nodes, 
        'num_edges': num_edges, 
        'is_dag': is_dag
    }