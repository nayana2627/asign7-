import { Handle, Position } from 'reactflow';

export const BaseNode = ({ id, label, children, handles = [], style = {}, type = '' }) => {
  return (
    <div className={`base-node ${type}-node`} style={style}>
      {handles.map((handle, index) => (
        <Handle
          key={`${id}-handle-${index}`}
          type={handle.type}
          position={handle.position}
          id={handle.id}
          style={handle.style}
        />
      ))}
      <div className="node-header">
        <span>{label}</span>
      </div>
      <div className="node-content">
        {children}
      </div>
    </div>
  );
};
