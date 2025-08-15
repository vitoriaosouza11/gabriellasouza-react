import Facial from '../componentes/Facial.jsx';

function PaginaFacial() {
    return (
        <>
            <br />
            <h2 style={{ textAlign: 'center', color: '#bb8a50' }}>TRATAMENTOS FACIAIS</h2>
            <div className="container mt-4">
                <div className="row g-4 justify-content-center">

                    <Facial imagem='/imagens/microagulhamento.jpg' titulo='Microagulhamento' />
                    <Facial imagem='/imagens/hidragloss.jpg' titulo='Hidragloss' />
                    <Facial imagem='/imagens/limpezadepele.jpg' titulo='Limpeza de Pele' />
                    <Facial imagem='/imagens/limpezadepeleacneica.jpg' titulo='Limpeza Acneica' />
                    <Facial imagem='/imagens/revitalizacaofacial.png' titulo='Revitalização Facial' />
                    <Facial imagem='/imagens/peelingquimico.png' titulo='Peeling Químico' />
                    <Facial imagem='/imagens/acnecontrol.jpg' titulo='Acne Control' />

                </div>
            </div>
        </>
    );
}

export default PaginaFacial;