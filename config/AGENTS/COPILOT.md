# GitHub Copilot Guidelines

GitHub Copilot suggestions must align with Cortext standards.

## Constraints

- No hard-coded payment integrations.
- No provider-specific assumptions.
- No unnecessary third-party libraries.

## Preferred Patterns

- Small, composable components.
- Explicit interfaces.
- Clear separation of UI and logic.
- Infrastructure-neutral design.

## Avoid

- Stripe-specific hooks
- Shopify-specific models
- Implicit backend contracts
- Over-engineered abstractions
