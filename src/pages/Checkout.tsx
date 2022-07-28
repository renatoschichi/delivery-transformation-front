import '../styles/checkout.scss';
import '../styles/button.scss';
import React, { useState } from "react";
import { Card } from "../components/Cards/Card";
import { FormGroup } from "@mui/material";
import { BackScreen } from '../components/BackScreen/BackScreen';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

export function Checkout() {

    const [ payment, setPayment ] = useState<any>('');
    const [ changePrice, setChangePrice ] = useState<any>('');

    return (
        <div className="container">
            <BackScreen />
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
                    <div className="checkout-change-money-title">
                        <h2 className="checkout-h1">Troco para quanto?</h2>
                        <div className="change-text-title">
                            <span>Precisa de troco</span>
                            <input type="radio" id="troco" name="troco" value="troco" className="input-checkout-camp" onClick={() => setChangePrice('change')} />
                        </div>
                        <div className="change-text-title">
                        <span>Não precisa de troco</span>
                            <input type="radio" id="troco" name="troco" value="troco" className="input-checkout-camp" onClick={() => setChangePrice('')} />
                        </div>
                    </div>

                    {changePrice == 'change' && (
                    <div className="troco">
                        <div className="troco-1">
                            <div>
                                <AttachMoneyIcon className="icon-input-checkout" />
                                <input placeholder="0,0" className="checkout-input" id="checkout-input" />
                            </div>
                        </div>
                    </div>
                    )}

                </React.Fragment>
            )}

            <button type="button" id="checkout-button" className="checkout-button">Finalizar Pedido</button>
        </div>
    );
}