// Données globales
let books = JSON.parse(localStorage.getItem('books')) || [
    {
        id: 1,
        title: 'Harry Potter à l\'école des sorciers',
        author: 'J.K. Rowling',
        genre: 'fantaisie',
        year: 1997,
        isbn: '978-2070584628',
        status: 'available',
        favorite: true,
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
        cover: 'https://m.media-amazon.com/images/I/81LkSwSrrPL._AC_UF1000,1000_QL80_.jpg'
    }
];

let authors = JSON.parse(localStorage.getItem('authors')) || [
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
    }
];

let emprunts = JSON.parse(localStorage.getItem('emprunts')) || [
    {
        id: 1,
        bookId: 2,
        title: 'Le Hobbit',
        author: 'J.R.R. Tolkien',
        borrower: 'Jean Dupont',
        dateEmprunt: '2025-12-15',
        dateRetour: '2026-01-15',
        status: 'en-cours'
    }
];

// Sauvegarder les données
function saveData() {
    localStorage.setItem('books', JSON.stringify(books));
    localStorage.setItem('authors', JSON.stringify(authors));
    localStorage.setItem('emprunts', JSON.stringify(emprunts));
}

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
                document.title = `Bibliotheca - ${link.textContent.trim()}`;
                
                // Charger les données de la page
                loadPageData(targetPage);
            }
        });
    });

    // Déconnexion
    document.querySelector('.logout-btn').addEventListener('click', (e) => {
        e.preventDefault();
        if (confirm('Êtes-vous sûr de vouloir vous déconnecter ?')) {
            localStorage.removeItem('isLoggedIn');
            window.location.href = 'login.html';
        }
    });
}

// Charger les données selon la page
function loadPageData(page) {
    console.log(`Chargement de la page: ${page}`);
    
    switch(page) {
        case 'dashboard':
            updateStats();
            initCharts();
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
            updateEmpruntsCount();
            break;
    }
}

// Mettre à jour les statistiques
function updateStats() {
    const totalBooks = books.length;
    const totalAuthors = authors.length;
    const availableBooks = books.filter(book => book.status === 'available').length;
    const borrowedBooks = books.filter(book => book.status === 'borrowed').length;
    
    // Mettre à jour les cartes
    const statNumbers = document.querySelectorAll('.stat-number');
    if (statNumbers.length >= 4) {
        statNumbers[0].textContent = totalBooks;
        statNumbers[1].textContent = totalAuthors;
        statNumbers[2].textContent = availableBooks;
        statNumbers[3].textContent = borrowedBooks;
    }
}

// Mettre à jour le total des livres
function updateTotalBooks() {
    const totalBooksElement = document.getElementById('total-books-count');
    if (totalBooksElement) {
        totalBooksElement.textContent = `${books.length} livres au total`;
    }
}

// Mettre à jour le compte des favoris
function updateFavoritesCount() {
    const favoritesCount = document.getElementById('favorites-count');
    if (favoritesCount) {
        const favorites = books.filter(book => book.favorite);
        favoritesCount.textContent = `${favorites.length} livres favoris`;
    }
}

// Mettre à jour le compte des emprunts
function updateEmpruntsCount() {
    const empruntsCount = document.getElementById('emprunts-count');
    if (empruntsCount) {
        const activeEmprunts = emprunts.filter(e => e.status === 'en-cours');
        empruntsCount.textContent = `${activeEmprunts.length} emprunts actifs`;
    }
}

// Initialiser les graphiques
function initCharts() {
    // Graphique des genres
    const genreCanvas = document.getElementById('genreChart');
    if (genreCanvas) {
        const genreCtx = genreCanvas.getContext('2d');
        
        // Calculer la répartition par genre
        const genreCounts = {};
        books.forEach(book => {
            genreCounts[book.genre] = (genreCounts[book.genre] || 0) + 1;
        });
        
        const genres = Object.keys(genreCounts);
        const counts = Object.values(genreCounts);
        
        // Effacer et redessiner
        genreCtx.clearRect(0, 0, genreCanvas.width, genreCanvas.height);
        
        if (genres.length > 0) {
            const colors = ['#3b82f6', '#8b5cf6', '#10b981', '#f59e0b', '#ef4444'];
            const barWidth = 40;
            const spacing = 20;
            const maxHeight = 150;
            const maxCount = Math.max(...counts);
            
            genres.forEach((genre, index) => {
                const barHeight = (counts[index] / maxCount) * maxHeight;
                const x = 50 + index * (barWidth + spacing);
                const y = 180 - barHeight;
                
                // Dessiner la barre
                genreCtx.fillStyle = colors[index % colors.length];
                genreCtx.fillRect(x, y, barWidth, barHeight);
                
                // Texte du genre
                genreCtx.fillStyle = '#374151';
                genreCtx.font = '12px Inter';
                genreCtx.textAlign = 'center';
                genreCtx.fillText(genre, x + barWidth/2, 200);
                
                // Nombre
                genreCtx.fillStyle = colors[index % colors.length];
                genreCtx.font = 'bold 14px Inter';
                genreCtx.fillText(counts[index], x + barWidth/2, y - 5);
            });
        }
    }
    
    // Graphique des visiteurs
    const visitorsCanvas = document.getElementById('visitorsChart');
    if (visitorsCanvas) {
        const visitorsCtx = visitorsCanvas.getContext('2d');
        
        const days = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'];
        const visitors = [85, 120, 95, 150, 180, 75];
        
        visitorsCtx.clearRect(0, 0, visitorsCanvas.width, visitorsCanvas.height);
        
        const barWidth = 40;
        const spacing = 15;
        const maxHeight = 150;
        const maxVisitors = Math.max(...visitors);
        
        days.forEach((day, index) => {
            const barHeight = (visitors[index] / maxVisitors) * maxHeight;
            const x = 50 + index * (barWidth + spacing);
            const y = 180 - barHeight;
            
            // Gradient pour la barre
            const gradient = visitorsCtx.createLinearGradient(x, y, x, 180);
            gradient.addColorStop(0, '#3b82f6');
            gradient.addColorStop(1, '#1e40af');
            visitorsCtx.fillStyle = gradient;
            visitorsCtx.fillRect(x, y, barWidth, barHeight);
            
            // Jour
            visitorsCtx.fillStyle = '#374151';
            visitorsCtx.font = '12px Inter';
            visitorsCtx.textAlign = 'center';
            visitorsCtx.fillText(day, x + barWidth/2, 200);
            
            // Nombre
            visitorsCtx.fillStyle = '#1e40af';
            visitorsCtx.font = 'bold 14px Inter';
            visitorsCtx.fillText(visitors[index], x + barWidth/2, y - 5);
        });
    }
}

// Suggestions
function loadSuggestions() {
    const suggestionsList = document.getElementById('suggestions-list');
    if (!suggestionsList) return;
    
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
            title: '1984',
            author: 'George Orwell',
            year: 1949,
            cover: 'https://m.media-amazon.com/images/I/71kxa1-0mfL._AC_UF1000,1000_QL80_.jpg',
            genre: 'Science-Fiction'
        }
    ];
    
    suggestionsList.innerHTML = '';
    
    suggestions.forEach(book => {
        const item = document.createElement('div');
        item.className = 'suggestion-item';
        item.innerHTML = `
            <div class="suggestion-cover" style="background-image: url('${book.cover}')"></div>
            <div class="suggestion-info">
                <div class="suggestion-title">${book.title}</div>
                <div class="suggestion-author">${book.author} • ${book.genre}</div>
                <div class="suggestion-year">${book.year}</div>
                <button class="btn-add-favorite" data-title="${book.title}">
                    <i class="far fa-heart"></i> Ajouter aux favoris
                </button>
            </div>
        `;
        suggestionsList.appendChild(item);
    });
    
    // Ajouter les event listeners
    suggestionsList.querySelectorAll('.btn-add-favorite').forEach(btn => {
        btn.addEventListener('click', function() {
            const title = this.getAttribute('data-title');
            // Simuler l'ajout aux favoris
            this.innerHTML = '<i class="fas fa-heart"></i> Ajouté !';
            this.style.color = '#ef4444';
            this.disabled = true;
        });
    });
}

// Collection - Afficher les livres
function displayBooks(filteredBooks = books) {
    const grid = document.getElementById('collection-grid');
    if (!grid) return;
    
    grid.innerHTML = '';
    
    if (filteredBooks.length === 0) {
        grid.innerHTML = `
            <div class="no-results" style="grid-column: 1/-1; text-align: center; padding: 3rem; color: #6b7280;">
                <i class="fas fa-search" style="font-size: 3rem; margin-bottom: 1rem; opacity: 0.5;"></i>
                <p>Aucun livre trouvé.</p>
            </div>`;
        return;
    }
    
    filteredBooks.forEach(book => {
        const card = document.createElement('div');
        card.className = 'collection-book-card';
        
        // Déterminer le badge de statut
        let statusBadge = '';
        if (book.status === 'available') {
            statusBadge = '<div class="book-status-badge status-available">Disponible</div>';
        } else if (book.status === 'borrowed') {
            statusBadge = '<div class="book-status-badge status-borrowed">Emprunté</div>';
        } else {
            statusBadge = '<div class="book-status-badge status-lost">Perdu</div>';
        }
        
        card.innerHTML = `
            <div class="collection-book-cover" style="background-image: url('${book.cover}')">
                ${statusBadge}
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
            <div class="collection-book-actions">
                <button class="favorite-btn ${book.favorite ? 'active' : ''}" data-id="${book.id}">
                    <i class="${book.favorite ? 'fas' : 'far'} fa-heart"></i>
                </button>
                ${book.status === 'available' ? 
                  `<button class="borrow-btn" data-id="${book.id}">Emprunter</button>` : 
                  `<button class="borrow-btn" disabled>Indisponible</button>`}
            </div>
        `;
        
        grid.appendChild(card);
    });
    
    // Ajouter les event listeners
    grid.querySelectorAll('.favorite-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const bookId = parseInt(this.getAttribute('data-id'));
            const book = books.find(b => b.id === bookId);
            
            if (book) {
                book.favorite = !book.favorite;
                saveData();
                
                // Mettre à jour l'icône
                const icon = this.querySelector('i');
                if (book.favorite) {
                    icon.className = 'fas fa-heart';
                    this.classList.add('active');
                } else {
                    icon.className = 'far fa-heart';
                    this.classList.remove('active');
                }
                
                // Animation
                this.style.transform = 'scale(1.2)';
                setTimeout(() => {
                    this.style.transform = 'scale(1)';
                }, 200);
                
                // Mettre à jour les compteurs
                updateFavoritesCount();
            }
        });
    });
    
    grid.querySelectorAll('.borrow-btn:not([disabled])').forEach(btn => {
        btn.addEventListener('click', function() {
            const bookId = parseInt(this.getAttribute('data-id'));
            const book = books.find(b => b.id === bookId);
            
            if (book) {
                const borrower = prompt(`Emprunter "${book.title}"\nNom de l'emprunteur:`, "Jean Dupont");
                
                if (borrower && borrower.trim()) {
                    // Mettre à jour le statut du livre
                    book.status = 'borrowed';
                    
                    // Ajouter à la liste des emprunts
                    const newEmprunt = {
                        id: emprunts.length + 1,
                        bookId: book.id,
                        title: book.title,
                        author: book.author,
                        borrower: borrower.trim(),
                        dateEmprunt: new Date().toISOString().split('T')[0],
                        dateRetour: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
                        status: 'en-cours'
                    };
                    emprunts.push(newEmprunt);
                    
                    // Sauvegarder et mettre à jour
                    saveData();
                    displayBooks();
                    updateStats();
                    updateEmpruntsCount();
                    
                    alert(`"${book.title}" a été emprunté par ${borrower.trim()}`);
                }
            }
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

// Collection - Filtres
function initCollectionFilters() {
    const searchInput = document.getElementById('collection-search');
    const statusFilter = document.getElementById('status-filter');
    const genreFilter = document.getElementById('genre-filter');
    
    const filterBooks = () => {
        const searchTerm = searchInput ? searchInput.value.toLowerCase() : '';
        const status = statusFilter ? statusFilter.value : 'all';
        const genre = genreFilter ? genreFilter.value : 'all';
        
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
        
        displayBooks(filtered);
    };
    
    if (searchInput) searchInput.addEventListener('input', filterBooks);
    if (statusFilter) statusFilter.addEventListener('change', filterBooks);
    if (genreFilter) genreFilter.addEventListener('change', filterBooks);
}

// Auteurs
function displayAuthors(filteredAuthors = authors) {
    const grid = document.getElementById('authors-grid');
    if (!grid) return;
    
    grid.innerHTML = '';
    
    if (filteredAuthors.length === 0) {
        grid.innerHTML = `
            <div class="no-results" style="grid-column: 1/-1; text-align: center; padding: 3rem; color: #6b7280;">
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

// Recherche auteurs
function initAuthorsSearch() {
    const searchInput = document.getElementById('authors-search');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase();
            const filtered = authors.filter(author => 
                author.name.toLowerCase().includes(searchTerm) ||
                author.nationality.toLowerCase().includes(searchTerm)
            );
            displayAuthors(filtered);
        });
    }
}

// Favoris
function displayFavorites() {
    const grid = document.getElementById('favorites-grid');
    if (!grid) return;
    
    const favoriteBooks = books.filter(book => book.favorite);
    
    grid.innerHTML = '';
    
    if (favoriteBooks.length === 0) {
        grid.innerHTML = `
            <div class="no-results" style="grid-column: 1/-1; text-align: center; padding: 3rem; color: #6b7280;">
                <i class="fas fa-heart" style="font-size: 3rem; margin-bottom: 1rem; opacity: 0.5;"></i>
                <p>Aucun livre favori pour le moment.</p>
                <p style="margin-top: 1rem; font-size: 0.9rem;">Ajoutez des livres à vos favoris en cliquant sur l'icône cœur ❤️</p>
            </div>`;
        return;
    }
    
    favoriteBooks.forEach(book => {
        const card = document.createElement('div');
        card.className = 'favorite-card';
        
        // Déterminer le statut
        let statusText = '';
        if (book.status === 'available') {
            statusText = 'Disponible';
        } else if (book.status === 'borrowed') {
            statusText = 'Emprunté';
        } else {
            statusText = 'Perdu';
        }
        
        card.innerHTML = `
            <div class="favorite-cover" style="background-image: url('${book.cover}')"></div>
            <div class="favorite-content">
                <div class="favorite-title">${book.title}</div>
                <div class="favorite-author">${book.author}</div>
                <div class="favorite-meta">
                    <span><i class="fas fa-tag"></i> ${getGenreName(book.genre)}</span>
                    <span><i class="fas fa-calendar"></i> ${book.year}</span>
                    <span><i class="fas fa-info-circle"></i> ${statusText}</span>
                </div>
                <div class="favorite-actions">
                    <button class="btn btn-primary borrow-favorite-btn" data-id="${book.id}" 
                            ${book.status !== 'available' ? 'disabled' : ''}>
                        <i class="fas fa-exchange-alt"></i> Emprunter
                    </button>
                    <button class="btn btn-secondary remove-favorite-btn" data-id="${book.id}">
                        <i class="fas fa-heart-broken"></i> Retirer
                    </button>
                </div>
            </div>
        `;
        
        grid.appendChild(card);
    });
    
    // Ajouter les event listeners
    grid.querySelectorAll('.borrow-favorite-btn:not([disabled])').forEach(btn => {
        btn.addEventListener('click', function() {
            const bookId = parseInt(this.getAttribute('data-id'));
            const book = books.find(b => b.id === bookId);
            
            if (book) {
                const borrower = prompt(`Emprunter "${book.title}"\nNom de l'emprunteur:`, "Jean Dupont");
                
                if (borrower && borrower.trim()) {
                    book.status = 'borrowed';
                    
                    const newEmprunt = {
                        id: emprunts.length + 1,
                        bookId: book.id,
                        title: book.title,
                        author: book.author,
                        borrower: borrower.trim(),
                        dateEmprunt: new Date().toISOString().split('T')[0],
                        dateRetour: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
                        status: 'en-cours'
                    };
                    emprunts.push(newEmprunt);
                    
                    saveData();
                    displayFavorites();
                    updateStats();
                    updateEmpruntsCount();
                    
                    alert(`"${book.title}" a été emprunté par ${borrower.trim()}`);
                }
            }
        });
    });
    
    grid.querySelectorAll('.remove-favorite-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const bookId = parseInt(this.getAttribute('data-id'));
            const book = books.find(b => b.id === bookId);
            
            if (book && confirm(`Retirer "${book.title}" des favoris ?`)) {
                book.favorite = false;
                saveData();
                displayFavorites();
                updateFavoritesCount();
            }
        });
    });
    
    // Recherche dans les favoris
    const searchInput = document.getElementById('favorites-search');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase();
            const filtered = favoriteBooks.filter(book => 
                book.title.toLowerCase().includes(searchTerm) ||
                book.author.toLowerCase().includes(searchTerm)
            );
            
            // Réafficher avec filtrage
            if (searchTerm) {
                displayFilteredFavorites(filtered);
            } else {
                displayFavorites();
            }
        });
    }
}

function displayFilteredFavorites(filtered) {
    const grid = document.getElementById('favorites-grid');
    if (!grid) return;
    
    grid.innerHTML = '';
    
    if (filtered.length === 0) {
        grid.innerHTML = `
            <div class="no-results" style="grid-column: 1/-1; text-align: center; padding: 3rem; color: #6b7280;">
                <i class="fas fa-search" style="font-size: 3rem; margin-bottom: 1rem; opacity: 0.5;"></i>
                <p>Aucun résultat trouvé.</p>
            </div>`;
        return;
    }
    
    filtered.forEach(book => {
        const card = document.createElement('div');
        card.className = 'favorite-card';
        
        card.innerHTML = `
            <div class="favorite-cover" style="background-image: url('${book.cover}')"></div>
            <div class="favorite-content">
                <div class="favorite-title">${book.title}</div>
                <div class="favorite-author">${book.author}</div>
                <div class="favorite-meta">
                    <span><i class="fas fa-tag"></i> ${getGenreName(book.genre)}</span>
                    <span><i class="fas fa-calendar"></i> ${book.year}</span>
                </div>
                <div class="favorite-actions">
                    <button class="btn btn-primary borrow-favorite-btn" data-id="${book.id}">
                        <i class="fas fa-exchange-alt"></i> Emprunter
                    </button>
                    <button class="btn btn-secondary remove-favorite-btn" data-id="${book.id}">
                        <i class="fas fa-heart-broken"></i> Retirer
                    </button>
                </div>
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
        tbody.innerHTML = `
            <tr>
                <td colspan="7" style="text-align: center; padding: 2rem; color: #6b7280;">
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
                        style="padding: 0.5rem 1rem; font-size: 0.85rem;"
                        ${emprunt.status !== 'en-cours' ? 'disabled' : ''}>
                    Prolonger
                </button>
            </td>
        `;
        tbody.appendChild(row);
    });
    
    // Ajouter les event listeners pour prolonger
    tbody.querySelectorAll('.prolonger-btn:not([disabled])').forEach(btn => {
        btn.addEventListener('click', function() {
            const empruntId = parseInt(this.getAttribute('data-id'));
            const emprunt = emprunts.find(e => e.id === empruntId);
            
            if (emprunt) {
                const nouvelleDate = prompt(`Prolonger l'emprunt de "${emprunt.title}"\nNouvelle date de retour (JJ/MM/AAAA):`, 
                    formatDate(emprunt.dateRetour));
                
                if (nouvelleDate) {
                    const dateParts = nouvelleDate.split('/');
                    if (dateParts.length === 3) {
                        const newDate = `${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`;
                        if (!isNaN(Date.parse(newDate))) {
                            emprunt.dateRetour = newDate;
                            saveData();
                            displayEmprunts();
                            alert('Date de retour prolongée avec succès !');
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
    return date.toLocaleDateString('fr-FR');
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
    // Boutons pour ouvrir les modals
    document.getElementById('add-book-btn').addEventListener('click', () => {
        openAddBookModal();
    });
    
    document.getElementById('add-author-btn').addEventListener('click', () => {
        openAddAuthorModal();
    });
    
    document.getElementById('add-author-card').addEventListener('click', () => {
        openAddAuthorModal();
    });
    
    // Fermer les modals
    document.querySelectorAll('.modal-close').forEach(closeBtn => {
        closeBtn.addEventListener('click', function() {
            this.closest('.modal').style.display = 'none';
        });
    });
    
    // Fermer en cliquant en dehors
    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) {
            e.target.style.display = 'none';
        }
    });
    
    // Formulaire ajouter livre
    document.getElementById('add-book-form').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const title = document.getElementById('book-title').value;
        const authorName = document.getElementById('book-author').value;
        const genre = document.getElementById('book-genre').value;
        const year = parseInt(document.getElementById('book-year').value);
        const isbn = document.getElementById('book-isbn').value;
        const cover = document.getElementById('book-cover').value || 'https://m.media-amazon.com/images/I/81eIDJ-hmHL._AC_UF1000,1000_QL80_.jpg';
        
        // Vérifier si l'auteur existe
        let author = authors.find(a => a.name === authorName);
        if (!author) {
            // Créer un nouvel auteur
            author = {
                id: authors.length + 1,
                name: authorName,
                nationality: 'Inconnue',
                birthYear: 1900,
                booksCount: 0,
                initial: authorName.charAt(0).toUpperCase()
            };
            authors.push(author);
        }
        
        // Créer le nouveau livre
        const newBook = {
            id: books.length + 1,
            title,
            author: authorName,
            genre,
            year,
            isbn,
            status: 'available',
            favorite: false,
            cover
        };
        
        books.push(newBook);
        author.booksCount++;
        
        // Sauvegarder
        saveData();
        
        // Fermer le modal
        document.getElementById('add-book-modal').style.display = 'none';
        
        // Réinitialiser le formulaire
        this.reset();
        
        // Mettre à jour l'affichage
        if (document.getElementById('collection').classList.contains('active')) {
            displayBooks();
            updateTotalBooks();
        }
        updateStats();
        
        // Notification
        alert(`Livre "${title}" ajouté avec succès !`);
    });
    
    // Formulaire ajouter auteur
    document.getElementById('add-author-form').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('author-name').value;
        const nationality = document.getElementById('author-nationality').value;
        const birthYear = parseInt(document.getElementById('author-birth').value);
        
        const newAuthor = {
            id: authors.length + 1,
            name,
            nationality,
            birthYear,
            booksCount: 0,
            initial: name.charAt(0).toUpperCase()
        };
        
        authors.push(newAuthor);
        saveData();
        
        // Fermer le modal
        document.getElementById('add-author-modal').style.display = 'none';
        
        // Réinitialiser le formulaire
        this.reset();
        
        // Mettre à jour l'affichage
        if (document.getElementById('auteurs').classList.contains('active')) {
            displayAuthors();
        }
        
        // Notification
        alert(`Auteur "${name}" ajouté avec succès !`);
    });
}

function openAddBookModal() {
    const modal = document.getElementById('add-book-modal');
    const authorSelect = document.getElementById('book-author');
    
    // Remplir la liste des auteurs
    authorSelect.innerHTML = '<option value="">Sélectionner un auteur</option>';
    authors.forEach(author => {
        const option = document.createElement('option');
        option.value = author.name;
        option.textContent = author.name;
        authorSelect.appendChild(option);
    });
    
    // Ajouter une option pour un nouvel auteur
    const newOption = document.createElement('option');
    newOption.value = 'new';
    newOption.textContent = '+ Ajouter un nouvel auteur';
    authorSelect.appendChild(newOption);
    
    // Gérer la sélection "nouvel auteur"
    authorSelect.addEventListener('change', function() {
        if (this.value === 'new') {
            // Ouvrir le modal d'ajout d'auteur
            document.getElementById('add-book-modal').style.display = 'none';
            openAddAuthorModal();
        }
    });
    
    modal.style.display = 'block';
}

function openAddAuthorModal() {
    document.getElementById('add-author-modal').style.display = 'block';
}

// Recherche globale
function initGlobalSearch() {
    const searchInput = document.getElementById('global-search');
    const searchBtn = document.querySelector('.search-btn');
    
    const performSearch = () => {
        const searchTerm = searchInput.value.trim();
        if (searchTerm) {
            // Aller à la page collection
            document.querySelector('[data-page="collection"]').click();
            
            // Mettre la recherche dans le champ de la collection
            setTimeout(() => {
                const collectionSearch = document.getElementById('collection-search');
                if (collectionSearch) {
                    collectionSearch.value = searchTerm;
                    collectionSearch.dispatchEvent(new Event('input'));
                }
            }, 100);
        }
    };
    
    searchBtn.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') performSearch();
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

// Actualiser les suggestions
function initRefreshSuggestions() {
    const refreshBtn = document.getElementById('refresh-suggestions');
    if (refreshBtn) {
        refreshBtn.addEventListener('click', () => {
            // Animation
            refreshBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Actualisation...';
            refreshBtn.disabled = true;
            
            setTimeout(() => {
                loadSuggestions();
                refreshBtn.innerHTML = '<i class="fas fa-sync-alt"></i> Actualiser';
                refreshBtn.disabled = false;
                
                // Notification
                showNotification('Suggestions actualisées !', 'success');
            }, 800);
        });
    }
}

// Formulaire contact
function initContactForm() {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Récupérer les valeurs
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData);
            
            // Simuler l'envoi
            console.log('Message contact:', data);
            
            // Réinitialiser le formulaire
            contactForm.reset();
            
            // Notification
            showNotification('Message envoyé avec succès !', 'success');
        });
    }
}

// Notification
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${type === 'success' ? 'check-circle' : 'info-circle'}"></i>
            <span>${message}</span>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Animation d'entrée
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);
    
    // Supprimer après 3 secondes
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// Initialisation
document.addEventListener('DOMContentLoaded', function() {
    // Vérifier la connexion
    if (localStorage.getItem('isLoggedIn') !== 'true') {
        window.location.href = 'login.html';
        return;
    }
    
    console.log('Initialisation du site Bibliotheca...');
    
    // Initialiser toutes les fonctionnalités
    initNavigation();
    initGlobalSearch();
    initNotifications();
    initModals();
    initCollectionFilters();
    initAuthorsSearch();
    initRefreshSuggestions();
    initContactForm();
    
    // Charger la page active
    const activePage = document.querySelector('.page.active');
    if (activePage) {
        loadPageData(activePage.id);
    }
    
    // Redessiner les graphiques lors du redimensionnement
    window.addEventListener('resize', () => {
        if (document.querySelector('#dashboard.page.active')) {
            initCharts();
        }
    });
    
    console.log('Site initialisé avec succès !');
});

// Ajouter le CSS pour les notifications
const notificationStyles = document.createElement('style');
notificationStyles.textContent = `
    .notification {
        position: fixed;
        top: 100px;
        right: 20px;
        background: white;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        padding: 1rem 1.5rem;
        display: flex;
        align-items: center;
        gap: 0.75rem;
        transform: translateX(120%);
        transition: transform 0.3s ease;
        z-index: 9999;
        border-left: 4px solid #3b82f6;
    }
    
    .notification.show {
        transform: translateX(0);
    }
    
    .notification-success {
        border-left-color: #10b981;
    }
    
    .notification-content {
        display: flex;
        align-items: center;
        gap: 0.75rem;
    }
    
    .notification i {
        font-size: 1.25rem;
    }
    
    .notification-success i {
        color: #10b981;
    }
    
    .notification span {
        font-weight: 500;
    }
`;
document.head.appendChild(notificationStyles);
