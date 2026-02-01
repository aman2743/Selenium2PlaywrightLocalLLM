# Project Constitution: Selenium Java to Playwright JS/TS Converter

## 1. Data Schemas
### Conversion Request
- **Input**: String (Java Source Code)
- **Model**: String (Default: "codellama")
- **PromptTemplate**: String (System instructions for conversion)

### Conversion Response
- **Output**: String (TypeScript Playwright Code)
- **Status**: "Success" | "Error"
- **Metadata**: Time taken, token usage (if available)

## 2. Behavioral Rules
- **Accuracy**: Conversion must maintain the logical intent of the original Selenium test.
- **Reliability**: Generated Playwright code should be valid and executable.
- **Safety**: Do not hallucinate locator strategies that don't exist in the source.
- **User Feedback**: Flag ambiguous conversions for user review.

## 3. Architectural Invariants
- **Source Language**: Java (Selenium)
- **Target Language**: TypeScript (Playwright)
- **Core Technology**: Local LLM (Ollama - `codellama`)
- **Application Type**: **Web Interface** (Single Page Application)
- **Architecture**:
    - **Frontend**: Vite + React + TypeScript (Modern, Responsive, Premium Design)
    - **Interaction**:
        1. User pastes Selenium Java code into an editor/textarea.
        2. App sends code to `codellama` (via local proxy or direct if CORS configured).
        3. App displays converted TypeScript Playwright code.
    - **Styling**: Native CSS (Variables, HSL colors, Glassmorphism).

