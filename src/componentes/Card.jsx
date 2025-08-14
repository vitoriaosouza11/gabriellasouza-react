import './Card.css';

function Card() {
    const navegarPara = (url) => {
        window.location.href = url;
    };

    return (
        <>
            <div className="d-flex flex-wrap justify-content-center gap-4 my-4">
                <button
                    className="card-link"
                    style={{ textDecoration: 'none', background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
                    onClick={() => navegarPara('corporal.html')}
                >
                    <div className="card" style={{ width: '18rem' }}>
                        <img src='/imagens/corporal.jpg' className="card-img-top" alt='Corporal' />
                        <div className="card-body">
                            <p className="card-text">Tratamentos para emagrecimento, gordura localizada, celulite, flacidez e estrias.</p>
                        </div>
                    </div>
                </button>
                <button
                    className="card-link"
                    style={{ textDecoration: 'none', background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
                    onClick={() => navegarPara('facial.html')}
                >
                    <div className="card" style={{ width: '18rem' }}>
                        <img src='/imagens/facial.jpg' className="card-img-top" alt='Facial' />
                        <div className="card-body">
                            <p className="card-text">Tratamentos para rejuvenescimento facial, prevenção do envelhecimento, melasma, manchas e acne.</p>
                        </div>
                    </div>
                </button>
                <button
                    className="card-link"
                    style={{ textDecoration: 'none', background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
                    onClick={() => navegarPara('luzpulsada.html')}
                >
                    <div className="card" style={{ width: '18rem' }}>
                        <img src='/imagens/luzpulsada-card.png' className="card-img-top" alt='Luz Pulsada' />
                        <div className="card-body">
                            <p className="card-text">Tratamentos com luz pulsada para remoção de pelos, rejuvenescimento da pele, redução de manchas, vasinhos e controle da acne.</p>
                        </div>
                    </div>
                </button>
                <button
                    className="card-link"
                    style={{ textDecoration: 'none', background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
                    onClick={() => navegarPara('epilacao.html')}
                >
                    <div className="card" style={{ width: '18rem' }}>
                        <img src='/imagens/epilacao-card.png' className="card-img-top" alt='Epilação' />
                        <div className="card-body">
                            <p className="card-text">Epilação com cera para remover os pelos de forma eficaz, segura e duradoura, promovendo pele lisa, macia e livre de irritações.</p>
                        </div>
                    </div>
                </button>
            </div>
        </>
    );
}

export default Card;

arrumar cards como botao