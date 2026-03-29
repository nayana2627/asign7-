import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.outputName || id.replace('customOutput-', 'output_'));
  const [outputType, setOutputType] = useState(data.outputType || 'Text');

  const handleNameChange = (e) => setCurrName(e.target.value);
  const handleTypeChange = (e) => setOutputType(e.target.value);

  const handles = [
    { type: 'target', position: Position.Left, id: `${id}-value` }
  ];

  return (
    <BaseNode id={id} label="Output" handles={handles} type="output">
      <div>
        <label className="node-label">Name</label>
        <input 
          type="text" 
          value={currName} 
          onChange={handleNameChange} 
          className="node-input"
        />
      </div>
      <div>
        <label className="node-label">Type</label>
        <select value={outputType} onChange={handleTypeChange} className="node-select">
          <option value="Text">Text</option>
          <option value="File">Image</option>
        </select>
      </div>
    </BaseNode>
  );
}
