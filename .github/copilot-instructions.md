# copilot-instructions.md

Copilot guidance for this repository is defined in `AGENTS.md`.

## Required Context

- Runtime and CI should be treated as constrained by default.
- Baseline infrastructure profile is DOKS `s-1vcpu-2gb`.
- Use `.scripts/ci/` wrappers for install, test, and build changes.

## Rule

When making decisions that affect build, test, packaging, or deployment behavior, follow `AGENTS.md` first.
