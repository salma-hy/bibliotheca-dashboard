/* =====================================================
   DONNÉES INITIALES
===================================================== */

let books = [
    {
        id: 1,
        title: "Harry Potter à l'école des sorciers",
        author: "J.K. Rowling",
        genre: "fantaisie",
        year: 1997,
        status: "available",
        favorite: true,
        cover: "https://images.unsplash.com/photo-1621351183012-e2f9972dd9bf?auto=format&fit=crop&w=400&q=80"
    },
    {
        id: 2,
        title: "Le Seigneur des Anneaux",
        author: "J.R.R. Tolkien",
        genre: "fantaisie",
        year: 1954,
        status: "borrowed",
        favorite: false,
        cover: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=400&q=80"
    }
];

let authors = [
    { id: 1, name: "J.K. Rowling", nationality: "Britannique", birthYear: 1965, initial: "J" },
    { id: 2, name: "J.R.R. Tolkien", nationality: "Britannique", birthYear: 1892, initial: "J" }
];

let emprunts = [
    {
        id: 1,
        bookId: 2,
        borrower: "Jean Dupont",
        dateEmprunt: "2024-01-15",
        dateRetour: "2024-02-15",
        status: "en-cours"
    }
];

/* =====================================================
   LOCAL STORAGE
===================================================== */

function saveData() {
    localStorage.setItem("books", JSON.stringify(books));
    localStorage.setItem("authors", JSON.stringify(authors));
    localStorage.setItem("emprunts", JSON.stringify(emprunts));
}

function loadData() {
    if (localStorage.getItem("books")) books = JSON.parse(localStorage.getItem("books"));
    if (localStorage.getItem("authors")) authors = JSON.parse(localStorage.getItem("authors"));
    if (localStorage.getItem("emprunts")) emprunts = JSON.parse(localStorage.getItem("emprunts"));
}

/* =====================================================
   AUTHENTIFICATION
===================================================== */

document.getElementById("login-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const user = username.value;
    const pass = password.value;

    if (user === "admin" && pass === "admin123") {
        login-page.style.display = "none";
        dashboard-page.style.display = "block";
        initDashboard();
    } else {
        error-message.style.display = "block";
    }
});

/* =====================================================
   DASHBOARD
===================================================== */

function initDashboard() {
    loadData();
    displayBooks();
    displayAuthors();
    displayFavorites();
    displayEmprunts();
    updateDashboardStats();
    loadSuggestions();
}

/* =====================================================
   API OPENLIBRARY (OBLIGATOIRE)
===================================================== */

async function loadSuggestions() {
    const container = document.getElementById("suggestions-list");
    if (!container) return;

    container.innerHTML = "Chargement...";

    try {
        const res = await fetch(
            "https://openlibrary.org/search.json?q=classic+literature&limit=6"
        );
        const data = await res.json();

        container.innerHTML = "";

        data.docs.slice(0, 3).forEach(book => {
            const cover = book.cover_i
                ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
                : "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=400&q=80";

            container.innerHTML += `
                <div class="suggestion-item">
                    <div class="suggestion-cover" style="background-image:url('${cover}')"></div>
                    <div class="suggestion-info">
                        <div class="suggestion-title">${book.title}</div>
                        <div class="suggestion-author">${book.author_name?.[0] || "Auteur inconnu"}</div>
                        <div class="suggestion-year">${book.first_publish_year || ""}</div>
                    </div>
                </div>
            `;
        });
    } catch (err) {
        container.innerHTML = "Erreur API";
        console.error(err);
    }
}

/* =====================================================
   LIVRES
===================================================== */

function displayBooks(list = books) {
    const grid = document.getElementById("collection-grid");
    if (!grid) return;

    grid.innerHTML = "";

    list.forEach(book => {
        grid.innerHTML += `
            <div class="collection-book-card">
                <button class="delete-btn" onclick="deleteBook(${book.id})">
                    <i class="fas fa-trash"></i>
                </button>
                <div class="collection-book-cover"
                     style="background-image:url('${book.cover}')"></div>
                <div class="collection-book-title">${book.title}</div>
                <div>${book.author}</div>
                <div>${getGenreName(book.genre)}</div>
                <div>${book.year}</div>
            </div>
        `;
    });
}

function deleteBook(id) {
    if (!confirm("Supprimer ce livre ?")) return;
    books = books.filter(b => b.id !== id);
    emprunts = emprunts.filter(e => e.bookId !== id);
    saveData();
    displayBooks();
    displayFavorites();
    updateDashboardStats();
}

/* =====================================================
   AUTEURS
===================================================== */

function displayAuthors() {
    const grid = document.getElementById("authors-grid");
    if (!grid) return;

    grid.innerHTML = "";

    authors.forEach(a => {
        grid.innerHTML += `
            <div class="author-card">
                <strong>${a.name}</strong>
                <div>${a.nationality}</div>
                <div>${a.birthYear}</div>
            </div>
        `;
    });
}

/* =====================================================
   FAVORIS
===================================================== */

function displayFavorites() {
    const grid = document.getElementById("favorites-grid");
    if (!grid) return;

    const favs = books.filter(b => b.favorite);
    grid.innerHTML = "";

    favs.forEach(book => {
        grid.innerHTML += `<div>${book.title}</div>`;
    });
}

/* =====================================================
   EMPRUNTS
===================================================== */

function displayEmprunts() {
    const tbody = document.getElementById("emprunts-body");
    if (!tbody) return;

    tbody.innerHTML = "";

    emprunts.forEach(e => {
        const book = books.find(b => b.id === e.bookId);
        if (!book) return;

        tbody.innerHTML += `
            <tr>
                <td>${book.title}</td>
                <td>${e.borrower}</td>
                <td>${e.dateEmprunt}</td>
                <td>${e.dateRetour}</td>
                <td>${e.status}</td>
            </tr>
        `;
    });
}

/* =====================================================
   STATS
===================================================== */

function updateDashboardStats() {
    document.getElementById("total-books").textContent = books.length;
    document.getElementById("total-authors").textContent = authors.length;
}

/* =====================================================
   UTILS
===================================================== */

function getGenreName(key) {
    return {
        "fantaisie": "Fantaisie",
        "science-fiction": "Science-Fiction",
        "roman-historique": "Roman Historique",
        "policier": "Policier",
        "biographie": "Biographie",
        "poesie": "Poésie",
        "fiction": "Fiction"
    }[key] || key;
}

/* =====================================================
   INIT
===================================================== */

window.addEventListener("DOMContentLoaded", () => {
    loadData();
    console.log("✅ Bibliotheca prêt – admin / admin123");
});
