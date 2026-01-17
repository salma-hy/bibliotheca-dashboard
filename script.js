// === DONNÉES INITIALES ===
let books = [];
let authors = [];
let emprunts = [];
let chartInstance = null;

// === LOCALSTORAGE - PERSISTANCE TOTALE ===
function saveAllData() {
    localStorage.setItem('bibliotheca_books', JSON.stringify(books));
    localStorage.setItem('bibliotheca_authors', JSON.stringify(authors));
    localStorage.setItem('bibliotheca_emprunts', JSON.stringify(emprunts));
    console.log('✅ Données sauvegardées dans localStorage');
}

function loadAllData() {
    const savedBooks = localStorage.getItem('bibliotheca_books');
    const savedAuthors = localStorage.getItem('bibliotheca_authors');
    const savedEmprunts = localStorage.getItem('bibliotheca_emprunts');

    if (savedBooks) books = JSON.parse(savedBooks);
    if (savedAuthors) authors = JSON.parse(savedAuthors);
    if (savedEmprunts) emprunts = JSON.parse(savedEmprunts);

    // Si pas de données, initialiser avec des données par défaut
    if (books.length === 0) {
        initializeDefaultData();
    }
}

function initializeDefaultData() {
    books = [
        {
            id: Date.now(),
            title: 'Harry Potter à l\'école des sorciers',
            author: 'J.K. Rowling',
            genre: 'fantaisie',
            year: 1997,
            isbn: '978-2070612368',
            description: 'Le premier tome des aventures du jeune sorcier.',
            status: 'available',
            favorite: true,
            cover: 'https://cdn1.booknode.com/book_cover/4981/full/harry-potter-tome-1-harry-potter-a-lecole-des-sorciers-4981020.jpg'
        },
        {
            id: Date.now() + 1,
            title: 'Le Hobbit',
            author: 'J.R.R. Tolkien',
            genre: 'fantaisie',
            year: 1937,
            isbn: '978-2266282942',
            description: 'Aventures de Bilbo le Hobbit.',
            status: 'borrowed',
            favorite: false,
            cover: 'https://www.livres-cinema.info/cover/22/2266154117.jpg'
        },
        {
            id: Date.now() + 2,
            title: 'Dune',
            author: 'Frank Herbert',
            genre: 'science-fiction',
            year: 1965,
            isbn: '978-2290114918',
            description: 'Épopée spatiale sur la planète désertique Arrakis.',
            status: 'available',
            favorite: true,
            cover: 'https://img.livraddict.com/covers/453/453370//couv47835879.jpg'
        },
        {
            id: Date.now() + 3,
            title: 'Les Misérables',
            author: 'Victor Hugo',
            genre: 'roman-historique',
            year: 1862,
            isbn: '978-2253168522',
            description: 'Roman historique sur la société française du XIXe siècle.',
            status: 'available',
            favorite: false,
            cover: 'https://cdn1.booknode.com/book_cover/3614/full/les-miserables-3614132.jpg'
        },
        {
            id: Date.now() + 4,
            title: '1984',
            author: 'George Orwell',
            genre: 'science-fiction',
            year: 1949,
            isbn: '978-2070368226',
            description: 'Dystopie sur une société totalitaire.',
            status: 'available',
            favorite: false,
            cover: 'https://cdn1.booknode.com/book_cover/72/1984-72084-264-432.webp'
        }
    ];

    authors = [
        { 
            id: Date.now() + 10, 
            name: 'J.K. Rowling', 
            nationality: 'Britannique', 
            birthYear: 1965,
            deathYear: null,
            bio: 'Auteure de la saga Harry Potter.',
            initial: 'J'
        },
        { 
            id: Date.now() + 11, 
            name: 'J.R.R. Tolkien', 
            nationality: 'Britannique', 
            birthYear: 1892,
            deathYear: 1973,
            bio: 'Auteur du Seigneur des Anneaux et du Hobbit.',
            initial: 'J'
        },
        { 
            id: Date.now() + 12, 
            name: 'Frank Herbert', 
            nationality: 'Américain', 
            birthYear: 1920,
            deathYear: 1986,
            bio: 'Auteur de la série Dune.',
            initial: 'F'
        },
        { 
            id: Date.now() + 13, 
            name: 'Victor Hugo', 
            nationality: 'Français', 
            birthYear: 1802,
            deathYear: 1885,
            bio: 'Grand écrivain français, auteur des Misérables.',
            initial: 'V'
        },
        { 
            id: Date.now() + 14, 
            name: 'George Orwell', 
            nationality: 'Britannique', 
            birthYear: 1903,
            deathYear: 1950,
            bio: 'Auteur de 1984 et La Ferme des animaux.',
            initial: 'G'
        }
    ];

    emprunts = [
        {
            id: Date.now() + 20,
            bookId: Date.now() + 1,
            borrower: 'Jean Dupont',
            dateEmprunt: '2024-02-01',
            dateRetour: '2024-03-01',
            status: 'en-cours'
        },
        {
            id: Date.now() + 21,
            bookId: Date.now() + 3,
            borrower: 'Marie Martin',
            dateEmprunt: '2024-01-15',
            dateRetour: '2024-02-15',
            status: 'retourne'
        }
    ];

    saveAllData();
}

// === CONNEXION ===
function setupLogin() {
    const loginForm = document.getElementById('login-form');
    if (!loginForm) return;
    
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const errorMessage = document.getElementById('error-message');
        
        console.log('Tentative de connexion:', username, password);
        
        if (username === 'admin' && password === 'admin123') {
            console.log('✅ Connexion réussie!');
            
            // Sauvegarder l'état de connexion
            localStorage.setItem('isLoggedIn', 'true');
            
            // Masquer la page de connexion
            document.getElementById('login-page').style.display = 'none';
            
            // Afficher le dashboard
            const dashboard = document.getElementById('dashboard-page');
            if (dashboard) {
                dashboard.style.display = 'block';
            } else {
                console.error('❌ Élément dashboard-page non trouvé');
                return;
            }
            
            // Charger les données
            loadAllData();
            
            // Initialiser le dashboard
            initDashboard();
            
        } else {
            console.log('❌ Échec de connexion');
            errorMessage.textContent = 'Nom d\'utilisateur ou mot de passe incorrect';
            errorMessage.style.display = 'block';
        }
    });
}

// === CHARGER LES AUTEURS DANS LE SELECT ===
function loadAuthorsIntoSelect() {
    const select = document.getElementById('book-author');
    const editSelect = document.getElementById('edit-book-author');
    
    if (select) {
        select.innerHTML = '<option value="">Sélectionner un auteur</option>';
        authors.forEach(author => {
            const option = document.createElement('option');
            option.value = author.name;
            option.textContent = author.name;
            select.appendChild(option);
        });
        
        // Ajouter option pour créer un nouvel auteur
        const newAuthorOption = document.createElement('option');
        newAuthorOption.value = "new_author";
        newAuthorOption.textContent = "+ Ajouter un nouvel auteur";
        select.appendChild(newAuthorOption);
    }
    
    if (editSelect) {
        editSelect.innerHTML = '<option value="">Sélectionner un auteur</option>';
        authors.forEach(author => {
            const option = document.createElement('option');
            option.value = author.name;
            option.textContent = author.name;
            editSelect.appendChild(option);
        });
        
        const newAuthorOption = document.createElement('option');
        newAuthorOption.value = "new_author";
        newAuthorOption.textContent = "+ Ajouter un nouvel auteur";
        editSelect.appendChild(newAuthorOption);
    }
}

// === GÉRER LA SÉLECTION "AJOUTER UN NOUVEL AUTEUR" ===
function setupAuthorSelectHandlers() {
    // Pour le modal Ajouter Livre
    const authorSelect = document.getElementById('book-author');
    const newAuthorFields = document.getElementById('new-author-fields');
    
    if (authorSelect && newAuthorFields) {
        authorSelect.addEventListener('change', function() {
            if (this.value === "new_author") {
                newAuthorFields.style.display = 'block';
                // Réinitialiser les champs
                document.getElementById('new-author-name').value = '';
                document.getElementById('new-author-nationality').value = '';
                document.getElementById('new-author-birth').value = '';
            } else {
                newAuthorFields.style.display = 'none';
            }
        });
    }
    
    // Pour le modal Modifier Livre
    const editAuthorSelect = document.getElementById('edit-book-author');
    const editNewAuthorFields = document.getElementById('edit-new-author-fields');
    
    if (editAuthorSelect && editNewAuthorFields) {
        editAuthorSelect.addEventListener('change', function() {
            if (this.value === "new_author") {
                editNewAuthorFields.style.display = 'block';
                document.getElementById('edit-new-author-name').value = '';
                document.getElementById('edit-new-author-nationality').value = '';
                document.getElementById('edit-new-author-birth').value = '';
            } else {
                editNewAuthorFields.style.display = 'none';
            }
        });
    }
}

// === INITIALISATION DU DASHBOARD ===
function initDashboard() {
    console.log('🚀 Initialisation du dashboard...');
    
    // Charger les auteurs dans les selects
    loadAuthorsIntoSelect();
    setupAuthorSelectHandlers();
    
    // Mettre à jour toutes les vues
    updateDashboardStats();
    displayBooks();
    displayAuthors();
    displayFavorites();
    displayEmprunts();
    loadBookOptionsForEmprunt();
    
    // Navigation
    const navLinks = document.querySelectorAll('.nav-link:not(.logout-btn)');
    const pages = document.querySelectorAll('.page');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            
            pages.forEach(page => page.classList.remove('active'));
            const pageId = link.getAttribute('data-page');
            const pageElement = document.getElementById(pageId);
            if (pageElement) {
                pageElement.classList.add('active');
            }
            
            if (pageId === 'dashboard') {
                loadDashboardData();
            } else if (pageId === 'collection') {
                displayBooks();
            } else if (pageId === 'auteurs') {
                displayAuthors();
            } else if (pageId === 'favoris') {
                displayFavorites();
            } else if (pageId === 'emprunts') {
                displayEmprunts();
            }
        });
    });

    // Déconnexion
    const logoutBtn = document.querySelector('.logout-btn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function(e) {
            e.preventDefault();
            if (confirm('Êtes-vous sûr de vouloir vous déconnecter ?')) {
                localStorage.removeItem('isLoggedIn');
                document.getElementById('dashboard-page').style.display = 'none';
                document.getElementById('login-page').style.display = 'flex';
                const loginForm = document.getElementById('login-form');
                if (loginForm) loginForm.reset();
                const errorMessage = document.getElementById('error-message');
                if (errorMessage) errorMessage.style.display = 'none';
            }
        });
    }

    // Notifications
    const notificationBtn = document.querySelector('.notification-btn');
    if (notificationBtn) {
        notificationBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            const dropdown = document.getElementById('notifications-dropdown');
            if (dropdown) dropdown.classList.toggle('active');
        });
    }

    document.addEventListener('click', function(e) {
        if (!e.target.closest('.notifications')) {
            const dropdown = document.getElementById('notifications-dropdown');
            if (dropdown) dropdown.classList.remove('active');
        }
    });

    // Recherche globale
    const globalSearch = document.getElementById('global-search');
    if (globalSearch) {
        globalSearch.addEventListener('input', function(e) {
            const searchTerm = e.target.value.toLowerCase();
            if (searchTerm.trim() !== '') {
                const collectionLink = document.querySelector('[data-page="collection"]');
                if (collectionLink && !collectionLink.classList.contains('active')) {
                    collectionLink.click();
                    setTimeout(() => {
                        const collectionSearch = document.getElementById('collection-search');
                        if (collectionSearch) collectionSearch.value = searchTerm;
                        filterAndSortBooks();
                    }, 100);
                } else if (document.getElementById('collection')?.classList.contains('active')) {
                    const collectionSearch = document.getElementById('collection-search');
                    if (collectionSearch) collectionSearch.value = searchTerm;
                    filterAndSortBooks();
                }
            }
        });
    }

    // Recherche et tri collection
    const collectionSearch = document.getElementById('collection-search');
    if (collectionSearch) collectionSearch.addEventListener('input', filterAndSortBooks);
    
    const statusFilter = document.getElementById('status-filter');
    if (statusFilter) statusFilter.addEventListener('change', filterAndSortBooks);
    
    const genreFilter = document.getElementById('genre-filter');
    if (genreFilter) genreFilter.addEventListener('change', filterAndSortBooks);
    
    const sortFilter = document.getElementById('sort-filter');
    if (sortFilter) sortFilter.addEventListener('change', filterAndSortBooks);

    // Recherche auteurs
    const authorsSearch = document.getElementById('authors-search');
    if (authorsSearch) {
        authorsSearch.addEventListener('input', function(e) {
            const searchTerm = e.target.value.toLowerCase();
            const filtered = authors.filter(author => 
                author.name.toLowerCase().includes(searchTerm) ||
                author.nationality.toLowerCase().includes(searchTerm)
            );
            displayAuthors(filtered);
        });
    }

    // Boutons d'ajout
    const addBookBtn = document.getElementById('add-book-btn');
    if (addBookBtn) {
        addBookBtn.addEventListener('click', () => {
            loadAuthorsIntoSelect();
            const modal = document.getElementById('add-book-modal');
            if (modal) modal.style.display = 'block';
        });
    }

    const addAuthorBtn = document.getElementById('add-author-btn');
    if (addAuthorBtn) {
        addAuthorBtn.addEventListener('click', () => {
            const modal = document.getElementById('add-author-modal');
            if (modal) modal.style.display = 'block';
        });
    }

    const addEmpruntBtn = document.getElementById('add-emprunt-btn');
    if (addEmpruntBtn) {
        addEmpruntBtn.addEventListener('click', () => {
            loadBookOptionsForEmprunt();
            const modal = document.getElementById('add-emprunt-modal');
            if (modal) modal.style.display = 'block';
        });
    }

    // Fermer les modals
    document.querySelectorAll('.modal-close').forEach(close => {
        close.addEventListener('click', () => {
            const modal = close.closest('.modal');
            if (modal) modal.style.display = 'none';
        });
    });

    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) {
            e.target.style.display = 'none';
        }
    });

    // === FORMULAIRES ===

    // Formulaire ajouter livre
    const addBookForm = document.getElementById('add-book-form');
    if (addBookForm) {
        addBookForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            let authorName = document.getElementById('book-author')?.value;
            
            // Si l'utilisateur a choisi d'ajouter un nouvel auteur
            if (authorName === "new_author") {
                const newAuthorName = document.getElementById('new-author-name')?.value;
                const newAuthorNationality = document.getElementById('new-author-nationality')?.value;
                const newAuthorBirth = document.getElementById('new-author-birth')?.value;
                
                if (!newAuthorName || !newAuthorNationality || !newAuthorBirth) {
                    alert('Veuillez remplir tous les champs du nouvel auteur');
                    return;
                }
                
                // Créer le nouvel auteur
                const newAuthor = {
                    id: Date.now(),
                    name: newAuthorName,
                    nationality: newAuthorNationality,
                    birthYear: parseInt(newAuthorBirth),
                    deathYear: null,
                    bio: '',
                    initial: newAuthorName.charAt(0).toUpperCase()
                };
                
                authors.push(newAuthor);
                authorName = newAuthorName;
                
                // Mettre à jour les selects d'auteurs
                loadAuthorsIntoSelect();
            }
            
            const newBook = {
                id: Date.now(),
                title: document.getElementById('book-title')?.value || '',
                author: authorName || '',
                genre: document.getElementById('book-genre')?.value || 'fiction',
                year: parseInt(document.getElementById('book-year')?.value || '2024'),
                isbn: document.getElementById('book-isbn')?.value || '',
                description: document.getElementById('book-description')?.value || '',
                status: document.getElementById('book-status')?.value || 'available',
                favorite: false,
                cover: document.getElementById('book-cover')?.value || 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80'
            };
            
            books.push(newBook);
            saveAllData();
            const modal = document.getElementById('add-book-modal');
            if (modal) modal.style.display = 'none';
            this.reset();
            
            // Réinitialiser les champs nouvel auteur
            const newAuthorFields = document.getElementById('new-author-fields');
            if (newAuthorFields) newAuthorFields.style.display = 'none';
            
            displayBooks();
            updateDashboardStats();
            loadBookOptionsForEmprunt();
            
            updateNotificationBadge();
            alert('Livre ajouté avec succès !');
        });
    }

    // Formulaire modifier livre
    const editBookForm = document.getElementById('edit-book-form');
    if (editBookForm) {
        editBookForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const bookId = parseInt(document.getElementById('edit-book-id')?.value);
            const bookIndex = books.findIndex(b => b.id === bookId);
            
            if (bookIndex !== -1) {
                let authorName = document.getElementById('edit-book-author')?.value;
                
                // Si nouvel auteur
                if (authorName === "new_author") {
                    const newAuthorName = document.getElementById('edit-new-author-name')?.value;
                    const newAuthorNationality = document.getElementById('edit-new-author-nationality')?.value;
                    const newAuthorBirth = document.getElementById('edit-new-author-birth')?.value;
                    
                    if (!newAuthorName || !newAuthorNationality || !newAuthorBirth) {
                        alert('Veuillez remplir tous les champs du nouvel auteur');
                        return;
                    }
                    
                    // Créer le nouvel auteur
                    const newAuthor = {
                        id: Date.now(),
                        name: newAuthorName,
                        nationality: newAuthorNationality,
                        birthYear: parseInt(newAuthorBirth),
                        deathYear: null,
                        bio: '',
                        initial: newAuthorName.charAt(0).toUpperCase()
                    };
                    
                    authors.push(newAuthor);
                    authorName = newAuthorName;
                    loadAuthorsIntoSelect();
                }
                
                books[bookIndex] = {
                    ...books[bookIndex],
                    title: document.getElementById('edit-book-title')?.value || '',
                    author: authorName || '',
                    genre: document.getElementById('edit-book-genre')?.value || 'fiction',
                    year: parseInt(document.getElementById('edit-book-year')?.value || '2024'),
                    isbn: document.getElementById('edit-book-isbn')?.value || '',
                    description: document.getElementById('edit-book-description')?.value || '',
                    status: document.getElementById('edit-book-status')?.value || 'available',
                    cover: document.getElementById('edit-book-cover')?.value || ''
                };
                
                saveAllData();
                const modal = document.getElementById('edit-book-modal');
                if (modal) modal.style.display = 'none';
                displayBooks();
                displayFavorites();
                displayEmprunts();
                updateDashboardStats();
                alert('Livre mis à jour avec succès !');
            }
        });
    }

    // Formulaire ajouter auteur
    const addAuthorForm = document.getElementById('add-author-form');
    if (addAuthorForm) {
        addAuthorForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('author-name')?.value;
            const newAuthor = {
                id: Date.now(),
                name: name || '',
                nationality: document.getElementById('author-nationality')?.value || '',
                birthYear: parseInt(document.getElementById('author-birth')?.value || '1900'),
                deathYear: document.getElementById('author-death')?.value ? parseInt(document.getElementById('author-death').value) : null,
                bio: document.getElementById('author-bio')?.value || '',
                initial: name ? name.charAt(0).toUpperCase() : '?'
            };
            
            authors.push(newAuthor);
            saveAllData();
            const modal = document.getElementById('add-author-modal');
            if (modal) modal.style.display = 'none';
            this.reset();
            displayAuthors();
            updateDashboardStats();
            
            // METTRE À JOUR LES SELECTS D'AUTEURS DANS LES MODALS
            loadAuthorsIntoSelect();
            
            alert('Auteur ajouté avec succès !');
        });
    }

    // Formulaire modifier auteur
    const editAuthorForm = document.getElementById('edit-author-form');
    if (editAuthorForm) {
        editAuthorForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const authorId = parseInt(document.getElementById('edit-author-id')?.value);
            const authorIndex = authors.findIndex(a => a.id === authorId);
            
            if (authorIndex !== -1) {
                const name = document.getElementById('edit-author-name')?.value;
                authors[authorIndex] = {
                    ...authors[authorIndex],
                    name: name || '',
                    nationality: document.getElementById('edit-author-nationality')?.value || '',
                    birthYear: parseInt(document.getElementById('edit-author-birth')?.value || '1900'),
                    deathYear: document.getElementById('edit-author-death')?.value ? parseInt(document.getElementById('edit-author-death').value) : null,
                    bio: document.getElementById('edit-author-bio')?.value || '',
                    initial: name ? name.charAt(0).toUpperCase() : '?'
                };
                
                saveAllData();
                const modal = document.getElementById('edit-author-modal');
                if (modal) modal.style.display = 'none';
                displayAuthors();
                displayBooks();
                updateDashboardStats();
                
                // METTRE À JOUR LES SELECTS D'AUTEURS
                loadAuthorsIntoSelect();
                
                alert('Auteur mis à jour avec succès !');
            }
        });
    }

    // Formulaire nouvel emprunt
    const addEmpruntForm = document.getElementById('add-emprunt-form');
    if (addEmpruntForm) {
        addEmpruntForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const bookId = parseInt(document.getElementById('emprunt-book')?.value);
            const book = books.find(b => b.id === bookId);
            
            if (!book) {
                alert('Livre non trouvé');
                return;
            }
            
            if (book.status === 'borrowed') {
                alert('Ce livre est déjà emprunté !');
                return;
            }
            
            const newEmprunt = {
                id: Date.now(),
                bookId: bookId,
                borrower: document.getElementById('emprunt-borrower')?.value || '',
                dateEmprunt: document.getElementById('emprunt-date')?.value || '',
                dateRetour: document.getElementById('emprunt-return')?.value || '',
                status: 'en-cours'
            };
            
            // Mettre à jour le statut du livre
            book.status = 'borrowed';
            
            emprunts.push(newEmprunt);
            saveAllData();
            const modal = document.getElementById('add-emprunt-modal');
            if (modal) modal.style.display = 'none';
            this.reset();
            displayEmprunts();
            displayBooks();
            updateDashboardStats();
            alert('Emprunt enregistré avec succès !');
        });
    }

    // Formulaire contact
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Merci pour votre message ! Nous vous répondrons bientôt.');
            this.reset();
        });
    }

    // Aperçu du message contact
    const messageInput = document.getElementById('message');
    if (messageInput) {
        messageInput.addEventListener('input', function() {
            const preview = document.getElementById('preview-content');
            const previewContainer = document.getElementById('message-preview');
            if (this.value.trim() !== '') {
                if (preview) preview.textContent = this.value;
                if (previewContainer) previewContainer.style.display = 'block';
            } else {
                if (previewContainer) previewContainer.style.display = 'none';
            }
        });
    }

    // Actualiser les suggestions
    const refreshSuggestions = document.getElementById('refresh-suggestions');
    if (refreshSuggestions) {
        refreshSuggestions.addEventListener('click', loadSuggestions);
    }

    // Charger les données initiales
    loadDashboardData();
    
    console.log('✅ Dashboard initialisé avec succès');
}

// === FILTRER ET TRIER LES LIVRES ===
function filterAndSortBooks() {
    const searchTerm = document.getElementById('collection-search')?.value.toLowerCase() || '';
    const status = document.getElementById('status-filter')?.value || 'all';
    const genre = document.getElementById('genre-filter')?.value || 'all';
    const sort = document.getElementById('sort-filter')?.value || 'title-asc';

    let filtered = [...books];

    // Filtre recherche
    if (searchTerm) {
        filtered = filtered.filter(book => 
            book.title.toLowerCase().includes(searchTerm) ||
            book.author.toLowerCase().includes(searchTerm) ||
            book.genre.toLowerCase().includes(searchTerm) ||
            (book.isbn && book.isbn.toLowerCase().includes(searchTerm))
        );
    }

    // Filtre statut
    if (status !== 'all') {
        filtered = filtered.filter(book => book.status === status);
    }

    // Filtre genre
    if (genre !== 'all') {
        filtered = filtered.filter(book => book.genre === genre);
    }

    // Tri
    filtered.sort((a, b) => {
        switch(sort) {
            case 'title-asc':
                return a.title.localeCompare(b.title);
            case 'title-desc':
                return b.title.localeCompare(a.title);
            case 'year-asc':
                return a.year - b.year;
            case 'year-desc':
                return b.year - a.year;
            case 'author-asc':
                return a.author.localeCompare(b.author);
            default:
                return 0;
        }
    });

    displayBooks(filtered);
}

// === AFFICHER LES LIVRES ===
function displayBooks(filteredBooks = books) {
    const grid = document.getElementById('collection-grid');
    if (!grid) return;

    grid.innerHTML = '';

    if (filteredBooks.length === 0) {
        grid.innerHTML = '<div style="grid-column: 1/-1; text-align: center; padding: 3rem; color: var(--text-light);"><i class="fas fa-search" style="font-size: 3rem; margin-bottom: 1rem; opacity: 0.5;"></i><p>Aucun livre trouvé.</p></div>';
        return;
    }

    const favorites = JSON.parse(localStorage.getItem('bibliotheca_favorites') || '[]');

    filteredBooks.forEach(book => {
        const isFavorite = favorites.includes(book.id);
        const card = document.createElement('div');
        card.className = 'collection-book-card';
        card.setAttribute('data-book-id', book.id);
        
        card.innerHTML = `
            <button class="favorite-btn ${isFavorite ? 'active' : ''}" data-book-id="${book.id}">
                <i class="${isFavorite ? 'fas' : 'far'} fa-heart"></i>
            </button>
            <button class="delete-btn" data-book-id="${book.id}">
                <i class="fas fa-trash"></i>
            </button>
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
            <div class="collection-book-status status-${book.status}">
                ${book.status === 'available' ? '🟢 Disponible' : 
                  book.status === 'borrowed' ? '🟡 Emprunté' : 
                  '🔴 Perdu'}
            </div>
        `;
        grid.appendChild(card);
    });

    // Événement pour cliquer sur une carte livre (fiche détaillée)
    grid.querySelectorAll('.collection-book-card').forEach(card => {
        card.addEventListener('click', function(e) {
            if (!e.target.closest('.favorite-btn') && !e.target.closest('.delete-btn')) {
                const bookId = parseInt(this.getAttribute('data-book-id'));
                showBookDetails(bookId);
            }
        });
    });

    // Événement pour favoris
    grid.querySelectorAll('.favorite-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const bookId = parseInt(this.getAttribute('data-book-id'));
            toggleFavorite(bookId);
        });
    });

    // Événement pour supprimer
    grid.querySelectorAll('.delete-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const bookId = parseInt(this.getAttribute('data-book-id'));
            deleteBook(bookId);
        });
    });
}

// === FICHE DÉTAILLÉE DU LIVRE ===
function showBookDetails(bookId) {
    const book = books.find(b => b.id === bookId);
    if (!book) return;

    const modal = document.getElementById('book-detail-modal');
    const content = document.getElementById('book-detail-content');
    
    if (!modal || !content) return;
    
    const empruntsLivre = emprunts.filter(e => e.bookId === bookId);
    const dernierEmprunt = empruntsLivre.length > 0 ? empruntsLivre[empruntsLivre.length - 1] : null;
    
    content.innerHTML = `
        <div style="display: flex; gap: 2rem; margin-bottom: 2rem;">
            <div style="flex-shrink: 0;">
                <img src="${book.cover}" alt="${book.title}" style="width: 200px; height: 300px; border-radius: 8px; object-fit: cover;">
            </div>
            <div style="flex: 1;">
                <h2 style="font-size: 1.8rem; margin-bottom: 1rem; color: var(--text);">${book.title}</h2>
                <p style="font-size: 1.2rem; color: var(--text-light); margin-bottom: 1rem;"><strong>Auteur:</strong> ${book.author}</p>
                <p style="margin-bottom: 0.5rem;"><strong>Genre:</strong> ${getGenreName(book.genre)}</p>
                <p style="margin-bottom: 0.5rem;"><strong>Année:</strong> ${book.year}</p>
                ${book.isbn ? `<p style="margin-bottom: 0.5rem;"><strong>ISBN:</strong> ${book.isbn}</p>` : ''}
                <p style="margin-bottom: 0.5rem;"><strong>Statut:</strong> <span class="status-${book.status}">${book.status === 'available' ? 'Disponible' : book.status === 'borrowed' ? 'Emprunté' : 'Perdu'}</span></p>
                
                ${dernierEmprunt ? `
                    <div style="background: var(--bg); padding: 1rem; border-radius: 8px; margin-top: 1rem;">
                        <h3 style="font-size: 1.1rem; margin-bottom: 0.5rem;">Dernier emprunt</h3>
                        <p><strong>Emprunteur:</strong> ${dernierEmprunt.borrower}</p>
                        <p><strong>Date d'emprunt:</strong> ${formatDate(dernierEmprunt.dateEmprunt)}</p>
                        <p><strong>Date de retour:</strong> ${formatDate(dernierEmprunt.dateRetour)}</p>
                        <p><strong>Statut:</strong> <span class="status-${dernierEmprunt.status}">${getStatusName(dernierEmprunt.status)}</span></p>
                    </div>
                ` : ''}
            </div>
        </div>
        
        ${book.description ? `
            <div style="margin-bottom: 2rem;">
                <h3 style="font-size: 1.2rem; margin-bottom: 0.5rem; color: var(--text);">Description</h3>
                <p style="color: var(--text-light); line-height: 1.6;">${book.description}</p>
            </div>
        ` : ''}
        
        <div style="display: flex; gap: 1rem; margin-top: 2rem;">
            <button class="btn btn-primary" id="edit-book-detail-btn" style="flex: 1;">
                <i class="fas fa-edit"></i> Modifier ce livre
            </button>
            <button class="btn" id="close-detail-btn" style="flex: 1; background: var(--border);">
                <i class="fas fa-times"></i> Fermer
            </button>
        </div>
    `;
    
    modal.style.display = 'block';
    
    // Bouton modifier dans la fiche détaillée
    const editBtn = document.getElementById('edit-book-detail-btn');
    if (editBtn) {
        editBtn.addEventListener('click', () => {
            modal.style.display = 'none';
            editBook(bookId);
        });
    }
    
    // Bouton fermer
    const closeBtn = document.getElementById('close-detail-btn');
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
        });
    }
}

// === MODIFIER UN LIVRE ===
function editBook(bookId) {
    const book = books.find(b => b.id === bookId);
    if (!book) return;

    document.getElementById('edit-book-id').value = book.id;
    document.getElementById('edit-book-title').value = book.title;
    
    // Charger les auteurs dans le select
    loadAuthorsIntoSelect();
    
    // Sélectionner l'auteur actuel
    setTimeout(() => {
        const authorSelect = document.getElementById('edit-book-author');
        if (authorSelect) {
            authorSelect.value = book.author;
            
            // Si l'auteur n'existe pas dans la liste, ajouter une option
            const existingOption = Array.from(authorSelect.options).find(opt => opt.value === book.author);
            if (!existingOption && book.author) {
                const option = document.createElement('option');
                option.value = book.author;
                option.textContent = book.author;
                authorSelect.insertBefore(option, authorSelect.lastChild);
                authorSelect.value = book.author;
            }
        }
    }, 100);
    
    document.getElementById('edit-book-genre').value = book.genre;
    document.getElementById('edit-book-year').value = book.year;
    document.getElementById('edit-book-isbn').value = book.isbn || '';
    document.getElementById('edit-book-description').value = book.description || '';
    document.getElementById('edit-book-status').value = book.status;
    document.getElementById('edit-book-cover').value = book.cover;
    
    const modal = document.getElementById('edit-book-modal');
    if (modal) modal.style.display = 'block';
}

// === SUPPRIMER UN LIVRE ===
function deleteBook(bookId) {
    if (!confirm('Êtes-vous sûr de vouloir supprimer ce livre ?')) return;
    
    books = books.filter(book => book.id !== bookId);
    emprunts = emprunts.filter(e => e.bookId !== bookId);
    
    // Supprimer des favoris
    let favorites = JSON.parse(localStorage.getItem('bibliotheca_favorites') || '[]');
    favorites = favorites.filter(id => id !== bookId);
    localStorage.setItem('bibliotheca_favorites', JSON.stringify(favorites));
    
    saveAllData();
    displayBooks();
    updateDashboardStats();
    displayFavorites();
    displayEmprunts();
    alert('Livre supprimé !');
}

// === AFFICHER LES AUTEURS ===
function displayAuthors(filteredAuthors = authors) {
    const grid = document.getElementById('authors-grid');
    if (!grid) return;

    grid.innerHTML = '';

    if (filteredAuthors.length === 0) {
        grid.innerHTML = '<div style="grid-column: 1/-1; text-align: center; padding: 3rem; color: var(--text-light);"><i class="fas fa-user-edit" style="font-size: 3rem; margin-bottom: 1rem; opacity: 0.5;"></i><p>Aucun auteur trouvé.</p></div>';
        return;
    }

    filteredAuthors.forEach(author => {
        const authorBooks = books.filter(b => b.author === author.name).length;
        const card = document.createElement('div');
        card.className = 'author-card';
        
        card.innerHTML = `
            <div class="author-actions">
                <button class="author-edit-btn" data-author-id="${author.id}">
                    <i class="fas fa-edit"></i>
                </button>
                <button class="author-delete-btn" data-author-id="${author.id}">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
            <div class="author-header">
                <div class="author-avatar">${author.initial}</div>
                <div>
                    <div class="author-name">${author.name}</div>
                    <div class="author-info">${author.nationality}</div>
                </div>
            </div>
            <div class="author-info"><strong>Année de naissance:</strong> ${author.birthYear}${author.deathYear ? ` - ${author.deathYear}` : ''}</div>
            <div class="author-info"><strong>Livres dans la bibliothèque:</strong> ${authorBooks}</div>
            ${author.bio ? `<div class="author-info" style="margin-top: 1rem;"><strong>Biographie:</strong> ${author.bio.substring(0, 100)}${author.bio.length > 100 ? '...' : ''}</div>` : ''}
        `;
        grid.appendChild(card);
    });

    // Ajouter la carte "Ajouter un auteur" à la fin de la grille
    const addCard = document.createElement('div');
    addCard.className = 'add-author-grid-item';
    addCard.innerHTML = `
        <div class="add-author-card" id="add-author-card">
            <div class="add-author-content">
                <div class="add-author-icon">
                    <i class="fas fa-plus-circle"></i>
                </div>
                <h3>Enregistrer un nouvel auteur</h3>
                <p>Cliquez ici pour ajouter un auteur</p>
            </div>
        </div>
    `;
    grid.appendChild(addCard);

    // Événement pour ouvrir le modal d'ajout
    const addAuthorCard = addCard.querySelector('.add-author-card');
    if (addAuthorCard) {
        addAuthorCard.addEventListener('click', () => {
            const modal = document.getElementById('add-author-modal');
            if (modal) modal.style.display = 'block';
        });
    }

    // Événement pour modifier
    grid.querySelectorAll('.author-edit-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const authorId = parseInt(this.getAttribute('data-author-id'));
            editAuthor(authorId);
        });
    });

    // Événement pour supprimer
    grid.querySelectorAll('.author-delete-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const authorId = parseInt(this.getAttribute('data-author-id'));
            deleteAuthor(authorId);
        });
    });
}

// === MODIFIER UN AUTEUR ===
function editAuthor(authorId) {
    const author = authors.find(a => a.id === authorId);
    if (!author) return;

    document.getElementById('edit-author-id').value = author.id;
    document.getElementById('edit-author-name').value = author.name;
    document.getElementById('edit-author-nationality').value = author.nationality;
    document.getElementById('edit-author-birth').value = author.birthYear;
    document.getElementById('edit-author-death').value = author.deathYear || '';
    document.getElementById('edit-author-bio').value = author.bio || '';
    
    const modal = document.getElementById('edit-author-modal');
    if (modal) modal.style.display = 'block';
}

// === SUPPRIMER UN AUTEUR ===
function deleteAuthor(authorId) {
    const author = authors.find(a => a.id === authorId);
    if (!author) return;

    // Vérifier si l'auteur a des livres
    const authorBooks = books.filter(b => b.author === author.name);
    if (authorBooks.length > 0) {
        if (!confirm(`Cet auteur a ${authorBooks.length} livre(s) dans la bibliothèque. Supprimer l'auteur supprimera aussi ses livres. Continuer ?`)) {
            return;
        }
        // Supprimer les livres de l'auteur
        books = books.filter(b => b.author !== author.name);
    }
    
    authors = authors.filter(a => a.id !== authorId);
    saveAllData();
    displayAuthors();
    displayBooks();
    updateDashboardStats();
    displayFavorites();
    alert('Auteur supprimé !');
}

// === BASculer FAVORIS ===
function toggleFavorite(bookId) {
    let favorites = JSON.parse(localStorage.getItem('bibliotheca_favorites') || '[]');
    const book = books.find(b => b.id === bookId);
    
    if (favorites.includes(bookId)) {
        favorites = favorites.filter(id => id !== bookId);
        if (book) book.favorite = false;
    } else {
        favorites.push(bookId);
        if (book) book.favorite = true;
    }
    
    localStorage.setItem('bibliotheca_favorites', JSON.stringify(favorites));
    displayBooks();
    displayFavorites();
    updateFavoritesCount();
}

// === METTRE À JOUR LE COMPTE DE FAVORIS ===
function updateFavoritesCount() {
    const favorites = JSON.parse(localStorage.getItem('bibliotheca_favorites') || '[]');
    const favoritesCount = document.getElementById('favorites-count');
    const favoritesCountDash = document.getElementById('favorites-count-dash');
    
    if (favoritesCount) favoritesCount.textContent = `${favorites.length} livres favoris`;
    if (favoritesCountDash) favoritesCountDash.textContent = favorites.length;
}

// === AFFICHER LES FAVORIS ===
function displayFavorites() {
    const grid = document.getElementById('favorites-grid');
    if (!grid) return;

    const favorites = JSON.parse(localStorage.getItem('bibliotheca_favorites') || '[]');
    const favoriteBooks = books.filter(book => favorites.includes(book.id));

    grid.innerHTML = '';

    if (favoriteBooks.length === 0) {
        grid.innerHTML = '<div style="grid-column: 1/-1; text-align: center; padding: 3rem; color: var(--text-light);"><i class="fas fa-heart" style="font-size: 3rem; margin-bottom: 1rem; opacity: 0.5;"></i><p>Aucun livre favori pour le moment.</p></div>';
        return;
    }

    updateFavoritesCount();

    favoriteBooks.forEach(book => {
        const card = document.createElement('div');
        card.className = 'collection-book-card';
        card.setAttribute('data-book-id', book.id);
        
        card.innerHTML = `
            <button class="favorite-btn active" data-book-id="${book.id}">
                <i class="fas fa-heart"></i>
            </button>
            <button class="delete-btn" data-book-id="${book.id}">
                <i class="fas fa-trash"></i>
            </button>
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
            <div class="collection-book-status status-${book.status}">
                ${book.status === 'available' ? '🟢 Disponible' : 
                  book.status === 'borrowed' ? '🟡 Emprunté' : 
                  '🔴 Perdu'}
            </div>
        `;
        grid.appendChild(card);
    });

    // Événement pour cliquer sur une carte
    grid.querySelectorAll('.collection-book-card').forEach(card => {
        card.addEventListener('click', function(e) {
            if (!e.target.closest('.favorite-btn') && !e.target.closest('.delete-btn')) {
                const bookId = parseInt(this.getAttribute('data-book-id'));
                showBookDetails(bookId);
            }
        });
    });

    // Événement pour favoris
    grid.querySelectorAll('.favorite-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const bookId = parseInt(this.getAttribute('data-book-id'));
            toggleFavorite(bookId);
        });
    });

    // Événement pour supprimer
    grid.querySelectorAll('.delete-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const bookId = parseInt(this.getAttribute('data-book-id'));
            deleteBook(bookId);
        });
    });
}

// === AFFICHER LES EMPRUNTS ===
function displayEmprunts() {
    const tbody = document.getElementById('emprunts-body');
    if (!tbody) return;

    tbody.innerHTML = '';

    if (emprunts.length === 0) {
        tbody.innerHTML = '<tr><td colspan="7" style="text-align: center; padding: 2rem; color: var(--text-light);"><i class="fas fa-exchange-alt" style="font-size: 2rem; margin-bottom: 1rem; opacity: 0.5;"></i><p>Aucun emprunt enregistré.</p></td></tr>';
        return;
    }

    emprunts.forEach(emprunt => {
        const book = books.find(b => b.id === emprunt.bookId);
        if (!book) return;

        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${emprunt.borrower}</td>
            <td>${formatDate(emprunt.dateEmprunt)}</td>
            <td>${formatDate(emprunt.dateRetour)}</td>
            <td><span class="status-badge status-${emprunt.status}">${getStatusName(emprunt.status)}</span></td>
            <td>
                ${emprunt.status === 'en-cours' ? `
                    <button class="btn btn-primary" style="padding: 0.5rem 1rem; font-size: 0.85rem; margin-right: 0.5rem;" data-emprunt-id="${emprunt.id}">Retourner</button>
                ` : ''}
                <button class="btn" style="padding: 0.5rem 1rem; font-size: 0.85rem; background: var(--danger); color: white;" data-emprunt-id="${emprunt.id}" data-action="delete">Supprimer</button>
            </td>
        `;
        tbody.appendChild(row);
    });

    // Bouton retourner
    tbody.querySelectorAll('.btn-primary').forEach(btn => {
        btn.addEventListener('click', function() {
            const empruntId = parseInt(this.getAttribute('data-emprunt-id'));
            returnBook(empruntId);
        });
    });

    // Bouton supprimer
    tbody.querySelectorAll('[data-action="delete"]').forEach(btn => {
        btn.addEventListener('click', function() {
            const empruntId = parseInt(this.getAttribute('data-emprunt-id'));
            deleteEmprunt(empruntId);
        });
    });
}

// === RETOURNER UN LIVRE ===
function returnBook(empruntId) {
    const emprunt = emprunts.find(e => e.id === empruntId);
    if (emprunt) {
        const book = books.find(b => b.id === emprunt.bookId);
        if (book) {
            book.status = 'available';
            emprunt.status = 'retourne';
            saveAllData();
            displayEmprunts();
            displayBooks();
            updateDashboardStats();
            alert('Livre retourné avec succès !');
        }
    }
}

// === SUPPRIMER UN EMPRUNT ===
function deleteEmprunt(empruntId) {
    if (!confirm('Êtes-vous sûr de vouloir supprimer cet emprunt ?')) return;
    
    const emprunt = emprunts.find(e => e.id === empruntId);
    if (emprunt && emprunt.status === 'en-cours') {
        const book = books.find(b => b.id === emprunt.bookId);
        if (book) {
            book.status = 'available';
        }
    }
    
    emprunts = emprunts.filter(e => e.id !== empruntId);
    saveAllData();
    displayEmprunts();
    displayBooks();
    updateDashboardStats();
    alert('Emprunt supprimé !');
}

// === CHARGER LES OPTIONS DE LIVRES POUR EMPRUNT ===
function loadBookOptionsForEmprunt() {
    const select = document.getElementById('emprunt-book');
    if (!select) return;
    
    select.innerHTML = '<option value="">Sélectionner un livre</option>';
    
    const availableBooks = books.filter(book => book.status === 'available');
    availableBooks.forEach(book => {
        const option = document.createElement('option');
        option.value = book.id;
        option.textContent = `${book.title} - ${book.author}`;
        select.appendChild(option);
    });
}

// === METTRE À JOUR LES STATISTIQUES ===
function updateDashboardStats() {
    // Total livres
    const totalBooksEl = document.getElementById('total-books');
    if (totalBooksEl) totalBooksEl.textContent = books.length;
    
    // Total auteurs
    const totalAuthorsEl = document.getElementById('total-authors');
    if (totalAuthorsEl) totalAuthorsEl.textContent = authors.length;
    
    // Livres disponibles
    const availableBooks = books.filter(book => book.status === 'available').length;
    const availableBooksEl = document.getElementById('available-books');
    if (availableBooksEl) availableBooksEl.textContent = availableBooks;
    
    // Livres empruntés
    const borrowedBooks = books.filter(book => book.status === 'borrowed').length;
    const borrowedBooksEl = document.getElementById('borrowed-books');
    if (borrowedBooksEl) borrowedBooksEl.textContent = borrowedBooks;
    
    // Taux d'emprunt
    const borrowRate = books.length > 0 ? Math.round((borrowedBooks / books.length) * 100) : 0;
    const borrowRateEl = document.getElementById('borrow-rate');
    if (borrowRateEl) borrowRateEl.textContent = `${borrowRate}%`;
    
    // Genres actifs
    const uniqueGenres = [...new Set(books.map(b => b.genre))];
    const activeGenresEl = document.getElementById('active-genres');
    if (activeGenresEl) activeGenresEl.textContent = uniqueGenres.length;
    
    // Compter par genre
    const genreCounts = {
        'fantaisie': books.filter(b => b.genre === 'fantaisie').length,
        'science-fiction': books.filter(b => b.genre === 'science-fiction').length,
        'roman-historique': books.filter(b => b.genre === 'roman-historique').length,
        'policier': books.filter(b => b.genre === 'policier').length,
        'biographie': books.filter(b => b.genre === 'biographie').length,
        'poesie': books.filter(b => b.genre === 'poesie').length
    };
    
    // Mettre à jour les comptes de genre
    const fantasyCount = document.getElementById('fantasy-count');
    if (fantasyCount) fantasyCount.textContent = genreCounts['fantaisie'] + ' livres';
    
    const scifiCount = document.getElementById('scifi-count');
    if (scifiCount) scifiCount.textContent = genreCounts['science-fiction'] + ' livres';
    
    const historicalCount = document.getElementById('historical-count');
    if (historicalCount) historicalCount.textContent = genreCounts['roman-historique'] + ' livres';
    
    const crimeCount = document.getElementById('crime-count');
    if (crimeCount) crimeCount.textContent = genreCounts['policier'] + ' livres';
    
    const biographyCount = document.getElementById('biography-count');
    if (biographyCount) biographyCount.textContent = genreCounts['biographie'] + ' livres';
    
    const poetryCount = document.getElementById('poetry-count');
    if (poetryCount) poetryCount.textContent = genreCounts['poesie'] + ' livres';
    
    // Mettre à jour le graphique Chart.js
    updateGenreChartJS();
    
    // Mettre à jour les favoris
    updateFavoritesCount();
}

// === METTRE À JOUR LE BADGE DE NOTIFICATION ===
function updateNotificationBadge() {
    const badge = document.querySelector('.notification-badge');
    if (badge) {
        const currentCount = parseInt(badge.textContent) || 0;
        badge.textContent = currentCount + 1;
    }
}

// === CHART.JS - GRAPHIQUE DES GENRES ===
function updateGenreChartJS() {
    const canvas = document.getElementById('genreChart');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    
    // Détruire l'instance précédente si elle existe
    if (chartInstance) {
        chartInstance.destroy();
    }
    
    // Compter les livres par genre
    const genreData = {
        'Fantaisie': books.filter(b => b.genre === 'fantaisie').length,
        'Science-Fiction': books.filter(b => b.genre === 'science-fiction').length,
        'Roman Historique': books.filter(b => b.genre === 'roman-historique').length,
        'Policier': books.filter(b => b.genre === 'policier').length,
        'Biographie': books.filter(b => b.genre === 'biographie').length,
        'Poésie': books.filter(b => b.genre === 'poesie').length,
        'Fiction': books.filter(b => b.genre === 'fiction').length
    };
    
    // Filtrer les genres avec 0 livre
    const genres = Object.keys(genreData).filter(g => genreData[g] > 0);
    const counts = genres.map(g => genreData[g]);
    
    chartInstance = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: genres,
            datasets: [{
                data: counts,
                backgroundColor: [
                    '#3b82f6', '#8b5cf6', '#10b981', '#f59e0b', 
                    '#ef4444', '#06b6d4', '#8b5cf6'
                ],
                borderWidth: 2,
                borderColor: '#ffffff'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'right',
                    labels: {
                        padding: 20,
                        usePointStyle: true,
                        pointStyle: 'circle'
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const label = context.label || '';
                            const value = context.raw || 0;
                            const total = context.dataset.data.reduce((a, b) => a + b, 0);
                            const percentage = Math.round((value / total) * 100);
                            return `${label}: ${value} livres (${percentage}%)`;
                        }
                    }
                }
            }
        }
    });
}

// === API OPENLIBRARY ===
async function loadSuggestions() {
    const container = document.getElementById('suggestions-list');
    if (!container) return;
    
    container.innerHTML = '<div style="text-align: center; padding: 2rem; color: var(--text-light);"><i class="fas fa-spinner fa-spin"></i> Chargement des suggestions...</div>';
    
    try {
        const response = await fetch('https://openlibrary.org/search.json?q=french+literature&limit=6');
        const data = await response.json();
        
        container.innerHTML = '';
        
        if (!data.docs || data.docs.length === 0) {
            container.innerHTML = '<div style="text-align: center; padding: 1rem; color: var(--text-light);">Aucune suggestion disponible</div>';
            return;
        }
        
        // Mettre à jour le KPI API
        const apiSuggestionsCount = document.getElementById('api-suggestions-count');
        if (apiSuggestionsCount) apiSuggestionsCount.textContent = data.docs.length;
        
        data.docs.slice(0, 3).forEach(book => {
            const coverId = book.cover_i;
            const coverUrl = coverId 
                ? `https://covers.openlibrary.org/b/id/${coverId}-M.jpg`
                : 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=400&q=80';
            
            const item = document.createElement('div');
            item.className = 'suggestion-item';
            item.innerHTML = `
                <div class="suggestion-cover" style="background-image: url('${coverUrl}')"></div>
                <div class="suggestion-info">
                    <div class="suggestion-title">${book.title || 'Titre inconnu'}</div>
                    <div class="suggestion-author">${book.author_name?.[0] || 'Auteur inconnu'}</div>
                    <div class="suggestion-year">${book.first_publish_year || ''}</div>
                </div>
            `;
            container.appendChild(item);
        });
        
        // Ajouter un livre de l'API à la collection locale (optionnel)
        if (data.docs[0] && !books.some(b => b.title === data.docs[0].title)) {
            const apiBook = data.docs[0];
            const newBook = {
                id: Date.now(),
                title: apiBook.title || 'Livre de l\'API',
                author: apiBook.author_name?.[0] || 'Auteur inconnu',
                genre: 'fiction',
                year: apiBook.first_publish_year || 2024,
                isbn: apiBook.isbn?.[0] || '',
                description: 'Ajouté depuis l\'API OpenLibrary',
                status: 'available',
                favorite: false,
                cover: apiBook.cover_i 
                    ? `https://covers.openlibrary.org/b/id/${apiBook.cover_i}-M.jpg`
                    : 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=400&q=80'
            };
            
            books.push(newBook);
            saveAllData();
            updateDashboardStats();
        }
        
    } catch (error) {
        console.error('Erreur API:', error);
        container.innerHTML = '<div style="text-align: center; padding: 1rem; color: var(--danger);">Erreur de chargement des suggestions</div>';
    }
}

// === CHARGER LES DONNÉES DU DASHBOARD ===
function loadDashboardData() {
    loadSuggestions();
    updateGenreChartJS();
}

// === FONCTIONS UTILITAIRES ===
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

function getStatusName(status) {
    const statusNames = {
        'en-cours': 'En cours',
        'retourne': 'Retourné',
        'retard': 'En retard'
    };
    return statusNames[status] || status;
}

function formatDate(dateString) {
    if (!dateString) return 'N/A';
    try {
        const date = new Date(dateString);
        return date.toLocaleDateString('fr-FR', { day: '2-digit', month: '2-digit', year: 'numeric' });
    } catch (e) {
        return dateString;
    }
}

// === REDIMENSIONNER LES GRAPHIQUES ===
window.addEventListener('resize', function() {
    const dashboard = document.getElementById('dashboard');
    if (dashboard && dashboard.classList.contains('active')) {
        updateGenreChartJS();
    }
});

// === INITIALISATION GLOBALE ===
document.addEventListener('DOMContentLoaded', function() {
    console.log('✅ Site Bibliotheca chargé');
    console.log('🔐 Identifiants : admin / admin123');
    console.log('💾 Persistance localStorage activée');
    
    // Initialiser la connexion
    setupLogin();
    
    // Vérifier si déjà connecté
    const savedLogin = localStorage.getItem('isLoggedIn');
    if (savedLogin === 'true') {
        console.log('🔓 Utilisateur déjà connecté, affichage du dashboard...');
        const loginPage = document.getElementById('login-page');
        const dashboardPage = document.getElementById('dashboard-page');
        
        if (loginPage) loginPage.style.display = 'none';
        if (dashboardPage) {
            dashboardPage.style.display = 'block';
            loadAllData();
            initDashboard();
        }
    } else {
        console.log('🔒 Aucun utilisateur connecté, affichage de la page de connexion');
    }
    
    console.log('📊 Chart.js intégré');
    console.log('🔍 CRUD complet avec tri et fiches détaillées');
    console.log('👥 Synchronisation auteurs/livres activée');
});
