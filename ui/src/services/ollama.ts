
export interface GenerationResponse {
    response: string;
    done: boolean;
}

const OLLAMA_BASE_URL = 'http://localhost:11434';

export const OllamaService = {
    /**
     * Checks if Ollama is running and accessible.
     */
    async checkConnection(): Promise<boolean> {
        try {
            const res = await fetch(`${OLLAMA_BASE_URL}/api/tags`);
            return res.ok;
        } catch (e) {
            console.error('Ollama connection failed:', e);
            return false;
        }
    },

    /**
     * Generates code using the specified model.
     */
    async generateCode(prompt: string, hiddenSystemPrompt: string): Promise<string> {
        try {
            const response = await fetch(`${OLLAMA_BASE_URL}/api/generate`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    model: 'codellama', // enforced from config
                    prompt: `${hiddenSystemPrompt}\n\nUser Input:\n${prompt}`,
                    stream: false,
                    options: {
                        temperature: 0.2, // Low temperature for deterministic code
                    }
                })
            });

            if (!response.ok) {
                throw new Error('Generation failed');
            }

            const data: GenerationResponse = await response.json();
            return data.response;
        } catch (e) {
            console.error('Generation error:', e);
            throw e;
        }
    }
};
