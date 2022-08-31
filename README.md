# Solidhat

> This project is in work in progress

Solidhat is a kind of fork of Hardhat, but correcting the imperfections of it. Hardhat's code is big and complex, and I don't think that everything that has been done is necessary.

This fork includes in particular:
 - A fix for the CLI
 - A security patch for templates
 - Supporting multiple package managers (npm, yarn and pnpm)

## Usage

Create a new project:

```bash
npx create-solidhat # or pnpm create solidhat
                    # or yarn create solidhat
```

## Installation

This project uses pnpm:

```bash
pnpm install
```

## License

This project is licensed under the [GNU GPLv3](./LICENSE).
