# Suno Prompt Apothecary

A private, local-first laboratory for collecting musical ingredients, blending Suno style prompts, preserving version history, and rating generated outcomes.

The Prompt Archive also preserves manually written or externally discovered prompts with collections, tags, private notes, ratings, favorites, search, editing and one-click copying.

The expanded Cauldron includes user-created folders, energy and tempo controls, vocal-form direction, reorderable ingredients, custom exclusions, inspiration and reset tools, live character counting, and complete preservation of blend settings when a formula is refined.

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
