# Frontend Architecture & Design

## 1. Overview
A single-page React application built with Vite.
- **Theme**: Dark Mode, Glassmorphism, Neon Accents (Green/Purple).
- **Font**: 'Inter' or system san-serif.

## 2. Component Structure
```
App
├── Header (Logo, Status Indicator)
├── MainLayout
│   ├── EditorPane (Left: Java Input)
│   ├── ActionsPane (Center: Convert Button, Settings)
│   └── PreviewPane (Right: TypeScript Output)
└── Footer (Logs, Copyright)
```

## 3. State Management
- `sourceCode`: string
- `targetCode`: string
- `status`: 'idle' | 'loading' | 'success' | 'error'
- `logs`: Array<string> (for debug console in footer)

## 4. Services
- `api/ollama.ts`: Handles HTTP requests to localhost:11434.
    - `checkConnection()`: GET /api/tags
    - `generateCode(prompt)`: POST /api/generate

## 5. Styling Strategy
- **CSS Variables** defined in `index.css`.
- **Utility Classes**: Custom classes for glass effect (`.glass-panel`).
- **Animations**: CSS Transitions for button states and loading spinners.
