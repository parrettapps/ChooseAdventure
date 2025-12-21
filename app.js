// Router to handle different story themes
const router = {
    init: function() {
        const path = window.location.pathname;
        const hash = window.location.hash.slice(1);
        
        // Determine which story to load
        let theme = 'starwars'; // default
        
        if (path.includes('harrypotter') || hash === 'harrypotter') {
            theme = 'harrypotter';
        } else if (path.includes('minecraft') || hash === 'minecraft') {
            theme = 'minecraft';
        } else if (path.includes('starwars') || hash === 'starwars') {
            theme = 'starwars';
        }
        
        // Apply theme class to body
        document.body.className = theme.replace('potter', '-potter').replace('wars', '-wars');
        
        // Load the story
        this.loadStory(theme, 'start');
    },
    
    loadStory: function(theme, nodeId) {
        if (!stories || !stories[theme]) {
            console.error('Story theme not found:', theme);
            return;
        }
        
        const story = stories[theme];
        if (!story.nodes || !story.nodes[nodeId]) {
            console.error('Story node not found:', nodeId, 'in theme:', theme);
            return;
        }
        
        const node = story.nodes[nodeId];
        this.renderNode(node, theme);
    },
    
    renderNode: function(node, theme) {
        const container = document.getElementById('story-container');
        if (!container) {
            console.error('Story container not found!');
            return;
        }
        
        // Check if this is a gift reveal node
        if (node.type === 'gift-reveal') {
            this.renderGiftReveal(node, theme, container);
            return;
        }
        
        if (node.type === 'final-gift') {
            this.renderFinalGift(node, theme, container);
            return;
        }
        
        // Regular story node
        let html = '';
        
        if (node.title) {
            html += `<h1 class="story-title">${node.title}</h1>`;
        }
        
        if (node.image) {
            html += `<div class="image-wrapper"><img src="${node.image}" alt="${node.title || 'Story image'}" class="story-image" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                     <div class="image-placeholder" style="display:none;">📷 Image Placeholder</div></div>`;
        } else {
            html += `<div class="image-wrapper"><div class="image-placeholder">📷 Image Placeholder</div></div>`;
        }
        
        if (node.text) {
            html += `<div class="story-text">${node.text}</div>`;
        }
        
        if (node.decisions && node.decisions.length > 0) {
            html += '<div class="decisions">';
            node.decisions.forEach((decision, index) => {
                html += `<button class="decision-button" onclick="router.makeDecision('${theme}', '${decision.nextNode}')">${decision.text}</button>`;
            });
            html += '</div>';
        }
        
        container.innerHTML = html;
    },
    
    renderGiftReveal: function(node, theme, container) {
        let html = '<div class="gift-reveal">';
        html += `<h1>${node.title}</h1>`;
        
        if (node.image) {
            html += `<img src="${node.image}" alt="Gift" class="gift-image" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                     <div class="gift-image" style="display:none; background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);">📷 Gift Image Placeholder</div>`;
        } else {
            html += '<div class="gift-image" style="background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);">📷 Gift Image Placeholder</div>';
        }
        
        if (node.text) {
            html += `<div class="gift-description">${node.text}</div>`;
        }
        
        html += '<div class="gift-options">';
        const parks = [
            { id: 'universal', name: 'Universal Studios', description: 'Experience the magic of Universal Studios with an annual pass!' },
            { id: 'disney', name: 'Disney', description: 'The most magical place on Earth awaits with your Disney annual pass!' },
            { id: 'busch', name: 'Busch Gardens', description: 'Adventure and thrills await with your Busch Gardens annual pass!' }
        ];
        
        parks.forEach(park => {
            html += `<div class="gift-option" onclick="router.selectGift('${theme}', '${park.id}', this)">
                        <strong>${park.name}</strong><br>
                        <small>${park.description}</small>
                     </div>`;
        });
        
        html += '</div></div>';
        container.innerHTML = html;
    },
    
    renderFinalGift: function(node, theme, container) {
        const selectedPark = localStorage.getItem(`selectedPark_${theme}`);
        const parks = {
            'universal': { name: 'Universal Studios', image: 'images/gifts/universal.png', message: 'Get ready for incredible adventures at Universal Studios! From The Wizarding World of Harry Potter to thrilling roller coasters, your annual pass unlocks endless fun!' },
            'disney': { name: 'Disney', image: 'images/gifts/disney.png', message: 'Welcome to the most magical place on Earth! Your Disney annual pass gives you unlimited access to create memories that will last a lifetime!' },
            'busch': { name: 'Busch Gardens', image: 'images/gifts/busch.png', message: 'Your Busch Gardens annual pass is your ticket to endless adventures, amazing roller coasters, and unforgettable family fun!' }
        };
        
        const park = parks[selectedPark] || parks['disney'];
        
        let html = '<div class="final-gift-reveal">';
        html += `<h1>🎁 Your Gift Awaits! 🎁</h1>`;
        html += `<div class="gift-name">${park.name} Annual Pass</div>`;
        html += `<div class="gift-message">${park.message}</div>`;
        html += `<div class="image-wrapper"><img src="${park.image}" alt="${park.name} Annual Pass" class="story-image gift-pass-image" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                 <div class="image-placeholder" style="display:none;">📷 ${park.name} Annual Pass Image</div></div>`;
        html += `<button class="decision-button start-over-button" onclick="router.startOver('${theme}')">🔄 Start Your Adventure Again!</button>`;
        html += '</div>';
        
        container.innerHTML = html;
    },
    
    makeDecision: function(theme, nextNodeId) {
        this.loadStory(theme, nextNodeId);
        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    
    selectGift: function(theme, parkId, eventElement) {
        localStorage.setItem(`selectedPark_${theme}`, parkId);
        
        // Add visual feedback
        const options = document.querySelectorAll('.gift-option');
        options.forEach(opt => opt.classList.remove('gift-selected'));
        if (eventElement) {
            eventElement.closest('.gift-option').classList.add('gift-selected');
        }
        
        // Move to final gift reveal after a moment
        setTimeout(() => {
            this.loadStory(theme, 'final-gift');
        }, 1000);
    },
    
    startOver: function(theme) {
        // Clear the selected park for this theme
        localStorage.removeItem(`selectedPark_${theme}`);
        // Go back to the start of the same story
        this.loadStory(theme, 'start');
        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
};

// Initialize the app when DOM is loaded (only if not already initialized by theme-specific script)
document.addEventListener('DOMContentLoaded', function() {
    // Only auto-init if we're on index.html (no theme-specific script will run)
    if (!window.themeInitialized) {
        router.init();
    }
});

