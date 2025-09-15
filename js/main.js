// Initialisation des icônes Lucide
lucide.createIcons();

// Gestion de la sidebar
(function() {
  const sidebarNav = document.querySelector('.sidebar-nav');
  const burgerMenu = document.querySelector('.burger-menu');
  
  if (!sidebarNav) return;
  
  // Initialiser le menu ouvert sur les grands écrans
  function initSidebarState() {
    if (window.innerWidth > 768) {
      sidebarNav.classList.add('open');
      if (burgerMenu) {
        burgerMenu.setAttribute('aria-expanded', 'true');
        burgerMenu.setAttribute('aria-label', 'Fermer le menu');
      }
    } else {
      sidebarNav.classList.remove('open');
      if (burgerMenu) {
        burgerMenu.setAttribute('aria-expanded', 'false');
        burgerMenu.setAttribute('aria-label', 'Ouvrir le menu');
      }
    }
  }
  
  // Initialiser au chargement
  initSidebarState();
  
  // Réinitialiser au redimensionnement
  window.addEventListener('resize', initSidebarState);
  
  // Gestion du burger menu
  if (burgerMenu) {
    burgerMenu.addEventListener('click', function() {
      const isOpen = sidebarNav.classList.contains('open');
      
      if (isOpen) {
        // Fermer le menu
        sidebarNav.classList.remove('open');
        burgerMenu.setAttribute('aria-expanded', 'false');
        burgerMenu.setAttribute('aria-label', 'Ouvrir le menu');
      } else {
        // Ouvrir le menu
        sidebarNav.classList.add('open');
        burgerMenu.setAttribute('aria-expanded', 'true');
        burgerMenu.setAttribute('aria-label', 'Fermer le menu');
      }
    });
  }
  
  // Déclaration des liens de la sidebar
  const sidebarLinks = document.querySelectorAll('.sidebar-link');
  
  // Détection de section active pour le menu vertical
  function updateActiveSection() {
    const sections = document.querySelectorAll('section[id]');
    let currentSection = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop; // pas d'offset
      const sectionHeight = section.offsetHeight;
      const scrollTop = window.pageYOffset;
      
      if (scrollTop >= sectionTop && scrollTop < sectionTop + sectionHeight) {
        currentSection = section.getAttribute('id');
      }
    });
    
    // Mettre à jour les liens actifs
    sidebarLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + currentSection) {
        link.classList.add('active');
      }
    });
  }
  
  // Écouter le scroll pour mettre à jour la section active
  window.addEventListener('scroll', updateActiveSection);
  
  // Mettre à jour au chargement
  updateActiveSection();
  
  
  // Gestion des clics sur les liens
  sidebarLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      
      if (targetSection) {
        // Calculer l'offset pour aligner le haut de la section
        const offsetTop = targetSection.offsetTop; // pas d'offset
        
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
      
      // Fermer le menu après clic sur un lien
      sidebarNav.classList.remove('open');
      if (burgerMenu) {
        burgerMenu.setAttribute('aria-expanded', 'false');
        burgerMenu.setAttribute('aria-label', 'Ouvrir le menu');
      }
    });
  });
  
  // Fermer le menu en cliquant à l'extérieur
  document.addEventListener('click', function(e) {
    if (!sidebarNav.contains(e.target) &&
        !burgerMenu.contains(e.target) &&
        sidebarNav.classList.contains('open')) {
      sidebarNav.classList.remove('open');
      if (burgerMenu) {
        burgerMenu.setAttribute('aria-expanded', 'false');
        burgerMenu.setAttribute('aria-label', 'Ouvrir le menu');
      }
    }
  });
})();

// Checklist avec localStorage
(function(){
  const STORAGE_KEY = 'module113_checklist';
  const checkboxes = document.querySelectorAll('.checklist-checkbox');
  const progressFill = document.getElementById('progress-fill');
  const progressText = document.getElementById('progress-text');
  const progressBar = document.querySelector('.progress-bar');
  
  // Charger l'état sauvegardé
  function loadChecklistState() {
    try {
      const savedState = localStorage.getItem(STORAGE_KEY);
      if (savedState) {
        const state = JSON.parse(savedState);
        checkboxes.forEach(checkbox => {
          if (state[checkbox.id]) {
            checkbox.checked = true;
            updateItemState(checkbox);
          }
        });
      }
    } catch (error) {
      console.warn('Erreur lors du chargement de la checklist:', error);
    }
  }
  
  // Sauvegarder l'état
  function saveChecklistState() {
    try {
      const state = {};
      checkboxes.forEach(checkbox => {
        state[checkbox.id] = checkbox.checked;
      });
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (error) {
      console.warn('Erreur lors de la sauvegarde de la checklist:', error);
    }
  }
  
  // Mettre à jour l'état visuel d'un item
  function updateItemState(checkbox) {
    const item = checkbox.closest('.checklist-item');
    if (checkbox.checked) {
      item.classList.add('completed');
    } else {
      item.classList.remove('completed');
    }
  }
  
  // Mettre à jour la progression
  function updateProgress() {
    const checked = Array.from(checkboxes).filter(cb => cb.checked).length;
    const total = checkboxes.length;
    const percentage = Math.round((checked / total) * 100);
    
    progressFill.style.width = percentage + '%';
    progressText.textContent = percentage + '% complété';
    progressBar.setAttribute('aria-valuenow', percentage);
    
    // Animation de félicitations à 100%
    if (percentage === 100) {
      progressText.textContent = '🎉 100% complété - Félicitations !';
      progressText.style.color = 'var(--color-accent)';
      progressFill.style.background = 'linear-gradient(90deg, var(--color-accent), #4CAF50)';
    } else {
      progressText.style.color = 'var(--color-primary)';
      progressFill.style.background = 'linear-gradient(90deg, var(--color-accent), var(--color-accent-light))';
    }
  }
  
  // Initialiser la checklist
  function initChecklist() {
    loadChecklistState();
    updateProgress();
    
    // Ajouter les événements
    checkboxes.forEach(checkbox => {
      checkbox.addEventListener('change', function() {
        updateItemState(this);
        updateProgress();
        saveChecklistState();
      });
    });
  }
  
  
  // Initialiser au chargement
  initChecklist();
})();
