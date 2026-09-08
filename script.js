/* ================= GAME DATA ================= */

const games = [
    {
        name: "Golden Fortune",
        category: "classic",
        icon: "🎰"
    },
    {
        name: "Diamond Dreams",
        category: "video",
        icon: "💎"
    },
    {
        name: "Lucky Stars",
        category: "jackpot",
        icon: "⭐"
    },
    {
        name: "Royal Palace",
        category: "classic",
        icon: "👑"
    },
    {
        name: "Ocean Treasure",
        category: "video",
        icon: "🌊"
    },
    {
        name: "Fire Jackpot",
        category: "jackpot",
        icon: "🔥"
    },
    {
        name: "Magic Fruits",
        category: "classic",
        icon: "🍒"
    },
    {
        name: "Neon Nights",
        category: "video",
        icon: "🌃"
    }
];


/* ================= DISPLAY GAMES ================= */

function displayGames(gameList, containerId) {

    const container = document.getElementById(containerId);

    container.innerHTML = "";

    gameList.forEach(game => {

        const card = document.createElement("div");

        card.className = "game-card";

        card.innerHTML = `
            <div class="game-image">
                ${game.icon}
            </div>

            <div class="game-info">
                <h3>${game.name}</h3>
                <p>${game.category.toUpperCase()} GAME</p>

                <button class="play-btn"
                        onclick="playGame('${game.name}')">
                    Play Now
                </button>
            </div>
        `;

        container.appendChild(card);

    });

}


/* ================= PAGE NAVIGATION ================= */

function showPage(pageId) {

    document.querySelectorAll(".page").forEach(page => {
        page.classList.remove("active");
    });

    document.getElementById(pageId).classList.add("active");

    window.scrollTo(0, 0);

}


/* ================= GAME FILTER ================= */

function filterGames(category, button) {

    document.querySelectorAll(".filter-btn").forEach(btn => {
        btn.classList.remove("active");
    });

    button.classList.add("active");

    if (category === "all") {
        displayGames(games, "lobbyGames");
    } else {
        const filtered = games.filter(game => game.category === category);
        displayGames(filtered, "lobbyGames");
    }

}


/* ================= SEARCH ================= */

function searchGames() {

    const search = document.getElementById("searchInput")
        .value.toLowerCase();

    const filtered = games.filter(game =>
        game.name.toLowerCase().includes(search)
    );

    displayGames(filtered, "lobbyGames");

}


/* ================= PLAY BUTTON ================= */

function playGame(gameName) {

    alert(
        "Demo only: " + gameName +
        "\n\nThis prototype does not connect to real-money gaming."
    );

}


/* ================= FAQ ================= */

function toggleFAQ(button) {

    const answer = button.nextElementSibling;

    answer.classList.toggle("show");

    const icon = button.querySelector("span");

    icon.textContent = answer.classList.contains("show")
        ? "−"
        : "+";

}


/* ================= CONTACT FORM ================= */

function submitContact(event) {

    event.preventDefault();

    alert("Thank you! Your message has been submitted.");

    event.target.reset();

}


/* ================= LOGIN / REGISTER ================= */

function showLogin() {

    document.getElementById("authModal").classList.add("show");

    document.getElementById("modalTitle").textContent = "Login";

    document.getElementById("modalDescription").textContent =
        "Enter your details to continue.";

    document.getElementById("modalSwitch").innerHTML =
        `Don't have an account?
        <a href="#" onclick="showRegister()">Register</a>`;

}

function showRegister() {

    document.getElementById("authModal").classList.add("show");

    document.getElementById("modalTitle").textContent = "Register";

    document.getElementById("modalDescription").textContent =
        "Create your account to get started.";

    document.getElementById("modalSwitch").innerHTML =
        `Already have an account?
        <a href="#" onclick="showLogin()">Login</a>`;

}

function closeModal() {

    document.getElementById("authModal").classList.remove("show");

}

function submitAuth(event) {

    event.preventDefault();

    alert(
        "Demo only: Account authentication is not connected."
    );

}


/* ================= CLOSE MODAL ================= */

window.onclick = function(event) {

    const modal = document.getElementById("authModal");

    if (event.target === modal) {
        closeModal();
    }

};


/* ================= INITIALIZE ================= */

displayGames(games.slice(0, 4), "homeGames");

displayGames(games, "lobbyGames");