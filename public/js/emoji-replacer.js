// Script de remplacement automatique des emojis par des icônes Lucide
document.addEventListener('DOMContentLoaded', function() {
    
    // Mapping complet des emojis vers les icônes Lucide
    const emojiToIconMap = {
        // Apprentissage et ressources
        '📚': 'book-open',
        '💡': 'lightbulb',
        '📖': 'book-open',
        '📝': 'file-text',
        '📄': 'file',
        '📋': 'clipboard-list',
        '🎓': 'graduation-cap',
        
        // Divertissement et médias
        '🎮': 'gamepad-2',
        '🎬': 'video',
        '🎵': 'music',
        '🎭': 'theater',
        '🎪': 'tent',
        '🎨': 'palette',
        '🎯': 'target',
        
        // Technologie
        '💻': 'monitor',
        '📱': 'smartphone',
        '📷': 'camera',
        '📞': 'phone',
        '📧': 'mail',
        '🌐': 'globe',
        '🔧': 'wrench',
        '⚙️': 'settings',
        '🛠️': 'wrench',
        
        // Outils et recherche
        '🔍': 'search',
        '📊': 'bar-chart-3',
        '📈': 'trending-up',
        '📉': 'trending-down',
        
        // Communication
        '💬': 'message-circle',
        '💭': 'message-square',
        '💪': 'zap',
        '💯': 'award',
        
        // Émotions et symboles
        '🔥': 'flame',
        '💎': 'gem',
        '✨': 'star',
        '🌟': 'star',
        '💫': 'zap',
        '💥': 'zap',
        '💢': 'alert-circle',
        '💦': 'droplets',
        '💧': 'droplets',
        '💨': 'wind',
        '💩': 'x-circle',
        
        // Navigation et interface
        '🏠': 'home',
        '❓': 'help-circle',
        '⏰': 'clock',
        '🎤': 'mic',
        '🏆': 'trophy',
        '♿': 'wheelchair',
        
        // Actions et progression
        '🚀': 'rocket',
        '⚡': 'zap',
        '🧪': 'flask-conical',
        
        // Images et médias
        '🖼️': 'image',
        '📸': 'camera',
        '🎥': 'video',
        
        // Statuts et priorités
        '✅': 'check-circle',
        '❌': 'x-circle',
        '⚠️': 'alert-triangle',
        'ℹ️': 'info',
        
        // Construction et développement
        '🏗️': 'building-2',
        
        // Autres
        '📋': 'clipboard-list',
        
        // Emojis supplémentaires identifiés
        '🔄': 'refresh-cw',
        '🖥️': 'monitor',
        '📥': 'download',
        '🔤': 'type',
        '🎡': 'ferris-wheel',
        '🐸': 'frog',
        '🍽️': 'utensils',
        '🥕': 'carrot',
        '⚔️': 'swords',
        '📦': 'package',
        '📁': 'folder',
        '⏰': 'clock',
        '🆘': 'sos',
        '🚧': 'construction',
        '🔗': 'link',
        
        // Emojis supplémentaires trouvés dans le contenu
        '⏱️': 'clock',
        '🏗️': 'building-2',
        '⚖️': 'scale',
        '🗓️': 'calendar',
        '🚫': 'x-circle',
        '📋': 'clipboard-list',
        
        // Icônes spécifiques pour les outils
        '🎮': 'gamepad-2',
        '🎯': 'target',
        '🌐': 'globe',
        '♿': 'accessibility',
        '⚡': 'zap',
        
        // Emojis supplémentaires identifiés
        '💰': 'coins',
        '🔌': 'plug'
    };

    // Fonction pour remplacer les emojis dans le texte
    function replaceEmojisInText(text) {
        let result = text;
        Object.keys(emojiToIconMap).forEach(emoji => {
            const iconName = emojiToIconMap[emoji];
            const iconHtml = `<i data-lucide="${iconName}" class="icon icon-sm"></i>`;
            result = result.replace(new RegExp(emoji, 'g'), iconHtml);
        });
        return result;
    }

    // Fonction pour remplacer les emojis dans les éléments HTML
    function replaceEmojisInElements() {
        // Remplacer dans les textes (y compris les éléments formatés)
        const textNodes = document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, li, span, a, button, strong, em, b, i');
        
        textNodes.forEach(element => {
            // Vérifier si l'élément contient des emojis
            const text = element.textContent;
            if (Object.keys(emojiToIconMap).some(emoji => text.includes(emoji))) {
                // Remplacer les emojis tout en préservant le formatage
                element.innerHTML = replaceEmojisInText(text);
            }
        });

        // Remplacer dans les attributs alt et title
        const elementsWithAlt = document.querySelectorAll('[alt], [title]');
        elementsWithAlt.forEach(element => {
            if (element.alt) {
                Object.keys(emojiToIconMap).forEach(emoji => {
                    element.alt = element.alt.replace(emoji, emojiToIconMap[emoji]);
                });
            }
            if (element.title) {
                Object.keys(emojiToIconMap).forEach(emoji => {
                    element.title = element.title.replace(emoji, emojiToIconMap[emoji]);
                });
            }
        });
    }

    // Fonction pour remplacer les emojis dans les balises title
    function replaceEmojisInPageTitle() {
        if (document.title) {
            let title = document.title;
            Object.keys(emojiToIconMap).forEach(emoji => {
                if (title.includes(emoji)) {
                    title = title.replace(emoji, emojiToIconMap[emoji]);
                }
            });
            if (title !== document.title) {
                document.title = title;
            }
        }
    }

    // Fonction pour remplacer les emojis dans les divs avec classe card-icon
    function replaceEmojisInCardIcons() {
        const cardIcons = document.querySelectorAll('.card-icon, .livrable-icon');
        cardIcons.forEach(iconDiv => {
            const text = iconDiv.textContent;
            Object.keys(emojiToIconMap).forEach(emoji => {
                if (text.includes(emoji)) {
                    const iconName = emojiToIconMap[emoji];
                    iconDiv.innerHTML = `<i data-lucide="${iconName}" class="icon icon-lg"></i>`;
                }
            });
        });
    }

    // Fonction pour remplacer les emojis dans les spans avec classe emoji
    function replaceEmojisInEmojiSpans() {
        const emojiSpans = document.querySelectorAll('.emoji');
        emojiSpans.forEach(span => {
            const text = span.textContent;
            Object.keys(emojiToIconMap).forEach(emoji => {
                if (text.includes(emoji)) {
                    const iconName = emojiToIconMap[emoji];
                    span.innerHTML = `<i data-lucide="${iconName}" class="icon"></i>`;
                }
            });
        });
    }

    // Fonction principale de remplacement
    function replaceAllEmojis() {
        replaceEmojisInElements();
        replaceEmojisInCardIcons();
        replaceEmojisInEmojiSpans();
        replaceEmojisInPageTitle();
        
        // Initialiser Lucide Icons après remplacement
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
    }

    // Attendre que Lucide soit chargé puis remplacer
    function waitForLucideAndReplace() {
        if (typeof lucide !== 'undefined') {
            replaceAllEmojis();
        } else {
            setTimeout(waitForLucideAndReplace, 100);
        }
    }

    // Démarrer le processus
    waitForLucideAndReplace();
});
