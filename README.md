# Yawen Zuo — Personal Portfolio

A bilingual, responsive portfolio for quantitative finance, risk analytics, statistical modeling, and data science.

## Highlights

- English and Chinese content with browser-language detection
- Light and dark themes with saved preferences
- Responsive navigation and mobile menu
- Result-focused project cards, education and experience timelines
- Dedicated quantitative research case study with explicit Full Sample, Quasi-OOS, and Strict Walk-forward OOS labels
- Dedicated Kaggle competition case study with a linked public leaderboard and downloadable CSV evidence
- Verified GitHub link for the quantitative research project
- Language-aware English and Chinese quantitative report downloads
- Downloadable English and Chinese resumes
- Canonical URLs, Open Graph and Twitter cards, JSON-LD, sitemap, robots.txt, keyboard focus, reduced-motion, and semantic markup support

## Project structure

```text
.
├── index.html                    # Portfolio homepage and content
├── projects/
│   ├── quant-research.html       # Quantitative research case study
│   └── kaggle-competition.html   # Kaggle competition case study
├── assets/
│   ├── css/styles.css            # Shared responsive styles
│   ├── data/sta-314-2024-public-leaderboard.csv # Public leaderboard evidence
│   ├── js/main.js                # Language, theme, navigation, and reveal behavior
│   └── images/og-portfolio.png   # 1200×630 social preview card
├── 404.html                      # GitHub Pages fallback page
├── robots.txt                    # Crawler policy and sitemap location
├── sitemap.xml                   # Public page index
├── headshot.jpg                  # Professional hero portrait
├── profile.jpg                   # Lifestyle image in the About section
├── favicon.ico                   # Cross-browser site icon
├── favicon-v2.png                # Current browser-tab icon
├── favicon.png                   # Previous icon kept for rollback
├── quant_turnover.png            # Turnover and cost-aware return comparison
├── quant_lstm_models.png         # Walk-forward out-of-sample model comparison
├── quant_research_report_en.pdf  # Latest English quantitative research report
├── quant_research_report_zh.pdf  # Latest Chinese quantitative research report
├── resume_en.pdf                 # English resume
└── resume_zh.pdf                 # Chinese resume
```

## Local preview

```bash
python3 -m http.server 8787
```

Then open `http://127.0.0.1:8787/`.

## Deployment

The site is designed for GitHub Pages and requires no build step. Publish the repository's `main` branch from the repository root.
