import React from "react";
import { Card } from "../components/Cards/Card";
import { PaymentType } from "../components/PaymentType/PaymentType";
import '../styles/checkout.scss';
import '../styles/button.scss';

export function Checkout() {
    return (
        <div className="container">
            <h1>
                Finalização de pedido
            </h1>

            <div className="card-container">
                <h2 className="checkout-h1">Local de entrega</h2>

                <Card />
                <PaymentType />
            </div>

            <button type="button" id="checkout-button" className="checkout-button">Finalizar Pedido</button>

            </div>
    );
}