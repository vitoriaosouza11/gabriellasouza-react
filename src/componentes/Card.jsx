import './Card.css';

function Card({ link, imagem, descricao }) {
    const navegarPara = (url) => {
        window.location.href = url;
    };

    return (
        <>
            <a
                className="card-link"
                style={{ textDecoration: 'none', background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
                href={link}
            >
                <div className="card" style={{ width: '18rem' }}>
                    <img src={imagem} className="card-img-top" alt='Corporal' />
                    <div className="card-body">
                        <p className="card-text">{descricao}</p>
                    </div>
                </div>
            </a>
        </>
    );
}

export default Card;

