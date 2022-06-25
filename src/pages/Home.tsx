import { Sidebar } from "../components/Sidebar/Sidebar";
import '../styles/sidebar.scss';
import '../styles/button.scss';
import React from "react";
import { getAuth, signOut } from "firebase/auth";

export interface IHomePageProps {}

const HomePage: React.FunctionComponent<IHomePageProps> = (props) => {
    const auth = getAuth();

    return (
        <div>
            <Sidebar />
            <h1>Home Page</h1>
            <button id="signOutButton" onClick={() => signOut(auth)}>Sair da conta</button>
        </div>
    );
}

export default HomePage;