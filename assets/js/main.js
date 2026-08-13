    const body = document.body;
    const root = document.documentElement;
    const languageToggle = document.getElementById('language-toggle');
    const themeToggle = document.getElementById('theme-toggle');
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');
    const resumeNav = document.getElementById('resume-nav');
    const resumeContact = document.getElementById('resume-contact');
    const reportDownload = document.getElementById('report-download');
    const assetPrefix = body.dataset.assetPrefix || '';
    const page = body.dataset.page || 'home';

    const pageMeta = {
      home: {
        en: {
          title: 'Yawen Zuo | Quantitative Finance & Risk Analytics',
          description: 'Yawen Zuo is a statistics-trained analyst building execution-aware quantitative models and decision-ready financial risk analysis.'
        },
        zh: {
          title: '左雅文 | 量化金融与风险分析',
          description: '左雅文的双语作品集，聚焦执行约束下的量化研究、风险分析与面向决策的金融分析。'
        }
      },
      'quant-research': {
        en: {
          title: 'Execution-Aware Equity Research | Yawen Zuo',
          description: 'Execution-aware multi-factor equity research with transparent full-sample, quasi-OOS, and strict walk-forward OOS results.'
        },
        zh: {
          title: '执行约束下的多因子量化研究 | 左雅文',
          description: '左雅文的多因子量化研究详情页，明确区分完整样本、准样本外与严格 walk-forward 样本外结果。'
        }
      },
      'kaggle-competition': {
        en: {
          title: 'STA 314 Kaggle Competition | Yawen Zuo',
          description: 'Team Ziza placed third on the STA 314 2024 Kaggle public leaderboard. Explore the result, modeling workflow, and downloadable evidence.'
        },
        zh: {
          title: 'STA 314 Kaggle 竞赛 | 左雅文',
          description: 'Ziza 团队在 STA 314 2024 Kaggle 公开排行榜中获得第 3 名；本页展示竞赛结果、建模流程与可下载证明。'
        }
      }
    };

    function setLanguage(language) {
      const isChinese = language === 'zh';
      body.dataset.language = isChinese ? 'zh' : 'en';
      root.lang = isChinese ? 'zh-CN' : 'en';
      languageToggle.textContent = isChinese ? 'EN' : '中文';
      languageToggle.setAttribute('aria-label', isChinese ? 'Switch to English' : '切换至中文');
      languageToggle.setAttribute('aria-pressed', String(isChinese));
      const resumePath = `${assetPrefix}${isChinese ? 'resume_zh.pdf' : 'resume_en.pdf'}`;
      if (resumeNav) resumeNav.href = resumePath;
      if (resumeContact) resumeContact.href = resumePath;
      if (reportDownload) {
        reportDownload.href = `${assetPrefix}${isChinese ? 'quant_research_report_zh.pdf' : 'quant_research_report_en.pdf'}`;
        reportDownload.download = isChinese ? 'Yawen_Zuo_Quantitative_Trading_Report_ZH.pdf' : 'Yawen_Zuo_Quantitative_Trading_Report_EN.pdf';
      }
      const localizedMeta = pageMeta[page]?.[isChinese ? 'zh' : 'en'] || pageMeta.home.en;
      document.title = localizedMeta.title;
      document.querySelector('meta[name="description"]').content = localizedMeta.description;
      localStorage.setItem('siteLanguage', isChinese ? 'zh' : 'en');
    }

    function setTheme(theme) {
      const isDark = theme === 'dark';
      root.dataset.theme = isDark ? 'dark' : 'light';
      themeToggle.textContent = isDark ? '☀' : '◐';
      themeToggle.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
      themeToggle.setAttribute('aria-pressed', String(isDark));
      localStorage.setItem('siteTheme', isDark ? 'dark' : 'light');
    }

    languageToggle.addEventListener('click', () => {
      setLanguage(body.dataset.language === 'en' ? 'zh' : 'en');
    });

    themeToggle.addEventListener('click', () => {
      setTheme(root.dataset.theme === 'light' ? 'dark' : 'light');
    });

    menuToggle.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', String(isOpen));
      menuToggle.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');
      menuToggle.textContent = isOpen ? '×' : '☰';
    });

    navLinks.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.setAttribute('aria-label', 'Open navigation menu');
        menuToggle.textContent = '☰';
      });
    });

    const preferredLanguage = localStorage.getItem('siteLanguage')
      || (navigator.language.toLowerCase().startsWith('zh') ? 'zh' : 'en');
    const preferredTheme = localStorage.getItem('siteTheme')
      || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    setLanguage(preferredLanguage);
    setTheme(preferredTheme);

    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));

    const sections = document.querySelectorAll('main section[id]');
    const navAnchors = document.querySelectorAll('.nav-links a');
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navAnchors.forEach((anchor) => {
            anchor.classList.toggle('active', anchor.getAttribute('href') === `#${entry.target.id}`);
          });
        }
      });
    }, { rootMargin: '-35% 0px -55% 0px' });
    sections.forEach((section) => sectionObserver.observe(section));
