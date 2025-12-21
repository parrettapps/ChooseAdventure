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
                text: "You wake up on your 10th birthday - today is the day you become a Pokemon Trainer! You rush to Professor Oak's lab, heart pounding with excitement. But when you arrive, Professor Oak has a special surprise. 'I've been saving a very special Pokemon just for you,' he says with a smile, handing you a Poke Ball containing... an Eevee! The fluffy brown Pokemon jumps into your arms and nuzzles your face. You and Eevee are going to be the best of friends!",
                image: "images/pokemon/start.png",
                decisions: [
                    { text: "Head to the forest - you heard there are cool Pokemon there!", nextNode: "forest-path" },
                    { text: "Go to the beach - maybe you'll find Water-type Pokemon!", nextNode: "beach-path" },
                    { text: "Climb the mountain trail - adventure awaits up high!", nextNode: "mountain-path" }
                ]
            },
            "forest-path": {
                title: "Viridian Forest Adventure",
                text: "You and Eevee enter the lush Viridian Forest! Sunlight filters through the leaves as Bug and Grass-type Pokemon scurry about. Eevee's ears perk up - it senses Pokemon nearby! You spot a Caterpie, a Butterfree flying overhead, and hear a familiar 'Pika pika!' in the distance.",
                image: "images/pokemon/forest-path.png",
                decisions: [
                    { text: "Follow the Pikachu sounds deeper into the forest", nextNode: "pikachu-chase" },
                    { text: "Explore the Pokemon training grounds you see ahead", nextNode: "forest-training" },
                    { text: "Investigate the mysterious glowing flowers", nextNode: "forest-mystery" }
                ]
            },
            "beach-path": {
                title: "Cerulean Beach",
                text: "You and Eevee arrive at the beautiful Cerulean Beach! The sand is warm and the waves sparkle in the sunlight. Eevee playfully chases the waves. You see Water-type Pokemon swimming nearby - and is that a Squirtle playing in the surf? There's also a Pokemon trainer having a picnic and a mysterious cave in the cliffs.",
                image: "images/pokemon/beach-path.png",
                decisions: [
                    { text: "Try to befriend the playful Squirtle", nextNode: "squirtle-friend" },
                    { text: "Talk to the trainer having a picnic", nextNode: "beach-trainer" },
                    { text: "Explore the seaside cave", nextNode: "sea-cave" }
                ]
            },
            "mountain-path": {
                title: "Mt. Moon Trail",
                text: "You and Eevee begin climbing the famous Mt. Moon! The air is crisp and cool, and you can see for miles. Eevee seems energized by the altitude! You spot some Geodude rolling down the path, a Clefairy dancing on a rock, and smoke rising from what looks like a Charmander's tail flame.",
                image: "images/pokemon/mountain-path.png",
                decisions: [
                    { text: "Follow the Clefairy to see where it's going", nextNode: "clefairy-dance" },
                    { text: "Approach the Charmander - it might need help", nextNode: "charmander-rescue" },
                    { text: "Explore the cave entrance you spotted", nextNode: "moon-cave" }
                ]
            },
            "pikachu-chase": {
                title: "Meeting Pikachu!",
                text: "You follow the sounds and find an adorable Pikachu! But it's being cornered by a group of angry Spearow! Without hesitating, you and Eevee jump in to help. Eevee uses Quick Attack and you throw a stick to distract the Spearow. They fly away, and the grateful Pikachu decides to join your team!",
                image: "images/pokemon/pikachu-chase.png",
                decisions: [
                    { text: "Train with your new team in the forest", nextNode: "forest-team-training" },
                    { text: "Head to the nearest Pokemon Gym", nextNode: "first-gym" }
                ]
            },
            "forest-training": {
                title: "Forest Training Grounds",
                text: "You discover a secret training area where other young trainers practice! A friendly trainer named Ethan challenges you to a battle. Eevee fights bravely and wins! Ethan is impressed and gives you tips on how to help Eevee evolve. 'Your bond with Eevee is really special,' he says.",
                image: "images/pokemon/forest-training.png",
                decisions: [
                    { text: "Keep training with the other trainers", nextNode: "training-camp" },
                    { text: "Head to challenge your first gym", nextNode: "first-gym" }
                ]
            },
            "forest-mystery": {
                title: "The Glowing Flowers",
                text: "The mysterious flowers lead you to a hidden grove where a beautiful Celebi appears! The legendary Pokemon seems to recognize something special in you and Eevee. It sprinkles magical dust on Eevee, making it glow briefly. Eevee has learned a special move! Celebi vanishes, but you'll never forget this moment.",
                image: "images/pokemon/forest-mystery.png",
                decisions: [
                    { text: "Continue your adventure with renewed wonder", nextNode: "legendary-blessing" }
                ]
            },
            "squirtle-friend": {
                title: "A New Friend - Squirtle!",
                text: "You approach the Squirtle carefully. It's shy at first, but Eevee runs up playfully and they start chasing each other! The Squirtle seems lonely - it was separated from its trainer. You promise to help find its home, but in the meantime, Squirtle joins your adventure! Now you have two amazing Pokemon friends!",
                image: "images/pokemon/squirtle-friend.png",
                decisions: [
                    { text: "Train together at the beach", nextNode: "beach-training" },
                    { text: "Head to the Pokemon Center to register your team", nextNode: "pokemon-center" }
                ]
            },
            "beach-trainer": {
                title: "Meeting Misty",
                text: "The trainer is Misty, the famous Water-type Gym Leader! She's taking a day off. She notices your Eevee and smiles. 'That's a wonderful Pokemon! Would you like a friendly battle?' You accept, and even though her Staryu is tough, Eevee fights with all its heart. Misty is impressed by your bond and invites you to challenge her gym soon!",
                image: "images/pokemon/beach-trainer.png",
                decisions: [
                    { text: "Accept her invitation to battle at the gym", nextNode: "water-gym" },
                    { text: "Keep exploring the beach first", nextNode: "beach-exploration" }
                ]
            },
            "sea-cave": {
                title: "The Seafoam Cave",
                text: "Inside the cave, you find incredible ice formations and Water-type Pokemon! Eevee shivers a bit, so you share your jacket. Deep inside, you discover a hidden pool where a majestic Lapras is resting. It looks at you kindly and offers to give you and Eevee a ride across the underground lake!",
                image: "images/pokemon/sea-cave.png",
                decisions: [
                    { text: "Ride Lapras to explore the hidden areas", nextNode: "lapras-adventure" }
                ]
            },
            "clefairy-dance": {
                title: "The Clefairy Moon Dance",
                text: "You follow the Clefairy to a magical clearing where dozens of Clefairy are dancing under the moonlight! Eevee joins in, dancing adorably. A large Moon Stone in the center glows brightly. The Clefairy seem to be offering you a piece of it - a gift that could help Eevee evolve someday!",
                image: "images/pokemon/clefairy-dance.png",
                decisions: [
                    { text: "Accept the Moon Stone gift", nextNode: "moon-stone-gift" },
                    { text: "Thank them and continue exploring", nextNode: "mountain-exploration" }
                ]
            },
            "charmander-rescue": {
                title: "Rescuing Charmander",
                text: "The Charmander was abandoned by a cruel trainer and left on the mountain! You can see it's been waiting here, hoping its trainer would return. You gently approach with Eevee, offering food and kindness. The Charmander is hesitant at first, but Eevee's friendly nature wins it over. Charmander decides to trust you and joins your team!",
                image: "images/pokemon/charmander-rescue.png",
                decisions: [
                    { text: "Train your new team on the mountain", nextNode: "mountain-training" },
                    { text: "Take Charmander to get healed first", nextNode: "pokemon-center" }
                ]
            },
            "moon-cave": {
                title: "Inside Mt. Moon",
                text: "The cave is full of Zubat, Geodude, and beautiful crystals! Eevee's fur glows softly in the crystal light. Deep inside, you find a fossil - and a scientist who offers to revive it into a real Pokemon for you! You also spot some suspicious characters in the shadows... Team Rocket!",
                image: "images/pokemon/moon-cave.png",
                decisions: [
                    { text: "Confront Team Rocket with Eevee!", nextNode: "team-rocket-battle" },
                    { text: "Sneak past and get help from the scientist", nextNode: "fossil-revival" }
                ]
            },
            "forest-team-training": {
                title: "Training with Pikachu and Eevee",
                text: "You train hard with Pikachu and Eevee! They become best friends, often playing together between training sessions. Your Pokemon learn new moves and grow stronger. Other trainers notice how well your Pokemon work together. You're becoming a skilled trainer!",
                image: "images/pokemon/forest-team-training.png",
                decisions: [
                    { text: "Challenge the Pokemon League", nextNode: "gym-challenge" }
                ]
            },
            "first-gym": {
                title: "Your First Gym Battle!",
                text: "You enter the Pewter City Gym to face Brock! His Rock-type Pokemon are tough, but Eevee doesn't give up. With clever moves and your encouragement, Eevee finds a way to win! Brock awards you the Boulder Badge. 'You and your Eevee have a special bond,' he says. 'You'll go far!'",
                image: "images/pokemon/first-gym.png",
                decisions: [
                    { text: "Continue your gym challenge journey", nextNode: "gym-challenge" }
                ]
            },
            "training-camp": {
                title: "The Pokemon Training Camp",
                text: "You spend time at the training camp, and Eevee grows incredibly strong! You meet trainers from all over and learn new strategies. One trainer has an Umbreon - an evolved form of Eevee! It inspires you to keep training and growing with your Pokemon partner.",
                image: "images/pokemon/training-camp.png",
                decisions: [
                    { text: "Head out to collect gym badges", nextNode: "gym-challenge" }
                ]
            },
            "legendary-blessing": {
                title: "Blessed by Celebi",
                text: "With Celebi's blessing, you and Eevee feel unstoppable! You travel across the region, catching Pokemon and making friends everywhere you go. Eevee seems to glow with a special energy. Trainers you meet comment on how amazing your bond is. You're ready for the ultimate challenge!",
                image: "images/pokemon/legendary-blessing.png",
                decisions: [
                    { text: "Challenge the Pokemon League", nextNode: "pokemon-league" }
                ]
            },
            "beach-training": {
                title: "Beach Training Session",
                text: "You train Eevee and Squirtle on the beach! Squirtle teaches Eevee to swim, and they have races in the shallow water. Both Pokemon grow stronger and become close friends. A crowd gathers to watch your training - you're becoming famous for your talented team!",
                image: "images/pokemon/beach-training.png",
                decisions: [
                    { text: "Take on the gym challenge", nextNode: "gym-challenge" }
                ]
            },
            "pokemon-center": {
                title: "The Pokemon Center",
                text: "Nurse Joy heals your Pokemon and is amazed by how happy and healthy they are! 'You take wonderful care of your Pokemon,' she says. She gives you a special Potion as a gift. Eevee looks refreshed and ready for more adventures!",
                image: "images/pokemon/pokemon-center.png",
                decisions: [
                    { text: "Continue your Pokemon journey", nextNode: "gym-challenge" }
                ]
            },
            "water-gym": {
                title: "Cerulean Gym Battle!",
                text: "You challenge Misty at her gym! The water arena is impressive, with platforms floating on a huge pool. Eevee is nervous about the water, but you encourage it. Together, you develop a strategy using Eevee's speed and agility. After an exciting battle, you win the Cascade Badge!",
                image: "images/pokemon/water-gym.png",
                decisions: [
                    { text: "Keep collecting badges", nextNode: "gym-challenge" }
                ]
            },
            "beach-exploration": {
                title: "Beach Discoveries",
                text: "Exploring the beach, you and Eevee find a hidden tide pool full of Staryu and Shellder! You also discover a beautiful pearl that you keep as a good luck charm. Eevee finds a playful Psyduck who follows you around. Your adventure is full of wonderful discoveries!",
                image: "images/pokemon/beach-exploration.png",
                decisions: [
                    { text: "Head to the Pokemon League", nextNode: "pokemon-league" }
                ]
            },
            "lapras-adventure": {
                title: "Adventure with Lapras",
                text: "Lapras takes you through underground caverns filled with glowing crystals and rare Water Pokemon! Eevee rides on your lap, watching in amazement. You emerge on a secret beach where Lapras's family lives. They welcome you with joy. Lapras decides to join your team for more adventures!",
                image: "images/pokemon/lapras-adventure.png",
                decisions: [
                    { text: "Journey to the Pokemon League", nextNode: "pokemon-league" }
                ]
            },
            "moon-stone-gift": {
                title: "The Moon Stone Gift",
                text: "You accept the Moon Stone, and the Clefairy cheer! You carefully put it in your bag. Eevee sniffs it curiously. This magical stone could help Eevee evolve into something amazing someday! The Clefairy wave goodbye as you continue your journey, feeling blessed.",
                image: "images/pokemon/moon-stone-gift.png",
                decisions: [
                    { text: "Continue to the Pokemon League", nextNode: "pokemon-league" }
                ]
            },
            "mountain-exploration": {
                title: "Mountain Peak",
                text: "You climb to the very top of Mt. Moon! The view is breathtaking - you can see the entire region! Eevee howls happily at the summit. You feel on top of the world. A rare Dragonite flies by and seems to nod at you in respect. You're ready for any challenge!",
                image: "images/pokemon/mountain-exploration.png",
                decisions: [
                    { text: "Descend and head to the Pokemon League", nextNode: "pokemon-league" }
                ]
            },
            "mountain-training": {
                title: "Mountain Training",
                text: "You train Eevee and Charmander on the mountainside! The tough terrain makes them stronger. Charmander's flame burns brighter, and Eevee becomes faster and more agile. They've become great partners. You feel ready to take on the Pokemon League!",
                image: "images/pokemon/mountain-training.png",
                decisions: [
                    { text: "Challenge the Pokemon League", nextNode: "pokemon-league" }
                ]
            },
            "team-rocket-battle": {
                title: "Defeating Team Rocket!",
                text: "You bravely confront Team Rocket! 'Prepare for trouble!' they shout, but you're not scared. Eevee leaps into battle and defeats their Koffing and Ekans! Team Rocket blasts off, and everyone in the cave cheers! You're a hero! The scientist rewards you with a special fossil Pokemon!",
                image: "images/pokemon/team-rocket-battle.png",
                decisions: [
                    { text: "Continue as a Pokemon hero", nextNode: "pokemon-league" }
                ]
            },
            "fossil-revival": {
                title: "Fossil Revival",
                text: "The scientist revives your fossil into an Omanyte! The ancient Pokemon seems confused at first but quickly bonds with Eevee. You now have a rare and amazing Pokemon on your team! The scientist tells you about the Pokemon League and encourages you to enter.",
                image: "images/pokemon/fossil-revival.png",
                decisions: [
                    { text: "Head to the Pokemon League", nextNode: "pokemon-league" }
                ]
            },
            "gym-challenge": {
                title: "The Gym Challenge",
                text: "You travel across the region, challenging gym after gym! Eevee is always by your side, growing stronger with each battle. You earn badge after badge - Boulder, Cascade, Thunder, Rainbow, Soul, Marsh, Volcano, and Earth! You now have all eight badges. The Pokemon League awaits!",
                image: "images/pokemon/gym-challenge.png",
                decisions: [
                    { text: "Enter the Pokemon League", nextNode: "pokemon-league" }
                ]
            },
            "pokemon-league": {
                title: "The Pokemon League",
                text: "You've made it to the Pokemon League! Victory Road was tough, but you and Eevee conquered it together. Now you stand at the entrance to the Elite Four's chambers. Eevee looks at you with determination in its eyes. You've trained hard for this moment. It's time to become the Champion!",
                image: "images/pokemon/pokemon-league.png",
                decisions: [
                    { text: "Challenge the Elite Four!", nextNode: "elite-four" }
                ]
            },
            "elite-four": {
                title: "The Elite Four!",
                text: "You battle through Lorelei's Ice-types, Bruno's Fighting-types, Agatha's Ghost-types, and Lance's Dragon-types! Each battle is more intense than the last. Eevee fights with everything it has, and together you overcome every challenge. Finally, you face the Champion's door...",
                image: "images/pokemon/elite-four.png",
                decisions: [
                    { text: "Face the Champion!", nextNode: "champion-battle" }
                ]
            },
            "champion-battle": {
                title: "Pokemon Champion!",
                text: "The final battle is legendary! The Champion's Pokemon are incredibly strong, but the bond between you and Eevee is unbreakable. In the final moment, Eevee uses all its power and wins! Confetti falls as you're crowned the new Pokemon Champion! Professor Oak rushes in to congratulate you. 'I knew you were special from the moment I gave you Eevee,' he says with tears of joy. You did it!",
                image: "images/pokemon/champion-battle.png",
                decisions: [
                    { text: "Receive your Champion's reward!", nextNode: "gift-reveal" }
                ]
            },
            "gift-reveal": {
                type: "gift-reveal",
                title: "A Champion's Reward!",
                text: "Congratulations, Pokemon Champion! Your incredible journey with Eevee has been amazing! You've caught Pokemon, made friends, defeated Team Rocket, won all eight badges, conquered the Elite Four, and become Champion! Now, you must choose your ultimate reward - a pass to an amazing place where real adventures await!",
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

