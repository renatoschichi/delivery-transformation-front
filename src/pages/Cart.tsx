import '../../src/styles/cart.scss';
import { MenuCard } from "../components/MenuCard/MenuCard";
import { Navbar } from "../components/Navbar/Navbar";
import { Carousel } from "../components/Carousel/Carousel";

export function Cart() {
    return (
        <div>
            <Navbar />
            <div className="container-cart">
                <div className="first-line">
                    <h3>Linha Supremo</h3>
                </div>
                <MenuCard />
                <MenuCard />
                <button className="add-itens-btn">Adicionar mais itens</button>
                <h5 className="day-promotion-text">Leve também a promoção do dia</h5>
                <Carousel />
                <div className="cart-text-bottom">
                    <h3>Total</h3>
                    <h4>R$ 25,00</h4>
                </div>
                <button type="button" id="checkout-button" className="checkout-button">Finalizar Pedido</button>
            </div>
        </div>
    )
}