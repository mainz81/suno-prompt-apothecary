# Suno Prompt Apothecary

A private, local-first laboratory for collecting musical ingredients, blending Suno style prompts, preserving version history, and rating generated outcomes.

The deployed site is an installable Progressive Web App with a dedicated icon, standalone desktop window, and offline application shell.

## Local development

```bash
npm install
npm run dev
```

## Privacy

The app stores its vault in the browser. Export a portable JSON vault to carry formulas between desktop and laptop. No account, analytics, or cloud database is included.

## Private vocal splitter

The `splitter` folder contains a local Windows companion powered by Demucs. Run `setup.ps1` once, then `start.ps1` whenever you want to separate a song into `vocals.wav` and `instrumental-beat.wav`. Audio stays on the computer.

The original goddess-apothecary hero artwork was generated specifically for this project with OpenAI image generation.
