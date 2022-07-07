import React from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

export function Card() {
    return (
        <React.Fragment>

            <div className="card">
            <Box>
                <Grid container spacing={2}>
                    <Grid item xs={10}>
                    <h3>João Ribeiro</h3>
                    </Grid>
                    <Grid item xs={2}>
                    <div className="checkout-checkbox">
                        <input type="radio" id="first-address" name="checkbox" value="first-address" />
                    </div>
                    </Grid>
                </Grid>
            </Box>

                <span>Avenida senhor do Bonfim, 339, Centro - Caprim Grosso</span>
                <span>Complemento: Apto, 1º Andar</span>
                <span>Ponto de referência: Ao lado da Center Móveis</span>
                <p className="edit-button">Editar</p>
            </div>

            <div className="card">
            <Box>
                <Grid container spacing={2}>
                    <Grid item xs={10}>
                    <h3>João Ribeiro</h3>
                    </Grid>
                    <Grid item xs={2}>
                    <div className="checkout-checkbox">
                        <input type="radio" id="second-address" name="checkbox" value="second-address" />
                    </div>
                    </Grid>
                </Grid>
            </Box>

                <span>Avenida senhor do Bonfim, 339, Centro - Caprim Grosso</span>
                <span>Complemento: Apto, 1º Andar</span>
                <span>Ponto de referência: Ao lado da Center Móveis</span>
                <p className="edit-button">Editar</p>
            </div>

        </React.Fragment>
    );
}