import { MenuCard } from "../components/MenuCard/MenuCard";
import { Navbar } from "../components/Navbar/Navbar";
import { Carousel } from "../components/Carousel/Carousel";
import '../../src/styles/cart.scss';
import { BackScreen } from './../components/BackScreen/BackScreen';

function handleRedirectToMenu() {
    window.location.href = '/';
  }

function handleRedirectToCheckout() {
    window.location.href = '/checkout';
  }

export function Cart() {
    return (
        <div>
            <Navbar />
            <BackScreen />
            <div className="container-cart">
                <div className="first-line">
                    <h3>Linha Supremo</h3>
                </div>
                <MenuCard search="" />
                <button className="add-itens-btn" onClick={handleRedirectToMenu}>Adicionar mais itens</button>
                <h5 className="day-promotion-text">Leve também a promoção do dia</h5>
                <Carousel />
                <div className="cart-text-bottom">
                    <h3>Total</h3>
                    <h4>R$ 25,00</h4>
                </div>
                <button type="button" id="checkout-button" className="checkout-button" onClick={handleRedirectToCheckout}>Finalizar Pedido</button>
            </div>
        </div>
    )
}