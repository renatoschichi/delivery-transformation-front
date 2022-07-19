import appleLogo from '../assets/images/apple-logo.png';
import googleLogo from '../assets/images/google-symbol.png';
import facebookLogo from '../assets/images/facebook.png';
import '../styles/signin.scss';
import '../styles/button.scss';
import { SignUpButton } from '../components/Button/SignUpButton';

function redirectToLogin() {
    window.location.href = '/login';
}

export function SignUp() {
    return (
        <div className="container">
        <h1>
            Realize o seu cadastro
        </h1>

        <div className="container-images">
            <img src={facebookLogo} alt="Facebook Logo" />
            <img src={googleLogo} alt="Google Logo" className="google-img" />
            <img src={appleLogo} alt="Apple Logo" />
        </div>

        <div className="form">
            <input
                className="login-input"
                placeholder="E-mail"
                type="text"
                id="email-input"
            />
            <input
                className="login-input"
                placeholder="Senha"
                type="password"
                id="password-input"
            />
            <input
                className="login-input"
                placeholder="Nome"
                type="password"
                id="password-input"
            />
             <input
                className="login-input"
                placeholder="CPF"
                type="password"
                id="password-input"
            />
            <SignUpButton />
            <div className="span-content">
                <span>Já tem uma conta?</span>
            </div>
            <button id="signInButton" onClick={redirectToLogin}>Entrar</button>
        </div>

        </div>
    );
}