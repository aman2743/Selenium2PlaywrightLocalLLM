import React from 'react';

interface CodeEditorProps {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    label: string;
}

export const CodeEditor: React.FC<CodeEditorProps> = ({ value, onChange, placeholder, label }) => {
    return (
        <div className="glass-panel" style={{ display: 'flex', flexDirection: 'column', height: '600px', padding: '1rem' }}>
            <div style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h2 style={{ margin: 0, fontSize: '1.25rem', color: 'hsl(var(--primary))' }}>{label}</h2>
                <span style={{ fontSize: '0.75rem', color: 'hsl(var(--text-muted))' }}>Java (Selenium)</span>
            </div>
            <textarea
                className="glass-input"
                style={{ flex: 1, resize: 'none', fontFamily: 'Fira Code, monospace', fontSize: '14px', lineHeight: '1.5' }}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
                spellCheck={false}
            />
        </div>
    );
};
