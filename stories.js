const stories = {
    starwars: {
        nodes: {
            start: {
                title: "A Galaxy Far, Far Away...",
                text: "You are a young Jedi Padawan training on a remote planet. Your master has sent you on a critical mission to retrieve an ancient artifact that could save the galaxy. As you prepare your starship, you receive a mysterious transmission...",
                image: "images/starwars/start.png",
                decisions: [
                    { text: "Investigate the transmission immediately", nextNode: "transmission" },
                    { text: "Continue with your original mission", nextNode: "original-mission" }
                ]
            },
            transmission: {
                title: "The Mysterious Signal",
                text: "The transmission leads you to a hidden space station. As you dock, you discover it's a trading post run by a friendly Wookiee. The Wookiee shows you three different paths: a corridor leading to a hangar bay, a door marked 'Ancient Archives', and a turbolift going to the observation deck.",
                image: "images/starwars/transmission.png",
                decisions: [
                    { text: "Explore the hangar bay - maybe you'll find a faster ship", nextNode: "hangar" },
                    { text: "Visit the Ancient Archives - knowledge is power", nextNode: "archives" },
                    { text: "Go to the observation deck - get a better view of the situation", nextNode: "observation" }
                ]
            },
            "original-mission": {
                title: "The Original Mission",
                text: "You decide to stick to your original mission. Your starship jumps to hyperspace, but something goes wrong! You emerge in an unknown system with three planets visible. Your sensors detect different energy signatures from each planet.",
                image: "images/starwars/original-mission.png",
                decisions: [
                    { text: "Land on the forest planet - it feels strong with the Force", nextNode: "forest-planet" },
                    { text: "Investigate the desert planet - you sense ancient secrets", nextNode: "desert-planet" },
                    { text: "Approach the ice planet - something powerful calls to you", nextNode: "ice-planet" }
                ]
            },
            hangar: {
                title: "The Hangar Bay",
                text: "In the hangar, you find three incredible ships! A sleek X-wing fighter, a fast Millennium Falcon replica, and a powerful Star Destroyer shuttle. Each could help you in different ways on your adventure.",
                image: "images/starwars/hangar.png",
                decisions: [
                    { text: "Choose the X-wing - perfect for dogfights", nextNode: "xwing-path" },
                    { text: "Take the Millennium Falcon - fastest ship in the galaxy", nextNode: "falcon-path" },
                    { text: "Board the Star Destroyer shuttle - maximum firepower", nextNode: "shuttle-path" }
                ]
            },
            archives: {
                title: "The Ancient Archives",
                text: "The archives contain ancient Jedi texts and holocrons. You discover information about three legendary locations: a hidden Jedi temple, a Sith fortress, and a neutral space station where all species gather. Each location holds different secrets.",
                image: "images/starwars/archives.png",
                decisions: [
                    { text: "Seek the Jedi temple - strengthen your connection to the Force", nextNode: "jedi-temple" },
                    { text: "Investigate the Sith fortress - dangerous but potentially rewarding", nextNode: "sith-fortress" },
                    { text: "Visit the neutral space station - gather information from all sides", nextNode: "space-station" }
                ]
            },
            observation: {
                title: "The Observation Deck",
                text: "From the observation deck, you see three different space phenomena: a nebula swirling with cosmic energy, an asteroid field with strange readings, and a distant planet with a massive space station orbiting it. Each could be the key to your mission.",
                image: "images/starwars/observation.png",
                decisions: [
                    { text: "Navigate through the nebula - the Force energy might help", nextNode: "nebula" },
                    { text: "Explore the asteroid field - hidden secrets await", nextNode: "asteroid-field" },
                    { text: "Head to the space station - answers might be there", nextNode: "orbital-station" }
                ]
            },
            "forest-planet": {
                title: "The Forest Planet",
                text: "You land on a lush forest world. The Force is strong here. You encounter three paths: a path leading to a Jedi training ground, a trail to an ancient temple, and a route to a hidden rebel base.",
                image: "images/starwars/forest-planet.png",
                decisions: [
                    { text: "Visit the Jedi training ground", nextNode: "jedi-training" },
                    { text: "Explore the ancient temple", nextNode: "ancient-temple" },
                    { text: "Go to the rebel base", nextNode: "rebel-base" }
                ]
            },
            "desert-planet": {
                title: "The Desert Planet",
                text: "The desert planet is harsh but beautiful. You discover three locations: a moisture farm with friendly locals, a crashed starship that might have valuable technology, and a cave system with mysterious energy readings.",
                image: "images/starwars/desert-planet.png",
                decisions: [
                    { text: "Visit the moisture farm - gather supplies and information", nextNode: "moisture-farm" },
                    { text: "Investigate the crashed starship", nextNode: "crashed-ship" },
                    { text: "Explore the cave system", nextNode: "caves" }
                ]
            },
            "ice-planet": {
                title: "The Ice Planet",
                text: "The ice planet is freezing but breathtaking. You find three structures: an abandoned research facility, an ice cave with glowing crystals, and a landing platform with a mysterious ship.",
                image: "images/starwars/ice-planet.png",
                decisions: [
                    { text: "Enter the research facility", nextNode: "research-facility" },
                    { text: "Explore the crystal cave", nextNode: "crystal-cave" },
                    { text: "Investigate the mysterious ship", nextNode: "mysterious-ship" }
                ]
            },
            "xwing-path": {
                title: "X-wing Adventure",
                text: "You take the X-wing and engage in an epic space battle! Your skills are tested, but you emerge victorious. Your master contacts you with urgent news about a special reward for your bravery...",
                image: "images/starwars/xwing.png",
                decisions: [
                    { text: "Continue to your reward", nextNode: "gift-reveal" }
                ]
            },
            "falcon-path": {
                title: "Millennium Falcon Journey",
                text: "The Falcon is incredibly fast! You complete multiple missions across the galaxy, helping those in need. Your heroic deeds have not gone unnoticed, and you're about to receive an amazing reward...",
                image: "images/starwars/falcon.png",
                decisions: [
                    { text: "Discover your reward", nextNode: "gift-reveal" }
                ]
            },
            "shuttle-path": {
                title: "Star Destroyer Shuttle Mission",
                text: "With the powerful shuttle, you successfully complete your mission and save the day! The galaxy is safe thanks to your efforts. Now, it's time for a well-deserved reward...",
                image: "images/starwars/shuttle.png",
                decisions: [
                    { text: "Claim your reward", nextNode: "gift-reveal" }
                ]
            },
            "jedi-temple": {
                title: "The Jedi Temple",
                text: "At the Jedi temple, you undergo intense training and unlock new Force abilities. You become a true Jedi Knight! Your master reveals that you've earned something special for your dedication...",
                image: "images/starwars/jedi-temple.png",
                decisions: [
                    { text: "See what you've earned", nextNode: "gift-reveal" }
                ]
            },
            "sith-fortress": {
                title: "The Sith Fortress",
                text: "You bravely infiltrate the Sith fortress and discover crucial information that helps defeat the dark side. Your courage has saved countless lives. A special reward awaits you...",
                image: "images/starwars/sith-fortress.png",
                decisions: [
                    { text: "Receive your reward", nextNode: "gift-reveal" }
                ]
            },
            "space-station": {
                title: "The Neutral Space Station",
                text: "At the space station, you gather intelligence from all sides and broker peace between warring factions. Your diplomacy skills have prevented a galactic war! You've earned something amazing...",
                image: "images/starwars/space-station.png",
                decisions: [
                    { text: "Get your reward", nextNode: "gift-reveal" }
                ]
            },
            nebula: {
                title: "Through the Nebula",
                text: "The nebula's energy amplifies your Force powers! You discover a hidden world within the nebula and help its inhabitants. Your journey through the stars has led to something wonderful...",
                image: "images/starwars/nebula.png",
                decisions: [
                    { text: "Discover your reward", nextNode: "gift-reveal" }
                ]
            },
            "asteroid-field": {
                title: "The Asteroid Field",
                text: "You skillfully navigate the asteroid field and find a hidden base. You rescue a group of stranded travelers and become a hero. Your adventure has earned you something special...",
                image: "images/starwars/asteroid-field.png",
                decisions: [
                    { text: "Claim your reward", nextNode: "gift-reveal" }
                ]
            },
            "orbital-station": {
                title: "The Orbital Station",
                text: "The space station holds the key to your mission! You solve ancient puzzles and unlock secrets that help save the galaxy. Your intelligence and bravery deserve recognition...",
                image: "images/starwars/orbital-station.png",
                decisions: [
                    { text: "See your reward", nextNode: "gift-reveal" }
                ]
            },
            "jedi-training": {
                title: "Jedi Training Ground",
                text: "You train with master Jedi and learn powerful techniques. Your skills grow beyond expectations. You've proven yourself worthy of something extraordinary...",
                image: "images/starwars/jedi-training.png",
                decisions: [
                    { text: "Receive your reward", nextNode: "gift-reveal" }
                ]
            },
            "ancient-temple": {
                title: "The Ancient Temple",
                text: "Inside the ancient temple, you discover a powerful artifact and learn the true meaning of being a Jedi. Your wisdom and courage have unlocked something amazing...",
                image: "images/starwars/ancient-temple.png",
                decisions: [
                    { text: "Get your reward", nextNode: "gift-reveal" }
                ]
            },
            "rebel-base": {
                title: "The Rebel Base",
                text: "You join forces with the rebels and help plan a crucial mission. Your strategic thinking saves the day! Your heroism has earned you something special...",
                image: "images/starwars/rebel-base.png",
                decisions: [
                    { text: "Discover your reward", nextNode: "gift-reveal" }
                ]
            },
            "moisture-farm": {
                title: "The Moisture Farm",
                text: "The farmers share valuable information and supplies. You help them defend against raiders and become a local hero. Your kindness has led to something wonderful...",
                image: "images/starwars/moisture-farm.png",
                decisions: [
                    { text: "See your reward", nextNode: "gift-reveal" }
                ]
            },
            "crashed-ship": {
                title: "The Crashed Starship",
                text: "You salvage important technology from the crashed ship and use it to upgrade your own vessel. You also rescue the ship's droid, who becomes a loyal companion. Your resourcefulness deserves a reward...",
                image: "images/starwars/crashed-ship.png",
                decisions: [
                    { text: "Claim your reward", nextNode: "gift-reveal" }
                ]
            },
            caves: {
                title: "The Cave System",
                text: "In the caves, you discover ancient Force-sensitive crystals and learn powerful secrets. Your exploration has uncovered something that will change your destiny...",
                image: "images/starwars/caves.png",
                decisions: [
                    { text: "Receive your reward", nextNode: "gift-reveal" }
                ]
            },
            "research-facility": {
                title: "The Research Facility",
                text: "You find important research data that helps advance galactic technology. Your discovery benefits everyone. You've earned something amazing for your contribution...",
                image: "images/starwars/research-facility.png",
                decisions: [
                    { text: "Get your reward", nextNode: "gift-reveal" }
                ]
            },
            "crystal-cave": {
                title: "The Crystal Cave",
                text: "The glowing crystals resonate with your lightsaber and enhance its power. You've found something truly special. Your adventure has led to an incredible reward...",
                image: "images/starwars/crystal-cave.png",
                decisions: [
                    { text: "Discover your reward", nextNode: "gift-reveal" }
                ]
            },
            "mysterious-ship": {
                title: "The Mysterious Ship",
                text: "The ship belongs to a legendary explorer who left behind a map to hidden treasures. You follow the map and discover amazing secrets. Your curiosity has unlocked something wonderful...",
                image: "images/starwars/mysterious-ship.png",
                decisions: [
                    { text: "See your reward", nextNode: "gift-reveal" }
                ]
            },
            "gift-reveal": {
                type: "gift-reveal",
                title: "A Reward Beyond the Stars",
                text: "Your incredible journey through the galaxy has come to an end, brave Jedi! You've shown courage, wisdom, and heroism. Now, you must choose your ultimate reward - a pass to an amazing place where adventures never end!",
                image: "images/starwars/gift-reveal.png"
            },
            "final-gift": {
                type: "final-gift",
                title: "Your Galactic Reward",
                text: "May the Force be with you on your new adventure!"
            }
        }
    },
    
    harrypotter: {
        nodes: {
            start: {
                title: "The Letter Arrives",
                text: "You wake up one morning to find an owl tapping at your window. It's carrying a letter with your name on it, sealed with a wax stamp bearing a coat of arms: a lion, an eagle, a badger, and a snake. You've been accepted to Hogwarts School of Witchcraft and Wizardry!",
                image: "images/harrypotter/start.png",
                decisions: [
                    { text: "Open the letter immediately and read it", nextNode: "read-letter" },
                    { text: "Wait and show it to your family first", nextNode: "show-family" }
                ]
            },
            "read-letter": {
                title: "The Hogwarts Letter",
                text: "The letter explains that you're a wizard and invites you to attend Hogwarts. It includes a list of supplies you'll need from Diagon Alley. As you finish reading, a second owl arrives with another letter - this one is from a mysterious sender who wants to meet you.",
                image: "images/harrypotter/read-letter.png",
                decisions: [
                    { text: "Go to Diagon Alley to get your supplies", nextNode: "diagon-alley" },
                    { text: "Investigate the mysterious second letter", nextNode: "mysterious-letter" }
                ]
            },
            "show-family": {
                title: "Family Discussion",
                text: "Your family is amazed! They reveal that you come from a long line of wizards. Your parents take you to meet a family friend who's also a wizard. They offer to help you prepare for Hogwarts in three different ways.",
                image: "images/harrypotter/show-family.png",
                decisions: [
                    { text: "Learn about magical history and famous wizards", nextNode: "magical-history" },
                    { text: "Practice basic spells and magic", nextNode: "spell-practice" },
                    { text: "Visit magical locations to get inspired", nextNode: "magical-locations" }
                ]
            },
            "diagon-alley": {
                title: "Diagon Alley",
                text: "You arrive at Diagon Alley, the magical shopping street! There are so many amazing shops: Ollivanders for wands, Flourish and Blotts for books, and Quality Quidditch Supplies. You also notice three interesting places that catch your eye.",
                image: "images/harrypotter/diagon-alley.png",
                decisions: [
                    { text: "Visit Ollivanders to get your wand - the wand chooses the wizard!", nextNode: "ollivanders" },
                    { text: "Explore the Magical Menagerie - you've always wanted a pet", nextNode: "menagerie" },
                    { text: "Check out the Quidditch shop - flying sounds amazing", nextNode: "quidditch-shop" }
                ]
            },
            "mysterious-letter": {
                title: "The Mysterious Letter",
                text: "The second letter is from a secret society of young wizards. They want you to join them on an important mission. You meet them at a hidden location and they present you with three different quests to choose from.",
                image: "images/harrypotter/mysterious-letter.png",
                decisions: [
                    { text: "Help protect a magical creature in danger", nextNode: "protect-creature" },
                    { text: "Solve an ancient magical puzzle", nextNode: "magical-puzzle" },
                    { text: "Explore a hidden part of the wizarding world", nextNode: "hidden-world" }
                ]
            },
            "magical-history": {
                title: "Learning Magical History",
                text: "You learn about famous wizards, magical battles, and the history of Hogwarts. Your teacher tells you about three legendary locations in the wizarding world that you could visit to see history come alive.",
                image: "images/harrypotter/magical-history.png",
                decisions: [
                    { text: "Visit the Ministry of Magic", nextNode: "ministry" },
                    { text: "Explore the Forbidden Forest", nextNode: "forbidden-forest" },
                    { text: "Tour the Hogwarts castle before term starts", nextNode: "hogwarts-tour" }
                ]
            },
            "spell-practice": {
                title: "Practicing Magic",
                text: "You practice basic spells and discover you have a natural talent! Your teacher suggests three different areas of magic to specialize in, each leading to exciting adventures.",
                image: "images/harrypotter/spell-practice.png",
                decisions: [
                    { text: "Focus on Transfiguration - turning objects into other things", nextNode: "transfiguration" },
                    { text: "Study Charms - making things happen with magic words", nextNode: "charms" },
                    { text: "Learn Defense Against the Dark Arts - protect yourself and others", nextNode: "defense" }
                ]
            },
            "magical-locations": {
                title: "Magical Locations",
                text: "You visit several amazing magical places and learn about the wizarding world. Your guide offers to take you to three special destinations, each with its own wonders.",
                image: "images/harrypotter/magical-locations.png",
                decisions: [
                    { text: "Visit Hogsmeade - the all-wizard village", nextNode: "hogsmeade" },
                    { text: "Explore the Room of Requirement", nextNode: "room-requirement" },
                    { text: "See the Quidditch World Cup stadium", nextNode: "quidditch-stadium" }
                ]
            },
            ollivanders: {
                title: "Ollivanders Wand Shop",
                text: "Mr. Ollivander measures you and presents you with three wands to try. The first one makes flowers bloom, the second creates sparks, and the third... the third feels perfect in your hand! A warm light surrounds you. 'Curious, very curious,' says Ollivander. 'This wand has chosen you for great adventures!'",
                image: "images/harrypotter/ollivanders.png",
                decisions: [
                    { text: "Continue your adventure with your new wand", nextNode: "wand-adventure" }
                ]
            },
            menagerie: {
                title: "The Magical Menagerie",
                text: "In the pet shop, you see owls, cats, toads, and many other magical creatures. A friendly shopkeeper helps you choose a companion. Your new pet will join you on amazing adventures at Hogwarts!",
                image: "images/harrypotter/menagerie.png",
                decisions: [
                    { text: "Begin your journey with your magical pet", nextNode: "pet-adventure" }
                ]
            },
            "quidditch-shop": {
                title: "Quality Quidditch Supplies",
                text: "You learn about Quidditch, the most popular sport in the wizarding world! You try out different brooms and discover you have a natural talent for flying. The shop owner says you might make the house team!",
                image: "images/harrypotter/quidditch-shop.png",
                decisions: [
                    { text: "Start your Quidditch adventure", nextNode: "quidditch-adventure" }
                ]
            },
            "protect-creature": {
                title: "Protecting a Magical Creature",
                text: "You help rescue a rare magical creature from danger. Your bravery and kindness impress everyone. The creature becomes your friend and helps you on future adventures. You've proven yourself a true friend to magical beings!",
                image: "images/harrypotter/protect-creature.png",
                decisions: [
                    { text: "Continue your heroic journey", nextNode: "hero-journey" }
                ]
            },
            "magical-puzzle": {
                title: "The Ancient Puzzle",
                text: "You solve a complex magical puzzle that has stumped wizards for centuries! Your intelligence and problem-solving skills unlock ancient secrets. You've gained the respect of the wizarding community!",
                image: "images/harrypotter/magical-puzzle.png",
                decisions: [
                    { text: "See where your wisdom leads", nextNode: "wisdom-path" }
                ]
            },
            "hidden-world": {
                title: "The Hidden Wizarding World",
                text: "You discover secret passages and hidden magical locations that few wizards know about. Your exploration skills uncover amazing places and you become known as a great adventurer!",
                image: "images/harrypotter/hidden-world.png",
                decisions: [
                    { text: "Continue exploring", nextNode: "explorer-path" }
                ]
            },
            ministry: {
                title: "The Ministry of Magic",
                text: "You tour the Ministry and learn how the wizarding world is governed. You even get to see the Department of Mysteries! Your understanding of magic and government grows, and you're offered a special opportunity...",
                image: "images/harrypotter/ministry.png",
                decisions: [
                    { text: "Discover your opportunity", nextNode: "opportunity-path" }
                ]
            },
            "forbidden-forest": {
                title: "The Forbidden Forest",
                text: "You carefully explore the edge of the Forbidden Forest and encounter friendly magical creatures. You learn about the balance of nature and magic. Your respect for the magical world deepens!",
                image: "images/harrypotter/forbidden-forest.png",
                decisions: [
                    { text: "See what your respect has earned", nextNode: "respect-path" }
                ]
            },
            "hogwarts-tour": {
                title: "Hogwarts Castle Tour",
                text: "You get a special early tour of Hogwarts! You see the Great Hall, the moving staircases, and learn about the four houses. The castle feels like home already. You're ready for an amazing school year!",
                image: "images/harrypotter/hogwarts-tour.png",
                decisions: [
                    { text: "Begin your Hogwarts adventure", nextNode: "hogwarts-adventure" }
                ]
            },
            transfiguration: {
                title: "Mastering Transfiguration",
                text: "You become skilled at Transfiguration, turning objects into other things. Your teacher is impressed and gives you advanced lessons. You've mastered one of the most difficult branches of magic!",
                image: "images/harrypotter/transfiguration.png",
                decisions: [
                    { text: "See where your mastery leads", nextNode: "mastery-path" }
                ]
            },
            charms: {
                title: "Learning Charms",
                text: "You excel at Charms class, learning to make objects fly, change color, and create light. Your wand work is precise and powerful. You've become a skilled charm caster!",
                image: "images/harrypotter/charms.png",
                decisions: [
                    { text: "Continue your magical education", nextNode: "education-path" }
                ]
            },
            defense: {
                title: "Defense Against the Dark Arts",
                text: "You learn powerful defensive spells and how to protect yourself and others. Your courage and skill make you a natural defender. You're ready to face any challenge!",
                image: "images/harrypotter/defense.png",
                decisions: [
                    { text: "See what your courage has earned", nextNode: "courage-path" }
                ]
            },
            hogsmeade: {
                title: "Hogsmeade Village",
                text: "You visit Hogsmeade, the all-wizard village! You try butterbeer, visit Honeydukes sweet shop, and explore Zonko's joke shop. The village is magical and full of friendly wizards. You've experienced true wizarding culture!",
                image: "images/harrypotter/hogsmeade.png",
                decisions: [
                    { text: "Continue your wizarding journey", nextNode: "culture-path" }
                ]
            },
            "room-requirement": {
                title: "The Room of Requirement",
                text: "You discover the Room of Requirement, a magical room that appears when you need it most. It transforms into whatever you need - a practice room, a library, or a place to relax. You've found a special secret of Hogwarts!",
                image: "images/harrypotter/room-requirement.png",
                decisions: [
                    { text: "See what secrets await", nextNode: "secrets-path" }
                ]
            },
            "quidditch-stadium": {
                title: "The Quidditch Stadium",
                text: "You visit the Quidditch World Cup stadium and watch an amazing match! The speed, the skill, the excitement - you're hooked! You decide you want to play Quidditch yourself. Your passion for the sport is ignited!",
                image: "images/harrypotter/quidditch-stadium.png",
                decisions: [
                    { text: "Begin your Quidditch journey", nextNode: "sport-path" }
                ]
            },
            "wand-adventure": {
                title: "Your Wand's Power",
                text: "With your perfect wand, you accomplish amazing feats of magic. You help other students, solve problems, and become known throughout Hogwarts. Your magical journey has been incredible, and now you've earned something special...",
                image: "images/harrypotter/wand-adventure.png",
                decisions: [
                    { text: "Discover your reward", nextNode: "gift-reveal" }
                ]
            },
            "pet-adventure": {
                title: "Adventures with Your Pet",
                text: "Your magical pet helps you on many adventures at Hogwarts. Together, you explore secret passages, solve mysteries, and make lifelong friends. Your bond with your pet and your adventures have led to something wonderful...",
                image: "images/harrypotter/pet-adventure.png",
                decisions: [
                    { text: "See your reward", nextNode: "gift-reveal" }
                ]
            },
            "quidditch-adventure": {
                title: "Quidditch Champion",
                text: "You make the house Quidditch team and become a star player! You win matches, make amazing saves, and score incredible goals. Your Quidditch skills have made you a hero, and heroes deserve rewards...",
                image: "images/harrypotter/quidditch-adventure.png",
                decisions: [
                    { text: "Claim your reward", nextNode: "gift-reveal" }
                ]
            },
            "hero-journey": {
                title: "The Hero's Journey",
                text: "Your bravery in protecting magical creatures has made you a hero. You continue to help others and stand up for what's right. Your courage and kindness have earned you something amazing...",
                image: "images/harrypotter/hero-journey.png",
                decisions: [
                    { text: "Receive your reward", nextNode: "gift-reveal" }
                ]
            },
            "wisdom-path": {
                title: "The Path of Wisdom",
                text: "Your intelligence and problem-solving skills have solved many mysteries. You've become known as one of the wisest students at Hogwarts. Your wisdom has unlocked something special...",
                image: "images/harrypotter/wisdom-path.png",
                decisions: [
                    { text: "Get your reward", nextNode: "gift-reveal" }
                ]
            },
            "explorer-path": {
                title: "The Explorer's Path",
                text: "Your exploration has uncovered amazing secrets and hidden places. You've mapped unknown areas of the wizarding world. Your adventurous spirit has led to something wonderful...",
                image: "images/harrypotter/explorer-path.png",
                decisions: [
                    { text: "Discover your reward", nextNode: "gift-reveal" }
                ]
            },
            "opportunity-path": {
                title: "A Special Opportunity",
                text: "Your understanding of the wizarding world has impressed the Ministry. You're offered a special internship and learn about important wizarding work. Your dedication has earned you something amazing...",
                image: "images/harrypotter/opportunity-path.png",
                decisions: [
                    { text: "See your reward", nextNode: "gift-reveal" }
                ]
            },
            "respect-path": {
                title: "Respect for Magic",
                text: "Your respect for magical creatures and nature has made you a friend to all living things. Magical beings trust you and help you on your journey. Your kindness has led to something special...",
                image: "images/harrypotter/respect-path.png",
                decisions: [
                    { text: "Receive your reward", nextNode: "gift-reveal" }
                ]
            },
            "hogwarts-adventure": {
                title: "Your Hogwarts Adventure",
                text: "You've had an amazing first year at Hogwarts! You've learned magic, made friends, and had incredible adventures. Your time at the school of witchcraft and wizardry has been magical, and now you've earned something special...",
                image: "images/harrypotter/hogwarts-adventure.png",
                decisions: [
                    { text: "Discover your reward", nextNode: "gift-reveal" }
                ]
            },
            "mastery-path": {
                title: "Mastery of Magic",
                text: "Your mastery of Transfiguration has made you one of the top students. You help others learn and become a mentor. Your skill and generosity have earned you something wonderful...",
                image: "images/harrypotter/mastery-path.png",
                decisions: [
                    { text: "Get your reward", nextNode: "gift-reveal" }
                ]
            },
            "education-path": {
                title: "Magical Education",
                text: "Your dedication to learning magic has made you an excellent student. You've mastered many spells and charms. Your hard work has paid off, and you've earned something amazing...",
                image: "images/harrypotter/education-path.png",
                decisions: [
                    { text: "See your reward", nextNode: "gift-reveal" }
                ]
            },
            "courage-path": {
                title: "The Path of Courage",
                text: "Your courage in learning Defense Against the Dark Arts has made you a protector. You've helped defend others and stand up to challenges. Your bravery has earned you something special...",
                image: "images/harrypotter/courage-path.png",
                decisions: [
                    { text: "Claim your reward", nextNode: "gift-reveal" }
                ]
            },
            "culture-path": {
                title: "Wizarding Culture",
                text: "Your immersion in wizarding culture has made you a true member of the magical community. You understand traditions, make friends, and feel at home. Your journey has led to something wonderful...",
                image: "images/harrypotter/culture-path.png",
                decisions: [
                    { text: "Discover your reward", nextNode: "gift-reveal" }
                ]
            },
            "secrets-path": {
                title: "Discovering Secrets",
                text: "Your discovery of the Room of Requirement has unlocked many possibilities. You've used it to help others and accomplish great things. Your curiosity has led to something amazing...",
                image: "images/harrypotter/secrets-path.png",
                decisions: [
                    { text: "See your reward", nextNode: "gift-reveal" }
                ]
            },
            "sport-path": {
                title: "The Sport of Champions",
                text: "Your passion for Quidditch has made you a dedicated player. You practice hard, support your team, and love the game. Your dedication to Quidditch has earned you something special...",
                image: "images/harrypotter/sport-path.png",
                decisions: [
                    { text: "Get your reward", nextNode: "gift-reveal" }
                ]
            },
            "gift-reveal": {
                type: "gift-reveal",
                title: "A Magical Reward",
                text: "Your incredible journey through the wizarding world has been amazing! You've shown bravery, wisdom, and kindness. Now, you must choose your ultimate reward - a pass to an enchanting place where magic and adventure await!",
                image: "images/harrypotter/gift-reveal.png"
            },
            "final-gift": {
                type: "final-gift",
                title: "Your Wizarding Reward",
                text: "Mischief managed! Enjoy your magical adventure!"
            }
        }
    },
    
    pokemon: {
        nodes: {
            start: {
                title: "Your Pokemon Journey Begins!",
                text: "You wake up excited - today is the day you become a Pokemon Trainer! Professor Oak is waiting at his lab with three starter Pokemon for you to choose from. You rush downstairs, grab your bag, and head out into Pallet Town. The world of Pokemon awaits!",
                image: "images/pokemon/start.png",
                decisions: [
                    { text: "Choose Charmander - the Fire-type Pokemon", nextNode: "charmander" },
                    { text: "Choose Squirtle - the Water-type Pokemon", nextNode: "squirtle" },
                    { text: "Choose Bulbasaur - the Grass-type Pokemon", nextNode: "bulbasaur" }
                ]
            },
            charmander: {
                title: "Charmander, I Choose You!",
                text: "You pick up Charmander and it immediately warms up to you! Its tail flame burns brightly with excitement. Professor Oak hands you a Pokedex and some Poke Balls. As you leave the lab, you see three different paths ahead.",
                image: "images/pokemon/charmander.png",
                decisions: [
                    { text: "Head to Viridian Forest - train in the wild", nextNode: "viridian-forest" },
                    { text: "Challenge the Pewter City Gym first", nextNode: "pewter-gym" },
                    { text: "Explore Route 1 to catch more Pokemon", nextNode: "route-one" }
                ]
            },
            squirtle: {
                title: "Squirtle, I Choose You!",
                text: "Squirtle jumps into your arms and gives you a big smile! It's ready for adventure. Professor Oak gives you a Pokedex and Poke Balls to start your journey. Outside the lab, you see several paths you could take.",
                image: "images/pokemon/squirtle.png",
                decisions: [
                    { text: "Head to the nearby lake - Squirtle loves water!", nextNode: "lake-adventure" },
                    { text: "Visit the Pokemon Center to learn about healing", nextNode: "pokemon-center" },
                    { text: "Explore Route 1 to catch more Pokemon", nextNode: "route-one" }
                ]
            },
            bulbasaur: {
                title: "Bulbasaur, I Choose You!",
                text: "Bulbasaur nuzzles against you happily! The seed on its back seems to glow with energy. Professor Oak provides you with a Pokedex and Poke Balls. You step outside ready for adventure, with multiple paths before you.",
                image: "images/pokemon/bulbasaur.png",
                decisions: [
                    { text: "Visit the Pokemon Garden - Bulbasaur will love it", nextNode: "pokemon-garden" },
                    { text: "Head to Viridian Forest - perfect for Grass types", nextNode: "viridian-forest" },
                    { text: "Explore Route 1 to catch more Pokemon", nextNode: "route-one" }
                ]
            },
            "viridian-forest": {
                title: "Viridian Forest",
                text: "The forest is full of Bug-type and Grass-type Pokemon! You catch several new friends including a Caterpie and a Pikachu! Your team is growing stronger. Deep in the forest, you discover a hidden clearing with rare Pokemon.",
                image: "images/pokemon/viridian-forest.png",
                decisions: [
                    { text: "Try to catch the rare Pokemon", nextNode: "rare-pokemon" },
                    { text: "Train your team for the next gym", nextNode: "training-montage" }
                ]
            },
            "pewter-gym": {
                title: "Pewter City Gym",
                text: "You enter the Pewter City Gym and face Brock, the Rock-type specialist! The battle is tough, but your Pokemon fight with all their heart. After an intense match, you emerge victorious with your first Gym Badge!",
                image: "images/pokemon/pewter-gym.png",
                decisions: [
                    { text: "Continue to the next gym", nextNode: "cerulean-gym" },
                    { text: "Train more before moving on", nextNode: "training-montage" }
                ]
            },
            "route-one": {
                title: "Route 1 Adventure",
                text: "You explore Route 1 and encounter many wild Pokemon! You catch a Pidgey and a Rattata to add to your team. A friendly trainer challenges you to a battle, and you win! Your confidence grows with each victory.",
                image: "images/pokemon/route-one.png",
                decisions: [
                    { text: "Continue to Viridian City", nextNode: "viridian-city" },
                    { text: "Keep training on Route 1", nextNode: "training-montage" }
                ]
            },
            "lake-adventure": {
                title: "The Pokemon Lake",
                text: "At the lake, Squirtle dives in and plays happily! You meet other Water-type Pokemon and even catch a Magikarp. A mysterious trainer tells you about a powerful Water Pokemon that lives in a cave nearby...",
                image: "images/pokemon/lake-adventure.png",
                decisions: [
                    { text: "Investigate the cave", nextNode: "water-cave" },
                    { text: "Continue your gym challenge", nextNode: "cerulean-gym" }
                ]
            },
            "pokemon-center": {
                title: "The Pokemon Center",
                text: "Nurse Joy teaches you all about taking care of Pokemon. You learn about healing, status conditions, and the importance of the bond between trainer and Pokemon. She gives you some helpful items for your journey!",
                image: "images/pokemon/pokemon-center.png",
                decisions: [
                    { text: "Head to your first gym battle", nextNode: "pewter-gym" },
                    { text: "Explore more of the region", nextNode: "viridian-city" }
                ]
            },
            "pokemon-garden": {
                title: "The Pokemon Garden",
                text: "The garden is beautiful and full of Grass and Bug-type Pokemon! Bulbasaur is so happy here. You catch an Oddish and a Bellsprout. The garden keeper tells you about a legendary Pokemon said to live in a secret garden...",
                image: "images/pokemon/pokemon-garden.png",
                decisions: [
                    { text: "Search for the secret garden", nextNode: "secret-garden" },
                    { text: "Continue your gym challenge", nextNode: "celadon-gym" }
                ]
            },
            "rare-pokemon": {
                title: "A Rare Discovery!",
                text: "You find an extremely rare Pokemon in the clearing! After a careful battle, you successfully catch it! This Pokemon will be a powerful addition to your team. Other trainers are amazed at your luck and skill!",
                image: "images/pokemon/rare-pokemon.png",
                decisions: [
                    { text: "Continue your Pokemon journey", nextNode: "pokemon-league-path" }
                ]
            },
            "training-montage": {
                title: "Training Time!",
                text: "You spend time training your Pokemon team. They grow stronger, learn new moves, and evolve! Your bond with your Pokemon deepens. You feel ready to take on any challenge that comes your way!",
                image: "images/pokemon/training-montage.png",
                decisions: [
                    { text: "Challenge the Pokemon League", nextNode: "pokemon-league-path" }
                ]
            },
            "cerulean-gym": {
                title: "Cerulean City Gym",
                text: "You battle Misty, the Water-type Gym Leader! Her Starmie is tough, but your Pokemon pull through. You earn the Cascade Badge! Misty compliments your training style and wishes you luck on your journey.",
                image: "images/pokemon/cerulean-gym.png",
                decisions: [
                    { text: "Continue collecting badges", nextNode: "pokemon-league-path" }
                ]
            },
            "viridian-city": {
                title: "Viridian City",
                text: "You arrive in Viridian City and explore. You visit the Pokemon Mart, stock up on supplies, and meet other trainers. You hear rumors about a powerful Gym Leader here, but the gym seems to be closed for now...",
                image: "images/pokemon/viridian-city.png",
                decisions: [
                    { text: "Head to the next city", nextNode: "pewter-gym" },
                    { text: "Train in the nearby areas", nextNode: "training-montage" }
                ]
            },
            "water-cave": {
                title: "The Water Cave",
                text: "Deep in the cave, you discover amazing Water-type Pokemon! You even encounter a powerful legendary Pokemon. Though you can't catch it yet, it seems to acknowledge your potential as a trainer. You feel inspired!",
                image: "images/pokemon/water-cave.png",
                decisions: [
                    { text: "Continue your journey with renewed determination", nextNode: "pokemon-league-path" }
                ]
            },
            "secret-garden": {
                title: "The Secret Garden",
                text: "You discover the secret garden! It's full of rare Grass-type Pokemon and beautiful flowers. You catch some amazing Pokemon and learn about the harmony between Pokemon and nature. This experience will stay with you forever!",
                image: "images/pokemon/secret-garden.png",
                decisions: [
                    { text: "Continue your Pokemon adventure", nextNode: "pokemon-league-path" }
                ]
            },
            "celadon-gym": {
                title: "Celadon City Gym",
                text: "You challenge Erika, the Grass-type Gym Leader! The battle is beautiful and intense. Your Pokemon work together perfectly, and you win the Rainbow Badge! Erika is impressed by your connection with your Pokemon.",
                image: "images/pokemon/celadon-gym.png",
                decisions: [
                    { text: "Keep collecting badges", nextNode: "pokemon-league-path" }
                ]
            },
            "pokemon-league-path": {
                title: "The Road to Victory",
                text: "You've collected all eight Gym Badges and trained your Pokemon to be the best they can be! Victory Road awaits, and beyond it, the Pokemon League. You're about to face the Elite Four and the Champion!",
                image: "images/pokemon/pokemon-league-path.png",
                decisions: [
                    { text: "Challenge the Elite Four", nextNode: "elite-four" }
                ]
            },
            "elite-four": {
                title: "The Elite Four!",
                text: "You battle through the Elite Four one by one! Each battle is more intense than the last. Your Pokemon give everything they have, and together you overcome every challenge. Finally, you face the Champion...",
                image: "images/pokemon/elite-four.png",
                decisions: [
                    { text: "Battle the Champion", nextNode: "champion-battle" }
                ]
            },
            "champion-battle": {
                title: "Pokemon Champion!",
                text: "In an epic final battle, you defeat the Champion! Your Pokemon celebrate with you as you're crowned the new Pokemon Champion! Professor Oak arrives to congratulate you. Your Pokemon journey has been incredible, and now you've achieved your dream!",
                image: "images/pokemon/champion-battle.png",
                decisions: [
                    { text: "Receive your Champion's reward", nextNode: "gift-reveal" }
                ]
            },
            "gift-reveal": {
                type: "gift-reveal",
                title: "A Champion's Reward!",
                text: "Congratulations, Pokemon Champion! Your incredible journey through the Pokemon world has been amazing! You've caught Pokemon, won badges, defeated the Elite Four, and become Champion! Now, you must choose your ultimate reward - a pass to an amazing place where adventures never end!",
                image: "images/pokemon/gift-reveal.png"
            },
            "final-gift": {
                type: "final-gift",
                title: "Your Pokemon Reward",
                text: "Gotta catch 'em all! Your adventure continues!"
            }
        }
    }
};

