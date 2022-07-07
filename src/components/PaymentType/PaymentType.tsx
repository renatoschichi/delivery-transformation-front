import { FormGroup } from "@mui/material";

export function PaymentType() {
    return (
        <div>
            <h3 className="checkout-h1">Formas de Pagamento</h3>
                <FormGroup>

                <div className="payment-type">
                    <input type="radio" id="money-payment" name="payment-type" value="money-payment" />
                    <label>Dinheiro</label>
                </div>
                
                <div className="payment-type">
                    <input type="radio" id="debit-card-payment" name="payment-type" value="debit-card-payment" />
                    <label>Cartão de Débito</label>
                </div>
                
                <div className="payment-type">
                    <input type="radio" id="credit-card-payment" name="payment-type" value="credit-card-payment" />
                    <label>Cartão de Crédito</label>
                </div>

                </FormGroup>
        </div>
    );
}