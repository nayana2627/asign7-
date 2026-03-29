import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const FilterNode = ({ id, data }) => {
  const handles = [
    { type: 'target', position: Position.Left, id: `${id}-input` },
    { type: 'source', position: Position.Right, id: `${id}-true`, style: { top: '30%', background: '#10b981' } },
    { type: 'source', position: Position.Right, id: `${id}-false`, style: { top: '70%', background: '#ef4444' } }
  ];

  return (
    <BaseNode id={id} label="Filter" handles={handles} type="filter">
      <div>
        <label className="node-label">Condition</label>
        <select className="node-select">
          <option value="equals">Equals</option>
          <option value="contains">Contains</option>
          <option value="starts">Starts With</option>
        </select>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.65rem' }}>
        <span>True</span>
        <span>False</span>
      </div>
    </BaseNode>
  );
};
