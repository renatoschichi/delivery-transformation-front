import { MenuCard } from "../components/MenuCard/MenuCard";
import { Navbar } from "../components/Navbar/Navbar";
import '../../src/styles/menu.scss';
import { red } from "@mui/material/colors";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export function Menu() {
    return (
        <div>
            <Navbar />
            <div className="first-line">
                <h3>Linha Supremo</h3>
                <ShoppingCartIcon fontSize="small" sx={{ color: red[500] }} />
            </div>
            <MenuCard />
            <MenuCard />
            <button className="add-itens-btn">Adicionar mais itens</button>
            <button type="button" id="checkout-button" className="checkout-button">Finalizar Pedido</button>
        </div>
    )
}