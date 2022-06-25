import '../styles/signin.scss';
import '../styles/button.scss';
import appleLogo from '../assets/images/apple-logo.png';
import googleLogo from '../assets/images/google-symbol.png';
import facebookLogo from '../assets/images/facebook.png';
import { SignUpButton } from '../components/Button/SignUpButton';
import { getAuth, GoogleAuthProvider, signInWithPopup } from '@firebase/auth';
import { useNavigate } from 'react-router';
import { useState } from 'react';

export interface ILoginPageProps {}

const SignInPage: React.FunctionComponent<ILoginPageProps> = (props) => {
    const auth = getAuth();
    const navigate = useNavigate();
    const [authing, setAuthing] = useState(false);

    const signInWithGoogle = async () => {
        setAuthing(true);

        signInWithPopup(auth, new GoogleAuthProvider())
            .then((response) => {
                console.log(response.user.uid);
                navigate('/');
            })
            .catch((error) => {
                console.log(error);
                setAuthing(false);
            });
    };

    return (
        <div className="container">
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
                <button id="signInButton" onClick={() => signInWithGoogle()} disabled={authing}>Fazer login</button>
                <div className="span-content">
                    <span>ou</span>
                </div>
                <SignUpButton />
            </div>

            </div>
    );
}

export default SignInPage;