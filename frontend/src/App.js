import { PipelineToolbar } from './toolbar';
import { PipelineUI } from './ui';
import { SubmitButton } from './submit';

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', overflow: 'hidden' }}>
      <header style={{ padding: '16px 24px', borderBottom: '1px solid var(--node-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 style={{ margin: 0, fontSize: '1.4rem', fontWeight: '600', color: 'var(--text-primary)' }}>VectorShift <span style={{ color: 'var(--node-accent)', fontWeight: '400' }}>Pipeline Editor</span></h1>
        <SubmitButton />
      </header>
      <main style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <PipelineToolbar />
        <div style={{ flex: 1, position: 'relative' }}>
          <PipelineUI />
        </div>
      </main>
    </div>
  );
}

export default App;
