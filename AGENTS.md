# AGENTS.md

This file is the canonical agent contract for this repository.

## Environment

- Deployment platform: DOKS (DigitalOcean Kubernetes).
- Baseline constrained profile: `s-1vcpu-2gb`.
- Assume CPU and memory are limited unless explicitly stated otherwise.

## Build And CI Constraints

- Prefer stability over raw speed in CI.
- Keep heavy steps sequential on small nodes.
- Build and test wrappers live under `.scripts/ci/`.
- Default constrained CI knobs:
  - `BUILD_MAX_OLD_SPACE_SIZE=1024`
  - `TEST_MAX_OLD_SPACE_SIZE=768`
  - `NPM_CONFIG_MAXSOCKETS=1`
  - `PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD=1`
  - `CYPRESS_INSTALL_BINARY=0`

## Script Paths

- CI scripts: `.scripts/ci/`
- Main wrappers:
  - `.scripts/ci/install-deps.sh`
  - `.scripts/ci/test.sh`
  - `.scripts/ci/build.sh`
  - `.scripts/ci/publish-image.sh`
  - `.scripts/ci/helm-upgrade.sh`

## Practical Defaults For Agents

- Do not assume extra resources are available.
- Avoid introducing parallelism by default for build/test tasks.
- Preserve existing low-memory settings in `vue.config.js` unless there is a clear reason to change them.
- Keep browser support targets aligned with the repo policy in `.browserslistrc`.

## Validation Expectations

When changing CI or build logic:

1. Run `.scripts/ci/install-deps.sh`.
2. Run `.scripts/ci/test.sh`.
3. Run `.scripts/ci/build.sh`.
4. Confirm pipeline path references are still valid in `Jenkinsfile` and `Jenkinsfile.deploy`.

## Ownership

- `AGENTS.md` is the source of truth for agent behavior in this repo.
- Companion Copilot file: `.github/copilot-instructions.md`.
- Other instruction files should reference this file instead of duplicating policy.
