const termsArray = [
    "Fanum Tax", "Lunchly", "Wits", "Node.js", "React", "Prime", "Tiktok",
    "Yapping", "Mogging", "Gooner", "Diddy", "Skibidi", "Sigma", "Rizz",
    "C#", "Varsity college", "Manchester united", "FC Barcelona", "Livvy dune", "Torta", "Ishowspeed", "Mrbeast", "Kai Cenat",
    "Instagram", "Twitter", "Facebook", "Reddit", "YouTube", "LinkedIn", "WhatsApp", 
    "Discord", "Zoom", "Hunz", "Gyat", "Pinterest", "Slay", "Barnyard", "Power rangers", 
    "Adobe", "Canva", "Spotify", "Netflix", "Sabc", "Disney+", "Prime Video", "DSTV", 
    "Airbnb", "Uber", "Bolt", "Mr D", "Ubear eats", "Uber", "Github", "Twitch", 
    "Fortnite", "Minecraft", "Valorant", "Apex Legends", "Roblox", "League of Legends", 
    "Genshin Impact", "Call of Duty", "Zoomer", "Bussin", "Bop", 
    "Aura", "Charli D'Amelio", "Addison Rae", "Khaby lame", "Mewing", 
    "Billie Eilish", "Travis Scott", "Kylie Jenner", "Kim Kardashian", "Zendaya", 
    "BTS", "Blackpink", "Ariana Grande", "Drake", "The Weeknd", "Ed Sheeran", "Shawn Mendes",
    "Olivia Rodrigo", "Harry Styles", "Taylor Swift", "K-pop", "Clubhouse", "BeReal", 
    "Paypal", "Medium", "Jacob Zuma", "Cap", "OnlyFans", "Viral", "Influencer", 
    "Meme", "FNB", "FYP", "VSCO", "E-girl", "E-boy", "2025", "Cooked", 
    "Vaping", "NFT", "Cryptocurrency", "Bitcoin", "Padel", "Dogecoin", "Tennis", 
    "Arsenal", "Real Madrid", "VR", "AI", "Machine Learning", "ChatGPT", "Porsche", 
    "Ferrari", "Lamborghini", "Monoply", "K53", "SpaceX", "Tesla", 
    "Elon Musk", "Apple", "Microsoft", "Google", "Amazon", "Whatsapp", "Ick", 
    "Netflix", "Apple TV+", "Amazon Prime", "Spotify Wrapped", "Virgin active", "SoundCloud", 
    "Planet Fitness", "Snapchat", "Instagram", "Threads", "MTN", 
    "YouTube Shorts", "Podcasts", "Google Docs", "Excel", "Kindle", "Siri", "Pookie", 
    "Apple Watch", "Situationship", "Razer", "GoPro", "Nintendo Switch", "PlayStation", "Xbox", 
    "iPhone", "MacBook", "iPad", "Vaseline", "Eskome sepush", "Samsung Galaxy", "Karen", "Huawei", 
    "Xiaomi", "Oculus", "Razer", "Corsair", "Logitech", "ASUS", "Acer", "Dell", "HP", "Lenovo", 
    "Spotify Playlist", "Mid", "Indie Music", "EDM", "Tyla", "Lo-fi", "Chopped", 
    "Addidas", "Luno", "Nike", "Vibe", "Mood", "Slaps", "Woke", 
    "Flex", "Cap", "No Cap", "Bet", "Lit", "Fire", "Drip", "Lowkey", "Highkey", "Shazam", 
    "Clout", "Temu", "Hustle", "Grind", "Glow Up", "FOMO", "JOMO", "Moodboard", "Aesthetic", 
    "Cancel Culture", "Stan", "Stan Twitter", "Tea", "Spill the Tea", "Shade", "Savage", "Petty", 
    "Thirst Trap", "Cringe", "Ship", "Sis", "Bae", "Bruh", "Fam", "Squad", "Slay", "Deadass", 
    "Bet", "Periodt", "Yass", "F1", "Flexing", "Zillenial", "Inspo", "Glow Up", "Simp", 
    "Big Mood", "Toxic", "Swerve", "No Chill", "Mood", "Hype", "Bop", "Whip", "Yeet", "Bougie", 
    "Stay Woke", "Viral", "Social Justice", "Activism", "Eco-friendly", "Sustainable", "Greenwashing", 
    "Climate Change", "Carbon Footprint", "Zero Waste", "Upcycling", "Thrift Store", "Secondhand", 
    "Vintage", "Fast Fashion", "Recycling", "Composting", "Zero Waste Lifestyle", "Plant-based", 
    "Vegan", "Powerpuff girls", "BEN 10", "Big time rush", "Gluten-Free", "Standard Bank", "Keto", 
    "Fast and furious", "Ozempic", "Creatin", "Magwinya", "Vetkoek", "Matcha", 
    "Avocado Toast", "Sourdough", "Croissant", "Boba", "Gmail", "Kauai", "Clash of clans", 
    "You", "Healthy Eating", "Nutrition", "Drake", "Foodie", "Suits", "Porn", 
    "Plant-Based Diet", "Netcare", "Playtomic", "Detox", "Holistic Health", "Yoga", "Pilates", 
    "Meditation", "Mental Health", "Self-care", "Mindfulness", "Therapy", "Kesha", "CBD", 
    "Demure", "Khabib", "Kanye West", "Kendrick Lamar", "Khalid", "Kodak Black", "Messi",
    "Neymar", "Ronaldo", "Mbappe", "Lewandowski", "Haaland", "NBA", "NFL", "MLB",
     "NHL", "UFC", "WWE", "NASCAR", "Formula 1", "Cricket", "Rugby", "Soccer",
     "ICarly", "Victorious", "Drake and Josh", "Zoey 101", "Avatar last air bender", "Spongebob", "Ed, Edd n Eddy",
     "Tom and Jerry", "Looney Tunes", "Scooby Doo", "", "The Simpsons", "Family Guy", "South Park",
     "Rick and Morty", "Bojack Horseman", "Big Mouth", "Futurama", "Archer", "Bob's Burgers", "American Dad",
     "The Office", "Parks and Recreation", "Brooklyn Nine-Nine", "Friends", "How I Met Your Mother", "The Big Bang Theory",
    "Max Verstaapen", "Lewis Hamilton", "Sebastian Vettel", "Charles Leclerc", "Lando Norris", "Daniel Ricciardo", "Fernando Alonso",
    "Batman", "Superman", "Spiderman", "Ironman", "Captain America", "Thor", "Black Widow",
    "Camps bay", "Harry potter", "Lord of the rings", "The hobbit", "The matrix", "The godfather", "The shawshank redemption",
    "The dark knight", "Inception", "Interstellar", "The prestige", "The departed", "The green mile", "The silence of the lambs",
    "Bicycle","Microwave","Telescope","Ice cream","Lighthouse","Laptop","Rocket","Umbrella","Waterfall",
	"Piano", "Muhammed Ali", "Mike Tyson", "Floyd Mayweather", "Conor McGregor", "Anthony Joshua", "Tyson Fury", "Canelo Alvarez",
    "USA", "China", "Russia", "India", "Brazil", "South Africa", "Nigeria", "Egypt", "Kenya", "Ghana", "Ethiopia", "Morocco", "Tanzania",
    "Uganda", "Zimbabwe", "Zambia", "Mozambique", "Angola", "Namibia", "Botswana", "Lesotho", "Swaziland", "Malawi", "DRC", "Rwanda", "Burundi",
    "Spain", "France", "Germany", "Italy", "UK", "Turkey", "Greece", "Netherlands", "Belgium", "Portugal", "Sweden", "Norway", "Denmark", "Finland",
    
    ];

let timeRemaining = 60; // 60 seconds
let timerInterval; // Declare the timerInterval globally to control the timer

function getRandomTerms() {
    const shuffled = [...termsArray].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 5);
}

// Function to render the terms on the page
function renderTerms() {
    const termsList = document.querySelector('.custom-checkbox-list');
    termsList.innerHTML = ''; // Clear the list before rendering new terms

    const randomTerms = getRandomTerms();
    randomTerms.forEach((term, index) => {
        const listItem = document.createElement('li');
        listItem.classList.add('custom-checkbox-item');
        listItem.innerHTML = `
            <span>${term}</span>
            <input type="checkbox" class="form-check-input" id="term${index + 1}">
        `;
        termsList.appendChild(listItem);
    });
}

// Function to update the timer every second
function startTimer() {
    const timerElement = document.getElementById('timer');
    
    // If there's an existing timer, clear it first
    if (timerInterval) {
        clearInterval(timerInterval);
    }

    // Start a new interval
    timerInterval = setInterval(function () {
        if (timeRemaining > 0) {
            timeRemaining--;
            timerElement.textContent = timeRemaining;
        } else {
            clearInterval(timerInterval); // Stop the timer when it reaches 0
            alert('Time is up!');
        }
    }, 1000); // Update every 1 second
}

// Event listener for the "Next" button
document.getElementById('next-btn').addEventListener('click', function () {
    renderTerms(); // Re-render the terms when "Next" is clicked
    timeRemaining = 60; // Reset the timer
    startTimer(); // Start the timer again
});


renderTerms();
startTimer();
