import React from "react";

export function Card() {
    return (
        <React.Fragment>

            <div className="card">
                <h3>João Ribeiro</h3>
                <input type="checkbox" name="checkbox-checkout" />
                <span>Avenida senhor do Bonfim, 339, Centro - Caprim Grosso</span>
                <span>Complemento: Apto, 1º Andar</span>
                <span>Ponto de referência: Ao lado da Center Móveis</span>
                <p className="edit-button">Editar</p>
            </div>

            <div className="card">
                <h2>João Ribeiro</h2>
                <input type="checkbox" name="checkbox-checkout" />
                <span>Avenida senhor do Bonfim, 339, Centro - Caprim Grosso</span>
                <span>Complemento: Apto, 1º Andar</span>
                <span>Ponto de referência: Ao lado da Center Móveis</span>
                <p className="edit-button">Editar</p>
            </div>

        </React.Fragment>
    );
}