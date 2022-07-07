import '../styles/sidebar.scss';
import '../styles/button.scss';
import '../styles/navbar.scss';
import '../styles/home.scss';
import mrshake1 from '../assets/images/mrshake1.jpg';
import mrshake2 from '../assets/images/mrshake2.jpg';
import mrshake3 from '../assets/images/mrshake3.jpg';
import React from "react";
import { getAuth, signOut } from "firebase/auth";
import { Navbar } from "../components/Navbar/Navbar";
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { red } from '@mui/material/colors';

export interface IHomePageProps {}

const HomePage: React.FunctionComponent<IHomePageProps> = (props) => {
    const auth = getAuth();

    return (
        <div>
            <Navbar />
            <div className="container-home">
                <div>
                    <h3>Qual o seu pedido de hoje?</h3>
                    <Paper
                    component="form"
                    sx={{ p: '2px 4px', display: 'flex' }}
                  >
                    <SearchIcon sx={{ p: '10px', color: red[500] }} />
                    <InputBase
                      placeholder="Pesquisar"
                    />
                  </Paper>
                </div>
                <div className="offers-gallery">
                  <h3>Ofertas do dia</h3>
                  <div className="mrshake-gallery">
                    <img src={mrshake1} alt="Mr Shake" />
                    <img src={mrshake2} alt="Mr Shake" />
                    <img src={mrshake3} alt="Mr Shake" />
                  </div>
                </div>
            </div>
            {/* <button id="signOutButton" onClick={() => signOut(auth)}>Sair da conta</button> */}
        </div>
    );
}

export default HomePage;