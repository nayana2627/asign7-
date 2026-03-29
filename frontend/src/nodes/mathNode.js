import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const MathNode = ({ id, data }) => {
  const handles = [
    { type: 'target', position: Position.Left, id: `${id}-a`, style: { top: '30%' } },
    { type: 'target', position: Position.Left, id: `${id}-b`, style: { top: '70%' } },
    { type: 'source', position: Position.Right, id: `${id}-result` }
  ];

  return (
    <BaseNode id={id} label="Math" handles={handles} type="math">
      <div style={{ display: 'flex', gap: '5px' }}>
        <input type="number" placeholder="A" className="node-input" style={{ width: '45%' }} />
        <select className="node-select" style={{ width: '45%' }}>
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="*">*</option>
          <option value="/">/</option>
        </select>
        <input type="number" placeholder="B" className="node-input" style={{ width: '45%' }} />
      </div>
    </BaseNode>
  );
};
