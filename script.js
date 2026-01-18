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
            id: 1,
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
            id: 2,
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
            id: 3,
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
            id: 4,
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
            id: 5,
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
            id: 1, 
            name: 'J.K. Rowling', 
            nationality: 'Britannique', 
            birthYear: 1965,
            deathYear: null,
            bio: 'Auteure de la saga Harry Potter.',
            initial: 'J'
        },
        { 
            id: 2, 
            name: 'J.R.R. Tolkien', 
            nationality: 'Britannique', 
            birthYear: 1892,
            deathYear: 1973,
            bio: 'Auteur du Seigneur des Anneaux et du Hobbit.',
            initial: 'J'
        },
        { 
            id: 3, 
            name: 'Frank Herbert', 
            nationality: 'Américain', 
            birthYear: 1920,
            deathYear: 1986,
            bio: 'Auteur de la série Dune.',
            initial: 'F'
        },
        { 
            id: 4, 
            name: 'Victor Hugo', 
            nationality: 'Français', 
            birthYear: 1802,
            deathYear: 1885,
            bio: 'Grand écrivain français, auteur des Misérables.',
            initial: 'V'
        },
        { 
            id: 5, 
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
            id: 1,
            bookId: 2,
            borrower: 'Jean Dupont',
            dateEmprunt: '2024-02-01',
            dateRetour: '2024-03-01',
            status: 'en-cours'
        },
        {
            id: 2,
            bookId: 4,
            borrower: 'Marie Martin',
            dateEmprunt: '2024-01-15',
            dateRetour: '2024-02-15',
            status: 'retourne'
        }
    ];

    saveAllData();
}

// === CONNEXION SIMPLIFIÉE ===
function handleLogin() {
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const errorMessage = document.getElementById('error-message');
    const loginBtn = document.getElementById('login-btn');
    
    if (!usernameInput || !passwordInput || !errorMessage || !loginBtn) {
        console.error('❌ Éléments de connexion non trouvés');
        return;
    }
    
    // Événement sur le bouton de connexion
    loginBtn.addEventListener('click', function() {
        const username = usernameInput.value;
        const password = passwordInput.value;
        
        console.log('Tentative de connexion avec:', username, password);
        
        if (username === 'admin' && password === 'admin123') {
            console.log('✅ Connexion réussie!');
            localStorage.setItem('isLoggedIn', 'true');
            
            // Masquer la page de connexion
            const loginPage = document.getElementById('login-page');
            if (loginPage) loginPage.style.display = 'none';
            
            // Afficher le dashboard
            const dashboardPage = document.getElementById('dashboard-page');
            if (dashboardPage) {
                dashboardPage.style.display = 'block';
                
                // Charger les données
                loadAllData();
                
                // Initialiser le dashboard
                setTimeout(() => {
                    initDashboard();
                }, 100);
            }
            
            errorMessage.style.display = 'none';
        } else {
            console.log('❌ Identifiants incorrects');
            errorMessage.style.display = 'block';
        }
    });
    
    // Permettre aussi la connexion avec la touche Entrée
    [usernameInput, passwordInput].forEach(input => {
        input.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                loginBtn.click();
            }
        });
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

// === INITIALISATION DU DASHBOARD ===
function initDashboard() {
    console.log('🚀 Initialisation du dashboard...');
    
    // Charger les auteurs dans les selects
    loadAuthorsIntoSelect();
    
    // Mettre à jour toutes les vues
    updateDashboardStats();
    displayBooks();
    displayAuthors();
    displayFavorites();
    displayEmprunts();
    loadBookOptionsForEmprunt();
    
    // Setup navigation
    setupNavigation();
    
    // Setup modals
    setupModals();
    
    // Setup formulaires
    setupForms();
    
    // Setup recherche
    setupSearch();
    
    // Charger les suggestions API
    loadSuggestions();
    updateGenreChartJS();
    
    console.log('✅ Dashboard initialisé avec succès');
}

// === SETUP NAVIGATION ===
function setupNavigation() {
    // Navigation entre pages
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
                
                // Recharger certaines données si nécessaire
                if (pageId === 'dashboard') {
                    updateDashboardStats();
                    updateGenreChartJS();
                }
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
                document.getElementById('error-message').style.display = 'none';
                // Réinitialiser les champs
                const username = document.getElementById('username');
                const password = document.getElementById('password');
                if (username) username.value = '';
                if (password) password.value = '';
            }
        });
    }
}

// === SETUP MODALS ===
function setupModals() {
    // Boutons d'ouverture de modals
    const addBookBtn = document.getElementById('add-book-btn');
    if (addBookBtn) {
        addBookBtn.addEventListener('click', () => {
            loadAuthorsIntoSelect();
            document.getElementById('add-book-modal').style.display = 'block';
        });
    }
    
    const addAuthorBtn = document.getElementById('add-author-btn');
    if (addAuthorBtn) {
        addAuthorBtn.addEventListener('click', () => {
            document.getElementById('add-author-modal').style.display = 'block';
        });
    }
    
    const addEmpruntBtn = document.getElementById('add-emprunt-btn');
    if (addEmpruntBtn) {
        addEmpruntBtn.addEventListener('click', () => {
            loadBookOptionsForEmprunt();
            document.getElementById('add-emprunt-modal').style.display = 'block';
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
    
    // Gérer la sélection "Nouvel auteur"
    const authorSelect = document.getElementById('book-author');
    const newAuthorFields = document.getElementById('new-author-fields');
    if (authorSelect && newAuthorFields) {
        authorSelect.addEventListener('change', function() {
            newAuthorFields.style.display = this.value === "new_author" ? 'block' : 'none';
        });
    }
    
    const editAuthorSelect = document.getElementById('edit-book-author');
    const editNewAuthorFields = document.getElementById('edit-new-author-fields');
    if (editAuthorSelect && editNewAuthorFields) {
        editAuthorSelect.addEventListener('change', function() {
            editNewAuthorFields.style.display = this.value === "new_author" ? 'block' : 'none';
        });
    }
}

// === SETUP FORMULAIRES ===
function setupForms() {
    // Formulaire ajouter livre
    const addBookForm = document.getElementById('add-book-form');
    if (addBookForm) {
        addBookForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            let authorName = document.getElementById('book-author').value;
            
            // Si nouvel auteur
            if (authorName === "new_author") {
                const newName = document.getElementById('new-author-name').value;
                const newNationality = document.getElementById('new-author-nationality').value;
                const newBirth = document.getElementById('new-author-birth').value;
                
                if (!newName || !newNationality || !newBirth) {
                    alert('Veuillez remplir tous les champs du nouvel auteur');
                    return;
                }
                
                // Créer le nouvel auteur
                authors.push({
                    id: Date.now(),
                    name: newName,
                    nationality: newNationality,
                    birthYear: parseInt(newBirth),
                    deathYear: null,
                    bio: '',
                    initial: newName.charAt(0).toUpperCase()
                });
                
                authorName = newName;
                loadAuthorsIntoSelect();
            }
            
            // Ajouter le livre
            books.push({
                id: Date.now(),
                title: document.getElementById('book-title').value,
                author: authorName,
                genre: document.getElementById('book-genre').value,
                year: parseInt(document.getElementById('book-year').value),
                isbn: document.getElementById('book-isbn').value || '',
                description: document.getElementById('book-description').value || '',
                status: document.getElementById('book-status').value,
                favorite: false,
                cover: document.getElementById('book-cover').value || 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80'
            });
            
            saveAllData();
            document.getElementById('add-book-modal').style.display = 'none';
            this.reset();
            document.getElementById('new-author-fields').style.display = 'none';
            
            displayBooks();
            updateDashboardStats();
            loadBookOptionsForEmprunt();
            alert('Livre ajouté avec succès !');
        });
    }
    
    // Formulaire modifier livre
    const editBookForm = document.getElementById('edit-book-form');
    if (editBookForm) {
        editBookForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const bookId = parseInt(document.getElementById('edit-book-id').value);
            const bookIndex = books.findIndex(b => b.id === bookId);
            
            if (bookIndex !== -1) {
                let authorName = document.getElementById('edit-book-author').value;
                
                // Si nouvel auteur
                if (authorName === "new_author") {
                    const newName = document.getElementById('edit-new-author-name').value;
                    const newNationality = document.getElementById('edit-new-author-nationality').value;
                    const newBirth = document.getElementById('edit-new-author-birth').value;
                    
                    if (!newName || !newNationality || !newBirth) {
                        alert('Veuillez remplir tous les champs du nouvel auteur');
                        return;
                    }
                    
                    // Créer le nouvel auteur
                    authors.push({
                        id: Date.now(),
                        name: newName,
                        nationality: newNationality,
                        birthYear: parseInt(newBirth),
                        deathYear: null,
                        bio: '',
                        initial: newName.charAt(0).toUpperCase()
                    });
                    
                    authorName = newName;
                    loadAuthorsIntoSelect();
                }
                
                // Mettre à jour le livre
                books[bookIndex] = {
                    ...books[bookIndex],
                    title: document.getElementById('edit-book-title').value,
                    author: authorName,
                    genre: document.getElementById('edit-book-genre').value,
                    year: parseInt(document.getElementById('edit-book-year').value),
                    isbn: document.getElementById('edit-book-isbn').value,
                    description: document.getElementById('edit-book-description').value,
                    status: document.getElementById('edit-book-status').value,
                    cover: document.getElementById('edit-book-cover').value
                };
                
                saveAllData();
                document.getElementById('edit-book-modal').style.display = 'none';
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
            
            const name = document.getElementById('author-name').value;
            authors.push({
                id: Date.now(),
                name: name,
                nationality: document.getElementById('author-nationality').value,
                birthYear: parseInt(document.getElementById('author-birth').value),
                deathYear: document.getElementById('author-death').value ? parseInt(document.getElementById('author-death').value) : null,
                bio: document.getElementById('author-bio').value || '',
                initial: name.charAt(0).toUpperCase()
            });
            
            saveAllData();
            document.getElementById('add-author-modal').style.display = 'none';
            this.reset();
            displayAuthors();
            updateDashboardStats();
            loadAuthorsIntoSelect();
            alert('Auteur ajouté avec succès !');
        });
    }
    
    // Formulaire nouvel emprunt
    const addEmpruntForm = document.getElementById('add-emprunt-form');
    if (addEmpruntForm) {
        addEmpruntForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const bookId = parseInt(document.getElementById('emprunt-book').value);
            const book = books.find(b => b.id === bookId);
            
            if (!book) {
                alert('Livre non trouvé');
                return;
            }
            
            if (book.status === 'borrowed') {
                alert('Ce livre est déjà emprunté !');
                return;
            }
            
            emprunts.push({
                id: Date.now(),
                bookId: bookId,
                borrower: document.getElementById('emprunt-borrower').value,
                dateEmprunt: document.getElementById('emprunt-date').value,
                dateRetour: document.getElementById('emprunt-return').value,
                status: 'en-cours'
            });
            
            // Mettre
