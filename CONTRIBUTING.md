# Contributing to Cortext

Thank you for your interest in contributing to Cortext.

Cortext is intentionally minimal. Contributions must preserve its core philosophy:

> **Build. Deploy. Edit. No assumptions.**

---

## Philosophy

Cortext is designed to be:

- Vendor-agnostic
- Minimal in surface area
- Explicit over implicit
- Free of forced integrations
- Cleanly structured

Before submitting changes, ask:

- Does this introduce tight coupling?
- Does this add hidden assumptions?
- Does this increase complexity unnecessarily?

If yes — reconsider.

Minimal > bloated.  
Clarity > convenience.  
Control > lock-in.

---

## Getting Started

### 1. Fork the Repository

Fork the repository on GitHub.

### 2. Clone Your Fork

```bash
git clone https://github.com/YOUR_USERNAME/cortext-ecommerce.git
cd cortext-ecommerce
npm install
npm run dev
```

### 3. Create a Feature Branch

```bash
git checkout -b feature/your-feature-name
```

---

## Pull Request Guidelines

When opening a pull request:

- Clearly describe what you changed
- Explain why it improves the project
- Keep changes focused and minimal
- Avoid unrelated refactors
- Ensure the project runs locally without errors
- No AI or any type of plagiarism

If your change adds:

- A dependency
- An integration
- A structural change

You must justify why it aligns with Cortext’s philosophy.

---

## Code Style

- Use TypeScript
- Follow the existing project structure
- Keep components small and composable
- Avoid hard-coded integrations
- Do not introduce provider-specific logic

---

## What Not to Add

Cortext is not:

- A fully integrated commerce platform
- A Stripe template
- A Shopify template
- A plugin-heavy framework

Avoid adding:

- Built-in payment gateways
- Locked cart engines
- Backend-specific assumptions
- Large dependency bundles

---

## Reporting Issues

When reporting issues, include:

- Clear description
- Steps to reproduce
- Expected behavior
- Actual behavior
- Environment details (Node version, OS)

---

## License

By contributing, you agree that your contributions will be licensed under the Apache License 2.0.
