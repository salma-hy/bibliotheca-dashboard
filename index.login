<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bibliotheca - Connexion</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        :root {
            --primary: #1e40af;
            --primary-dark: #1e3a8a;
            --primary-light: #3b82f6;
            --text: #1f2937;
            --text-light: #6b7280;
            --bg: #f8fafc;
            --white: #ffffff;
            --border: #e5e7eb;
            --shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            background: linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%);
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px;
        }

        .login-container {
            width: 100%;
            max-width: 420px;
        }

        .login-card {
            background: var(--white);
            padding: 3rem;
            border-radius: 16px;
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
            border: 1px solid var(--border);
            text-align: center;
        }

        .login-logo {
            font-size: 3.5rem;
            margin-bottom: 1.5rem;
            color: var(--primary);
        }

        .login-title {
            font-size: 2rem;
            margin-bottom: 0.5rem;
            color: var(--text);
            font-weight: 700;
        }

        .login-subtitle {
            color: var(--text-light);
            margin-bottom: 2.5rem;
            font-size: 1rem;
        }

        .form-group {
            margin-bottom: 1.5rem;
            text-align: left;
        }

        .form-group label {
            display: block;
            margin-bottom: 0.5rem;
            color: var(--text);
            font-weight: 500;
            font-size: 0.95rem;
        }

        .form-group input {
            width: 100%;
            padding: 0.875rem 1rem;
            border: 2px solid var(--border);
            border-radius: 10px;
            font-size: 1rem;
            transition: all 0.3s;
            background: var(--bg);
        }

        .form-group input:focus {
            outline: none;
            border-color: var(--primary);
            box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        }

        .login-btn {
            width: 100%;
            padding: 1rem;
            background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
            color: white;
            border: none;
            border-radius: 10px;
            font-size: 1.1rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s;
            margin-top: 1rem;
        }

        .login-btn:hover {
            transform: translateY(-2px);
            box-shadow: var(--shadow);
        }

        .error-message {
            color: #ef4444;
            margin-top: 1rem;
            font-size: 0.9rem;
            display: none;
        }

        .login-footer {
            margin-top: 2rem;
            color: var(--text-light);
            font-size: 0.85rem;
        }

        .demo-credentials {
            background: var(--bg);
            padding: 1rem;
            border-radius: 8px;
            margin-top: 1.5rem;
            text-align: left;
            font-size: 0.85rem;
            color: var(--text-light);
        }

        .demo-credentials strong {
            color: var(--text);
        }
    </style>
</head>
<body>
    <div class="login-container">
        <div class="login-card">
            <div class="login-logo"><i class="fas fa-book"></i></div>
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

            <div class="demo-credentials">
                <p><strong>Identifiants de démonstration :</strong></p>
                <p>Nom d'utilisateur: <strong>admin</strong></p>
                <p>Mot de passe: <strong>admin123</strong></p>
            </div>
            
            <div class="login-footer">
                <p>© 2024 Bibliotheca - Système de gestion de bibliothèque</p>
            </div>
        </div>
    </div>

    <script>
        document.getElementById('login-form').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            
            if ((username === 'admin' || username === 'admin@bibliotheca.fr') && password === 'admin123') {
                localStorage.setItem('isLoggedIn', 'true');
                localStorage.setItem('username', username);
                window.location.href = 'index.html';
            } else {
                document.getElementById('error-message').style.display = 'block';
            }
        });

        if (localStorage.getItem('isLoggedIn') === 'true') {
            window.location.href = 'index.html';
        }
    </script>
</body>
</html>
