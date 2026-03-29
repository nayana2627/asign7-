import { DraggableNode } from './draggableNode';

export const PipelineToolbar = () => {
    return (
        <div style={{ padding: '20px', borderBottom: '1px solid var(--node-border)', background: 'rgba(15, 23, 42, 0.8)', backdropFilter: 'blur(10px)' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center' }}>
                <DraggableNode type='customInput' label='Input' />
                <DraggableNode type='llm' label='LLM' />
                <DraggableNode type='customOutput' label='Output' />
                <DraggableNode type='text' label='Text' />
                <DraggableNode type='note' label='Note' />
                <DraggableNode type='filter' label='Filter' />
                <DraggableNode type='math' label='Math' />
                <DraggableNode type='prompt' label='Prompt' />
                <DraggableNode type='file' label='File' />
            </div>
        </div>
    );
};
