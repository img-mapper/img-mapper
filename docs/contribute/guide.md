# Contributing {#contributing}

Thank you for considering contributing to `img-mapper`. We welcome all contributions, whether it’s fixing a bug, improving documentation, or suggesting new rules.

## How to Contribute {#how-to-contribute}

### 1. Fork & Clone the Repository {#for-clone-repository}

::: code-group

```sh [SSH]
$ git clone git@github.com:img-mapper/img-mapper.git
$ cd img-mapper
```

```sh [HTTPS]
$ git clone https://github.com/img-mapper/img-mapper.git
$ cd img-mapper
```

:::

### 2. Install Dependencies {#install-dependencies}

Check the `.nvmrc` file for the required Node.js version. For `pnpm` version, see the `packageManager` field in the root `package.json`.

This project is a **monorepo** managed with **pnpm**. Install dependencies with:

```sh
$ pnpm install
```

### 3. Project Structure {#project-structure}

The repo is organized as a monorepo with two main packages:

- `packages/react-img-mapper` → React img mapper package
- `packages/vue-img-mapper` → Vue img mapper package
- `apps/examples` → Img mapper examples
- `docs/` → Documentation site (built with VitePress)

### 4. Making Changes {#making-changes}

- Always create a new branch:

  ```sh
  $ git checkout -b fix/your-change
  ```

- For docs → check formatting and verify links.

### 5. Linting & Formatting {#linting-formatting}

Run checks and fixes before committing:

::: code-group

```sh [Check]
$ pnpm lint
$ pnpm format:check
```

```sh [Fix]
$ pnpm lint:fix
$ pnpm format:fix
```

:::

### 6. Commit Guidelines {#commit-guidelines}

We follow **Conventional Commits** for a clean commit history. Examples:

- `feat: implement ESM functionality`
- `fix: resolve path alias issue`
- `docs: update installation steps`

### 7. Running Scripts {#running-scripts}

Before pushing, ensure all scripts pass:

```sh
$ pnpm script:lint
```

### 8. Submitting a PR {#submitting-pr}

- Push your branch and open a Pull Request against `canary`.
- Clearly describe the problem, your solution, and reference any related issues/discussions.
- Maintainers will review, suggest improvements if needed, and merge once approved.

## Code of Conduct {#code-of-conduct}

This project follows a [**Code of Conduct**](https://github.com/img-mapper/img-mapper/blob/master/CODE_OF_CONDUCT.md). Please be respectful, collaborative, and inclusive.

## Suggestions & Issues {#suggestions-issues}

- Found a bug? → [Open an Issue](https://github.com/img-mapper/img-mapper/issues/new/choose)
- Want a new feature or rule? → Use the same link to create an issue, or start a discussion before opening a PR.
