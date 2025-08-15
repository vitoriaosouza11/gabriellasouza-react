import Luz from '../componentes/Luz.jsx';

function PaginaLuz() {
    return (
        <>
            <br />
            <h2 style={{ textAlign: 'center', color: '#bb8a50' }}>LUZ PULSADA</h2>
            <div className="container mt-4" style={{margin:'60px auto'}}>
                <div className="row g-4 justify-content-center">

                    <Luz imagem='/imagens/luzrosto.jpg' titulo='Rosto' />
                    <Luz imagem='/imagens/luzbuco.jpg' titulo='Buço' />
                    <Luz imagem='/imagens/luzbarba.jpg' titulo='Contorno da barba' />
                    <Luz imagem='/imagens/luzaxila.jpg' titulo='Axila' />
                    <Luz imagem='/imagens/luzabdomen.jpg' titulo='Abdômen' />
                    <Luz imagem='/imagens/luzcostas.jpg' titulo='Costas' />
                    <Luz imagem='/imagens/luzbraco.jpg' titulo='Braço' />
                    <Luz imagem='/imagens/luzintima.jpg' titulo='Íntima' />
                    <Luz imagem='/imagens/luzgluteo.png' titulo='Glúteo' />
                    <Luz imagem='/imagens/luzperna.jpg' titulo='Perna' />
                    <Luz imagem='/imagens/luzmeiaperna.png' titulo='Meia Perna' />
                </div>
            </div>
        </>
    );
}

export default PaginaLuz;