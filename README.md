# Astro Page Builder with Build-Time Design Selection

A high-performance Astro page builder that allows you to maintain multiple complete design variants in one repository and select which design to build at build-time via environment variables.

## Features

- **Build-Time Design Selection**: Choose between multiple design variants (design-a, design-b, etc.) using environment variables
- **Tree-Shaking**: Only the selected design is bundled - unused designs are completely removed from the final build
- **Self-Contained Components**: Each design has its own Header, Hero, and Footer components with hardcoded content
- **Clean Imports**: Path aliases (`@components/*`, `@utils/*`) for cleaner, more maintainable code
- **Optimized Performance**: Built with Astro 5, React, and Tailwind CSS 4

## Quick Start

### Development

```bash
# Preview with design-a
pnpm dev:design-a

# Preview with design-b
pnpm dev:design-b
```

### Production Build

```bash
# Build with design-a (design-b will be excluded)
pnpm build:design-a

# Build with design-b (design-a will be excluded)
pnpm build:design-b
```

## Project Structure

```
src/
├── components/
│   └── designs/
│       ├── design-a/           # Design A variant
│       │   ├── components/
│       │   │   ├── Header.tsx
│       │   │   ├── Hero.tsx
│       │   │   └── Footer.tsx
│       │   └── index.ts
│       └── design-b/           # Design B variant
│           ├── components/
│           │   ├── Header.tsx
│           │   ├── Hero.tsx
│           │   └── Footer.tsx
│           └── index.ts
├── pages/
│   └── index.astro            # Homepage (uses selected design)
└── utils/
    └── design-loader.ts       # Dynamic design loader
```

## How to Remove an Unused Design

If you've chosen one design and want to remove the other from your repository:

### Example: Keeping design-a, removing design-b

1. **Delete the design folder:**
   ```bash
   rm -rf src/components/designs/design-b
   ```

2. **Update `src/utils/design-loader.ts`:**
   Remove the design-b case from the switch statement:
   ```typescript
   // Remove this block:
   case 'design-b':
     return await import('../components/designs/design-b');
   ```

3. **Update `package.json`:**
   Remove design-b scripts:
   ```json
   // Remove these lines:
   "dev:design-b": "DESIGN_ID=design-b astro dev",
   "build:design-b": "DESIGN_ID=design-b astro build",
   "preview:design-b": "DESIGN_ID=design-b astro preview",
   ```

4. **Simplify the loader (optional):**
   Since you only have one design, you can simplify `design-loader.ts` to directly import design-a without the switch statement.

That's it! Your repository now only contains the chosen design.

## Customizing Content

Content is hardcoded directly in each design's components. To update:

1. Navigate to your design folder: `src/components/designs/design-a/components/`
2. Edit the component files (Header.tsx, Hero.tsx, Footer.tsx)
3. Update text, links, and styling directly in the component code

## Tech Stack

- **Astro 5** - Static site generator
- **React 19** - UI components
- **Tailwind CSS 4** - Styling
- **TypeScript** - Type safety
- **Vite** - Build tool with tree-shaking

## License

MIT
# landing-page-builder
