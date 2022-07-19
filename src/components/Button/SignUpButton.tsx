function redirectToSignUp() {
    window.location.href = '/cadastro';
}

export function SignUpButton() {
    return (
        <div>
            <button
                id="signUpButton"
                onClick={redirectToSignUp}
            >Cadastre-se</button>
        </div>
    );
}