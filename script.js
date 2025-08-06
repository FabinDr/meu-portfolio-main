// Configuração do cursor personalizado
const cursor = {
  dot: document.querySelector('[data-cursor-dot]'),
  outline: document.querySelector('[data-cursor-outline]'),
  
  init() {
    if (!this.dot || !this.outline) return;
    
    document.addEventListener('mousemove', (e) => {
      this.dot.style.left = e.clientX + 'px';
      this.dot.style.top = e.clientY + 'px';
      
      this.outline.style.left = e.clientX + 'px';
      this.outline.style.top = e.clientY + 'px';
    });
    
    // Efeitos hover
    const hoverElements = document.querySelectorAll('a, button, .project-card, .skill-item');
    hoverElements.forEach(el => {
      el.addEventListener('mouseenter', () => {
        this.dot.style.transform = 'scale(2)';
        this.outline.style.transform = 'scale(2)';
      });
      
      el.addEventListener('mouseleave', () => {
        this.dot.style.transform = 'scale(1)';
        this.outline.style.transform = 'scale(1)';
      });
    });
  }
};

// Navegação suave e ativa
const navigation = {
  links: document.querySelectorAll('.nav-link'),
  sections: document.querySelectorAll('section[id]'),
  
  init() {
    this.setupSmoothScroll();
    this.setupActiveNavigation();
    this.setupMobileMenu();
  },
  
  setupSmoothScroll() {
    this.links.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
          targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  },
  
  setupActiveNavigation() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          this.updateActiveLink(id);
        }
      });
    }, {
      threshold: 0.3,
      rootMargin: '-100px 0px -100px 0px'
    });
    
    this.sections.forEach(section => observer.observe(section));
  },
  
  updateActiveLink(activeId) {
    this.links.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${activeId}`) {
        link.classList.add('active');
      }
    });
  },
  
  setupMobileMenu() {
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const navbar = document.querySelector('.navbar');
    
    if (mobileBtn && navbar) {
      mobileBtn.addEventListener('click', () => {
        navbar.classList.toggle('mobile-active');
        mobileBtn.classList.toggle('active');
      });
      
      // Fechar menu ao clicar em link
      this.links.forEach(link => {
        link.addEventListener('click', () => {
          navbar.classList.remove('mobile-active');
          mobileBtn.classList.remove('active');
        });
      });
    }
  }
};

// Efeito de digitação
const typewriter = {
  element: document.querySelector('.typing-text'),
  texts: [
    'Analista de Dados',
    'Desenvolvedor Back-end',
    'Especialista em Python',
    'Data Scientist'
  ],
  currentTextIndex: 0,
  currentCharIndex: 0,
  isDeleting: false,
  
  init() {
    if (!this.element) return;
    this.type();
  },
  
  type() {
    const currentText = this.texts[this.currentTextIndex];
    
    if (this.isDeleting) {
      this.element.textContent = currentText.substring(0, this.currentCharIndex - 1);
      this.currentCharIndex--;
    } else {
      this.element.textContent = currentText.substring(0, this.currentCharIndex + 1);
      this.currentCharIndex++;
    }
    
    let typeSpeed = this.isDeleting ? 50 : 100;
    
    if (!this.isDeleting && this.currentCharIndex === currentText.length) {
      typeSpeed = 2000;
      this.isDeleting = true;
    } else if (this.isDeleting && this.currentCharIndex === 0) {
      this.isDeleting = false;
      this.currentTextIndex = (this.currentTextIndex + 1) % this.texts.length;
      typeSpeed = 500;
    }
    
    setTimeout(() => this.type(), typeSpeed);
  }
};

// Animações de scroll
const scrollAnimations = {
  init() {
    this.setupScrollReveal();
    this.setupParallax();
    this.setupSkillBars();
    this.setupCounters();
  },
  
  setupScrollReveal() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);
    
    // Elementos para animar
    const animateElements = document.querySelectorAll(`
      .timeline-item,
      .skill-category,
      .project-card,
      .contact-item,
      .stat-item
    `);
    
    animateElements.forEach(el => {
      el.classList.add('animate-element');
      observer.observe(el);
    });
  },
  
  setupParallax() {
    const parallaxElements = document.querySelectorAll('.floating-icon');
    
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      const rate = scrolled * -0.5;
      
      parallaxElements.forEach((el, index) => {
        const speed = (index + 1) * 0.3;
        el.style.transform = `translateY(${rate * speed}px) rotate(${scrolled * 0.1}deg)`;
      });
    });
  },
  
  setupSkillBars() {
    const skillBars = document.querySelectorAll('.skill-level');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const level = entry.target.getAttribute('data-level');
          entry.target.style.setProperty('--skill-width', level + '%');
          entry.target.classList.add('animate-skill');
        }
      });
    }, { threshold: 0.5 });
    
    skillBars.forEach(bar => observer.observe(bar));
  },
  
  setupCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.animateCounter(entry.target);
        }
      });
    }, { threshold: 0.5 });
    
    counters.forEach(counter => observer.observe(counter));
  },
  
  animateCounter(element) {
    const target = parseInt(element.textContent);
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;
    
    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      element.textContent = Math.floor(current) + '+';
    }, 16);
  }
};

// Header scroll effect
const headerEffects = {
  header: document.querySelector('.header'),
  
  init() {
    if (!this.header) return;
    
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        this.header.classList.add('scrolled');
      } else {
        this.header.classList.remove('scrolled');
      }
    });
  }
};

// Filtro de projetos
const projectFilter = {
  buttons: document.querySelectorAll('.filter-btn'),
  projects: document.querySelectorAll('.project-card'),
  
  init() {
    if (!this.buttons.length) return;
    
    this.buttons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const filter = e.target.getAttribute('data-filter');
        this.filterProjects(filter);
        this.updateActiveFilter(e.target);
      });
    });
  },
  
  filterProjects(filter) {
    this.projects.forEach(project => {
      const categories = project.getAttribute('data-category');
      
      if (filter === 'all' || categories.includes(filter)) {
        project.style.display = 'block';
        project.classList.add('fade-in');
      } else {
        project.style.display = 'none';
        project.classList.remove('fade-in');
      }
    });
  },
  
  updateActiveFilter(activeBtn) {
    this.buttons.forEach(btn => btn.classList.remove('active'));
    activeBtn.classList.add('active');
  }
};

// Tema escuro/claro
const themeToggle = {
  button: document.querySelector('.theme-toggle'),
  
  init() {
    if (!this.button) return;
    
    // Verificar preferência salva
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      document.body.setAttribute('data-theme', savedTheme);
    }
    
    this.button.addEventListener('click', () => {
      this.toggleTheme();
    });
  },
  
  toggleTheme() {
    const currentTheme = document.body.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    document.body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  }
};

// Formulário de contato
const contactForm = {
  form: document.querySelector('.contact-form'),
  
  init() {
    if (!this.form) return;
    
    this.form.addEventListener('submit', (e) => {
      e.preventDefault();
      this.handleSubmit();
    });
  },
  
  async handleSubmit() {
    const formData = new FormData(this.form);
    const data = Object.fromEntries(formData);
    
    // Simular envio
    this.showLoading();
    
    setTimeout(() => {
      this.showSuccess();
      this.form.reset();
    }, 2000);
  },
  
  showLoading() {
    const submitBtn = this.form.querySelector('button[type="submit"]');
    submitBtn.innerHTML = '<i class="bx bx-loader-alt bx-spin"></i> Enviando...';
    submitBtn.disabled = true;
  },
  
  showSuccess() {
    const submitBtn = this.form.querySelector('button[type="submit"]');
    submitBtn.innerHTML = '<i class="bx bx-check"></i> Enviado!';
    
    setTimeout(() => {
      submitBtn.innerHTML = 'Enviar Mensagem';
      submitBtn.disabled = false;
    }, 3000);
  }
};

// Lazy loading de imagens
const lazyLoading = {
  images: document.querySelectorAll('img[data-src]'),
  
  init() {
    if (!this.images.length) return;
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.getAttribute('data-src');
          img.removeAttribute('data-src');
          observer.unobserve(img);
        }
      });
    });
    
    this.images.forEach(img => observer.observe(img));
  }
};

// Partículas de fundo
const particles = {
  canvas: null,
  ctx: null,
  particles: [],
  
  init() {
    this.createCanvas();
    this.createParticles();
    this.animate();
  },
  
  createCanvas() {
    this.canvas = document.createElement('canvas');
    this.canvas.classList.add('particles-canvas');
    this.ctx = this.canvas.getContext('2d');
    
    document.querySelector('.hero').appendChild(this.canvas);
    
    this.resize();
    window.addEventListener('resize', () => this.resize());
  },
  
  resize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  },
  
  createParticles() {
    const particleCount = Math.floor((window.innerWidth * window.innerHeight) / 15000);
    
    for (let i = 0; i < particleCount; i++) {
      this.particles.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.2
      });
    }
  },
  
  animate() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    
    this.particles.forEach(particle => {
      particle.x += particle.vx;
      particle.y += particle.vy;
      
      if (particle.x < 0 || particle.x > this.canvas.width) particle.vx *= -1;
      if (particle.y < 0 || particle.y > this.canvas.height) particle.vy *= -1;
      
      this.ctx.beginPath();
      this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      this.ctx.fillStyle = `rgba(0, 212, 255, ${particle.opacity})`;
      this.ctx.fill();
    });
    
    requestAnimationFrame(() => this.animate());
  }
};

// Performance monitor
const performance = {
  init() {
    // Preload critical resources
    this.preloadImages();
    
    // Optimize scroll events
    this.throttleScrollEvents();
    
    // Lazy load non-critical content
    this.lazyLoadContent();
  },
  
  preloadImages() {
    const criticalImages = [
      'perfil-img.png',
      'logo.svg'
    ];
    
    criticalImages.forEach(src => {
      const img = new Image();
      img.src = src;
    });
  },
  
  throttleScrollEvents() {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          // Scroll handlers aqui
          ticking = false;
        });
        ticking = true;
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
  },
  
  lazyLoadContent() {
    const lazyElements = document.querySelectorAll('.lazy-load');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('loaded');
          observer.unobserve(entry.target);
        }
      });
    });
    
    lazyElements.forEach(el => observer.observe(el));
  }
};

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
  cursor.init();
  navigation.init();
  typewriter.init();
  scrollAnimations.init();
  headerEffects.init();
  projectFilter.init();
  themeToggle.init();
  contactForm.init();
  lazyLoading.init();
  particles.init();
  performance.init();
  
  // Adicionar classe loaded ao body
  setTimeout(() => {
    document.body.classList.add('loaded');
  }, 100);
});

// Service Worker para PWA
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(registration => {
        console.log('SW registered: ', registration);
      })
      .catch(registrationError => {
        console.log('SW registration failed: ', registrationError);
      });
  });
}