# Publications Directory

Each publication is stored as one directory under a year directory.

## Structure

```text
publications/
  2026/
    pub-001/
      metadata.json
      paper.pdf        (optional)
      slides.pdf       (optional)
      poster.jpg       (optional)
      bibtex.bib       (optional)
  2025/
    pub-002/
      ...
```

## Required File

- `metadata.json`

## Add a New Publication

1. Create a year directory if needed (for example: `2026`) under `features/achievements/data/publications/`.
2. Create a publication directory (for example: `pub-009`) under the year directory.
3. Add `metadata.json` with required fields.
4. Optionally add files such as `paper.pdf`, `slides.pdf`, `poster.jpg`, `bibtex.bib`.

The achievements page is updated automatically by `features/achievements/data/loader.ts`.
You do not need to edit `loader.ts` manually.

## Optional CLI

```bash
node scripts/addPublicationDirectory.mjs
```

This command creates the directory and `metadata.json` interactively.
