import React from "react";
import { getAuth, signOut } from "firebase/auth";
import { Navbar } from "../components/Navbar/Navbar";
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { red } from '@mui/material/colors';
import { Carousel } from '../components/Carousel/Carousel';
import { MenuCard } from '../components/MenuCard/MenuCard';
import '../styles/sidebar.scss';
import '../styles/button.scss';
import '../styles/navbar.scss';
import '../styles/home.scss';
import '../styles/menucard.scss';
import { Footer } from "../components/Footer/Footer";

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
                    <Carousel />
                </div>
                <div className="menu-supreme-line">
                  <h3>Cardápio | Linha Supremo</h3>
                  <div className="card-container">
                    <MenuCard />
                  </div>
                </div>
            </div>
            {/* <button id="signOutButton" onClick={() => signOut(auth)}>Sair da conta</button> */}
            <Footer />
        </div>
    );
}

export default HomePage;