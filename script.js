// Données globales avec VRAIES couvertures de livres
const books = [
    {
        id: 1,
        title: 'Harry Potter à l\'école des sorciers',
        author: 'J.K. Rowling',
        genre: 'fantaisie',
        year: 1997,
        isbn: '978-2070584628',
        status: 'available',
        favorite: true,
        likes: 45,
        cover: 'https://m.media-amazon.com/images/I/91eopoUCjLL._AC_UF1000,1000_QL80_.jpg'
    },
    {
        id: 2,
        title: 'Le Hobbit',
        author: 'J.R.R. Tolkien',
        genre: 'fantaisie',
        year: 1937,
        isbn: '978-2266280012',
        status: 'borrowed',
        favorite: false,
        likes: 32,
        cover: 'https://m.media-amazon.com/images/I/71FQdRz6uEL._AC_UF1000,1000_QL80_.jpg'
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
        cover: 'https://m.media-amazon.com/images/I/81LkSwSrrPL._AC_UF1000,1000_QL80_.jpg'
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
        cover: 'https://m.media-amazon.com/images/I/71OgjODiv1L._AC_UF1000,1000_QL80_.jpg'
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
        cover: 'https://m.media-amazon.com/images/I/81PCl8dQO-L._AC_UF1000,1000_QL80_.jpg'
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
        cover: 'https://m.media-amazon.com/images/I/81zqVq0roWL._AC_UF1000,1000_QL80_.jpg'
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
        cover: 'https://m.media-amazon.com/images/I/81Uv+OS5k-L._AC_UF1000,1000_QL80_.jpg'
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
        cover: 'https://m.media-amazon.com/images/I/81+kE0I6A4L._AC_UF1000,1000_QL80_.jpg'
    },
    {
        id: 9,
        title: 'Les Fleurs du Mal',
        author: 'Charles Baudelaire',
        genre: 'poesie',
        year: 1857,
        isbn: '978-2070360029',
        status: 'available',
        favorite: false,
        likes: 29,
        cover: 'https://m.media-amazon.com/images/I/91UWl1jh6LL._AC_UF1000,1000_QL80_.jpg'
    },
    {
        id: 10,
        title: 'Steve Jobs',
        author: 'Walter Isaacson',
        genre: 'biographie',
        year: 2011,
        isbn: '978-2221109201',
        status: 'borrowed',
        favorite: false,
        likes: 38,
        cover: 'https://m.media-amazon.com/images/I/81D2H6lH7gL._AC_UF1000,1000_QL80_.jpg'
    },
    {
        id: 11,
        title: 'Fondation',
        author: 'Isaac Asimov',
        genre: 'science-fiction',
        year: 1951,
        isbn: '978-2070360531',
        status: 'available',
        favorite: true,
        likes: 44,
        cover: 'https://m.media-amazon.com/images/I/81eIDJ-hmHL._AC_UF1000,1000_QL80_.jpg'
    },
    {
        id: 12,
        title: 'Guerre et Paix',
        author: 'Léon Tolstoï',
        genre: 'roman-historique',
        year: 1869,
        isbn: '978-2253000251',
        status: 'available',
        favorite: false,
        likes: 36,
        cover: 'https://m.media-amazon.com/images/I/91QYpXW9YLL._AC_UF1000,1000_QL80_.jpg'
    }
];

const authors = [
    { 
        id: 1, 
        name: 'J.K. Rowling', 
        nationality: 'Britannique', 
        birthYear: 1965, 
        booksCount: 1,
        initial: 'J'
    },
    { 
        id: 2, 
        name: 'J.R.R. Tolkien', 
        nationality: 'Britannique', 
        birthYear: 1892, 
        booksCount: 1,
        initial: 'J'
    },
    { 
        id: 3, 
        name: 'George R.R. Martin', 
        nationality: 'Américain', 
        birthYear: 1948, 
        booksCount: 1,
        initial: 'G'
    },
    { 
        id: 4, 
        name: 'Haruki Murakami', 
        nationality: 'Japonais', 
        birthYear: 1949, 
        booksCount: 1,
        initial: 'H'
    },
    { 
        id: 5, 
        name: 'Victor Hugo', 
        nationality: 'Français', 
        birthYear: 1802, 
        booksCount: 1,
        initial: 'V'
    },
    { 
        id: 6, 
        name: 'Frank Herbert', 
        nationality: 'Américain', 
        birthYear: 1920, 
        booksCount: 1,
        initial: 'F'
    },
    { 
        id: 7, 
        name: 'Alexandre Dumas', 
        nationality: 'Français', 
        birthYear: 1802, 
        booksCount: 1,
        initial: 'A'
    },
    { 
        id: 8, 
        name: 'Agatha Christie', 
        nationality: 'Britannique', 
        birthYear: 1890, 
        booksCount: 1,
        initial: 'A'
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
        cover: 'https://m.media-amazon.com/images/I/81Uv+OS5k-L._AC_UF1000,1000_QL80_.jpg',
        genre: 'Roman Historique'
    },
    {
        title: 'Les Trois Mousquetaires',
        author: 'Alexandre Dumas',
        year: 1844,
        cover: 'https://m.media-amazon.com/images/I/81iyx0OANFL._AC_UF1000,1000_QL80_.jpg',
        genre: 'Roman Historique'
    },
    {
        title: 'Notre-Dame de Paris',
        author: 'Victor Hugo',
        year: 1831,
        cover: 'https://m.media-amazon.com/images/I/81+IUsqaLmL._AC_UF1000,1000_QL80_.jpg',
        genre: 'Roman Historique'
    },
    {
        title: '1984',
        author: 'George Orwell',
        year: 1949,
        cover: 'https://m.media-amazon.com/images/I/71kxa1-0mfL._AC_UF1000,1000_QL80_.jpg',
        genre: 'Science-Fiction'
    },
    {
        title: 'Le Petit Prince',
        author: 'Antoine de Saint-Exupéry',
        year: 1943,
        cover: 'https://m.media-amazon.com/images/I/81TRAdx4LIL._AC_UF1000,1000_QL80_.jpg',
        genre: 'Fiction'
    },
    {
        title: 'Orgueil et Préjugés',
        author: 'Jane Austen',
        year: 1813,
        cover: 'https://m.media-amazon.com/images/I/71Q1tPupKjL._AC_UF1000,1000_QL80_.jpg',
        genre: 'Roman'
    },
    {
        title: 'L\'Étranger',
        author: 'Albert Camus',
        year: 1942,
        cover: 'https://m.media-amazon.com/images/I/81nGXmy5MIL._AC_UF1000,1000_QL80_.jpg',
        genre: 'Philosophie'
    },
    {
        title: 'Cent ans de solitude',
        author: 'Gabriel García Márquez',
        year: 1967,
        cover: 'https://m.media-amazon.com/images/I/81ai6zx9eRL._AC_UF1000,1000_QL80_.jpg',
        genre: 'Fiction'
    }
];

// Navigation entre pages - FONCTIONNEL
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
                // Changer le titre de la page
                document.title = `Bibliotheca - ${targetPage.charAt(0).toUpperCase() + targetPage.slice(1)}`;
            }

            // Charger les données de la page
            loadPageData(targetPage);
        });
    });

    // Déconnexion - FONCTIONNEL
    const logoutBtn = document.querySelector('.logout-btn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', (e) => {
            e.preventDefault();
            if (confirm('Êtes-vous sûr de vouloir vous déconnecter ?')) {
                localStorage.removeItem('isLoggedIn');
                localStorage.removeItem('username');
                window.location.href = 'login.html';
            }
        });
    }
}

// Charger les données selon la page - AMÉLIORÉ
function loadPageData(page) {
    console.log('Chargement de la page:', page);
    
    switch(page) {
        case 'dashboard':
            updateStats();
            initChart();
            initVisitorsChart();
            loadSuggestions();
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
        case 'evenements':
            // Ne rien faire, page statique
            break;
        case 'contact':
            // Ne rien faire, page statique
            break;
    }
}

// Mettre à jour les statistiques - FONCTIONNEL
function updateStats() {
    console.log('Mise à jour des statistiques...');
    
    // Calculer les statistiques
    const totalBooks = books.length;
    const totalAuthors = authors.length;
    const availableBooks = books.filter(book => book.status === 'available').length;
    const borrowedBooks = books.filter(book => book.status === 'borrowed').length;
    
    console.log('Stats calculées:', { totalBooks, totalAuthors, availableBooks, borrowedBooks });
    
    // Mettre à jour les cartes de stats
    const statNumbers = document.querySelectorAll('.stat-number');
    if (statNumbers.length >= 4) {
        statNumbers[0].textContent = totalBooks;
        statNumbers[1].textContent = totalAuthors;
        statNumbers[2].textContent = availableBooks;
        statNumbers[3].textContent = borrowedBooks;
    }
    
    // Mettre à jour les changements
    const statChanges = document.querySelectorAll('.stat-change');
    if (statChanges.length >= 4) {
        statChanges[0].textContent = `+${Math.floor(Math.random() * 5) + 1} cette semaine`;
        statChanges[1].textContent = 'Contributeurs actifs';
        statChanges[2].textContent = 'Prêts à l\'emprunt';
        statChanges[3].textContent = 'Actuellement sortis';
    }
}

// Mettre à jour le total des livres - FONCTIONNEL
function updateTotalBooks() {
    const totalBooksBadge = document.querySelector('.total-books-badge span');
    if (totalBooksBadge) {
        totalBooksBadge.textContent = `${books.length} livres au total`;
    }
}

// Mettre à jour le compte des favoris - FONCTIONNEL
function updateFavoritesCount() {
    const favoritesCount = document.querySelector('.favorites-count span');
    if (favoritesCount) {
        const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
        favoritesCount.textContent = `${favorites.length} livres favoris`;
    }
}

// Recherche globale - FONCTIONNEL
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

// Graphique par genre - FONCTIONNEL
function initChart() {
    const canvas = document.getElementById('genreChart');
    if (!canvas) {
        console.log('Canvas genreChart non trouvé');
        return;
    }

    // Calculer les données par genre
    const genreData = {};
    books.forEach(book => {
        const genre = getGenreName(book.genre);
        if (!genreData[genre]) {
            genreData[genre] = 0;
        }
        genreData[genre]++;
    });

    const genres = Object.keys(genreData);
    const counts = Object.values(genreData);
    const colors = ['#3b82f6', '#8b5cf6', '#10b981', '#f59e0b', '#ef4444', '#06b6d4'];

    // Créer le canvas si nécessaire
    if (!canvas.getContext) {
        console.log('Canvas non supporté');
        return;
    }

    const ctx = canvas.getContext('2d');
    const maxCount = Math.max(...counts, 1);
    const barWidth = Math.min(50, (canvas.width - 100) / genres.length);
    const barMaxHeight = canvas.height - 60;
    const spacing = 15;

    // Effacer le canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    genres.forEach((genre, index) => {
        const barHeight = (counts[index] / maxCount) * barMaxHeight;
        const x = 40 + index * (barWidth + spacing);
        const y = canvas.height - 30 - barHeight;

        // Barre
        const gradient = ctx.createLinearGradient(x, y, x, canvas.height - 30);
        gradient.addColorStop(0, colors[index % colors.length]);
        gradient.addColorStop(1, colors[index % colors.length] + '80');
        ctx.fillStyle = gradient;
        ctx.fillRect(x, y, barWidth, barHeight);

        // Nom du genre
        ctx.fillStyle = '#1f2937';
        ctx.font = '10px Arial';
        ctx.textAlign = 'center';
        const genreText = genre.length > 10 ? genre.substring(0, 10) + '...' : genre;
        ctx.fillText(genreText, x + barWidth / 2, canvas.height - 10);

        // Nombre
        ctx.fillStyle = '#1f2937';
        ctx.font = 'bold 11px Arial';
        ctx.fillText(counts[index].toString(), x + barWidth / 2, y - 5);
    });
}

// Graphique des visiteurs - FONCTIONNEL
function initVisitorsChart() {
    const canvas = document.getElementById('visitorsChart');
    if (!canvas) {
        console.log('Canvas visitorsChart non trouvé');
        return;
    }

    if (!canvas.getContext) {
        console.log('Canvas non supporté');
        return;
    }

    const ctx = canvas.getContext('2d');
    const days = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'];
    const visitors = [85, 120, 95, 150, 180, 75];
    const maxVisitors = Math.max(...visitors);
    const barWidth = (canvas.width - 100) / days.length;
    const barMaxHeight = canvas.height - 60;
    const spacing = 10;

    // Effacer le canvas
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

        // Jour
        ctx.fillStyle = '#1f2937';
        ctx.font = '10px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(day, x + barWidth / 2, canvas.height - 10);

        // Nombre de visiteurs
        ctx.fillStyle = '#3b82f6';
        ctx.font = 'bold 10px Arial';
        ctx.fillText(visitors[index].toString(), x + barWidth / 2, y - 5);
    });
}

// Suggestions - FONCTIONNEL
function loadSuggestions() {
    const suggestionsList = document.getElementById('suggestions-list');
    if (!suggestionsList) {
        console.log('Élément suggestions-list non trouvé');
        return;
    }

    suggestionsList.innerHTML = '';
    
    // Prendre 3 suggestions aléatoires
    const randomSuggestions = [...suggestions]
        .sort(() => 0.5 - Math.random())
        .slice(0, 3);

    console.log('Chargement de suggestions:', randomSuggestions);

    randomSuggestions.forEach(book => {
        const item = document.createElement('div');
        item.className = 'suggestion-item';
        item.innerHTML = `
            <div class="suggestion-cover" style="background-image: url('${book.cover}')"></div>
            <div class="suggestion-info">
                <div class="suggestion-title">${book.title}</div>
                <div class="suggestion-author">${book.author} • ${book.genre}</div>
                <div class="suggestion-year">${book.year}</div>
                <button class="btn-add-favorite" data-book="${book.title}">
                    <i class="far fa-heart"></i> Ajouter aux favoris
                </button>
            </div>
        `;
        suggestionsList.appendChild(item);
    });

    // Ajouter les listeners pour les boutons favoris
    suggestionsList.querySelectorAll('.btn-add-favorite').forEach(btn => {
        btn.addEventListener('click', function() {
            const bookTitle = this.getAttribute('data-book');
            toggleFavorite(bookTitle);
            this.innerHTML = '<i class="fas fa-heart"></i> Ajouté !';
            this.style.color = '#ef4444';
            setTimeout(() => {
                if (document.querySelector('#favoris.page.active')) {
                    displayFavorites();
                }
            }, 500);
        });
    });
}

// Favoris - FONCTIONNEL
function toggleFavorite(bookTitle) {
    let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    const book = books.find(b => b.title === bookTitle);
    
    if (favorites.includes(bookTitle)) {
        favorites = favorites.filter(f => f !== bookTitle);
        if (book) {
            book.favorite = false;
            book.likes = Math.max(0, (book.likes || 0) - 1);
        }
    } else {
        favorites.push(bookTitle);
        if (book) {
            book.favorite = true;
            book.likes = (book.likes || 0) + 1;
        }
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
                btn.style.color = '#ef4444';
            } else {
                btn.classList.remove('active');
                btn.innerHTML = '<i class="far fa-heart"></i>';
                btn.style.color = '#9ca3af';
            }
        }
    });
}

// Collection - Afficher les livres - FONCTIONNEL
function displayBooks(filteredBooks = books) {
    const grid = document.getElementById('collection-grid');
    if (!grid) {
        console.log('Élément collection-grid non trouvé');
        return;
    }

    grid.innerHTML = '';

    if (filteredBooks.length === 0) {
        grid.innerHTML = `
            <div class="no-results" style="grid-column: 1/-1; text-align: center; padding: 3rem; color: var(--text-light);">
                <i class="fas fa-search" style="font-size: 3rem; margin-bottom: 1rem; opacity: 0.5;"></i>
                <p>Aucun livre trouvé.</p>
            </div>`;
        return;
    }

    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');

    filteredBooks.forEach(book => {
        const card = document.createElement('div');
        card.className = 'collection-book-card';
        const isFavorite = favorites.includes(book.title) || book.favorite;

        card.innerHTML = `
            <div class="collection-book-cover" style="background-image: url('${book.cover}')">
                ${book.status === 'borrowed' ? '<div class="borrowed-badge">Emprunté</div>' : ''}
                ${book.status === 'lost' ? '<div class="lost-badge">Perdu</div>' : ''}
            </div>
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
            <div class="collection-book-info">
                <i class="fas fa-barcode"></i>
                <span>${book.isbn}</span>
            </div>
            <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 1rem;">
                <div class="collection-book-status ${book.status}">
                    ${book.status === 'available' ? '🟢 Disponible' : 
                      book.status === 'borrowed' ? '🟡 Emprunté' : 
                      '🔴 Perdu'}
                </div>
                <button class="favorite-btn ${isFavorite ? 'active' : ''}" 
                        data-book="${book.title}" 
                        style="background: none; border: none; cursor: pointer; font-size: 1.2rem; color: ${isFavorite ? '#ef4444' : '#9ca3af'}; padding: 0.25rem;">
                    <i class="${isFavorite ? 'fas' : 'far'} fa-heart"></i>
                </button>
            </div>
        `;
        grid.appendChild(card);
    });

    // Ajouter les event listeners pour les favoris
    grid.querySelectorAll('.favorite-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const bookTitle = this.getAttribute('data-book');
            toggleFavorite(bookTitle);
            
            // Animation visuelle
            this.style.transform = 'scale(1.3)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 300);
        });
    });
}

function getGenreName(genreKey) {
    const genres = {
        'fantaisie': 'Fantaisie',
        'science-fiction': 'Science-Fiction',
        'roman-historique': 'Roman Historique',
        'policier': 'Policier',
        'biographie': 'Biographie',
        'poesie': 'Poésie',
        'fiction': 'Fiction'
    };
    return genres[genreKey] || genreKey;
}

// Collection - Filtres - FONCTIONNEL
function filterBooks() {
    const searchTerm = document.getElementById('collection-search')?.value.toLowerCase() || '';
    const status = document.getElementById('status-filter')?.value || 'all';
    const genre = document.getElementById('genre-filter')?.value || 'all';

    console.log('Filtrage avec:', { searchTerm, status, genre });

    let filtered = books;

    if (searchTerm) {
        filtered = filtered.filter(book => 
            book.title.toLowerCase().includes(searchTerm) ||
            book.author.toLowerCase().includes(searchTerm) ||
            book.genre.toLowerCase().includes(searchTerm) ||
            book.isbn.toLowerCase().includes(searchTerm)
        );
    }

    if (status !== 'all') {
        filtered = filtered.filter(book => book.status === status);
    }

    if (genre !== 'all') {
        filtered = filtered.filter(book => book.genre === genre);
    }

    console.log('Livres filtrés:', filtered.length);
    displayBooks(filtered);
}

// Auteurs - FONCTIONNEL
function displayAuthors(filteredAuthors = authors) {
    const grid = document.getElementById('authors-grid');
    if (!grid) {
        console.log('Élément authors-grid non trouvé');
        return;
    }

    grid.innerHTML = '';

    if (filteredAuthors.length === 0) {
        grid.innerHTML = `
            <div class="no-results" style="grid-column: 1/-1; text-align: center; padding: 3rem; color: var(--text-light);">
                <i class="fas fa-user" style="font-size: 3rem; margin-bottom: 1rem; opacity: 0.5;"></i>
                <p>Aucun auteur trouvé.</p>
            </div>`;
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

// Favoris - FONCTIONNEL
function displayFavorites() {
    const container = document.getElementById('favorites-horizontal');
    if (!container) {
        console.log('Élément favorites-horizontal non trouvé');
        return;
    }

    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    const favoriteBooks = books.filter(book => favorites.includes(book.title));

    container.innerHTML = '';

    if (favoriteBooks.length === 0) {
        container.innerHTML = `
            <div class="no-results" style="text-align: center; padding: 3rem; color: var(--text-light);">
                <i class="fas fa-heart" style="font-size: 3rem; margin-bottom: 1rem; opacity: 0.5;"></i>
                <p>Aucun livre favori pour le moment.</p>
                <p style="margin-top: 1rem; font-size: 0.9rem;">Ajoutez des livres à vos favoris en cliquant sur l'icône cœur ❤️</p>
            </div>`;
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
                ${book.status === 'available' ? 
                  '<button class="btn btn-primary borrow-btn" style="padding: 0.5rem 1rem; font-size: 0.9rem;">Emprunter</button>' : 
                  '<button class="btn btn-secondary" style="padding: 0.5rem 1rem; font-size: 0.9rem;" disabled>Indisponible</button>'}
                <button class="favorite-btn active" data-book="${book.title}" 
                        style="background: none; border: 1px solid var(--border); color: #ef4444; padding: 0.5rem 1rem; border-radius: 6px; cursor: pointer;">
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
                book.author.toLowerCase().includes(searchTerm) ||
                getGenreName(book.genre).toLowerCase().includes(searchTerm)
            );
            displayFavoritesFiltered(filtered);
        };
    }

    // Event listeners pour les favoris
    container.querySelectorAll('.favorite-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const bookTitle = this.getAttribute('data-book');
            toggleFavorite(bookTitle);
        });
    });

    // Event listeners pour emprunter
    container.querySelectorAll('.borrow-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const card = this.closest('.favorite-horizontal-card');
            const title = card.querySelector('.favorite-horizontal-title').textContent;
            const borrower = prompt(`Emprunter "${title}"\nNom de l'emprunteur:`, "Jean Dupont");
            
            if (borrower && borrower.trim()) {
                // Mettre à jour le statut du livre
                const book = books.find(b => b.title === title);
                if (book) {
                    book.status = 'borrowed';
                    
                    // Ajouter à la liste des emprunts
                    const newEmprunt = {
                        id: emprunts.length + 1,
                        title: title,
                        author: book.author,
                        borrower: borrower.trim(),
                        dateEmprunt: new Date().toISOString().split('T')[0],
                        dateRetour: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
                        status: 'en-cours'
                    };
                    emprunts.push(newEmprunt);
                    
                    // Mettre à jour l'affichage
                    displayFavorites();
                    updateStats();
                    
                    alert(`"${title}" a été emprunté par ${borrower.trim()}`);
                }
            }
        });
    });
}

function displayFavoritesFiltered(filtered) {
    const container = document.getElementById('favorites-horizontal');
    if (!container) return;

    container.innerHTML = '';
    if (filtered.length === 0) {
        container.innerHTML = `
            <div class="no-results" style="text-align: center; padding: 3rem; color: var(--text-light);">
                <i class="fas fa-search" style="font-size: 3rem; margin-bottom: 1rem; opacity: 0.5;"></i>
                <p>Aucun résultat trouvé.</p>
            </div>`;
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
                ${book.status === 'available' ? 
                  '<button class="btn btn-primary borrow-btn" style="padding: 0.5rem 1rem; font-size: 0.9rem;">Emprunter</button>' : 
                  '<button class="btn btn-secondary" style="padding: 0.5rem 1rem; font-size: 0.9rem;" disabled>Indisponible</button>'}
                <button class="favorite-btn active" data-book="${book.title}" 
                        style="background: none; border: 1px solid var(--border); color: #ef4444; padding: 0.5rem 1rem; border-radius: 6px; cursor: pointer;">
                    <i class="fas fa-heart"></i> Retirer
                </button>
            </div>
        `;
        container.appendChild(card);
    });
}

// Emprunts - FONCTIONNEL
function displayEmprunts() {
    const tbody = document.getElementById('emprunts-body');
    if (!tbody) {
        console.log('Élément emprunts-body non trouvé');
        return;
    }

    tbody.innerHTML = '';

    if (emprunts.length === 0) {
        tbody.innerHTML = `
            <tr>
                <td colspan="7" style="text-align: center; padding: 2rem; color: var(--text-light);">
                    <i class="fas fa-exchange-alt" style="font-size: 2rem; margin-bottom: 1rem; opacity: 0.5;"></i>
                    <p>Aucun emprunt enregistré.</p>
                </td>
            </tr>`;
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
            <td>
                <button class="btn btn-primary prolonger-btn" data-id="${emprunt.id}" 
                        style="padding: 0.5rem 1rem; font-size: 0.85rem;">
                    Prolonger
                </button>
            </td>
        `;
        tbody.appendChild(row);
    });

    // Ajouter les listeners pour les boutons "Prolonger"
    tbody.querySelectorAll('.prolonger-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const empruntId = parseInt(this.getAttribute('data-id'));
            const emprunt = emprunts.find(e => e.id === empruntId);
            
            if (emprunt) {
                const nouvelleDate = prompt(`Prolonger l'emprunt de "${emprunt.title}"\nNouvelle date de retour (JJ/MM/AAAA):`, 
                    formatDate(emprunt.dateRetour));
                
                if (nouvelleDate) {
                    // Valider et mettre à jour la date
                    const dateParts = nouvelleDate.split('/');
                    if (dateParts.length === 3) {
                        const newDate = `${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`;
                        if (!isNaN(Date.parse(newDate))) {
                            emprunt.dateRetour = newDate;
                            alert('Date de retour prolongée avec succès !');
                            displayEmprunts();
                        } else {
                            alert('Date invalide. Format attendu: JJ/MM/AAAA');
                        }
                    } else {
                        alert('Format de date invalide. Utilisez JJ/MM/AAAA');
                    }
                }
            }
        });
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

// Modals - FONCTIONNEL
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
                cover: 'https://m.media-amazon.com/images/I/81eIDJ-hmHL._AC_UF1000,1000_QL80_.jpg' // Image par défaut
            };
            
            books.push(newBook);
            
            // Mettre à jour l'auteur
            const author = authors.find(a => a.name === newBook.author);
            if (author) {
                author.booksCount++;
            } else {
                // Créer un nouvel auteur
                authors.push({
                    id: authors.length + 1,
                    name: newBook.author,
                    nationality: 'Inconnue',
                    birthYear: 1900,
                    booksCount: 1,
                    initial: newBook.author.charAt(0).toUpperCase()
                });
            }
            
            // Mettre à jour les vues
            displayBooks();
            updateStats();
            updateTotalBooks();
            
            // Fermer le modal et réinitialiser le formulaire
            addBookModal.style.display = 'none';
            addBookForm.reset();
            
            // Notification
            alert(`Livre "${newBook.title}" ajouté avec succès !`);
        });
    }

    // Formulaire ajouter auteur
    const addAuthorForm = document.getElementById('add-author-form');
    if (addAuthorForm) {
        addAuthorForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const name = document.getElementById('author-name').value;
            const nationality = document.getElementById('author-nationality').value;
            const birthYear = parseInt(document.getElementById('author-birth').value);
            
            const newAuthor = {
                id: authors.length + 1,
                name: name,
                nationality: nationality,
                birthYear: birthYear,
                booksCount: 0,
                initial: name.charAt(0).toUpperCase()
            };
            
            authors.push(newAuthor);
            displayAuthors();
            
            // Fermer le modal et réinitialiser le formulaire
            addAuthorModal.style.display = 'none';
            addAuthorForm.reset();
            
            // Notification
            alert(`Auteur "${name}" ajouté avec succès !`);
        });
    }
}

// Recherche auteurs - FONCTIONNEL
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

// Formulaire contact - FONCTIONNEL
function initContactForm() {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Récupérer les valeurs
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const sujet = document.getElementById('sujet').value;
            const message = document.getElementById('message').value;
            
            // Simuler l'envoi
            console.log('Message envoyé:', { name, email, sujet, message });
            
            // Afficher un message de confirmation
            alert('Merci pour votre message ! Nous vous répondrons bientôt.');
            
            // Réinitialiser le formulaire
            contactForm.reset();
        });
    }
}

// Notifications - FONCTIONNEL
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

// Actualiser les suggestions - FONCTIONNEL
function initRefreshSuggestions() {
    const refreshBtn = document.getElementById('refresh-suggestions');
    if (refreshBtn) {
        refreshBtn.addEventListener('click', () => {
            // Animation de chargement
            refreshBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Actualisation...';
            
            // Simuler un délai
            setTimeout(() => {
                loadSuggestions();
                refreshBtn.innerHTML = '<i class="fas fa-sync-alt"></i> Actualiser';
                
                // Notification
                const notification = document.createElement('div');
                notification.style.cssText = `
                    position: fixed;
                    top: 100px;
                    right: 20px;
                    background: #10b981;
                    color: white;
                    padding: 0.75rem 1.5rem;
                    border-radius: 8px;
                    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
                    z-index: 9999;
                    animation: slideIn 0.3s ease;
                `;
                notification.innerHTML = 'Suggestions actualisées !';
                document.body.appendChild(notification);
                
                setTimeout(() => {
                    notification.style.animation = 'slideOut 0.3s ease';
                    setTimeout(() => notification.remove(), 300);
                }, 2000);
            }, 800);
        });
    }
}

// Initialisation au chargement - AMÉLIORÉ
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM chargé, initialisation en cours...');
    
    // Vérifier la connexion
    if (localStorage.getItem('isLoggedIn') !== 'true') {
        console.log('Non connecté, redirection vers login.html');
        window.location.href = 'login.html';
        return;
    }
    
    console.log('Utilisateur connecté:', localStorage.getItem('username'));
    
    // Initialiser toutes les fonctionnalités
    try {
        initNavigation();
        console.log('Navigation initialisée');
        
        initGlobalSearch();
        console.log('Recherche globale initialisée');
        
        initModals();
        console.log('Modals initialisés');
        
        initAuthorsSearch();
        console.log('Recherche auteurs initialisée');
        
        initContactForm();
        console.log('Formulaire contact initialisé');
        
        initNotifications();
        console.log('Notifications initialisées');
        
        initRefreshSuggestions();
        console.log('Refresh suggestions initialisé');
        
        updateFavoriteButtons();
        console.log('Boutons favoris mis à jour');
        
        // Charger les données de la page active
        const activePage = document.querySelector('.page.active');
        if (activePage) {
            const pageId = activePage.id;
            console.log('Page active détectée:', pageId);
            loadPageData(pageId);
        } else {
            console.log('Aucune page active détectée');
        }

        // Event listeners pour les filtres collection
        const collectionSearch = document.getElementById('collection-search');
        const statusFilter = document.getElementById('status-filter');
        const genreFilter = document.getElementById('genre-filter');
        
        if (collectionSearch) {
            collectionSearch.addEventListener('input', filterBooks);
            console.log('Filtre recherche collection initialisé');
        }
        if (statusFilter) {
            statusFilter.addEventListener('change', filterBooks);
            console.log('Filtre statut initialisé');
        }
        if (genreFilter) {
            genreFilter.addEventListener('change', filterBooks);
            console.log('Filtre genre initialisé');
        }
        
        console.log('Initialisation terminée avec succès !');
        
    } catch (error) {
        console.error('Erreur lors de l\'initialisation:', error);
    }
});

// Redessiner les graphiques lors du redimensionnement
window.addEventListener('resize', function() {
    if (document.querySelector('#dashboard.page.active')) {
        setTimeout(() => {
            initChart();
            initVisitorsChart();
        }, 100);
    }
});

// Ajouter du CSS pour les animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
    
    .borrowed-badge, .lost-badge {
        position: absolute;
        top: 10px;
        right: 10px;
        padding: 0.25rem 0.5rem;
        border-radius: 4px;
        font-size: 0.75rem;
        font-weight: 600;
        color: white;
    }
    
    .borrowed-badge {
        background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
    }
    
    .lost-badge {
        background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
    }
    
    .btn-add-favorite {
        margin-top: 0.5rem;
        padding: 0.5rem;
        background: none;
        border: 1px solid var(--border);
        border-radius: 6px;
        color: var(--text-light);
        cursor: pointer;
        font-size: 0.85rem;
        transition: all 0.2s;
    }
    
    .btn-add-favorite:hover {
        background: #fef2f2;
        color: #ef4444;
        border-color: #ef4444;
    }
`;
document.head.appendChild(style);
