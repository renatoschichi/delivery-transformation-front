export function PaymentType() {
    return (
        <div>
            <h1>Formas de Pagamento</h1>

            <input type="checkbox" name="payment-type-money" id="payment-type-money" value="money" />
            <label htmlFor="payment-type-money"> Dinheiro</label>

            <input type="checkbox" name="payment-type-debit" id="payment-type-debit" value="debit card" />
            <label htmlFor="payment-type-debit"> Cartao de Débito</label>

            <input type="checkbox" name="payment-type-credit" id="payment-type-credit" value="credit card" />
            <label htmlFor="payment-type-credit"> Cartao de Crédito</label>
        </div>
    );
}