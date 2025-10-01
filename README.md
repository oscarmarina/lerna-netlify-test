## Monorepo Project (Lerna + Nx + Vite + Web Components)

### Installation in Root Directory

```bash
npm run i
```

This executes dependency installation (alias for `npm install` or equivalent script defined in `package.json`).

---

## CI/CD Workflows

The repository defines two main workflows in `.github/workflows/`:

1. [`checks.yml`](.github/workflows/checks.yml) – Runs formatting and tests on Pull Requests or manually.
2. [`publish.yml`](.github/workflows/publish.yml) – Publishes versions using Lerna when merging to `main/master` or via manual execution.

### Quick Summary

| Workflow | Main Event | Actions | Global Skip | Granular Skips |
|----------|------------|---------|-------------|----------------|
| checks   | pull_request (opened, synchronize, reopened) / manual | format + tests | `[skip ci]` | `[skip format]`, `[skip tests]` |
| publish  | pull_request closed (merged=true) / manual | lerna version + publish | `[skip ci]` | `[skip lerna]` |

---

## Supported Skip Tags (in commit message)

Place the tag in brackets anywhere in the last commit message that triggers the workflow:

| Tag | Effect | Workflow(s) |
|-----|--------|-------------|
| `[skip ci]` | Skips EVERYTHING (format, tests, publish) | both |
| `[skip format]` | Skips only formatting | checks |
| `[skip tests]` | Skips only tests | checks |
| `[skip lerna]` | Skips version and publish | publish |

Searches are case-insensitive (`[Skip CI]` also works). Only the `[skip ci]` form is supported (not `[ci skip]`).

---

## Manual Inputs (workflow_dispatch)

You can trigger each workflow manually and force skips via inputs:

### checks.yml
Inputs:
* `skip-format`: "true" to skip formatting.
* `skip-tests`: "true" to skip tests.

### publish.yml
Inputs:
* `skip-lerna`: "true" to skip version/publish.

The logic combines commit and input. If both request skip, the recorded reason will be `input+commit`.

---

## Recorded Skip Reasons

In the workflow summaries (GitHub Actions -> Step Summary) you'll see additional fields:

### checks.yml
* `Format skip reason`: one of `global-ci`, `input`, `commit`, `input+commit`, `none`.
* `Tests skip reason`: same possible values.

### publish.yml
* `Skip reason`: `global-ci`, `input`, `commit`, `input+commit`, `none`.

Meanings:
* `global-ci`: `[skip ci]` was applied.
* `input`: skip requested only by manual execution.
* `commit`: skip requested only by commit tag.
* `input+commit`: both sources matched.
* `none`: no skip was applied.

---

## Usage Examples

Skip everything (checks and publish):
```
feat: add X

[skip ci]
```

Skip only tests in PR:
```
refactor: reorganize utilities [skip tests]
```

Publish manually without Lerna:
1. Go to Actions → Publish → Run workflow.
2. Set `skip-lerna = true`.

Combine tag and input (will show `input+commit`):
```
chore: prepare release [skip lerna]
```
And launch manually with `skip-lerna=true`.

---

## Best Practices

* Use `[skip ci]` only for trivial changes (e.g.: README) that don't affect build/tests.
* Avoid overusing `[skip tests]`: maintain pipeline quality.
* Document in the PR if you apply a skip and why.
* Before publishing make sure the last commit doesn't have an accidental skip.

---

## Suggested Future Improvements

* Upload coverage reports as artifacts.
* Add separate lint analysis and cache for Playwright.
* Add Node matrix (e.g.: 20.x, 22.x) for checks.
* Automatically publish changelog after `lerna version`.

---

## Useful Scripts (reference)

Review the scripts defined in `package.json` to know the exact aliases (`format`, `test:pre-push`, etc.).

---

If you need to expand or translate this section, feel free to ask.
