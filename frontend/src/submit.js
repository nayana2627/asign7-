import { useStore } from './store';
import { shallow } from 'zustand/shallow';

const selector = (state) => ({
  nodes: state.nodes,
  edges: state.edges,
});

export const SubmitButton = () => {
    const { nodes, edges } = useStore(selector, shallow);

    const handleSubmit = async () => {
        try {
            const formData = new FormData();
            formData.append('pipeline', JSON.stringify({ nodes, edges }));

            const response = await fetch('http://localhost:8000/pipelines/parse', {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            
            alert(
                `Pipeline Analysis Result:\n\n` +
                `• Total Nodes: ${data.num_nodes}\n` +
                `• Total Edges: ${data.num_edges}\n` +
                `• Is Directed Acyclic Graph (DAG): ${data.is_dag ? 'Yes' : 'No'}`
            );
        } catch (error) {
            console.error('Error submitting pipeline:', error);
            alert('Failed to analyze pipeline. Please ensure the backend is running.');
        }
    };

    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
            <button 
                type="button" 
                onClick={handleSubmit}
                style={{
                    background: 'var(--node-accent)',
                    border: 'none',
                    borderRadius: '8px',
                    color: 'white',
                    padding: '10px 24px',
                    fontSize: '1rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'transform 0.2s',
                    boxShadow: '0 4px 12px rgba(59, 130, 246, 0.4)'
                }}
                onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
                Submit Pipeline
            </button>
        </div>
    );
}
