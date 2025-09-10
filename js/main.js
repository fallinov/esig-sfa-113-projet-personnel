// Initialisation des icônes Lucide
lucide.createIcons();

// Gestion de la sidebar
(function() {
  const sidebarToggleLink = document.querySelector('.sidebar-toggle-link');
  const sidebarNav = document.querySelector('.sidebar-nav');
  
  if (!sidebarToggleLink || !sidebarNav) return;
  
  // Toggle de la sidebar
  if (sidebarToggleLink) {
    sidebarToggleLink.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      
      sidebarNav.classList.toggle('collapsed');
      const isCollapsed = sidebarNav.classList.contains('collapsed');
      
      // Mettre à jour le texte et l'icône
      const text = sidebarToggleLink.querySelector('.link-text');
      
      if (text) {
        if (isCollapsed) {
          // Remplacer l'icône par chevron-right
          sidebarToggleLink.innerHTML = '<i data-lucide="chevron-right"></i> <span class="link-text">Agrandir</span>';
          sidebarToggleLink.setAttribute('data-tooltip', 'Agrandir le menu');
        } else {
          // Remplacer l'icône par chevron-left
          sidebarToggleLink.innerHTML = '<i data-lucide="chevron-left"></i> <span class="link-text">Réduire</span>';
          sidebarToggleLink.setAttribute('data-tooltip', 'Réduire le menu');
        }
        
        // Recharger les icônes Lucide
        if (typeof lucide !== 'undefined') {
          lucide.createIcons();
        }
      }
    });
  }
  
  // Gestion mobile - commencer en mode réduit sur mobile
  function handleMobile() {
    if (window.innerWidth <= 768) {
      sidebarNav.classList.add('collapsed'); // Commencer réduit sur mobile
    } else {
      sidebarNav.classList.remove('collapsed'); // Mode normal sur desktop
    }
  }
  
  // Gestion du redimensionnement
  window.addEventListener('resize', handleMobile);
  handleMobile(); // Appel initial
  
  // Déclaration des liens de la sidebar (avant leur utilisation)
  const sidebarLinks = document.querySelectorAll('.sidebar-link:not(.sidebar-toggle-link)');
  
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
  
  // Initialisation de l'icône au chargement - cohérente avec l'état de la sidebar
  setTimeout(() => {
    const isMobile = window.innerWidth <= 768;
    const isCollapsed = sidebarNav.classList.contains('collapsed');
    
    if (isCollapsed) {
      // Sidebar réduite : chevron à droite pour agrandir
      sidebarToggleLink.innerHTML = '<i data-lucide="chevron-right"></i> <span class="link-text">Agrandir</span>';
      sidebarToggleLink.setAttribute('data-tooltip', 'Agrandir le menu');
    } else {
      // Sidebar étendue : chevron à gauche pour réduire
      sidebarToggleLink.innerHTML = '<i data-lucide="chevron-left"></i> <span class="link-text">Réduire</span>';
      sidebarToggleLink.setAttribute('data-tooltip', 'Réduire le menu');
    }
    
    if (typeof lucide !== 'undefined') {
      lucide.createIcons();
    }
  }, 100);
  
  // Gestion des clics sur les liens (sauf le toggle)
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
      
      // Sur mobile, fermer le menu après clic
      if (window.innerWidth <= 768) {
        sidebarNav.classList.remove('open');
      }
      
      // Sur desktop, si la sidebar est réduite, la rouvrir après navigation
      if (window.innerWidth > 768 && sidebarNav.classList.contains('collapsed')) {
        setTimeout(() => {
          sidebarNav.classList.remove('collapsed');
          // Remettre l'icône en état initial
          sidebarToggleLink.innerHTML = '<i data-lucide="chevron-left"></i> <span class="link-text">Réduire</span>';
          sidebarToggleLink.setAttribute('data-tooltip', 'Réduire le menu');
          if (typeof lucide !== 'undefined') {
            lucide.createIcons();
          }
        }, 100);
      }
    });
  });
  
  // Fermer le menu mobile en cliquant à l'extérieur
  document.addEventListener('click', function(e) {
    if (window.innerWidth <= 768 && 
        !sidebarNav.contains(e.target) &&
        sidebarNav.classList.contains('open')) {
      sidebarNav.classList.remove('open');
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
  
  // Fonction pour réinitialiser la checklist
  window.resetChecklist = function() {
    if (confirm('Êtes-vous sûr de vouloir réinitialiser toute la checklist ?')) {
      checkboxes.forEach(checkbox => {
        checkbox.checked = false;
        updateItemState(checkbox);
      });
      localStorage.removeItem(STORAGE_KEY);
      updateProgress();
    }
  };
  
  // Initialiser au chargement
  initChecklist();
})();
