// Gestion des icônes Lucide
document.addEventListener('DOMContentLoaded', function() {
    // Fonction pour créer une icône Lucide
    function createLucideIcon(iconName, className = '') {
        const icon = document.createElement('i');
        icon.setAttribute('data-lucide', iconName);
        if (className) {
            icon.className = `icon ${className}`;
        } else {
            icon.className = 'icon';
        }
        return icon;
    }

    // Mapping des emojis vers les icônes Lucide
    const emojiToIconMap = {
        '📚': 'book-open',
        '💡': 'lightbulb',
        '🎮': 'gamepad-2',
        '🎬': 'video',
        '💻': 'monitor',
        '🔍': 'search',
        '📊': 'bar-chart-3',
        '📱': 'smartphone',
        '💬': 'message-circle',
        '💪': 'zap',
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
        '📧': 'mail',
        '📞': 'phone',
        '📷': 'camera',
        '🎵': 'music',
        '📈': 'trending-up',
        '📉': 'trending-down',
        '💭': 'message-square',
        '💯': 'award',
        '🎯': 'target',
        '🎨': 'palette',
        '🚀': 'rocket',
        '⚡': 'zap',
        '🎭': 'theater',
        '🎪': 'tent',
        '📝': 'file-text',
        '📄': 'file',
        '🛠️': 'wrench',
        '⚙️': 'settings',
        '🔧': 'wrench',
        '🏠': 'home',
        '📋': 'clipboard-list',
        '❓': 'help-circle',
        '🧪': 'flask-conical',
        '🔧': 'wrench',
        '📝': 'file-text',
        '🎤': 'mic',
        '⏰': 'clock',
        '📋': 'clipboard-list',
        '🏆': 'trophy',
        '🌐': 'globe',
        '♿': 'wheelchair',
        '⚡': 'zap'
    };

    // Fonction pour remplacer les emojis par des icônes
    function replaceEmojisWithIcons() {
        // Remplacer les emojis dans le texte
        const walker = document.createTreeWalker(
            document.body,
            NodeFilter.SHOW_TEXT,
            null,
            false
        );

        const textNodes = [];
        let node;
        while (node = walker.nextNode()) {
            textNodes.push(node);
        }

        textNodes.forEach(textNode => {
            let text = textNode.textContent;
            let hasChanges = false;

            Object.keys(emojiToIconMap).forEach(emoji => {
                if (text.includes(emoji)) {
                    const iconName = emojiToIconMap[emoji];
                    const icon = createLucideIcon(iconName);
                    const iconSpan = document.createElement('span');
                    iconSpan.appendChild(icon);
                    iconSpan.className = 'emoji-replacement';
                    
                    // Remplacer l'emoji par l'icône
                    const parts = text.split(emoji);
                    const fragment = document.createDocumentFragment();
                    
                    parts.forEach((part, index) => {
                        if (part) {
                            fragment.appendChild(document.createTextNode(part));
                        }
                        if (index < parts.length - 1) {
                            fragment.appendChild(iconSpan.cloneNode(true));
                        }
                    });
                    
                    textNode.parentNode.replaceChild(fragment, textNode);
                    hasChanges = true;
                    return;
                }
            });
        });

        // Remplacer les emojis dans les attributs alt et title
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

        // Initialiser Lucide Icons après remplacement
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
    }

    // Charger Lucide Icons depuis le fichier local
    function loadLucideIcons() {
        const script = document.createElement('script');
        script.src = 'js/lucide.js';
        script.onload = function() {
            // Attendre un peu que Lucide soit complètement chargé
            setTimeout(() => {
                replaceEmojisWithIcons();
            }, 100);
        };
        document.head.appendChild(script);
    }

    // Démarrer le processus
    loadLucideIcons();
});
