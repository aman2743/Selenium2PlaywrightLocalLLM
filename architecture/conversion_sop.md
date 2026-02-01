# SOP 1: Selenium to Playwright Conversion Process

## 1. Goal
Convert a given block of Selenium Java code into a functionally equivalent Playwright TypeScript code block using a Local LLM.

## 2. Inputs
- `sourceCode`: String (The raw Java code).
- `model`: String (Default: 'codellama').

## 3. Workflow Logic
1.  **Validation**:
    - If `sourceCode` is empty -> Return Error "Empty Input".
    - If `sourceCode` length > 10,000 chars -> Warning "Input too large, may be truncated".

2.  **Prompt Construction**:
    - **System Prompt**: "You are an expert Test Automation Engineer. Convert the following Selenium Java code to Playwright TypeScript. use `test` from `@playwright/test`. Use `await` for valid async operations. Do not include explanations, only the code."
    - **User Prompt**: `message: sourceCode`

3.  **Execution (Link Layer)**:
    - Send POST request to `/api/generate` (Ollama).
    - JSON Body: `{ "model": "codellama", "prompt": <constructed_prompt>, "stream": false }`

4.  **Post-Processing**:
    - Extract content from JSON response.
    - If response contains markdown code blocks (```), strip them to get raw code.

## 4. Edge Cases
- **Ollama Error**: Return "Local LLM unavailable. Check connection."
- **Hallucination**: If output contains `driver.findElement`, flag as "Possible incomplete conversion".
