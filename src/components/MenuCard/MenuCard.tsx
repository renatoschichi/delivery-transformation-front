import React from 'react';
import { useState } from 'react';
import mrshake1 from '../../assets/images/mrshake1.jpg';
import mrshake2 from '../../assets/images/mrshake2.jpg';
import mrshake3 from '../../assets/images/mrshake3.jpg';
import mrshake4 from '../../assets/images/mrshake4.jpg';
import mrshake5 from '../../assets/images/mrshake5.jpg';
import mrshake6 from '../../assets/images/mrshake6.jpg';
import mrshake7 from '../../assets/images/mrshake7.jpg';
import mrshake8 from '../../assets/images/mrshake8.jpg';
import mrshake9 from '../../assets/images/mrshake9.jpg';
import mrshake10 from '../../assets/images/mrshake10.jpg';
import mrshake11 from '../../assets/images/mrshake11.jpg';
import mrshake12 from '../../assets/images/mrshake12.jpg';


function redirectToProduct() {
    window.location.href = '/produto';
}

const productData = [
    {
        productName: 'Supremo Cookes com clássico',
        productDetails: 'Combinação de chocolate com polpa de morango',
        productSize: 'Médio | 300ml',
        productPrice: 'R$ 12,50',
        productImage: mrshake1
    },
    {
        productName: 'Sorvete com bis',
        productDetails: 'Combinação de sorvete e bis',
        productSize: 'Médio | 300ml',
        productPrice: 'R$ 14,00',
        productImage: mrshake2
    },
    {
        productName: 'Milk Shake de morango',
        productDetails: 'Combinação de morango com leite',
        productSize: 'Médio | 500ml',
        productPrice: 'R$ 18,50',
        productImage: mrshake3
    },
    {
        productName: 'Açaí',
        productDetails: 'Açaí de banana com granola',
        productSize: 'Grande | 800ml',
        productPrice: 'R$ 25,00',
        productImage: mrshake4
    },
    {
        productName: 'Açaí com banana e granola',
        productDetails: 'Combinação de açaí com banana e granola',
        productSize: 'Médio | 500ml',
        productPrice: 'R$ 18,50',
        productImage: mrshake5
    },
    {
        productName: 'Milk Shake de morango',
        productDetails: 'Combinação de morango com leite',
        productSize: 'Médio | 500ml',
        productPrice: 'R$ 18,50',
        productImage: mrshake6
    },
    {
        productName: 'Combo 4 shakes',
        productDetails: 'Combinação de morango com leite',
        productSize: 'Médio | 500ml',
        productPrice: 'R$ 18,50',
        productImage: mrshake7
    },
    {
        productName: 'Milk Shake de morango',
        productDetails: 'Combinação de morango com leite',
        productSize: 'Médio | 500ml',
        productPrice: 'R$ 18,50',
        productImage: mrshake8
    },
    {
        productName: 'Açaí clássico',
        productDetails: 'Açaí simples',
        productSize: 'Médio | 500ml',
        productPrice: 'R$ 16,00',
        productImage: mrshake9
    },
    {
        productName: 'Supremo shake',
        productDetails: 'Combinação de morango com leite',
        productSize: 'Médio | 500ml',
        productPrice: 'R$ 18,50',
        productImage: mrshake10
    },
    {
        productName: 'Combo Açaí + Milkshake',
        productDetails: 'Combinação de morango com leite',
        productSize: 'Pequeno | 200ml',
        productPrice: 'R$ 10,50',
        productImage: mrshake11
    },
    {
        productName: 'Supremo',
        productDetails: 'Mega combinação entre sorvete artesanal e bis',
        productSize: 'Grande | 700ml',
        productPrice: 'R$ 30,00',
        productImage: mrshake12
    },
]

export function MenuCard() {

    const [ productInfo, setProductInfo ] = useState(productData);

    return (
        <React.Fragment>
            {productInfo.map((product) => (
                <div className="menu-card" onClick={redirectToProduct}>
                    <div className="card-text">
                        <h3>{product.productName}</h3>
                        <span>{product.productDetails}</span>
                        <p>{product.productSize}</p>
                        <h4>{product.productPrice}</h4>
                    </div>
                    <div className="card-img">
                        <img src={product.productImage} />
                    </div>
                </div>
            ))}
        </React.Fragment>
    );
}