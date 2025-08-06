// Sistema de tradução
const translations = {
  pt: {
    // Header
    home: 'Home',
    about: 'Sobre',
    experience: 'Experiência',
    skills: 'Habilidades',
    projects: 'Projetos',
    contact: 'Contato',
    
    // Hero Section
    greeting: 'Olá, eu sou',
    heroTitle: 'Fabio Duarte',
    heroSubtitle: [
      'Analista de Dados',
      'Desenvolvedor Back-end',
      'Especialista em Python',
      'Data Scientist'
    ],
    heroDescription: 'Especialista em transformar dados complexos em insights estratégicos que impulsionam decisões de negócio e geram valor real para organizações.',
    viewProjects: 'Ver Projetos',
    getInTouch: 'Entre em Contato',
    scroll: 'Scroll',
    
    // About Section
    aboutTag: 'Sobre mim',
    aboutTitle: 'Quem sou eu',
    aboutIntro: 'Sou um analista de dados apaixonado por descobrir padrões ocultos e transformar informações brutas em estratégias de negócio eficazes.',
    aboutText1: 'Com formação em Ciência e Tecnologia pela UFMA e experiência prática em desenvolvimento back-end, combino conhecimento técnico sólido com visão analítica para entregar soluções que realmente fazem a diferença.',
    aboutText2: 'Minha abordagem interdisciplinar me permite conectar dados, tecnologia e negócios de forma única, sempre buscando insights que impulsionem o crescimento e a inovação.',
    yearsExperience: 'Anos de Experiência',
    completedProjects: 'Projetos Concluídos',
    technologies: 'Tecnologias',
    mainSkills: 'Principais Competências',
    
    // Experience Section
    experienceTag: 'Trajetória',
    experienceTitle: 'Experiência & Educação',
    
    // Skills Section
    skillsTag: 'Tecnologias',
    skillsTitle: 'Minhas Habilidades',
    dataAnalysis: 'Análise de Dados',
    development: 'Desenvolvimento',
    machineLearning: 'Machine Learning',
    
    // Projects Section
    projectsTag: 'Portfolio',
    projectsTitle: 'Meus Projetos',
    projectsDescription: 'Explore alguns dos meus trabalhos mais recentes em análise de dados, machine learning e desenvolvimento de soluções inovadoras.',
    all: 'Todos',
    dataAnalysisFilter: 'Análise de Dados',
    machineLearningFilter: 'Machine Learning',
    webDev: 'Desenvolvimento',
    dashboard: 'Dashboards',
    viewAllProjects: 'Ver Todos os Projetos',
    
    // Contact Section
    contactTag: 'Contato',
    contactTitle: 'Vamos Trabalhar Juntos',
    contactDescription: 'Estou sempre aberto a novas oportunidades e projetos desafiadores. Entre em contato para discutirmos como posso ajudar sua empresa.',
    email: 'Email',
    linkedin: 'LinkedIn',
    location: 'Localização',
    locationValue: 'São Luís, Maranhão',
    name: 'Nome',
    subject: 'Assunto',
    message: 'Mensagem',
    sendMessage: 'Enviar Mensagem',
    connectLinkedIn: 'Ou conecte-se comigo no LinkedIn',
    
    // Footer
    footerText: 'Todos os direitos reservados.',
    
    // Accessibility
    audioOn: 'Áudio Ativado',
    audioOff: 'Áudio Desativado',
    lightMode: 'Modo Claro',
    darkMode: 'Modo Escuro',
    portuguese: 'Português',
    english: 'English',
    
    // Projects Data
    projectTitles: {
      salesDashboard: 'Dashboard de Análise de Vendas',
      pricePrediction: 'Modelo de Predição de Preços',
      dataApi: 'API de Análise de Dados',
      financialDashboard: 'Dashboard Financeiro Interativo',
      predictiveAnalysis: 'Sistema de Análise Preditiva',
      analyticsPlataform: 'Plataforma de Analytics'
    },
    projectDescriptions: {
      salesDashboard: 'Sistema completo de análise de vendas com visualizações interativas e insights automatizados usando Power BI e Python.',
      pricePrediction: 'Algoritmo de machine learning para predição de preços imobiliários com 92% de precisão usando regressão linear e random forest.',
      dataApi: 'API RESTful desenvolvida em Node.js para processamento e análise de grandes volumes de dados em tempo real.',
      financialDashboard: 'Painel executivo para análise financeira com KPIs automatizados e alertas inteligentes para tomada de decisão.',
      predictiveAnalysis: 'Modelo avançado de machine learning para previsão de tendências de mercado com análise de sentimento e processamento de linguagem natural.',
      analyticsPlataform: 'Aplicação web completa para análise de dados em tempo real com dashboards interativos e relatórios automatizados.'
    }
  },
  
  en: {
    // Header
    home: 'Home',
    about: 'About',
    experience: 'Experience',
    skills: 'Skills',
    projects: 'Projects',
    contact: 'Contact',
    
    // Hero Section
    greeting: 'Hello, I am',
    heroTitle: 'Fabio Duarte',
    heroSubtitle: [
      'Data Analyst',
      'Back-end Developer',
      'Python Specialist',
      'Data Scientist'
    ],
    heroDescription: 'Specialist in transforming complex data into strategic insights that drive business decisions and generate real value for organizations.',
    viewProjects: 'View Projects',
    getInTouch: 'Get In Touch',
    scroll: 'Scroll',
    
    // About Section
    aboutTag: 'About me',
    aboutTitle: 'Who I am',
    aboutIntro: 'I am a data analyst passionate about discovering hidden patterns and transforming raw information into effective business strategies.',
    aboutText1: 'With a background in Science and Technology from UFMA and practical experience in back-end development, I combine solid technical knowledge with analytical vision to deliver solutions that really make a difference.',
    aboutText2: 'My interdisciplinary approach allows me to connect data, technology and business in a unique way, always seeking insights that drive growth and innovation.',
    yearsExperience: 'Years of Experience',
    completedProjects: 'Completed Projects',
    technologies: 'Technologies',
    mainSkills: 'Main Skills',
    
    // Experience Section
    experienceTag: 'Journey',
    experienceTitle: 'Experience & Education',
    
    // Skills Section
    skillsTag: 'Technologies',
    skillsTitle: 'My Skills',
    dataAnalysis: 'Data Analysis',
    development: 'Development',
    machineLearning: 'Machine Learning',
    
    // Projects Section
    projectsTag: 'Portfolio',
    projectsTitle: 'My Projects',
    projectsDescription: 'Explore some of my most recent work in data analysis, machine learning and development of innovative solutions.',
    all: 'All',
    dataAnalysisFilter: 'Data Analysis',
    machineLearningFilter: 'Machine Learning',
    webDev: 'Development',
    dashboard: 'Dashboards',
    viewAllProjects: 'View All Projects',
    
    // Contact Section
    contactTag: 'Contact',
    contactTitle: 'Let\'s Work Together',
    contactDescription: 'I am always open to new opportunities and challenging projects. Get in touch to discuss how I can help your company.',
    email: 'Email',
    linkedin: 'LinkedIn',
    location: 'Location',
    locationValue: 'São Luís, Maranhão',
    name: 'Name',
    subject: 'Subject',
    message: 'Message',
    sendMessage: 'Send Message',
    connectLinkedIn: 'Or connect with me on LinkedIn',
    
    // Footer
    footerText: 'All rights reserved.',
    
    // Accessibility
    audioOn: 'Audio On',
    audioOff: 'Audio Off',
    lightMode: 'Light Mode',
    darkMode: 'Dark Mode',
    portuguese: 'Português',
    english: 'English',
    
    // Projects Data
    projectTitles: {
      salesDashboard: 'Sales Analysis Dashboard',
      pricePrediction: 'Price Prediction Model',
      dataApi: 'Data Analysis API',
      financialDashboard: 'Interactive Financial Dashboard',
      predictiveAnalysis: 'Predictive Analysis System',
      analyticsPlataform: 'Analytics Platform'
    },
    projectDescriptions: {
      salesDashboard: 'Complete sales analysis system with interactive visualizations and automated insights using Power BI and Python.',
      pricePrediction: 'Machine learning algorithm for real estate price prediction with 92% accuracy using linear regression and random forest.',
      dataApi: 'RESTful API developed in Node.js for processing and analyzing large volumes of data in real time.',
      financialDashboard: 'Executive panel for financial analysis with automated KPIs and intelligent alerts for decision making.',
      predictiveAnalysis: 'Advanced machine learning model for market trend prediction with sentiment analysis and natural language processing.',
      analyticsPlataform: 'Complete web application for real-time data analysis with interactive dashboards and automated reports.'
    }
  }
};

// Sistema de tradução
const translator = {
  currentLang: 'pt',
  
  init() {
    this.setupLanguageToggle();
    this.loadSavedLanguage();
  },
  
  setupLanguageToggle() {
    const langToggle = document.querySelector('.lang-toggle');
    if (langToggle) {
      langToggle.addEventListener('click', () => {
        this.toggleLanguage();
      });
    }
  },
  
  loadSavedLanguage() {
    const savedLang = localStorage.getItem('language');
    if (savedLang && savedLang !== this.currentLang) {
      this.currentLang = savedLang;
      this.translatePage();
      this.updateLanguageButton();
    }
  },
  
  toggleLanguage() {
    this.currentLang = this.currentLang === 'pt' ? 'en' : 'pt';
    this.translatePage();
    this.updateLanguageButton();
    localStorage.setItem('language', this.currentLang);
    
    // Reinicializar typewriter com nova linguagem
    if (window.typewriter) {
      typewriter.texts = translations[this.currentLang].heroSubtitle;
      typewriter.currentTextIndex = 0;
      typewriter.currentCharIndex = 0;
      typewriter.isDeleting = false;
    }
  },
  
  translatePage() {
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
      const key = element.getAttribute('data-translate');
      const translation = this.getTranslation(key);
      if (translation) {
        if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
          element.placeholder = translation;
        } else {
          element.textContent = translation;
        }
      }
    });
    
    // Traduzir projetos
    this.translateProjects();
  },
  
  translateProjects() {
    const projectCards = document.querySelectorAll('.project-card');
    const projectData = [
      { key: 'salesDashboard' },
      { key: 'pricePrediction' },
      { key: 'dataApi' },
      { key: 'financialDashboard' },
      { key: 'predictiveAnalysis' },
      { key: 'analyticsPlataform' }
    ];
    
    projectCards.forEach((card, index) => {
      if (projectData[index]) {
        const title = card.querySelector('h3');
        const description = card.querySelector('p');
        
        if (title) {
          title.textContent = translations[this.currentLang].projectTitles[projectData[index].key];
        }
        if (description) {
          description.textContent = translations[this.currentLang].projectDescriptions[projectData[index].key];
        }
      }
    });
  },
  
  getTranslation(key) {
    const keys = key.split('.');
    let translation = translations[this.currentLang];
    
    for (const k of keys) {
      if (translation && translation[k]) {
        translation = translation[k];
      } else {
        return null;
      }
    }
    
    return translation;
  },
  
  updateLanguageButton() {
    const langToggle = document.querySelector('.lang-toggle');
    const langText = document.querySelector('.lang-text');
    
    if (langToggle && langText) {
      langText.textContent = this.currentLang === 'pt' ? 'EN' : 'PT';
      langToggle.setAttribute('aria-label', 
        this.currentLang === 'pt' ? 'Switch to English' : 'Mudar para Português'
      );
    }
  }
};

// Exportar para uso global
window.translator = translator;
window.translations = translations;