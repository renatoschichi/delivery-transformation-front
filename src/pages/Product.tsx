import { Navbar } from "../components/Navbar/Navbar";
import mrshake2 from '../assets/images/mrshake2.jpg';
import '../styles/product.scss';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Box, Divider } from "@mui/material";
import { FormEvent, useState } from "react";

export default function Product() {

  const [count, setCount] = useState(0);
  const [price, setPrice] = useState(0);

  function handleAddPrice(event: FormEvent) {
    event.preventDefault();
    return setPrice(price + 12.50);
  }  

    return (
        <><div>
            <Navbar />
            <div className="product-container">
                <img src={mrshake2} />
                <div className="product-text">
                    <h3>Supremo Cookes com Clássico</h3>
                    <h4>R$ 12,50</h4>
                </div>
                <div className="product-info">
                  <span>Combinação de chocolate com polpa de morango</span>
                  <p>Médio | 300ml</p>
                </div>
            <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={sabores}
                sx={{ width: 320, m: "auto" }}
                renderInput={(params) => <TextField {...params} label="Sabores" />} />
                <Box
                  component="form"
                  sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                  }}
                  noValidate
                  autoComplete="off"
                >
              <TextField id="filled-basic" label="Observações" variant="filled" />
            </Box>
            <Divider />

            <div className="add-to-cart">
              <div className="add-to-cart-count">
                <p onClick={() => setCount(count - 1)}>-</p>
                <p>{count}</p>
                <p onClick={() => setCount(count + 1)} className="plus">+</p>
              </div>
              <div>
                <button onClick={handleAddPrice} className="add-price-button">Adicionar R$ 12,50</button>
              </div>
            </div>
            
            <p>Valor total a pagar R$ {price}</p>

            </div>
        </div></>
    );
  }

  const sabores = [
    { label: 'Sabor 1' },
    { label: 'Sabor 2' },
    { label: 'Sabor 3' },
    { label: 'Sabor 4' },
    { label: 'Sabor 5' },
    { label: "Sabor 6" },
    { label: 'Sabor 7' },
    { label: 'Sabor 8' },
    { label: 'Sabor 9' }
  ];  