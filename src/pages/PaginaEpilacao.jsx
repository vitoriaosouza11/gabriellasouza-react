import Epilacao from '../componentes/Epilacao.jsx';

function PaginaEpilacao() {
    return (
        <>
            <br />
            <h2 style={{ textAlign: 'center', color: '#bb8a50' }}>EPILAÇÃO</h2>
            <div className="container mt-4">
                <div className="row g-4 justify-content-center">

                    <Epilacao imagem='/imagens/intima.jpg' titulo='Íntima' />
                    <Epilacao imagem='/imagens/axila.jpg' titulo='Axila' />
                    <Epilacao imagem='/imagens/rosto.jpg' titulo='Rosto' />
                    <Epilacao imagem='/imagens/buco.jpg' titulo='Buço' />
                    <Epilacao imagem='/imagens/abdomen.png' titulo='Abdômen' />
                    <Epilacao imagem='/imagens/costas.jpg' titulo='Costas' />
                    <Epilacao imagem='/imagens/gluteo.jpg' titulo='Glúteo' />
                    <Epilacao imagem='/imagens/perna.png' titulo='Perna' />
                    <Epilacao imagem='/imagens/meiaperna.png' titulo='Meia Perna' />

                </div>
            </div>
        </>
    );
}

export default PaginaEpilacao;