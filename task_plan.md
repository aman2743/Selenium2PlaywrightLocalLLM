# Task Plan: Selenium Java to Playwright Converter

## Phase 0: Initialization (Done)
- [x] Create project memory files (`gemini.md`, `task_plan.md`, `findings.md`, `progress.md`)
- [x] Answer Discovery Questions
- [x] Define Initial Data Schemas

## Phase 1: Blueprint & Architecture (Done)
- [x] **Design Setup**:
    - [x] Create `architecture/frontend_architecture.md` (SOP).
    - [x] Create `architecture/conversion_sop.md` (SOP).
    - [x] Initialize Vite Project (React + TS) -> `ui/` folder.
- [x] **Ollama Integration Plan**:
    - [x] Test local access to Ollama API (`localhost:11434`).
    - [x] Determine CORS strategy (Direct from localhost).

## Phase 2: Implementation - Web App Foundation (Done)
- [x] **Scaffold Frontend**:
    - [x] Layout (Header, Main, Footer) - Glassmorphism style.
    - [x] Components: `CodeEditor` (Input), `CodeViewer` (Output), `ConvertButton`.
- [x] **API Integration**:
    - [x] Build service layer to communicate with Ollama.
    - [x] Implement Prompt Engineering logic (embedded in `App.tsx` for now).

## Phase 3: Core Logic & Refining (Current)
- [ ] **Prompt Tuning**:
    - [x] System prompt for Java -> Playwright TS conversion (Validated).
    - [ ] Handling specific Selenium patterns (Waits, Selectors, Actions).
- [ ] **UI Polish**:
    - [x] Syntax highlighting for code blocks (Added `react-syntax-highlighter`).
    - [x] Loading states and animations.

## Phase 4: Validation (Done)
- [x] Manual conversion tests.
- [x] Refine Prompt based on output quality.
