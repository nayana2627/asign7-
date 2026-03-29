import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const FileNode = ({ id, data }) => {
  const handles = [
    { type: 'source', position: Position.Right, id: `${id}-file` }
  ];

  return (
    <BaseNode id={id} label="File Select" handles={handles} type="file">
      <div>
        <label className="node-label">Select File</label>
        <input type="file" className="node-input" style={{ padding: '4px', fontSize: '0.65rem' }} />
      </div>
      <div>
        <label className="node-label">Supported Extensions</label>
        <span style={{ fontSize: '0.65rem', color: 'var(--text-secondary)' }}>.csv, .json, .txt</span>
      </div>
    </BaseNode>
  );
};
