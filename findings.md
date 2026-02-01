# Findings & Research

## Research Areas
- **Selenium vs Playwright Mappings**:
    - `By.id("foo")` -> `page.locator('#foo')`
    - `driver.findElement(...)` -> `await page.locator(...)`
    - Implicit/Explicit waits conversion strategies.

## Constraints
- **Local LLM**: Limited context window and capability compared to cloud models. Prompt optimization is critical.
- **Java Parsing**: Need robust way to extract relevant code blocks (methods, classes) before sending to LLM to avoid noise.
