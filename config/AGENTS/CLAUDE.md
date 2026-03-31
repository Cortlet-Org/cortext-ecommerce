# Claude Agent Guidelines

Claude operating within the Cortext repository must follow these principles:

## Core Philosophy

- Do not introduce vendor-specific integrations.
- Do not assume a specific backend, payment provider, or cart system.
- Maintain minimal architectural surface area.
- Preserve vendor-agnostic design.

## Code Changes

- Prefer to use composition over coupling.
- Avoid adding dependencies unless strictly necessary.
- Do not refactor unrelated parts of the codebase.
- Keep changes focused and minimal.

## Architecture Rules

- No baked-in Stripe, Shopify, or provider-specific logic.
- No hidden assumptions in data models.
- Do not add framework lock-in patterns.

## Output Discipline

- Generate clean TypeScript.
- Follow existing project structure.
- Keep components modular and composable.
