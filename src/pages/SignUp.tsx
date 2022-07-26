import googleLogo from '../assets/images/google-symbol.png';
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
            <img src={googleLogo} alt="Google Logo" className="img google-img" />
        </div>

        <div className="form">
            <input
                className="login-input"
                placeholder="Nome"
                type="text"
                id="email-input"
            />
            <input
                className="login-input"
                placeholder="CPF"
                type="number"
                id="password-input"
            />
            <input
                className="login-input"
                placeholder="E-mail"
                type="email"
                id="password-input"
            />
             <input
                className="login-input"
                placeholder="Senha"
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