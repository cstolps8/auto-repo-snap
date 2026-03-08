# auto-repo-snap

Automatically capture, archive, and share visual snapshots of any public GitHub repository — in seconds.

## Getting Started Locally

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or later
- npm (bundled with Node.js)

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/cstolps8/auto-repo-snap.git
cd auto-repo-snap
npm install
```

### Running the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The page hot-reloads as you edit source files.

### Running a Production Build

```bash
npm run build   # compile and optimize
npm run start   # serve the compiled output
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start the Next.js development server with hot-reloading |
| `npm run build` | Create an optimized production build |
| `npm run start` | Serve the production build locally |
| `npm run lint` | Run ESLint across the codebase |
| `npm run test:e2e` | Run Playwright end-to-end tests (headless) |
| `npm run test:e2e:ui` | Open the Playwright interactive UI runner |
