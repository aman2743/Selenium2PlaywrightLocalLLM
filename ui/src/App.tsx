import { useState, useEffect } from 'react';
import { OllamaService } from './services/ollama';
import { CodeEditor } from './components/CodeEditor';
import { CodeViewer } from './components/CodeViewer';

// Deterministic System Prompt from SOP (Layer 1)
const SYSTEM_PROMPT = `You are an expert Test Automation Engineer. Convert the following Selenium Java code to Playwright TypeScript. 
Rules:
1. Use 'test', 'expect' from '@playwright/test'.
2. Use 'await' for all async operations.
3. Translate logic 1:1. Do not add comments or explanations. 
4. If a generic locator is used (e.g. By.xpath), convert it to page.locator().
5. Output ONLY the code block.`;

function App() {
  const [sourceCode, setSourceCode] = useState<string>('');
  const [targetCode, setTargetCode] = useState<string>('');
  const [isOllamaReady, setIsOllamaReady] = useState<boolean>(false);
  const [isConverting, setIsConverting] = useState<boolean>(false);

  useEffect(() => {
    // Phase 2 Link Verification
    OllamaService.checkConnection().then(setIsOllamaReady);
  }, []);

  const handleConvert = async () => {
    if (!sourceCode.trim()) return;
    setIsConverting(true);
    setTargetCode(''); // Clear previous

    try {
      const result = await OllamaService.generateCode(sourceCode, SYSTEM_PROMPT);
      // Simple post-processing to strip markdown if present
      const cleanResult = result.replace(/```typescript|```/g, '').trim();
      setTargetCode(cleanResult);
    } catch (error) {
      console.error(error);
      setTargetCode('// Error: Failed to generate code. Ensure Ollama is running.');
    } finally {
      setIsConverting(false);
    }
  };

  return (
    <div className="container">
      <header>
        <div>
          <h1>Selenium ➜ Playwright</h1>
          <p style={{ color: 'hsl(var(--text-muted))', margin: '0.5rem 0 0' }}>
            Deterministic Local AI Converter
          </p>
        </div>
        <div className="status-indicator">
          <div className={`dot ${isOllamaReady ? 'online' : ''}`} />
          <span>{isOllamaReady ? 'Ollama Online' : 'Check Connection'}</span>
        </div>
      </header>

      <main className="main-grid">
        <CodeEditor
          label="Input Source"
          value={sourceCode}
          onChange={setSourceCode}
          placeholder="// Paste your Selenium Java code here..."
        />

        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '1rem' }}>
          <button
            className="glass-btn"
            onClick={handleConvert}
            disabled={isConverting || !isOllamaReady}
            style={{ opacity: isConverting || !isOllamaReady ? 0.5 : 1 }}
          >
            {isConverting ? 'Running...' : 'Convert ➜'}
          </button>
        </div>

        <CodeViewer
          label="Target Output"
          value={targetCode}
          isLoading={isConverting}
        />
      </main>

      <footer style={{ textAlign: 'center', color: 'hsl(var(--text-muted))', fontSize: '0.875rem' }}>
        <p>Powered by CodeLlama & Antigravity B.L.A.S.T. Architecture</p>
      </footer>
    </div>
  );
}

export default App;
