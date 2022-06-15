import '../styles/signin.scss';
import '../styles/global.scss';
import '../styles/button.scss';
import appleLogo from '../assets/images/apple-logo.png';
import googleLogo from '../assets/images/google-symbol.png';
import facebookLogo from '../assets/images/facebook.png';
import { SignInButton } from '../components/Button/SignInButton';
import { SignUpButton } from '../components/Button/SignUpButton';
import { Navbar } from '../components/Navbar/Navbar';

export function SignIn() {

    return (
        <div className="container">
        <Navbar />
            <h1>
                Faça o login para concluir seu pedido
            </h1>

            <span>entrar com:</span>

            <div className="container-images">
                <img src={facebookLogo} alt="Facebook Logo" />
                <img src={googleLogo} alt="Google Logo" className="google-img" />
                <img src={appleLogo} alt="Apple Logo" />
            </div>

            <div className="form">
                <input
                    className="login-input"
                    placeholder="Usuário"
                    type="text"
                    id="email-input"
                />
                <input
                    className="login-input"
                    placeholder="Senha"
                    type="password"
                    id="password-input"
                />
                <SignInButton />
                <div className="span-content">
                    <span>ou</span>
                </div>
                <SignUpButton />
            </div>

            </div>
    );
}