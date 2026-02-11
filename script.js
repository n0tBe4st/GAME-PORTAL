let games = [
  { id: 1, name: "Prototype 2", img: "https://cdn.mobygames.com/covers/1624490-prototype-2-gold-edition-playstation-3-front-cover.jpg", desc: "Open-world action game where you play as a super-powered anti-hero." },
  { id: 2, name: "Dragon Ball Z: Kakarot", img: "https://upload.wikimedia.org/wikipedia/en/7/7f/DBZ_Kakarot_cover.jpg", desc: "Experience the Dragon Ball Z story as Kakarot and fight epic battles." },
  { id: 3, name: "Call of Duty: Black Ops 4", img: "https://upload.wikimedia.org/wikipedia/en/f/f7/Call_of_Duty_Black_Ops_4_cover.jpg", desc: "Fast-paced first-person shooter with multiplayer action." },
  { id: 4, name: "Elden Ring", img: "https://upload.wikimedia.org/wikipedia/en/8/8e/Elden_Ring_cover.jpg", desc: "Explore the vast open world and conquer challenging bosses." },
  { id: 5, name: "Hogwarts Legacy", img: "https://upload.wikimedia.org/wikipedia/en/3/38/Hogwarts_Legacy_cover.jpg", desc: "Live the magical experience in the world of Hogwarts." },
  { id: 6, name: "God of War Ragnarok", img: "https://upload.wikimedia.org/wikipedia/en/4/43/God_of_War_Ragnar%C3%B6k.jpg", desc: "Embark on a journey with Kratos in Norse mythology." },
  { id: 7, name: "FIFA 23", img: "https://upload.wikimedia.org/wikipedia/en/0/0c/FIFA_23_cover.jpg", desc: "Latest football simulation game with realistic gameplay." },
  { id: 8, name: "Cyberpunk 2077", img: "https://upload.wikimedia.org/wikipedia/en/9/9f/Cyberpunk_2077_box_art.jpg", desc: "Futuristic open-world RPG full of quests and combat." },
  { id: 9, name: "The Witcher 3", img: "https://upload.wikimedia.org/wikipedia/en/0/0c/Witcher_3_cover_art.jpg", desc: "Epic fantasy RPG adventure with rich storylines." },
  { id: 10, name: "Minecraft", img: "https://upload.wikimedia.org/wikipedia/en/5/51/Minecraft_cover.png", desc: "Sandbox building and adventure game." },
  { id: 11, name: "Assassin's Creed Valhalla", img: "https://upload.wikimedia.org/wikipedia/en/5/5e/Assassin%27s_Creed_Valhalla_cover.jpg", desc: "Viking epic action game with open-world exploration." },
  { id: 12, name: "Resident Evil Village", img: "https://upload.wikimedia.org/wikipedia/en/6/6d/Resident_Evil_Village_cover.jpg", desc: "Horror survival game with terrifying enemies." }
];

let wishlist = [];

// Render games
function showGames() {
  let content = document.getElementById("content");
  content.innerHTML = games.map(g => `
    <div class="card">
      <img src="${g.img}" alt="${g.name}" onclick="openModal(${g.id})">
      <h2>${g.name}</h2>
      <button class="button" onclick="addToWishlist(${g.id})">Add to Wishlist</button>
    </div>
  `).join("");
}

// Wishlist functionality
function addToWishlist(id) {
  const game = games.find(g => g.id === id);
  if(!wishlist.includes(game)) {
    wishlist.push(game);
    alert(`${game.name} added to your wishlist!`);
  } else {
    alert(`${game.name} is already in your wishlist.`);
  }
}

// Modal functions
function openModal(id) {
  const game = games.find(g => g.id === id);
  document.getElementById("modal-title").innerText = game.name;
  document.getElementById("modal-desc").innerText = game.desc;
  document.getElementById("modal").style.display = "flex";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

// Initialize
showGames();
