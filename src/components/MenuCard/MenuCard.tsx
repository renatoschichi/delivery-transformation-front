import mrshake1 from '../../assets/images/mrshake1.jpg';

function redirectToProduct() {
    window.location.href = '/produto';
}

export function MenuCard() {
    return (
            <div className="menu-card" onClick={redirectToProduct}>
                <div className="card-text">
                    <h3>Supremo Cookes com clássico</h3>
                    <span>Combinação de chocolate com pola de morango</span>
                    <p>Médio | 300ml</p>
                    <h4>R$ 12,50</h4>
                </div>
                <div className="card-img">
                    <img src={mrshake1} />
                </div>
            </div>
    )
}