<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bibliotheca - Connexion</title>
    <link rel="stylesheet" href="styles.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        .login-container {
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            background: linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%);
            padding: 1rem;
        }

        .login-card {
            background: white;
            padding: 3rem;
            border-radius: 16px;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
            width: 100%;
            max-width: 400px;
            text-align: center;
        }

        .login-logo {
            font-size: 2.5rem;
            color: #1e40af;
            margin-bottom: 1.5rem;
        }

        .login-title {
            font-size: 1.75rem;
            font-weight: 700;
            color: #1f2937;
            margin-bottom: 0.5rem;
        }

        .login-subtitle {
            color: #6b7280;
            margin-bottom: 2rem;
        }

        .login-form {
            margin-top: 2rem;
        }

        .form-group {
            margin-bottom: 1.5rem;
            text-align: left;
        }

        .form-group label {
            display: block;
            margin-bottom: 0.5rem;
            font-weight: 600;
            color: #374151;
        }

        .form-group input {
            width: 100%;
            padding: 0.75rem 1rem;
            border: 2px solid #e5e7eb;
            border-radius: 8px;
            font-size: 1rem;
            transition: all 0.3s;
        }

        .form-group input:focus {
            outline: none;
            border-color: #1e40af;
            box-shadow: 0 0 0 3px rgba(30, 64, 175, 0.1);
        }

        .login-btn {
            width: 100%;
            padding: 0.875rem;
            background: linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%);
            color: white;
            border: none;
            border-radius: 8px;
            font-size: 1rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s;
            margin-top: 1rem;
        }

        .login-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(30, 64, 175, 0.3);
        }

        .login-error {
            color: #ef4444;
            margin-top: 1rem;
            font-size: 0.875rem;
            display: none;
        }

        .login-footer {
            margin-top: 2rem;
            color: #6b7280;
            font-size: 0.875rem;
        }

        .remember-me {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            margin-top: 1rem;
        }

        .remember-me input {
            width: auto;
        }
    </style>
</head>
<body>
    <div class="login-container">
        <div class="login-card">
            <div class="login-logo">
                <i class="fas fa-book"></i>
            </div>
            <h1 class="login-title">Bibliotheca</h1>
            <p class="login-subtitle">Système de gestion de bibliothèque</p>
            
            <form class="login-form" id="login-form">
                <div class="form-group">
                    <label for="username">Nom d'utilisateur</label>
                    <input type="text" id="username" placeholder="admin" required>
                </div>
                
                <div class="form-group">
                    <label for="password">Mot de passe</label>
                    <input type="password" id="password" placeholder="••••••••" required>
                </div>
                
                <div class="remember-me">
                    <input type="checkbox" id="remember">
                    <label for="remember">Se souvenir de moi</label>
                </div>
                
                <div class="login-error" id="login-error">
                    Identifiants incorrects. Veuillez réessayer.
                </div>
                
                <button type="submit" class="login-btn">
                    <i class="fas fa-sign-in-alt"></i> Se connecter
                </button>
            </form>
            
            <div class="login-footer">
                <p>Identifiants par défaut : admin / admin123</p>
            </div>
        </div>
    </div>

    <script>
        document.getElementById('login-form').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            const errorElement = document.getElementById('login-error');
            
            // Identifiants par défaut
            const validUsername = 'admin';
            const validPassword = 'admin123';
            
            if (username === validUsername && password === validPassword) {
                // Stocker l'état de connexion dans localStorage
                localStorage.setItem('isLoggedIn', 'true');
                localStorage.setItem('username', username);
                
                // Rediriger vers le tableau de bord
                window.location.href = 'index.html';
            } else {
                errorElement.style.display = 'block';
                // Effacer les champs
                document.getElementById('password').value = '';
                // Secouer l'animation
                document.querySelector('.login-card').style.animation = 'shake 0.5s';
                setTimeout(() => {
                    document.querySelector('.login-card').style.animation = '';
                }, 500);
            }
        });

        // Vérifier si "Se souvenir de moi" était coché
        window.addEventListener('DOMContentLoaded', () => {
            if (localStorage.getItem('rememberUsername') === 'true') {
                document.getElementById('username').value = localStorage.getItem('savedUsername') || '';
                document.getElementById('remember').checked = true;
            }
        });

        // Gérer "Se souvenir de moi"
        document.getElementById('remember').addEventListener('change', function(e) {
            if (e.target.checked) {
                localStorage.setItem('rememberUsername', 'true');
                localStorage.setItem('savedUsername', document.getElementById('username').value);
            } else {
                localStorage.removeItem('rememberUsername');
                localStorage.removeItem('savedUsername');
            }
        });

        // Ajouter l'animation shake au CSS
        const style = document.createElement('style');
        style.textContent = `
            @keyframes shake {
                0%, 100% { transform: translateX(0); }
                10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
                20%, 40%, 60%, 80% { transform: translateX(5px); }
            }
        `;
        document.head.appendChild(style);
    </script>
</body>
</html>
