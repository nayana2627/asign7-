export const DraggableNode = ({ type, label }) => {
    const onDragStart = (event, nodeType) => {
      const appData = { nodeType }
      event.target.style.cursor = 'grabbing';
      event.dataTransfer.setData('application/reactflow', JSON.stringify(appData));
      event.dataTransfer.effectAllowed = 'move';
    };
  
    return (
      <div
        className={type}
        onDragStart={(event) => onDragStart(event, type)}
        onDragEnd={(event) => (event.target.style.cursor = 'grab')}
        style={{ 
          cursor: 'grab', 
          minWidth: '100px', 
          height: '40px',
          display: 'flex', 
          alignItems: 'center', 
          borderRadius: '8px',
          background: 'var(--node-bg)',
          border: '1px solid var(--node-border)',
          color: 'var(--text-primary)',
          justifyContent: 'center', 
          flexDirection: 'column',
          transition: 'all 0.2s ease',
          fontSize: '0.85rem',
          fontWeight: '500',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.2)'
        }} 
        draggable
      >
          <span style={{ color: 'inherit' }}>{label}</span>
      </div>
    );
  };
  