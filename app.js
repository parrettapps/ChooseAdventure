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
    
    // Check if name should trigger the Easter egg
    shouldRickroll: function(name) {
        if (!name) return false;
        const lowerName = name.toLowerCase().trim();
        
        // Exact matches (case insensitive)
        const exactMatches = ['buttercreep', 'bc', 'cj', 'cjp'];
        if (exactMatches.includes(lowerName)) {
            return true;
        }
        
        // Contains "chris" anywhere in the name
        if (lowerName.includes('chris')) {
            return true;
        }
        
        return false;
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
        
        // For Pokemon, check if we need to get trainer name first
        if (theme === 'pokemon' && nodeId === 'start' && !localStorage.getItem('pokemonTrainerName')) {
            this.renderNameEntry(theme);
            return;
        }
        
        const node = story.nodes[nodeId];
        this.renderNode(node, theme);
    },
    
    renderNameEntry: function(theme) {
        const container = document.getElementById('story-container');
        
        let html = '<div class="name-entry">';
        html += '<h1 class="story-title">🔬 Professor Oak\'s Lab 🔬</h1>';
        html += '<div class="image-wrapper"><div class="image-placeholder" style="background: linear-gradient(135deg, #fff9e6 0%, #ffe066 100%); color: #cc0000;">🧪 Professor Oak</div></div>';
        html += '<div class="story-text">"Welcome to the world of Pokemon! I\'m Professor Oak. Before we begin your adventure, I need to register you as an official Pokemon Trainer!"</div>';
        html += '<div class="story-text"><strong>"Tell me, what is your name?"</strong></div>';
        html += '<div class="name-input-container">';
        html += '<input type="text" id="trainer-name-input" class="trainer-name-input" placeholder="Enter your name..." maxlength="20" autocomplete="off">';
        html += '<button class="decision-button" onclick="router.submitTrainerName()">That\'s my name!</button>';
        html += '</div>';
        html += '</div>';
        
        container.innerHTML = html;
        
        // Focus on input and allow Enter key to submit
        const input = document.getElementById('trainer-name-input');
        input.focus();
        input.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                router.submitTrainerName();
            }
        });
    },
    
    submitTrainerName: function() {
        const input = document.getElementById('trainer-name-input');
        const name = input.value.trim();
        
        if (!name) {
            input.style.border = '3px solid #cc0000';
            input.placeholder = 'Please enter a name!';
            return;
        }
        
        // Store the trainer name
        localStorage.setItem('pokemonTrainerName', name);
        
        // Now load the actual start
        this.loadStory('pokemon', 'start');
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
        // Check for Pokemon Easter egg
        if (theme === 'pokemon') {
            const trainerName = localStorage.getItem('pokemonTrainerName');
            if (this.shouldRickroll(trainerName)) {
                this.renderRickrollGiftReveal(node, theme, container, trainerName);
                return;
            }
        }
        
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
    
    renderRickrollGiftReveal: function(node, theme, container, trainerName) {
        let html = '<div class="gift-reveal rickroll-reveal" id="reward-container">';
        html += '<h1 class="congrats-title">🎉 Congrats! 🎉</h1>';
        html += `<h2 class="congrats-name">${trainerName}</h2>`;
        html += '<div class="gift-description" style="margin-bottom: 20px;">You\'ve earned a <strong>SUPER SPECIAL</strong> Champion\'s reward!</div>';
        html += '<div class="rickroll-notice">🔊 <strong>TURN YOUR VOLUME ALL THE WAY UP</strong> 🔊</div>';
        html += '<div class="gift-description" style="margin-top: 20px;">Your exclusive video reward is ready!</div>';
        html += `<button class="decision-button rickroll-button" id="reveal-button">🎬 Watch My Special Reward!</button>`;
        html += '</div>';
        html += '<div id="video-wrapper" style="display:none;">';
        html += '<h1>🎁 Your Special Reward! 🎁</h1>';
        html += '<div id="player"></div>';
        html += '<div id="joke-message" style="display:none; margin-top: 30px;">';
        html += '<div class="gift-description">Just kidding! 😂 Click below to see your <em>real</em> gift!</div>';
        html += `<button class="decision-button" onclick="router.showRealGiftReveal('${theme}')" style="margin-top: 20px;">🎁 Show Me My REAL Gift!</button>`;
        html += '</div>';
        html += '</div>';
        
        container.innerHTML = html;
        
        // Initialize YouTube player when container is ready
        this.initRickrollPlayer();
        
        // Set up the button click handler
        const btn = document.getElementById('reveal-button');
        if (btn) {
            btn.addEventListener('click', function() {
                router.triggerRickroll(theme);
            });
        }
    },
    
    initRickrollPlayer: function() {
        // Wait for YouTube API to be ready
        if (typeof YT === 'undefined' || typeof YT.Player === 'undefined') {
            // Wait a bit and try again
            setTimeout(() => {
                this.initRickrollPlayer();
            }, 100);
            return;
        }
        
        const playerDiv = document.getElementById('player');
        if (playerDiv && !window.rickrollPlayer) {
            window.rickrollPlayer = new YT.Player('player', {
                height: '315',
                width: '100%',
                videoId: 'dQw4w9WgXcQ', // The Rickroll ID
                playerVars: {
                    'autoplay': 0,
                    'controls': 1,
                    'rel': 0
                },
                events: {
                    'onReady': function(event) {
                        // Player is ready
                        console.log('Rickroll player ready');
                    }
                }
            });
        }
    },
    
    triggerRickroll: function(theme) {
        const container = document.getElementById('reward-container');
        const wrapper = document.getElementById('video-wrapper');
        const jokeMessage = document.getElementById('joke-message');
        
        if (!container || !wrapper) {
            console.error('Rickroll elements not found');
            return;
        }
        
        // Hide the text and button
        container.style.display = 'none';
        // Show the video wrapper
        wrapper.style.display = 'block';
        
        // Ensure player is initialized
        if (!window.rickrollPlayer) {
            this.initRickrollPlayer();
        }
        
        // Play the video with sound using YouTube API
        const playVideo = () => {
            if (window.rickrollPlayer && typeof window.rickrollPlayer.playVideo === 'function') {
                window.rickrollPlayer.playVideo();
            } else {
                // If player isn't ready yet, wait a bit and try again
                setTimeout(playVideo, 200);
            }
        };
        
        // Try to play immediately, or wait for player to be ready
        playVideo();
        
        // Show the "Just kidding" message after 10 seconds
        setTimeout(() => {
            if (jokeMessage) {
                jokeMessage.style.display = 'block';
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        }, 10000);
        
        window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    
    showRealGiftReveal: function(theme) {
        const container = document.getElementById('story-container');
        const node = stories[theme].nodes['gift-reveal'];
        
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
        window.scrollTo({ top: 0, behavior: 'smooth' });
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
        // For Pokemon, also clear the trainer name so they can enter again
        if (theme === 'pokemon') {
            localStorage.removeItem('pokemonTrainerName');
        }
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

