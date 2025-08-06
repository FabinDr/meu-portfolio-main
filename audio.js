// Sistema de acessibilidade de áudio
const audioAccessibility = {
  isEnabled: false,
  synth: null,
  currentUtterance: null,
  
  init() {
    if ('speechSynthesis' in window) {
      this.synth = window.speechSynthesis;
      this.setupAudioToggle();
      this.setupHoverEvents();
      this.loadSavedPreference();
    }
  },
  
  setupAudioToggle() {
    const audioToggle = document.querySelector('.audio-toggle');
    if (audioToggle) {
      audioToggle.addEventListener('click', () => {
        this.toggleAudio();
      });
    }
  },
  
  loadSavedPreference() {
    const savedPreference = localStorage.getItem('audioEnabled');
    if (savedPreference === 'true') {
      this.isEnabled = true;
      this.updateAudioButton();
    }
  },
  
  toggleAudio() {
    this.isEnabled = !this.isEnabled;
    this.updateAudioButton();
    localStorage.setItem('audioEnabled', this.isEnabled.toString());
    
    if (this.isEnabled) {
      this.speak(this.getCurrentLanguageText('audioOn'));
    } else {
      this.stopSpeaking();
    }
  },
  
  updateAudioButton() {
    const audioToggle = document.querySelector('.audio-toggle');
    const audioIcon = audioToggle?.querySelector('i');
    
    if (audioToggle && audioIcon) {
      if (this.isEnabled) {
        audioIcon.className = 'bx bx-volume-full';
        audioToggle.classList.add('active');
        audioToggle.setAttribute('aria-label', this.getCurrentLanguageText('audioOn'));
      } else {
        audioIcon.className = 'bx bx-volume-mute';
        audioToggle.classList.remove('active');
        audioToggle.setAttribute('aria-label', this.getCurrentLanguageText('audioOff'));
      }
    }
  },
  
  setupHoverEvents() {
    // Elementos que devem ser lidos ao passar o mouse
    const readableElements = [
      'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
      '.nav-link', '.btn', '.project-card h3',
      '.skill-item span', '.contact-item h3',
      '.timeline-content h3'
    ];
    
    readableElements.forEach(selector => {
      const elements = document.querySelectorAll(selector);
      elements.forEach(element => {
        element.addEventListener('mouseenter', () => {
          if (this.isEnabled) {
            this.speak(element.textContent);
          }
        });
        
        element.addEventListener('mouseleave', () => {
          this.stopSpeaking();
        });
      });
    });
    
    // Leitura de parágrafos ao clicar
    const paragraphs = document.querySelectorAll('p, .hero-description, .about-text p, .timeline-description');
    paragraphs.forEach(p => {
      p.addEventListener('click', () => {
        if (this.isEnabled) {
          this.speak(p.textContent);
        }
      });
    });
  },
  
  speak(text) {
    if (!this.synth || !this.isEnabled || !text.trim()) return;
    
    this.stopSpeaking();
    
    this.currentUtterance = new SpeechSynthesisUtterance(text);
    this.currentUtterance.rate = 0.8;
    this.currentUtterance.pitch = 1;
    this.currentUtterance.volume = 0.8;
    
    // Definir idioma baseado na linguagem atual
    const currentLang = window.translator?.currentLang || 'pt';
    this.currentUtterance.lang = currentLang === 'pt' ? 'pt-BR' : 'en-US';
    
    this.synth.speak(this.currentUtterance);
  },
  
  stopSpeaking() {
    if (this.synth) {
      this.synth.cancel();
    }
  },
  
  getCurrentLanguageText(key) {
    const currentLang = window.translator?.currentLang || 'pt';
    return window.translations?.[currentLang]?.[key] || key;
  }
};

// Exportar para uso global
window.audioAccessibility = audioAccessibility;