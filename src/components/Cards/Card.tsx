import React, { useState } from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const initialAddresses = [
    {
        title: "João Ribeiro",
        street: "Avenida senhor do Bonfim, 339, Centro - Caprim Grosso",
        complement: "Apto, 1º Andar",
        reference: "Ao lado da Center Móveis"
    },
    {
        title: "João da silva",
        street: "Rua tupiniqui ",
        complement: "Apto, 2º Andar",
        reference: "Ao lado do cemitério"     
    }
]

export function Card() {
    const [ addresses, setAddresses ] = useState(initialAddresses)
    const [ selectedAddress, setSelectedAddress ] = useState<number | null>(null);

    return (
        <React.Fragment>
            {addresses.map((address, index: number) => (
                <div className="card" key={index}>
                    <Box>
                        <Grid container spacing={2}>
                            <Grid item xs={10}>
                            <h3>{address.title}</h3>
                            </Grid>
                            <Grid item xs={2}>
                            <div className="checkout-checkbox">
                                <input type="radio" id="first-address" name="checkbox" value="first-address" onClick={() => setSelectedAddress(index)} />
                            </div>
                            </Grid>
                        </Grid>
                    </Box>

                    <span>{address.street}</span>
                    <span>Complemento: {address.complement}</span>
                    <span>Ponto de referência: {address.reference}</span>
                    {index === selectedAddress && (
                        <p className="edit-button" id="edit-button-1">Editar</p>
                    )}
                </div>
            ))}
        </React.Fragment>
    );
}