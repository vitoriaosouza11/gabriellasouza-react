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
        <Card link="/corporal" imagem="/imagens/corporal.jpg" descricao="Tratamentos para emagrecimento, gordura localizada, celulite, flacidez e estrias" />
        <Card link="/Facial" imagem="/imagens/facial.jpg" descricao="Tratamentos para rejuvenescimento facial, prevenção do envelhecimento, melasma, manchas e acne." />
        <Card link="/Luz" imagem="/imagens/luzpulsada-card.png" descricao="Tratamentos com luz pulsada para remoção de pelos, rejuvenescimento da pele, redução de manchas, vasinhos e controle da acne." />
        <Card link="/Epilacao" imagem="/imagens/epilacao-card.png" descricao="Epilação com cera para remover os pelos de forma eficaz, segura e duradoura, promovendo pele lisa, macia e livre de irritações." />
      </div>
    </>
  );
}

export default Home;