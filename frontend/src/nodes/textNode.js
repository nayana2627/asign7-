import { useState, useEffect, useRef, useMemo } from 'react';
import { Position, useUpdateNodeInternals } from 'reactflow';
import { BaseNode } from './BaseNode';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');
  const updateNodeInternals = useUpdateNodeInternals();
  const textareaRef = useRef(null);

  // Extract variables from text
  const variables = useMemo(() => {
    const regex = /\{\{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\}\}/g;
    const matches = new Set();
    let match;
    while ((match = regex.exec(currText)) !== null) {
      matches.add(match[1]);
    }
    return Array.from(matches);
  }, [currText]);

  // Update handles when variables change
  useEffect(() => {
    updateNodeInternals(id);
  }, [variables, id, updateNodeInternals]);

  // Adjust textarea height
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [currText]);

  const handleTextChange = (e) => setCurrText(e.target.value);

  const dynamicHandles = variables.map((variable, index) => ({
    type: 'target',
    position: Position.Left,
    id: `${id}-${variable}`,
    style: { top: `${(index + 1) * (100 / (variables.length + 1))}%` }
  }));

  const handles = [
    ...dynamicHandles,
    { type: 'source', position: Position.Right, id: `${id}-output` }
  ];

  return (
    <BaseNode id={id} label="Text" handles={handles} style={{ width: 'auto', minWidth: '200px' }} type="text">
      <div>
        <label className="node-label">Text</label>
        <textarea 
          ref={textareaRef}
          value={currText} 
          onChange={handleTextChange} 
          className="node-input"
          style={{ 
            resize: 'none', 
            overflow: 'hidden', 
            minHeight: '40px',
            fontFamily: 'inherit'
          }}
        />
      </div>
    </BaseNode>
  );
}
