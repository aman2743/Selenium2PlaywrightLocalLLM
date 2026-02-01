import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface CodeViewerProps {
    value: string;
    isLoading: boolean;
    label: string;
}

export const CodeViewer: React.FC<CodeViewerProps> = ({ value, isLoading, label }) => {
    return (
        <div className="glass-panel" style={{ display: 'flex', flexDirection: 'column', height: '600px', padding: '1rem' }}>
            <div style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h2 style={{ margin: 0, fontSize: '1.25rem', color: 'hsl(var(--secondary))' }}>{label}</h2>
                <span style={{ fontSize: '0.75rem', color: 'hsl(var(--text-muted))' }}>TypeScript (Playwright)</span>
            </div>
            <div style={{ flex: 1, overflow: 'auto', position: 'relative', borderRadius: '8px', background: '#1d1f21' /* Match atomDark bg */ }}>
                {isLoading ? (
                    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '1rem' }}>
                        <div className="dot online" style={{ width: '12px', height: '12px', animation: 'pulse 1s infinite' }} />
                        <span style={{ color: 'hsl(var(--text-muted))' }}>Converting logic...</span>
                    </div>
                ) : (
                    <SyntaxHighlighter
                        language="typescript"
                        style={atomDark}
                        customStyle={{ margin: 0, height: '100%', fontSize: '14px', lineHeight: '1.5', background: 'transparent' }}
                        showLineNumbers={true}
                        wrapLines={true}
                    >
                        {value || '// Output will appear here...'}
                    </SyntaxHighlighter>
                )}
            </div>
        </div>
    );
};
