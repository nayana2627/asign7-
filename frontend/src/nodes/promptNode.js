import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const PromptNode = ({ id, data }) => {
  const handles = [
    { type: 'target', position: Position.Left, id: `${id}-system`, style: { top: '30%' } },
    { type: 'target', position: Position.Left, id: `${id}-user`, style: { top: '70%' } },
    { type: 'source', position: Position.Right, id: `${id}-output` }
  ];

  return (
    <BaseNode id={id} label="Prompt Builder" handles={handles} type="prompt">
      <div>
        <label className="node-label">System Prompt</label>
        <textarea className="node-input" placeholder="You are a helpful assistant..." style={{ fontSize: '0.7rem' }} />
      </div>
      <div>
        <label className="node-label">User Query</label>
        <textarea className="node-input" placeholder="What's the weather?" style={{ fontSize: '0.7rem' }} />
      </div>
    </BaseNode>
  );
};
