// Données globales avec images réelles
const books = [
    {
        id: 1,
        title: 'Harry Potter à l\'école des sorciers',
        author: 'J.K. Rowling',
        genre: 'fantaisie',
        year: 1997,
        isbn: '978-2070541200',
        status: 'available',
        favorite: true,
        likes: 45,
        cover: 'https://images.unsplash.com/photo-1621351183012-e2f9972dd9bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80'
    },
    {
        id: 2,
        title: 'Le Hobbit',
        author: 'J.R.R. Tolkien',
        genre: 'fantaisie',
        year: 1937,
        isbn: '978-2070612888',
        status: 'borrowed',
        favorite: false,
        likes: 32,
        cover: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80'
    },
    {
        id: 3,
        title: 'Le Trône de fer',
        author: 'George R.R. Martin',
        genre: 'fantaisie',
        year: 1996,
        isbn: '978-2253123276',
        status: 'available',
        favorite: true,
        likes: 38,
        cover: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80'
    },
    {
        id: 4,
        title: 'La Ballade de l\'impossible',
        author: 'Haruki Murakami',
        genre: 'fiction',
        year: 1987,
        isbn: '978-2070381659',
        status: 'available',
        favorite: false,
        likes: 28,
        cover: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80'
    },
    {
        id: 5,
        title: 'Les Misérables',
        author: 'Victor Hugo',
        genre: 'roman-historique',
        year: 1862,
        isbn: '978-2253004249',
        status: 'lost',
        favorite: false,
        likes: 52,
        cover: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80'
    },
    {
        id: 6,
        title: 'Dune',
        author: 'Frank Herbert',
        genre: 'science-fiction',
        year: 1965,
        isbn: '978-2253021161',
        status: 'available',
        favorite: true,
        likes: 67,
        cover: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80'
    },
    {
        id: 7,
        title: 'Le Comte de Monte-Cristo',
        author: 'Alexandre Dumas',
        genre: 'roman-historique',
        year: 1844,
        isbn: '978-2253006635',
        status: 'borrowed',
        favorite: false,
        likes: 41,
        cover: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80'
    },
    {
        id: 8,
        title: 'Le Crime de l\'Orient-Express',
        author: 'Agatha Christie',
        genre: 'policier',
        year: 1934,
        isbn: '978-2253000510',
        status: 'available',
        favorite: false,
        likes: 33,
        cover: 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80'
    }
];

const authors = [
    { 
        id: 1, 
        name: 'J.K. Rowling', 
        nationality: 'Britannique', 
        birthYear: 1965, 
        booksCount: 7,
        initial: 'J'
    },
    { 
        id: 2, 
        name: 'J.R.R. Tolkien', 
        nationality: 'Britannique', 
        birthYear: 1892, 
        booksCount: 4,
        initial: 'J'
    },
    { 
        id: 3, 
        name: 'George R.R. Martin', 
        nationality: 'Américain', 
        birthYear: 1948, 
        booksCount: 5,
        initial: 'G'
    },
    { 
        id: 4, 
        name: 'Haruki Murakami', 
        nationality: 'Japonais', 
        birthYear: 1949, 
        booksCount: 14,
        initial: 'H'
    },
    { 
        id: 5, 
        name: 'Victor Hugo', 
        nationality: 'Français', 
        birthYear: 1802, 
        booksCount: 12,
        initial: 'V'
    },
    { 
        id: 6, 
        name: 'Frank Herbert', 
        nationality: 'Américain', 
        birthYear: 1920, 
        booksCount: 6,
        initial: 'F'
    }
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
    },
    {
        id: 3,
        title: 'Le Comte de Monte-Cristo',
        author: 'Alexandre Dumas',
        borrower: 'Pierre Lambert',
        dateEmprunt: '2025-12-10',
        dateRetour: '2026-01-10',
        status: 'retard'
    }
];

const suggestions = [
    {
        title: 'Le Comte de Monte-Cristo',
        author: 'Alexandre Dumas',
        year: 1844,
        cover: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80'
    },
    {
        title: 'Les Trois Mousquetaires',
        author: 'Alexandre Dumas',
        year: 1844,
        cover: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80'
    },
    {
        title: 'Notre-Dame de Paris',
        author: 'Victor Hugo',
        year: 1831,
        cover: 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80'
    },
    {
        title: '1984',
        author: 'George Orwell',
        year: 1949,
        cover: 'https://images.unsplash.com/photo-1531346688376-ab6275c4725e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80'
    },
    {
        title: 'Le Petit Prince',
        author: 'Antoine de Saint-Exupéry',
        year: 1943,
        cover: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80'
    }
];

// Navigation entre pages
function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link:not(.logout-btn)');
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

            // Charger les données de la page
            loadPageData(targetPage);
        });
    });

    // Déconnexion
    const logoutBtn = document.querySelector('.logout-btn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', (e) => {
            e.preventDefault();
            if (confirm('Êtes-vous sûr de vouloir vous déconnecter ?')) {
                localStorage.removeItem('isLoggedIn');
                window.location.href = 'login.html';
            }
        });
    }
}

// Charger les données selon la page
function loadPageData(page) {
    switch(page) {
        case 'dashboard':
            setTimeout(() => {
                updateStats();
                initChart();
                initVisitorsChart();
                loadSuggestions();
            }, 100);
            break;
        case 'collection':
            displayBooks();
            updateTotalBooks();
            break;
        case 'auteurs':
            displayAuthors();
            break;
        case 'favoris':
            displayFavorites();
            updateFavoritesCount();
            break;
        case 'emprunts':
            displayEmprunts();
            break;
    }
}

// Mettre à jour les statistiques
function updateStats() {
    // Calculer les statistiques
    const totalBooks = books.length;
    const totalAuthors = authors.length;
    const availableBooks = books.filter(book => book.status === 'available').length;
    const borrowedBooks = books.filter(book => book.status === 'borrowed').length;
    
    // Mettre à jour les cartes de stats
    document.querySelectorAll('.stat-number')[0].textContent = totalBooks;
    document.querySelectorAll('.stat-number')[1].textContent = totalAuthors;
    document.querySelectorAll('.stat-number')[2].textContent = availableBooks;
    document.querySelectorAll('.stat-number')[3].textContent = borrowedBooks;
}

// Mettre à jour le total des livres
function updateTotalBooks() {
    const totalBooksBadge = document.querySelector('.total-books-badge span');
    if (totalBooksBadge) {
        totalBooksBadge.textContent = `${books.length} livres au total`;
    }
}

// Mettre à jour le compte des favoris
function updateFavoritesCount() {
    const favoritesCount = document.querySelector('.favorites-count span');
    if (favoritesCount) {
        const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
        favoritesCount.textContent = `${favorites.length} livres favoris`;
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

    // Calculer les données par genre
    const genreData = {};
    books.forEach(book => {
        if (!genreData[book.genre]) {
            genreData[book.genre] = 0;
        }
        genreData[book.genre]++;
    });

    const genres = Object.keys(genreData);
    const counts = Object.values(genreData);
    const colors = ['#3b82f6', '#8b5cf6', '#10b981', '#f59e0b', '#ef4444', '#06b6d4'];

    canvas.width = canvas.offsetWidth || 400;
    canvas.height = 250;

    const ctx = canvas.getContext('2d');
    const maxCount = Math.max(...counts, 1);
    const barWidth = Math.min(60, (canvas.width - 100) / genres.length);
    const barMaxHeight = canvas.height - 60;
    const spacing = 20;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    genres.forEach((genre, index) => {
        const barHeight = (counts[index] / maxCount) * barMaxHeight;
        const x = 40 + index * (barWidth + spacing);
        const y = canvas.height - 30 - barHeight;

        // Gradient pour chaque barre
        const gradient = ctx.createLinearGradient(x, y, x, canvas.height - 30);
        gradient.addColorStop(0, colors[index % colors.length]);
        gradient.addColorStop(1, colors[index % colors.length] + '80');
        ctx.fillStyle = gradient;
        ctx.fillRect(x, y, barWidth, barHeight);

        // Nom du genre
        ctx.fillStyle = '#1f2937';
        ctx.font = '11px Arial';
        ctx.textAlign = 'center';
        const genreText = genre.length > 10 ? genre.substring(0, 10) + '...' : genre;
        ctx.fillText(genreText, x + barWidth / 2, canvas.height - 10);

        // Nombre
        ctx.fillStyle = '#1f2937';
        ctx.font = 'bold 12px Arial';
        ctx.fillText(counts[index].toString(), x + barWidth / 2, y - 5);
    });
}

// Graphique des visiteurs
function initVisitorsChart() {
    const canvas = document.getElementById('visitorsChart');
    if (!canvas) return;

    canvas.width = canvas.offsetWidth || 400;
    canvas.height = 250;

    const ctx = canvas.getContext('2d');
    const days = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'];
    const visitors = [120, 145, 98, 167, 189, 134, 89];
    const maxVisitors = Math.max(...visitors);
    const barWidth = (canvas.width - 100) / days.length;
    const barMaxHeight = canvas.height - 60;
    const spacing = 10;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    days.forEach((day, index) => {
        const barHeight = (visitors[index] / maxVisitors) * barMaxHeight;
        const x = 40 + index * (barWidth + spacing);
        const y = canvas.height - 30 - barHeight;

        const gradient = ctx.createLinearGradient(x, y, x, canvas.height - 30);
        gradient.addColorStop(0, '#3b82f6');
        gradient.addColorStop(1, '#8b5cf6');
        ctx.fillStyle = gradient;
        ctx.fillRect(x, y, barWidth, barHeight);

        ctx.fillStyle = '#1f2937';
        ctx.font = '11px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(day, x + barWidth / 2, canvas.height - 10);

        ctx.fillStyle = '#3b82f6';
        ctx.font = 'bold 11px Arial';
        ctx.fillText(visitors[index].toString(), x + barWidth / 2, y - 5);
    });
}

// Suggestions
function loadSuggestions() {
    const suggestionsList = document.getElementById('suggestions-list');
    if (!suggestionsList) return;

    suggestionsList.innerHTML = '';
    
    // Prendre 3 suggestions aléatoires
    const randomSuggestions = [...suggestions]
        .sort(() => 0.5 - Math.random())
        .slice(0, 3);

    randomSuggestions.forEach(book => {
        const item = document.createElement('div');
        item.className = 'suggestion-item';
        item.innerHTML = `
            <div class="suggestion-cover" style="background-image: url('${book.cover}')"></div>
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
    const book = books.find(b => b.title === bookTitle);
    
    if (favorites.includes(bookTitle)) {
        favorites = favorites.filter(f => f !== bookTitle);
        if (book) book.likes--;
    } else {
        favorites.push(bookTitle);
        if (book) book.likes++;
    }
    localStorage.setItem('favorites', JSON.stringify(favorites));
    
    // Mettre à jour l'affichage
    updateFavoriteButtons();
    updateFavoritesCount();
    
    // Si on est sur la page des favoris, recharger
    if (document.querySelector('#favoris.page.active')) {
        displayFavorites();
    }
}

function updateFavoriteButtons() {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    document.querySelectorAll('.favorite-btn').forEach(btn => {
        const bookTitle = btn.getAttribute('data-book');
        if (bookTitle) {
            if (favorites.includes(bookTitle)) {
                btn.classList.add('active');
                btn.innerHTML = '<i class="fas fa-heart"></i>';
            } else {
                btn.classList.remove('active');
                btn.innerHTML = '<i class="far fa-heart"></i>';
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
        grid.innerHTML = '<div class="no-results" style="grid-column: 1/-1; text-align: center; padding: 3rem; color: var(--text-light);"><i class="fas fa-search" style="font-size: 3rem; margin-bottom: 1rem; opacity: 0.5;"></i><p>Aucun livre trouvé.</p></div>';
        return;
    }

    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');

    filteredBooks.forEach(book => {
        const card = document.createElement('div');
        card.className = 'collection-book-card';
        const isFavorite = favorites.includes(book.title) || book.favorite;

        card.innerHTML = `
            <div class="collection-book-cover" style="background-image: url('${book.cover}')"></div>
            <div class="collection-book-title">${book.title}</div>
            <div class="collection-book-info">
                <i class="fas fa-user-edit"></i>
                <span>${book.author}</span>
            </div>
            <div class="collection-book-info">
                <i class="fas fa-tag"></i>
                <span>${getGenreName(book.genre)}</span>
            </div>
            <div class="collection-book-info">
                <i class="fas fa-calendar"></i>
                <span>${book.year}</span>
            </div>
            <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 1rem;">
                <div class="collection-book-status ${book.status}">
                    ${book.status === 'available' ? '🟢 Disponible' : 
                      book.status === 'borrowed' ? '🟡 Emprunté' : 
                      '🔴 Perdu'}
                </div>
                <button class="favorite-btn ${isFavorite ? 'active' : ''}" data-book="${book.title}" style="background: none; border: none; cursor: pointer; font-size: 1.2rem; color: ${isFavorite ? '#ef4444' : '#9ca3af'};">
                    <i class="${isFavorite ? 'fas' : 'far'} fa-heart"></i>
                </button>
            </div>
        `;
        grid.appendChild(card);
    });

    // Ajouter les event listeners pour les favoris
    grid.querySelectorAll('.favorite-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const bookTitle = btn.getAttribute('data-book');
            toggleFavorite(bookTitle);
        });
    });
}

function getGenreName(genreKey) {
    const genres = {
        'fantaisie': 'Fantaisie',
        'science-fiction': 'Science-Fiction',
        'roman-historique': 'Roman Historique',
        'policier': 'Policier/Thriller',
        'biographie': 'Biographie',
        'poesie': 'Poésie',
        'fiction': 'Fiction'
    };
    return genres[genreKey] || genreKey;
}

// Collection - Filtres
function filterBooks() {
    const searchTerm = document.getElementById('collection-search')?.value.toLowerCase() || '';
    const status = document.getElementById('status-filter')?.value || 'all';
    const genre = document.getElementById('genre-filter')?.value || 'all';

    let filtered = books;

    if (searchTerm) {
        filtered = filtered.filter(book => 
            book.title.toLowerCase().includes(searchTerm) ||
            book.author.toLowerCase().includes(searchTerm) ||
            book.genre.toLowerCase().includes(searchTerm)
        );
    }

    if (status !== 'all') {
        filtered = filtered.filter(book => book.status === status);
    }

    if (genre !== 'all') {
        filtered = filtered.filter(book => book.genre === genre);
    }

    displayBooks(filtered);
}

// Auteurs
function displayAuthors(filteredAuthors = authors) {
    const grid = document.getElementById('authors-grid');
    if (!grid) return;

    grid.innerHTML = '';

    if (filteredAuthors.length === 0) {
        grid.innerHTML = '<div class="no-results" style="grid-column: 1/-1; text-align: center; padding: 3rem; color: var(--text-light);"><i class="fas fa-user" style="font-size: 3rem; margin-bottom: 1rem; opacity: 0.5;"></i><p>Aucun auteur trouvé.</p></div>';
        return;
    }

    filteredAuthors.forEach(author => {
        const card = document.createElement('div');
        card.className = 'author-card';
        card.innerHTML = `
            <div class="author-header">
                <div class="author-avatar">${author.initial}</div>
                <div>
                    <div class="author-name">${author.name}</div>
                    <div class="author-info">${author.nationality}</div>
                </div>
            </div>
            <div class="author-info"><strong>Année de naissance:</strong> ${author.birthYear}</div>
            <div class="author-info"><strong>Nombre de livres:</strong> ${author.booksCount}</div>
            <div class="author-books-count">Voir les livres</div>
        `;
        grid.appendChild(card);
    });
}

// Favoris
function displayFavorites() {
    const container = document.getElementById('favorites-horizontal');
    if (!container) return;

    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    const favoriteBooks = books.filter(book => favorites.includes(book.title));

    container.innerHTML = '';

    if (favoriteBooks.length === 0) {
        container.innerHTML = '<div class="no-results" style="text-align: center; padding: 3rem; color: var(--text-light);"><i class="fas fa-heart" style="font-size: 3rem; margin-bottom: 1rem; opacity: 0.5;"></i><p>Aucun livre favori pour le moment.</p></div>';
        return;
    }

    favoriteBooks.forEach(book => {
        const card = document.createElement('div');
        card.className = 'favorite-horizontal-card';
        
        card.innerHTML = `
            <div class="favorite-horizontal-cover" style="background-image: url('${book.cover}')"></div>
            <div class="favorite-horizontal-content">
                <div class="favorite-horizontal-title">${book.title}</div>
                <div class="favorite-horizontal-author">${book.author}</div>
                <div class="favorite-horizontal-meta">
                    <span><i class="fas fa-tag"></i> ${getGenreName(book.genre)}</span>
                    <span><i class="fas fa-calendar"></i> ${book.year}</span>
                    <span><i class="fas fa-heart"></i> ${book.likes || 0} likes</span>
                </div>
            </div>
            <div class="favorite-horizontal-actions">
                <button class="btn btn-primary" style="padding: 0.5rem 1rem; font-size: 0.9rem;">Emprunter</button>
                <button class="favorite-btn active" data-book="${book.title}" style="background: none; border: 1px solid var(--border); color: #ef4444; padding: 0.5rem 1rem; border-radius: 6px; cursor: pointer;">
                    <i class="fas fa-heart"></i> Retirer
                </button>
            </div>
        `;
        container.appendChild(card);
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
    container.querySelectorAll('.favorite-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const bookTitle = btn.getAttribute('data-book');
            toggleFavorite(bookTitle);
        });
    });
}

function displayFavoritesFiltered(filtered) {
    const container = document.getElementById('favorites-horizontal');
    if (!container) return;

    container.innerHTML = '';
    if (filtered.length === 0) {
        container.innerHTML = '<div class="no-results" style="text-align: center; padding: 3rem; color: var(--text-light);"><i class="fas fa-search" style="font-size: 3rem; margin-bottom: 1rem; opacity: 0.5;"></i><p>Aucun résultat trouvé.</p></div>';
        return;
    }

    filtered.forEach(book => {
        const card = document.createElement('div');
        card.className = 'favorite-horizontal-card';
        
        card.innerHTML = `
            <div class="favorite-horizontal-cover" style="background-image: url('${book.cover}')"></div>
            <div class="favorite-horizontal-content">
                <div class="favorite-horizontal-title">${book.title}</div>
                <div class="favorite-horizontal-author">${book.author}</div>
                <div class="favorite-horizontal-meta">
                    <span><i class="fas fa-tag"></i> ${getGenreName(book.genre)}</span>
                    <span><i class="fas fa-calendar"></i> ${book.year}</span>
                </div>
            </div>
            <div class="favorite-horizontal-actions">
                <button class="btn btn-primary" style="padding: 0.5rem 1rem; font-size: 0.9rem;">Emprunter</button>
                <button class="favorite-btn active" data-book="${book.title}" style="background: none; border: 1px solid var(--border); color: #ef4444; padding: 0.5rem 1rem; border-radius: 6px; cursor: pointer;">
                    <i class="fas fa-heart"></i> Retirer
                </button>
            </div>
        `;
        container.appendChild(card);
    });
}

// Emprunts
function displayEmprunts() {
    const tbody = document.getElementById('emprunts-body');
    if (!tbody) return;

    tbody.innerHTML = '';

    if (emprunts.length === 0) {
        tbody.innerHTML = '<tr><td colspan="7" style="text-align: center; padding: 2rem; color: var(--text-light);"><i class="fas fa-exchange-alt" style="font-size: 2rem; margin-bottom: 1rem; opacity: 0.5;"></i><p>Aucun emprunt enregistré.</p></td></tr>';
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

    // Case ajouter auteur
    const addAuthorCard = document.getElementById('add-author-card');
    const addAuthorModal = document.getElementById('add-author-modal');
    if (addAuthorCard && addAuthorModal) {
        addAuthorCard.addEventListener('click', () => {
            addAuthorModal.style.display = 'block';
        });
    }

    // Bouton ajouter auteur
    const addAuthorBtn = document.getElementById('add-author-btn');
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
                genre: document.getElementById('book-genre-modal').value,
                year: parseInt(document.getElementById('book-year').value),
                isbn: document.getElementById('book-isbn').value,
                status: document.getElementById('book-status').value,
                favorite: false,
                likes: 0,
                cover: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80'
            };
            books.push(newBook);
            displayBooks();
            updateStats();
            updateTotalBooks();
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

// Actualiser les suggestions
function initRefreshSuggestions() {
    const refreshBtn = document.getElementById('refresh-suggestions');
    if (refreshBtn) {
        refreshBtn.addEventListener('click', () => {
            loadSuggestions();
            refreshBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Actualiser';
            setTimeout(() => {
                refreshBtn.innerHTML = '<i class="fas fa-sync-alt"></i> Actualiser';
            }, 500);
        });
    }
}

// Initialisation au chargement
document.addEventListener('DOMContentLoaded', () => {
    // Vérifier la connexion
    if (localStorage.getItem('isLoggedIn') !== 'true') {
        window.location.href = 'login.html';
        return;
    }

    initNavigation();
    initGlobalSearch();
    initModals();
    initAuthorsSearch();
    initContactForm();
    initNotifications();
    initRefreshSuggestions();
    updateFavoriteButtons();
    
    // Charger les données de la page active
    const activePage = document.querySelector('.page.active');
    if (activePage) {
        loadPageData(activePage.id);
    }

    // Event listeners pour les filtres collection
    const collectionSearch = document.getElementById('collection-search');
    const statusFilter = document.getElementById('status-filter');
    const genreFilter = document.getElementById('genre-filter');
    
    if (collectionSearch) {
        collectionSearch.addEventListener('input', filterBooks);
    }
    if (statusFilter) {
        statusFilter.addEventListener('change', filterBooks);
    }
    if (genreFilter) {
        genreFilter.addEventListener('change', filterBooks);
    }
});
