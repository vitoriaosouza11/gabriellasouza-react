import Card from '../componentes/Card';

function Home() {
  return (
    <>
      <div className="imagem" style={{ display: 'flex', justifyContent: 'center' }}>
        <img
          src='./imagens/banner5.jpg'
          alt="Gabriella Souza"
          className="imagem-banner"
        />
      </div>
      <div className="d-flex flex-wrap justify-content-center gap-4 my-4">
        <a href="corporal.html" className="card-link" style={{ textDecoration: 'none' }}>
          <div className="card" style={{ width: '18rem' }}>
            <img src='/imagens/corporal.jpg' className="card-img-top" alt='/imagens/corporal.jpg' />
            <div className="card-body">
              <p className="card-text">Tratamentos para emagrecimento, gordura localizada, celulite, flacidez e estrias.</p>
            </div>
          </div>
        </a>
        <a href="facial.html" className="card-link" style={{ textDecoration: 'none' }}>
          <div className="card" style={{ width: '18rem' }}>
            <img src='/imagens/facial.jpg' className="card-img-top" alt='/imagens/facial.jpg' />
            <div className="card-body">
              <p className="card-text">Tratamentos para rejuvenescimento facial, prevenção do envelhecimento, melasma, manchas e
                acne.</p>
            </div>
          </div>
        </a>
        <a href="luzpulsada.html" className="card-link" style={{ textDecoration: 'none' }}>
          <div className="card" style={{ width: '18rem' }}>
            <img src='/imagens/luzpulsada-card.png' className="card-img-top" alt='/imagens/luzpulsada-card.png' />
            <div className="card-body">
              <p className="card-text">Tratamentos com luz pulsada para remoção de pelos, rejuvenescimento da pele, redução de manchas, vasinhos e controle da acne.</p>
            </div>
          </div>
        </a>
        <a href="epilacao.html" className="card-link" style={{ textDecoration: 'none' }}>
          <div className="card" style={{ width: '18rem' }}>
            <img src='/imagens/epilacao-card.png' className="card-img-top" alt='/imagens/epilacao-card.png' />
            <div className="card-body">
              <p className="card-text">Epilação com cera para remover os pelos de forma eficaz, segura e duradoura, promovendo pele lisa, macia e livre de irritações.</p>
            </div>
          </div>
        </a>

      </div>
    </>
  );
}

export default Home;