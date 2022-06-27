import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import { pink } from "@mui/material/colors";

export function PaymentType() {
    return (
        <div>
            <h3 className="checkout-h1">Formas de Pagamento</h3>
                <FormGroup>

                <div className="payment-type">
                    <FormControlLabel control={<Checkbox defaultChecked sx={{
                    color: pink[800],
                    '&.Mui-checked': {
                    color: pink[600],
                    },
                }} size="small" />} label="Dinheiro" />
                </div>
                
                <div className="payment-type">
                    <FormControlLabel control={<Checkbox defaultChecked sx={{
                    color: pink[800],
                    '&.Mui-checked': {
                    color: pink[600],
                    },
                }} size="small" />} label="Cartão de Débito" />
                </div>
                
                <div className="payment-type">
                    <FormControlLabel control={<Checkbox defaultChecked sx={{
                    color: pink[800],
                    '&.Mui-checked': {
                    color: pink[600],
                    },
                }} size="small" />} label="Cartão de Crédito" />
                </div>

                </FormGroup>
        </div>
    );
}