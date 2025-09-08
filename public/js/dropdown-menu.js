/**
 * Menu déroulant accessible - Module 113
 * Gestion des interactions et accessibilité pour les dropdowns
 */

class DropdownMenu {
    constructor() {
        this.dropdowns = [];
        this.activeDropdown = null;
        this.isMobile = window.innerWidth <= 1023;
        
        this.init();
        this.bindEvents();
    }

    /**
     * Initialisation des dropdowns
     */
    init() {
        // Trouver tous les boutons de dropdown
        const dropdownTriggers = document.querySelectorAll('[data-dropdown-trigger]');
        
        dropdownTriggers.forEach(trigger => {
            const dropdown = {
                trigger: trigger,
                menu: document.getElementById(trigger.getAttribute('aria-controls')),
                isOpen: false
            };
            
            this.dropdowns.push(dropdown);
        });
    }

    /**
     * Liaison des événements
     */
    bindEvents() {
        // Événements pour chaque dropdown
        this.dropdowns.forEach(dropdown => {
            // Clic sur le bouton
            dropdown.trigger.addEventListener('click', (e) => {
                e.preventDefault();
                this.toggleDropdown(dropdown);
            });

            // Gestion du clavier
            dropdown.trigger.addEventListener('keydown', (e) => {
                this.handleKeydown(e, dropdown);
            });

            // Gestion des liens du sous-menu
            const links = dropdown.menu.querySelectorAll('.dropdown-link');
            links.forEach(link => {
                link.addEventListener('keydown', (e) => {
                    this.handleSubmenuKeydown(e, dropdown);
                });
            });
        });

        // Fermeture au clic extérieur (desktop seulement)
        document.addEventListener('click', (e) => {
            if (!this.isMobile && !e.target.closest('.dropdown-container')) {
                this.closeAllDropdowns();
            }
        });

        // Fermeture avec la touche Échap
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeAllDropdowns();
            }
        });

        // Gestion du redimensionnement de la fenêtre
        window.addEventListener('resize', () => {
            const wasMobile = this.isMobile;
            this.isMobile = window.innerWidth <= 1023;
            
            // Si on passe de desktop à mobile ou vice versa, fermer tous les dropdowns
            if (wasMobile !== this.isMobile) {
                this.closeAllDropdowns();
            }
        });
    }

    /**
     * Basculer l'état d'un dropdown
     */
    toggleDropdown(dropdown) {
        if (dropdown.isOpen) {
            this.closeDropdown(dropdown);
        } else {
            this.openDropdown(dropdown);
        }
    }

    /**
     * Ouvrir un dropdown
     */
    openDropdown(dropdown) {
        // Fermer les autres dropdowns d'abord
        this.closeAllDropdowns();
        
        dropdown.isOpen = true;
        dropdown.trigger.setAttribute('aria-expanded', 'true');
        dropdown.menu.classList.add('show');
        this.activeDropdown = dropdown;

        // Focus sur le premier lien du sous-menu (desktop seulement)
        if (!this.isMobile) {
            const firstLink = dropdown.menu.querySelector('.dropdown-link');
            if (firstLink) {
                firstLink.focus();
            }
        }
    }

    /**
     * Fermer un dropdown
     */
    closeDropdown(dropdown) {
        dropdown.isOpen = false;
        dropdown.trigger.setAttribute('aria-expanded', 'false');
        dropdown.menu.classList.remove('show');
        
        if (this.activeDropdown === dropdown) {
            this.activeDropdown = null;
        }
    }

    /**
     * Fermer tous les dropdowns
     */
    closeAllDropdowns() {
        this.dropdowns.forEach(dropdown => {
            this.closeDropdown(dropdown);
        });
    }

    /**
     * Gestion des touches pour le bouton dropdown
     */
    handleKeydown(e, dropdown) {
        switch (e.key) {
            case 'Enter':
            case ' ':
                e.preventDefault();
                this.toggleDropdown(dropdown);
                break;
            case 'ArrowDown':
                e.preventDefault();
                if (!dropdown.isOpen) {
                    this.openDropdown(dropdown);
                } else {
                    const firstLink = dropdown.menu.querySelector('.dropdown-link');
                    if (firstLink) {
                        firstLink.focus();
                    }
                }
                break;
            case 'Escape':
                this.closeDropdown(dropdown);
                dropdown.trigger.focus();
                break;
        }
    }

    /**
     * Gestion des touches pour les liens du sous-menu
     */
    handleSubmenuKeydown(e, dropdown) {
        const links = Array.from(dropdown.menu.querySelectorAll('.dropdown-link'));
        const currentIndex = links.indexOf(e.target);

        switch (e.key) {
            case 'ArrowDown':
                e.preventDefault();
                const nextIndex = (currentIndex + 1) % links.length;
                links[nextIndex].focus();
                break;
            case 'ArrowUp':
                e.preventDefault();
                const prevIndex = currentIndex === 0 ? links.length - 1 : currentIndex - 1;
                links[prevIndex].focus();
                break;
            case 'Escape':
                e.preventDefault();
                this.closeDropdown(dropdown);
                dropdown.trigger.focus();
                break;
            case 'Tab':
                // Laisser Tab fonctionner normalement, mais fermer le dropdown si on sort
                setTimeout(() => {
                    if (!dropdown.menu.contains(document.activeElement) && 
                        !dropdown.trigger.contains(document.activeElement)) {
                        this.closeDropdown(dropdown);
                    }
                }, 0);
                break;
        }
    }
}

// Initialisation quand le DOM est prêt
document.addEventListener('DOMContentLoaded', () => {
    new DropdownMenu();
});

// Export pour utilisation dans d'autres modules si nécessaire
if (typeof module !== 'undefined' && module.exports) {
    module.exports = DropdownMenu;
}
