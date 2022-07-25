import '../styles/checkout.scss';
import '../styles/button.scss';
import React, { useState } from "react";
import { Card } from "../components/Cards/Card";
import { FormGroup } from "@mui/material";

export function Checkout() {

    const [ payment, setPayment ] = useState<any>('');

    return (
        <div className="container">
            <h1>
                Finalização de pedido
            </h1>

            <div className="card-container">
                <h2 className="checkout-h1">Local de entrega</h2>
                <Card />

                <div className="ways-of-payment">
                    <h3 className="checkout-h1">Formas de Pagamento</h3>
                    <FormGroup>
                    <div className="payment-type">
                        <input type="radio" id="money-payment" name="payment-type" value="money-payment" onClick={() => setPayment('money')} />
                        <label>Dinheiro</label>
                    </div>
                    <div className="payment-type">
                        <input type="radio" id="debit-card-payment" name="payment-type" value="debit-card-payment" onClick={() => setPayment('')} />
                        <label>Cartão de Débito</label>
                    </div>
                    <div className="payment-type">
                        <input type="radio" id="credit-card-payment" name="payment-type" value="credit-card-payment" onClick={() => setPayment('')} />
                        <label>Cartão de Crédito</label>
                    </div>
                    </FormGroup>
                </div>

            </div>

            {payment == 'money' && (
                <React.Fragment>
                    <h2 className="checkout-h1">Troco para quanto?</h2>
                    <div className="troco">
                        <div className="troco-1">
                            <p>R$ 40,00</p>
                            <input type="radio" id="troco" name="troco" value="troco" className="input-checkout-camp" />
                        </div>
                        <hr/>
                        <span>Não vai precisar de troco</span>
                        <input type="radio" id="troco" name="troco" value="troco" />
                </div>
                </React.Fragment>
            )}

            <button type="button" id="checkout-button" className="checkout-button">Finalizar Pedido</button>
        </div>
    );
}