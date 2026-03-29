import { BaseNode } from './BaseNode';

export const NoteNode = ({ id, data }) => {
  return (
    <BaseNode id={id} label="Note" handles={[]} type="note">
      <div>
        <span className="node-label">Add a comment...</span>
        <textarea className="node-input" placeholder="Enter notes here..." style={{ height: '80px', resize: 'none' }} />
      </div>
    </BaseNode>
  );
};
