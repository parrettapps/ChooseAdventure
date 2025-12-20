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
    
    minecraft: {
        nodes: {
            start: {
                title: "A New World Awaits",
                text: "You wake up in a blocky world, surrounded by trees, grass, and endless possibilities. The sun is rising, and you know this is the start of an incredible adventure. You have three basic tools in your inventory: a wooden pickaxe, a wooden sword, and some seeds. What will you do first?",
                image: "images/minecraft/start.png",
                decisions: [
                    { text: "Start mining - gather resources underground", nextNode: "mining" },
                    { text: "Begin building - create your first shelter", nextNode: "building" },
                    { text: "Explore the surface - see what's out there", nextNode: "exploring" }
                ]
            },
            mining: {
                title: "Into the Depths",
                text: "You dig down into the earth and discover a vast cave system! As you mine, you find coal, iron, and even some rare gems. The cave branches into three different directions, each promising different treasures.",
                image: "images/minecraft/mining.png",
                decisions: [
                    { text: "Follow the path with glowing ore - might be diamonds!", nextNode: "diamond-mine" },
                    { text: "Explore the lava-filled cavern - dangerous but rewarding", nextNode: "lava-cavern" },
                    { text: "Head toward the sounds of water - could be an underground lake", nextNode: "underground-lake" }
                ]
            },
            building: {
                title: "Your First Build",
                text: "You start building and discover you have a real talent for construction! You create a cozy house, then expand to build a farm, a workshop, and more. As your skills grow, you decide to tackle three ambitious building projects.",
                image: "images/minecraft/building.png",
                decisions: [
                    { text: "Build a massive castle with towers and walls", nextNode: "castle" },
                    { text: "Create an automated farm with redstone", nextNode: "redstone-farm" },
                    { text: "Construct a village for other players", nextNode: "village" }
                ]
            },
            exploring: {
                title: "Surface Exploration",
                text: "You set out to explore and discover amazing biomes! You see a dense forest, a desert with temples, and mountains reaching into the clouds. Each biome holds different adventures and resources.",
                image: "images/minecraft/exploring.png",
                decisions: [
                    { text: "Explore the dark forest - mysterious and full of secrets", nextNode: "dark-forest" },
                    { text: "Journey to the desert - ancient temples await", nextNode: "desert-temple" },
                    { text: "Climb the mountains - the view must be incredible", nextNode: "mountains" }
                ]
            },
            "diamond-mine": {
                title: "The Diamond Mine",
                text: "You strike diamond! With your new diamond tools, you become incredibly efficient. You mine deeper and discover an ancient stronghold. Inside, you find an End Portal! You're ready for the ultimate adventure...",
                image: "images/minecraft/diamond-mine.png",
                decisions: [
                    { text: "Prepare for the End dimension", nextNode: "end-preparation" }
                ]
            },
            "lava-cavern": {
                title: "The Lava Cavern",
                text: "You carefully navigate the lava-filled cavern and discover Nether portals! You gather obsidian and build a portal to the Nether dimension. The Nether is dangerous but full of rare materials. Your courage has opened new possibilities!",
                image: "images/minecraft/lava-cavern.png",
                decisions: [
                    { text: "Enter the Nether", nextNode: "nether-adventure" }
                ]
            },
            "underground-lake": {
                title: "The Underground Lake",
                text: "You find a beautiful underground lake with glowstone lighting it up. You discover an abandoned mineshaft with chests full of treasure! You also find a spawner and decide to build a mob farm. Your exploration has been very rewarding!",
                image: "images/minecraft/underground-lake.png",
                decisions: [
                    { text: "Continue your underground adventure", nextNode: "mineshaft-adventure" }
                ]
            },
            castle: {
                title: "The Grand Castle",
                text: "You build an incredible castle with multiple towers, a throne room, and defensive walls. Your building skills impress everyone! You decide to expand and create an entire kingdom with villages, farms, and roads connecting everything.",
                image: "images/minecraft/castle.png",
                decisions: [
                    { text: "Build your kingdom", nextNode: "kingdom" }
                ]
            },
            "redstone-farm": {
                title: "The Redstone Farm",
                text: "You master redstone and create an amazing automated farm! Crops plant and harvest themselves, animals are automatically fed, and everything is perfectly organized. Your engineering skills are incredible!",
                image: "images/minecraft/redstone-farm.png",
                decisions: [
                    { text: "Expand your redstone creations", nextNode: "redstone-master" }
                ]
            },
            village: {
                title: "Building a Village",
                text: "You build a beautiful village and villagers move in! You trade with them, protect them from zombies, and help the village grow. You become the village hero and they offer you special rewards!",
                image: "images/minecraft/village.png",
                decisions: [
                    { text: "See what the villagers have for you", nextNode: "village-hero" }
                ]
            },
            "dark-forest": {
                title: "The Dark Forest",
                text: "You explore the dark forest and discover a woodland mansion! You carefully explore it, fighting off illagers and collecting rare loot. You also find a secret room with amazing treasures. Your bravery has paid off!",
                image: "images/minecraft/dark-forest.png",
                decisions: [
                    { text: "Continue your forest adventure", nextNode: "mansion-adventure" }
                ]
            },
            "desert-temple": {
                title: "The Desert Temple",
                text: "You find a desert temple and carefully disarm the TNT trap! Inside, you discover ancient treasures: gold, emeralds, and enchanted books. You also find a map leading to an even greater treasure...",
                image: "images/minecraft/desert-temple.png",
                decisions: [
                    { text: "Follow the treasure map", nextNode: "treasure-hunt" }
                ]
            },
            mountains: {
                title: "The Mountains",
                text: "You climb to the top of the mountains and the view is breathtaking! You discover an emerald ore vein and build a base at the peak. From here, you can see the entire world. You've found the perfect spot!",
                image: "images/minecraft/mountains.png",
                decisions: [
                    { text: "Build your mountain base", nextNode: "mountain-base" }
                ]
            },
            "end-preparation": {
                title: "Preparing for the End",
                text: "You gather all the resources you need: Ender Pearls, Blaze Powder, and the best armor and weapons. You activate the End Portal and step through. You're ready to face the Ender Dragon!",
                image: "images/minecraft/end-preparation.png",
                decisions: [
                    { text: "Battle the Ender Dragon", nextNode: "ender-dragon" }
                ]
            },
            "nether-adventure": {
                title: "Nether Adventure",
                text: "You explore the Nether, gathering rare materials like Netherite, Blaze Rods, and Ghast Tears. You build a Nether highway and discover a Nether Fortress. Your adventures in the Nether have made you incredibly powerful!",
                image: "images/minecraft/nether-adventure.png",
                decisions: [
                    { text: "Continue your Nether journey", nextNode: "nether-master" }
                ]
            },
            "mineshaft-adventure": {
                title: "Mineshaft Exploration",
                text: "You explore the mineshaft thoroughly, finding rare ores and building an efficient mob farm. Your resource gathering skills are unmatched. You've become a master miner and explorer!",
                image: "images/minecraft/mineshaft-adventure.png",
                decisions: [
                    { text: "See where your mastery leads", nextNode: "master-miner" }
                ]
            },
            kingdom: {
                title: "Your Kingdom",
                text: "You've built an entire kingdom! Villagers live in your cities, farms produce food, and your kingdom thrives. You're the ruler of a blocky empire! Your leadership and building skills have created something amazing.",
                image: "images/minecraft/kingdom.png",
                decisions: [
                    { text: "See what your kingdom has earned you", nextNode: "gift-reveal" }
                ]
            },
            "redstone-master": {
                title: "Redstone Master",
                text: "You've become a redstone master! You've built complex machines, automated systems, and incredible contraptions. Your engineering skills are legendary in the Minecraft world. You've created something truly special!",
                image: "images/minecraft/redstone-master.png",
                decisions: [
                    { text: "Discover your reward", nextNode: "gift-reveal" }
                ]
            },
            "village-hero": {
                title: "Village Hero",
                text: "The villagers are so grateful for your help! They've prepared a special celebration in your honor. You've protected them, helped them grow, and become their hero. Your kindness and bravery have earned you something wonderful!",
                image: "images/minecraft/village-hero.png",
                decisions: [
                    { text: "See your reward", nextNode: "gift-reveal" }
                ]
            },
            "mansion-adventure": {
                title: "Mansion Conqueror",
                text: "You've cleared the woodland mansion and claimed it as your own! You've defeated all the illagers and collected amazing loot. Your bravery and combat skills have made you a legend. Heroes deserve rewards!",
                image: "images/minecraft/mansion-adventure.png",
                decisions: [
                    { text: "Claim your reward", nextNode: "gift-reveal" }
                ]
            },
            "treasure-hunt": {
                title: "The Treasure Hunt",
                text: "You follow the treasure map and discover an ocean monument! You dive deep, defeat the guardians, and claim the treasure. You've become an expert treasure hunter and explorer. Your adventures have led to something amazing!",
                image: "images/minecraft/treasure-hunt.png",
                decisions: [
                    { text: "Discover your reward", nextNode: "gift-reveal" }
                ]
            },
            "mountain-base": {
                title: "Mountain Base",
                text: "Your mountain base is incredible! You've built a fortress in the clouds with the best view in the world. You've mined rare ores and created an amazing home. Your building and exploration skills have earned you something special!",
                image: "images/minecraft/mountain-base.png",
                decisions: [
                    { text: "Get your reward", nextNode: "gift-reveal" }
                ]
            },
            "ender-dragon": {
                title: "Dragon Slayer",
                text: "You've defeated the Ender Dragon! The ultimate boss of Minecraft has fallen to your skill and determination. You've completed the game's greatest challenge. Your achievement deserves an incredible reward!",
                image: "images/minecraft/ender-dragon.png",
                decisions: [
                    { text: "Receive your reward", nextNode: "gift-reveal" }
                ]
            },
            "nether-master": {
                title: "Nether Master",
                text: "You've mastered the Nether! You've gathered Netherite, built highways, and conquered the dangerous dimension. Your courage and skill have made you a Nether expert. You've earned something amazing!",
                image: "images/minecraft/nether-master.png",
                decisions: [
                    { text: "See your reward", nextNode: "gift-reveal" }
                ]
            },
            "master-miner": {
                title: "Master Miner",
                text: "You've become the ultimate miner! You've found every ore, explored every cave, and built the most efficient mining operations. Your dedication to mining has made you incredibly wealthy and skilled. You've earned something wonderful!",
                image: "images/minecraft/master-miner.png",
                decisions: [
                    { text: "Discover your reward", nextNode: "gift-reveal" }
                ]
            },
            "gift-reveal": {
                type: "gift-reveal",
                title: "Your Blocky Reward",
                text: "Your incredible adventure in the blocky world has been amazing! You've built, explored, mined, and conquered. You've shown creativity, courage, and skill. Now, you must choose your ultimate reward - a pass to an amazing place where adventures never end!",
                image: "images/minecraft/gift-reveal.png"
            },
            "final-gift": {
                type: "final-gift",
                title: "Your Minecraft Reward",
                text: "Keep crafting and building! Your adventure continues!"
            }
        }
    }
};

