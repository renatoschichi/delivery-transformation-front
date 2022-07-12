import mrshake1 from '../../assets/images/mrshake1.jpg';

export function MenuCard() {
    return (
            <div className="menu-card">
                <div className="card-text">
                    <h3>Supremo Cookes com clássico</h3>
                    <span>Combinação de chocolate com pola de morango</span>
                    <p>Médio | 300ml</p>
                    <h3>R$ 12,50</h3>
                </div>
                <div className="card-img">
                    <img src={mrshake1} />
                </div>
            </div>
    )
}