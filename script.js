// Données globales
const books = [
    {
        id: 1,
        title: 'Harry Potter à l\'école des sorciers',
        author: 'J.K. Rowling',
        genre: 'Fantaisie',
        year: 1997,
        isbn: '978-2070541200',
        status: 'available',
        favorite: true,
        likes: 45
    },
    {
        id: 2,
        title: 'Le Hobbit',
        author: 'J.R.R. Tolkien',
        genre: 'Fantaisie',
        year: 1937,
        isbn: '978-2070612888',
        status: 'borrowed',
        favorite: false,
        likes: 32
    },
    {
        id: 3,
        title: 'Le Trône de fer',
        author: 'George R.R. Martin',
        genre: 'Fantaisie',
        year: 1996,
        isbn: '978-2253123276',
        status: 'available',
        favorite: true,
        likes: 38
    },
    {
        id: 4,
        title: 'La Ballade de l\'impossible',
        author: 'Haruki Murakami',
        genre: 'Fiction',
        year: 1987,
        isbn: '978-2070381659',
        status: 'available',
        favorite: false,
        likes: 28
    },
    {
        id: 5,
        title: 'Les Misérables',
        author: 'Victor Hugo',
        genre: 'Fiction Historique',
        year: 1862,
        isbn: '978-2253004249',
        status: 'lost',
        favorite: false,
        likes: 52
    }
];

const authors = [
    { id: 1, name: 'J.K. Rowling', nationality: 'Britannique', birthYear: 1965, booksCount: 1, initial: 'J' },
    { id: 2, name: 'J.R.R. Tolkien', nationality: 'Britannique', birthYear: 1892, booksCount: 1, initial: 'J' },
    { id: 3, name: 'George R.R. Martin', nationality: 'Américain', birthYear: 1948, booksCount: 1, initial: 'G' },
    { id: 4, name: 'Haruki Murakami', nationality: 'Japonais', birthYear: 1949, booksCount: 1, initial: 'H' },
    { id: 5, name: 'Victor Hugo', nationality: 'Français', birthYear: 1802, booksCount: 1, initial: 'V' }
];

const emprunts = [
    {
        id: 1,
        title: 'Le Hobbit',
        author: 'J.R.R. Tolkien',
        borrower: 'Jean Dupont',
        dateEmprunt: '2025-12-15',
        dateRetour: '2026-01-15',
        status: 'en-cours'
    },
    {
        id: 2,
        title: 'Harry Potter à l\'école des sorciers',
        author: 'J.K. Rowling',
        borrower: 'Marie Martin',
        dateEmprunt: '2025-12-20',
        dateRetour: '2026-01-20',
        status: 'en-cours'
    }
];

// Navigation entre pages
function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const pages = document.querySelectorAll('.page');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetPage = link.getAttribute('data-page');

            // Mettre à jour les liens actifs
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');

            // Afficher la bonne page
            pages.forEach(page => page.classList.remove('active'));
            const target = document.getElementById(targetPage);
            if (target) {
                target.classList.add('active');
            }

            // Fermer le menu mobile
            const navMenu = document.querySelector('.nav-menu');
            if (navMenu) navMenu.classList.remove('active');

            // Charger les données de la page
            loadPageData(targetPage);
        });
    });
}

// Charger les données selon la page
function loadPageData(page) {
    switch(page) {
        case 'dashboard':
            setTimeout(() => {
                initChart();
                initVisitorsChart();
                initBooksChart();
                loadSuggestions();
            }, 100);
            break;
        case 'collection':
            displayBooks();
            break;
        case 'auteurs':
            displayAuthors();
            break;
        case 'favoris':
            displayFavorites();
            break;
        case 'emprunts':
            displayEmprunts();
            break;
    }
}

// Menu mobile
function initMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }
}

// Recherche globale
function initGlobalSearch() {
    const globalSearch = document.getElementById('global-search');
    const searchBtn = document.querySelector('.search-btn');

    if (globalSearch && searchBtn) {
        const performSearch = () => {
            const searchTerm = globalSearch.value.toLowerCase().trim();
            if (searchTerm) {
                // Aller à la page collection et rechercher
                const collectionLink = document.querySelector('[data-page="collection"]');
                if (collectionLink) {
                    collectionLink.click();
                    setTimeout(() => {
                        const collectionSearch = document.getElementById('collection-search');
                        if (collectionSearch) {
                            collectionSearch.value = searchTerm;
                            filterBooks();
                        }
                    }, 100);
                }
            }
        };

        searchBtn.addEventListener('click', performSearch);
        globalSearch.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') performSearch();
        });
    }
}

// Graphique par genre
function initChart() {
    const canvas = document.getElementById('genreChart');
    if (!canvas) return;

    canvas.width = canvas.offsetWidth || 400;
    canvas.height = 300;

    const ctx = canvas.getContext('2d');
    const genres = ['Fantaisie', 'Fiction', 'Fiction Historique'];
    const counts = [3, 1, 1];
    const maxCount = Math.max(...counts, 1);
    const barWidth = Math.min(80, (canvas.width - 100) / genres.length);
    const barMaxHeight = canvas.height - 80;
    const spacing = 20;
    const colors = ['#6366f1', '#ec4899', '#f59e0b'];

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    genres.forEach((genre, index) => {
        const barHeight = (counts[index] / maxCount) * barMaxHeight;
        const x = 50 + index * (barWidth + spacing);
        const y = canvas.height - 30 - barHeight;

        // Gradient pour chaque barre
        const gradient = ctx.createLinearGradient(x, y, x, canvas.height - 30);
        gradient.addColorStop(0, colors[index]);
        gradient.addColorStop(1, colors[index] + '80');
        ctx.fillStyle = gradient;
        ctx.fillRect(x, y, barWidth, barHeight);

        ctx.fillStyle = '#1f2937';
        ctx.font = '12px Arial';
        ctx.textAlign = 'center';
        const genreText = genre.length > 12 ? genre.substring(0, 12) + '...' : genre;
        ctx.fillText(genreText, x + barWidth / 2, canvas.height - 10);

        ctx.fillStyle = '#1f2937';
        ctx.font = 'bold 14px Arial';
        ctx.fillText(counts[index].toString(), x + barWidth / 2, y - 5);
    });
}

// Graphique des visiteurs
function initVisitorsChart() {
    const canvas = document.getElementById('visitorsChart');
    if (!canvas) return;

    canvas.width = canvas.offsetWidth || 400;
    canvas.height = 300;

    const ctx = canvas.getContext('2d');
    const days = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'];
    const visitors = [120, 145, 98, 167, 189, 134, 89];
    const maxVisitors = Math.max(...visitors);
    const barWidth = (canvas.width - 100) / days.length;
    const barMaxHeight = canvas.height - 80;
    const spacing = 10;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    days.forEach((day, index) => {
        const barHeight = (visitors[index] / maxVisitors) * barMaxHeight;
        const x = 50 + index * (barWidth + spacing);
        const y = canvas.height - 30 - barHeight;

        const gradient = ctx.createLinearGradient(x, y, x, canvas.height - 30);
        gradient.addColorStop(0, '#6366f1');
        gradient.addColorStop(1, '#8b5cf6');
        ctx.fillStyle = gradient;
        ctx.fillRect(x, y, barWidth, barHeight);

        ctx.fillStyle = '#1f2937';
        ctx.font = '11px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(day, x + barWidth / 2, canvas.height - 10);

        ctx.fillStyle = '#6366f1';
        ctx.font = 'bold 12px Arial';
        ctx.fillText(visitors[index].toString(), x + barWidth / 2, y - 5);
    });
}

// Graphique des livres lus/empruntés
function initBooksChart() {
    const canvas = document.getElementById('booksChart');
    if (!canvas) return;

    canvas.width = canvas.offsetWidth || 400;
    canvas.height = 300;

    const ctx = canvas.getContext('2d');
    const months = ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Jun'];
    const borrowed = [15, 22, 18, 25, 30, 28];
    const read = [8, 12, 10, 15, 18, 16];
    const maxValue = Math.max(...borrowed, ...read);
    const barWidth = (canvas.width - 120) / months.length / 2;
    const barMaxHeight = canvas.height - 80;
    const spacing = 5;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    months.forEach((month, index) => {
        const borrowedHeight = (borrowed[index] / maxValue) * barMaxHeight;
        const readHeight = (read[index] / maxValue) * barMaxHeight;
        const x = 50 + index * (barWidth * 2 + spacing * 2);
        
        // Barre empruntés
        const borrowedY = canvas.height - 30 - borrowedHeight;
        const borrowedGradient = ctx.createLinearGradient(x, borrowedY, x, canvas.height - 30);
        borrowedGradient.addColorStop(0, '#ec4899');
        borrowedGradient.addColorStop(1, '#f472b6');
        ctx.fillStyle = borrowedGradient;
        ctx.fillRect(x, borrowedY, barWidth, borrowedHeight);

        // Barre lus
        const readY = canvas.height - 30 - readHeight;
        const readGradient = ctx.createLinearGradient(x + barWidth + spacing, readY, x + barWidth + spacing, canvas.height - 30);
        readGradient.addColorStop(0, '#10b981');
        readGradient.addColorStop(1, '#34d399');
        ctx.fillStyle = readGradient;
        ctx.fillRect(x + barWidth + spacing, readY, barWidth, readHeight);

        // Labels
        ctx.fillStyle = '#1f2937';
        ctx.font = '11px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(month, x + barWidth, canvas.height - 10);

        ctx.font = 'bold 10px Arial';
        ctx.fillText(borrowed[index].toString(), x + barWidth / 2, borrowedY - 3);
        ctx.fillText(read[index].toString(), x + barWidth + spacing + barWidth / 2, readY - 3);
    });

    // Légende
    ctx.fillStyle = '#ec4899';
    ctx.fillRect(20, 20, 15, 15);
    ctx.fillStyle = '#1f2937';
    ctx.font = '11px Arial';
    ctx.textAlign = 'left';
    ctx.fillText('Empruntés', 40, 32);

    ctx.fillStyle = '#10b981';
    ctx.fillRect(20, 40, 15, 15);
    ctx.fillStyle = '#1f2937';
    ctx.fillText('Lus', 40, 52);
}

// Suggestions
function loadSuggestions() {
    const suggestionsList = document.getElementById('suggestions-list');
    if (!suggestionsList) return;

    const suggestions = [
        { title: 'Le Comte de Monte-Cristo', author: 'Alexandre Dumas', year: 1844 },
        { title: 'Les Trois Mousquetaires', author: 'Alexandre Dumas', year: 1844 },
        { title: 'Notre-Dame de Paris', author: 'Victor Hugo', year: 1831 }
    ];

    suggestionsList.innerHTML = '';
    suggestions.forEach(book => {
        const item = document.createElement('div');
        item.className = 'suggestion-item';
        item.innerHTML = `
            <div class="suggestion-cover"></div>
            <div class="suggestion-info">
                <div class="suggestion-title">${book.title}</div>
                <div class="suggestion-author">${book.author}</div>
                <div class="suggestion-year">${book.year}</div>
            </div>
        `;
        suggestionsList.appendChild(item);
    });
}

// Favoris
function toggleFavorite(bookTitle) {
    let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    if (favorites.includes(bookTitle)) {
        favorites = favorites.filter(f => f !== bookTitle);
    } else {
        favorites.push(bookTitle);
    }
    localStorage.setItem('favorites', JSON.stringify(favorites));
    updateFavoriteButtons();
}

function updateFavoriteButtons() {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    document.querySelectorAll('.favorite-btn').forEach(btn => {
        const bookTitle = btn.getAttribute('data-book');
        if (bookTitle) {
            if (favorites.includes(bookTitle)) {
                btn.classList.add('active');
                btn.textContent = '❤️';
            } else {
                btn.classList.remove('active');
                btn.textContent = '🤍';
            }
        }
    });
}

// Collection - Afficher les livres
function displayBooks(filteredBooks = books) {
    const grid = document.getElementById('collection-grid');
    if (!grid) return;

    grid.innerHTML = '';

    if (filteredBooks.length === 0) {
        grid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 2rem;">Aucun livre trouvé.</p>';
        return;
    }

    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');

    filteredBooks.forEach(book => {
        const card = document.createElement('div');
        card.className = 'collection-book-card';
        const initial = book.title.charAt(0).toUpperCase();
        const isFavorite = favorites.includes(book.title) || book.favorite;

        card.innerHTML = `
            <div class="collection-book-header">
                <div class="collection-book-initial">${initial}</div>
                <div class="collection-book-title">${book.title}</div>
                <div>
                    <button class="favorite-btn ${isFavorite ? 'active' : ''}" data-book="${book.title}">${isFavorite ? '❤️' : '🤍'}</button>
                    <span class="favorite-count">${book.likes || 0}</span>
                </div>
            </div>
            <div class="collection-book-info"><strong>Auteur:</strong> ${book.author}</div>
            <div class="collection-book-info"><strong>Genre:</strong> ${book.genre}</div>
            <div class="collection-book-info"><strong>Année:</strong> ${book.year}</div>
            <div class="collection-book-info"><strong>ISBN:</strong> ${book.isbn}</div>
            <div class="collection-book-status ${book.status}">
                ${book.status === 'available' ? '🟢 Disponible' : 
                  book.status === 'borrowed' ? '🟡 Emprunté' : 
                  '🔴 Perdu'}
            </div>
        `;
        grid.appendChild(card);
    });

    // Ajouter les event listeners pour les favoris
    grid.querySelectorAll('.favorite-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const bookTitle = btn.getAttribute('data-book');
            toggleFavorite(bookTitle);
            displayBooks(filteredBooks);
        });
    });
}

// Collection - Filtres
function filterBooks() {
    const searchTerm = document.getElementById('collection-search')?.value.toLowerCase() || '';
    const status = document.getElementById('status-filter')?.value || 'all';

    let filtered = books;

    if (searchTerm) {
        filtered = filtered.filter(book => 
            book.title.toLowerCase().includes(searchTerm) ||
            book.genre.toLowerCase().includes(searchTerm) ||
            book.author.toLowerCase().includes(searchTerm)
        );
    }

    if (status !== 'all') {
        filtered = filtered.filter(book => book.status === status);
    }

    displayBooks(filtered);
}

// Auteurs
function displayAuthors(filteredAuthors = authors) {
    const grid = document.getElementById('authors-grid');
    if (!grid) return;

    grid.innerHTML = '';

    if (filteredAuthors.length === 0) {
        grid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 2rem;">Aucun auteur trouvé.</p>';
        return;
    }

    filteredAuthors.forEach(author => {
        const card = document.createElement('div');
        card.className = 'author-card';
        card.innerHTML = `
            <div class="author-header">
                <div class="author-initial">${author.initial}</div>
                <div class="author-name">${author.name}</div>
            </div>
            <div class="author-info"><strong>Nationalité:</strong> ${author.nationality}</div>
            <div class="author-info"><strong>Année de naissance:</strong> ${author.birthYear}</div>
            <div class="author-info"><strong>ID:</strong> ${author.id}</div>
            <div class="author-books-count">${author.booksCount} livre${author.booksCount > 1 ? 's' : ''}</div>
        `;
        grid.appendChild(card);
    });
}

// Favoris
function displayFavorites() {
    const grid = document.getElementById('favorites-grid');
    if (!grid) return;

    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    const favoriteBooks = books.filter(book => favorites.includes(book.title));

    grid.innerHTML = '';

    if (favoriteBooks.length === 0) {
        grid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 2rem;">Aucun livre favori pour le moment.</p>';
        return;
    }

    favoriteBooks.forEach(book => {
        const card = document.createElement('div');
        card.className = 'collection-book-card';
        const initial = book.title.charAt(0).toUpperCase();

        card.innerHTML = `
            <div class="collection-book-header">
                <div class="collection-book-initial">${initial}</div>
                <div class="collection-book-title">${book.title}</div>
                <div>
                    <button class="favorite-btn active" data-book="${book.title}">❤️</button>
                    <span class="favorite-count">${book.likes || 0} personnes ont aimé</span>
                </div>
            </div>
            <div class="collection-book-info"><strong>Auteur:</strong> ${book.author}</div>
            <div class="collection-book-info"><strong>Genre:</strong> ${book.genre}</div>
            <div class="collection-book-info"><strong>Année:</strong> ${book.year}</div>
            <div class="collection-book-info"><strong>ISBN:</strong> ${book.isbn}</div>
            <div class="collection-book-status ${book.status}">
                ${book.status === 'available' ? '🟢 Disponible' : 
                  book.status === 'borrowed' ? '🟡 Emprunté' : 
                  '🔴 Perdu'}
            </div>
        `;
        grid.appendChild(card);
    });

    // Recherche dans les favoris
    const favoritesSearch = document.getElementById('favorites-search');
    if (favoritesSearch) {
        favoritesSearch.oninput = (e) => {
            const searchTerm = e.target.value.toLowerCase();
            const filtered = favoriteBooks.filter(book => 
                book.title.toLowerCase().includes(searchTerm) ||
                book.author.toLowerCase().includes(searchTerm)
            );
            displayFavoritesFiltered(filtered);
        };
    }

    // Event listeners pour les favoris
    grid.querySelectorAll('.favorite-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const bookTitle = btn.getAttribute('data-book');
            toggleFavorite(bookTitle);
            displayFavorites();
        });
    });
}

function displayFavoritesFiltered(filtered) {
    const grid = document.getElementById('favorites-grid');
    if (!grid) return;

    grid.innerHTML = '';
    if (filtered.length === 0) {
        grid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 2rem;">Aucun résultat trouvé.</p>';
        return;
    }

    filtered.forEach(book => {
        const card = document.createElement('div');
        card.className = 'collection-book-card';
        const initial = book.title.charAt(0).toUpperCase();

        card.innerHTML = `
            <div class="collection-book-header">
                <div class="collection-book-initial">${initial}</div>
                <div class="collection-book-title">${book.title}</div>
                <button class="favorite-btn active" data-book="${book.title}">❤️</button>
            </div>
            <div class="collection-book-info"><strong>Auteur:</strong> ${book.author}</div>
            <div class="collection-book-info"><strong>Genre:</strong> ${book.genre}</div>
            <div class="collection-book-info"><strong>Année:</strong> ${book.year}</div>
            <div class="collection-book-info"><strong>ISBN:</strong> ${book.isbn}</div>
            <div class="collection-book-status ${book.status}">
                ${book.status === 'available' ? '🟢 Disponible' : 
                  book.status === 'borrowed' ? '🟡 Emprunté' : 
                  '🔴 Perdu'}
            </div>
        `;
        grid.appendChild(card);
    });
}

// Emprunts
function displayEmprunts() {
    const tbody = document.getElementById('emprunts-body');
    if (!tbody) return;

    tbody.innerHTML = '';

    if (emprunts.length === 0) {
        tbody.innerHTML = '<tr><td colspan="7" style="text-align: center; padding: 2rem;">Aucun emprunt enregistré.</td></tr>';
        return;
    }

    emprunts.forEach(emprunt => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${emprunt.title}</td>
            <td>${emprunt.author}</td>
            <td>${emprunt.borrower}</td>
            <td>${formatDate(emprunt.dateEmprunt)}</td>
            <td>${formatDate(emprunt.dateRetour)}</td>
            <td><span class="status-badge ${emprunt.status}">${getStatusName(emprunt.status)}</span></td>
            <td><button class="btn btn-primary" style="padding: 0.5rem 1rem; font-size: 0.85rem;">Prolonger</button></td>
        `;
        tbody.appendChild(row);
    });
}

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', { day: '2-digit', month: '2-digit', year: 'numeric' });
}

function getStatusName(status) {
    const statusNames = {
        'en-cours': 'En cours',
        'retourne': 'Retourné',
        'retard': 'En retard'
    };
    return statusNames[status] || status;
}

// Modals
function initModals() {
    const modals = document.querySelectorAll('.modal');
    const modalCloses = document.querySelectorAll('.modal-close');

    modalCloses.forEach(close => {
        close.addEventListener('click', () => {
            close.closest('.modal').style.display = 'none';
        });
    });

    window.addEventListener('click', (e) => {
        modals.forEach(modal => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    });

    // Bouton ajouter livre
    const addBookBtn = document.getElementById('add-book-btn');
    const addBookModal = document.getElementById('add-book-modal');
    if (addBookBtn && addBookModal) {
        addBookBtn.addEventListener('click', () => {
            addBookModal.style.display = 'block';
        });
    }

    // Bouton ajouter auteur
    const addAuthorBtn = document.getElementById('add-author-btn');
    const addAuthorModal = document.getElementById('add-author-modal');
    if (addAuthorBtn && addAuthorModal) {
        addAuthorBtn.addEventListener('click', () => {
            addAuthorModal.style.display = 'block';
        });
    }

    // Formulaire ajouter livre
    const addBookForm = document.getElementById('add-book-form');
    if (addBookForm) {
        addBookForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const newBook = {
                id: books.length + 1,
                title: document.getElementById('book-title').value,
                author: document.getElementById('book-author').value,
                genre: document.getElementById('book-genre').value,
                year: parseInt(document.getElementById('book-year').value),
                isbn: document.getElementById('book-isbn').value,
                status: document.getElementById('book-status').value,
                favorite: false
            };
            books.push(newBook);
            displayBooks();
            addBookModal.style.display = 'none';
            addBookForm.reset();
            alert('Livre ajouté avec succès !');
        });
    }

    // Formulaire ajouter auteur
    const addAuthorForm = document.getElementById('add-author-form');
    if (addAuthorForm) {
        addAuthorForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('author-name').value;
            const newAuthor = {
                id: authors.length + 1,
                name: name,
                nationality: document.getElementById('author-nationality').value,
                birthYear: parseInt(document.getElementById('author-birth').value),
                booksCount: 0,
                initial: name.charAt(0).toUpperCase()
            };
            authors.push(newAuthor);
            displayAuthors();
            addAuthorModal.style.display = 'none';
            addAuthorForm.reset();
            alert('Auteur ajouté avec succès !');
        });
    }
}

// Recherche auteurs
function initAuthorsSearch() {
    const authorsSearch = document.getElementById('authors-search');
    if (authorsSearch) {
        authorsSearch.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase();
            const filtered = authors.filter(author => 
                author.name.toLowerCase().includes(searchTerm) ||
                author.nationality.toLowerCase().includes(searchTerm)
            );
            displayAuthors(filtered);
        });
    }
}

// Formulaire contact
function initContactForm() {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Merci pour votre message ! Nous vous répondrons bientôt.');
            contactForm.reset();
        });
    }
}

// Favoris dans le dashboard
function initDashboardFavorites() {
    document.addEventListener('click', (e) => {
        if (e.target.closest('.favorite-btn')) {
            const btn = e.target.closest('.favorite-btn');
            const bookTitle = btn.getAttribute('data-book');
            if (bookTitle) {
                toggleFavorite(bookTitle);
            }
        }
    });
}

// Notifications
function initNotifications() {
    const notificationBtn = document.querySelector('.notification-btn');
    const notificationsDropdown = document.getElementById('notifications-dropdown');

    if (notificationBtn && notificationsDropdown) {
        notificationBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            notificationsDropdown.classList.toggle('active');
        });

        // Fermer quand on clique ailleurs
        document.addEventListener('click', (e) => {
            if (!notificationBtn.contains(e.target) && !notificationsDropdown.contains(e.target)) {
                notificationsDropdown.classList.remove('active');
            }
        });
    }
}

// Initialisation au chargement
document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initMobileMenu();
    initGlobalSearch();
    initModals();
    initAuthorsSearch();
    initContactForm();
    initDashboardFavorites();
    initNotifications();
    updateFavoriteButtons();
    
    // Charger les données de la page active
    const activePage = document.querySelector('.page.active');
    if (activePage) {
        loadPageData(activePage.id);
    }

    // Event listeners pour les filtres collection
    const collectionSearch = document.getElementById('collection-search');
    const statusFilter = document.getElementById('status-filter');
    if (collectionSearch) {
        collectionSearch.addEventListener('input', filterBooks);
    }
    if (statusFilter) {
        statusFilter.addEventListener('change', filterBooks);
    }
});
