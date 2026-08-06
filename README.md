# Yawen Zuo — Personal Portfolio

A bilingual, responsive portfolio for quantitative finance, risk analytics, statistical modeling, and data science.

## Highlights

- English and Chinese content with browser-language detection
- Light and dark themes with saved preferences
- Responsive navigation and mobile menu
- Result-focused project cards, education and experience timelines
- Downloadable English and Chinese resumes
- SEO, Open Graph, keyboard focus, reduced-motion, and semantic markup support

## Project structure

```text
.
├── index.html       # Complete static website: content, styles, and interactions
├── 404.html         # GitHub Pages fallback page
├── profile.jpg      # Hero portrait
├── favicon.png      # Browser and sharing icon
├── resume_en.pdf    # English resume
└── resume_zh.pdf    # Chinese resume
```

## Local preview

```bash
python3 -m http.server 8787
```

Then open `http://127.0.0.1:8787/`.

## Deployment

The site is designed for GitHub Pages and requires no build step. Publish the repository's `main` branch from the repository root.
