// Gestion des icônes Feather
document.addEventListener('DOMContentLoaded', function() {
    // Fonction pour créer une icône Feather
    function createFeatherIcon(iconName, className = '') {
        const icon = document.createElement('i');
        icon.setAttribute('data-feather', iconName);
        if (className) {
            icon.className = `icon ${className}`;
        } else {
            icon.className = 'icon';
        }
        return icon;
    }

    // Mapping des emojis vers les icônes Feather
    const emojiToIconMap = {
        '📚': 'book-open',
        '💡': 'lightbulb',
        '🎮': 'gamepad-2',
        '🎬': 'video',
        '💻': 'monitor',
        '🔍': 'search',
        '📊': 'bar-chart-2',
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
        '💯': 'award'
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
                    const icon = createFeatherIcon(iconName);
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

        // Initialiser Feather Icons après remplacement
        if (typeof feather !== 'undefined') {
            feather.replace();
        }
    }

    // Charger Feather Icons depuis CDN si pas déjà chargé
    function loadFeatherIcons() {
        if (typeof feather === 'undefined') {
            const script = document.createElement('script');
            script.src = 'https://unpkg.com/feather-icons@4.29.1/dist/feather.min.js';
            script.onload = function() {
                replaceEmojisWithIcons();
            };
            document.head.appendChild(script);
        } else {
            replaceEmojisWithIcons();
        }
    }

    // Démarrer le processus
    loadFeatherIcons();
});
