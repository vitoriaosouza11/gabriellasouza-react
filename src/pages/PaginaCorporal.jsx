import Corporal from '../componentes/Corporal.jsx';

function PaginaCorporal() {
    return (
        <>
            <br />
            <h2 style={{ textAlign: 'center', color: '#bb8a50' }}>TRATAMENTOS CORPORAIS</h2>
            <div className="container mt-4" style={{margin:'60px auto'}}>
                <div className="row g-4 justify-content-center">

                    <Corporal imagem='/imagens/drenagemlinfatica.png' titulo='Drenagem linfática' />
                    <Corporal imagem='/imagens/massagemdetox.png' titulo='Massagem Detox' />
                    <Corporal imagem='/imagens/massagemrelaxante.png' titulo='Massagem Relaxante' />
                    <Corporal imagem='/imagens/ventosaterapia.png' titulo='Ventosaterapia' />
                    <Corporal imagem='/imagens/liberacaomiofacial.jpg' titulo='Liberação Miofascial' />
                    <Corporal imagem='/imagens/esfoliacao.png' titulo='Esfoliação e Hidratação' />
                    <Corporal imagem='/imagens/banhodelua.jpg' titulo='Banho de Lua' />

                </div>
            </div>
        </>
    );
}

export default PaginaCorporal;