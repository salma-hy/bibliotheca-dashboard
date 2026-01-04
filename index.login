<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bibliotheca - Connexion</title>
    <link rel="stylesheet" href="styles.css">
    <style>
        :root {
            --primary-dark: #1e3a8a;
            --primary: #2563eb;
            --primary-light: #60a5fa;
            --secondary: #7c3aed;
            --accent: #f59e0b;
            --success: #10b981;
            --warning: #f59e0b;
            --danger: #ef4444;
            --text: #f8fafc;
            --text-light: #cbd5e1;
            --bg: #0f172a;
            --card-bg: #1e293b;
            --border: #334155;
            --shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
            --shadow-md: 0 10px 15px rgba(0, 0, 0, 0.3);
        }

        body {
            background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            font-family: 'Georgia', serif;
        }

        .login-container {
            width: 100%;
            max-width: 400px;
            padding: 2rem;
        }

        .login-card {
            background: var(--card-bg);
            padding: 3rem;
            border-radius: 20px;
            box-shadow: var(--shadow-md);
            border: 1px solid var(--border);
            text-align: center;
        }

        .login-logo {
            font-size: 3rem;
            margin-bottom: 1.5rem;
            background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        .login-title {
            font-size: 2rem;
            margin-bottom: 0.5rem;
            color: var(--text);
            font-weight: 700;
        }

        .login-subtitle {
            color: var(--text-light);
            margin-bottom: 2rem;
            font-size: 1rem;
        }

        .form-group {
            margin-bottom: 1.5rem;
            text-align: left;
        }

        .form-group label {
            display: block;
            margin-bottom: 0.5rem;
            color: var(--text-light);
            font-weight: 500;
        }

        .form-group input {
            width: 100%;
            padding: 0.875rem 1rem;
            background: #0f172a;
            border: 2px solid var(--border);
            border-radius: 12px;
            color: var(--text);
            font-size: 1rem;
            transition: all 0.3s;
        }

        .form-group input:focus {
            outline: none;
            border-color: var(--primary);
            box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
        }

        .login-btn {
            width: 100%;
            padding: 1rem;
            background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
            color: white;
            border: none;
            border-radius: 12px;
            font-size: 1.1rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s;
            margin-top: 1rem;
        }

        .login-btn:hover {
            transform: translateY(-2px);
            box-shadow: var(--shadow-md);
        }

        .login-footer {
            margin-top: 2rem;
            color: var(--text-light);
            font-size: 0.9rem;
        }

        .error-message {
            color: var(--danger);
            margin-top: 1rem;
            display: none;
        }
    </style>
</head>
<body>
    <div class="login-container">
        <div class="login-card">
            <div class="login-logo">📚</div>
            <h1 class="login-title">Bibliotheca</h1>
            <p class="login-subtitle">Accédez à votre espace administrateur</p>
            
            <form id="login-form">
                <div class="form-group">
                    <label for="username">Nom d'utilisateur ou Email</label>
                    <input type="text" id="username" name="username" required placeholder="admin@bibliotheca.fr">
                </div>
                
                <div class="form-group">
                    <label for="password">Mot de passe</label>
                    <input type="password" id="password" name="password" required placeholder="••••••••">
                </div>
                
                <div class="error-message" id="error-message">Identifiants incorrects</div>
                
                <button type="submit" class="login-btn">Se connecter</button>
            </form>
            
            <div class="login-footer">
                <p>© 2024 Bibliotheca - Tous droits réservés</p>
            </div>
        </div>
    </div>

    <script>
        document.getElementById('login-form').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            
            // Validation simple (dans un vrai système, cela serait sécurisé avec un backend)
            if ((username === 'admin' || username === 'admin@bibliotheca.fr') && password === 'admin123') {
                // Stocker l'état de connexion
                localStorage.setItem('isLoggedIn', 'true');
                // Rediriger vers la page principale
                window.location.href = 'index.html';
            } else {
                document.getElementById('error-message').style.display = 'block';
            }
        });

        // Vérifier si déjà connecté
        if (localStorage.getItem('isLoggedIn') === 'true') {
            window.location.href = 'index.html';
        }
    </script>
</body>
</html>
