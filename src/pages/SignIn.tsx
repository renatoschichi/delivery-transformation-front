import googleLogo from '../assets/images/google-symbol.png';
import { SignUpButton } from '../components/Button/SignUpButton';
import { getAuth, GoogleAuthProvider, signInWithPopup } from '@firebase/auth';
import { useNavigate } from 'react-router';
import { useState } from 'react';
import '../styles/signin.scss';
import '../styles/button.scss';

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

            <div className="container-images" onClick={() => signInWithGoogle()}>
                <img src={googleLogo} alt="Google Logo" className="img google-img" />
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
                <button id="signInButton">Fazer login</button>
                <div className="span-content">
                    <span>ou</span>
                </div>
                <SignUpButton />
            </div>

            </div>
    );
}

export default SignInPage;