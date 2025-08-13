import Corporal from '../componentes/Corporal.jsx';

function PaginaCorporal() {
  return (
    <>
        <h2 style="text-align: center; color: #bb8a50;">TRATAMENTOS CORPORAIS</h2>
            <div className="container mt-4">
                <div className="row g-4 justify-content-center">
                    <div className="col-6 col-md-4 col-lg-2 d-flex">
                        <div className="card h-100 w-100">
                            <img src='/imagens/drenagemlinfatica.png' className="card-img-top" alt="Drenagem linfática" />
                            <div className="card-body">
                                <h5 className="card-title">Drenagem linfática</h5>
                            </div>
                        </div>
                    </div>

                    <div className="col-6 col-md-4 col-lg-2 d-flex">
                        <div className="card h-100 w-100">
                            <img src='/imagens/massagemdetox.png' className="card-img-top" alt="Massagem Detox" />
                            <div className="card-body">
                                <h5 className="card-title">Massagem Detox</h5>
                            </div>
                        </div>
                    </div>

                    <div className="col-6 col-md-4 col-lg-2 d-flex">
                        <div className="card h-100 w-100">
                            <img src='/imagens/massagemrelaxante.png' className="card-img-top" alt="Massagem Relaxante" />
                            <div className="card-body">
                                <h5 className="card-title">Massagem Relaxante</h5>
                            </div>
                        </div>
                    </div>

                    <div className="col-6 col-md-4 col-lg-2 d-flex">
                        <div className="card h-100 w-100">
                            <img src='/imagens/ventosaterapia.png' className="card-img-top" alt="Ventosaterapia" />
                            <div className="card-body">
                                <h5 className="card-title">Ventosaterapia</h5>
                            </div>
                        </div>
                    </div>

                    <div className="col-6 col-md-4 col-lg-2 d-flex">
                        <div className="card h-100 w-100">
                            <img src='/imagens/liberacaomiofacial.jpg' className="card-img-top" alt="Liberação Miofascial" />
                            <div className="card-body">
                                <h5 className="card-title">Liberação Miofascial</h5>
                            </div>
                        </div>
                    </div>

                    <div className="col-6 col-md-4 col-lg-2 d-flex">
                        <div className="card h-100 w-100">
                            <img src='/imagens/esfoliacao.png' className="card-img-top" alt="Esfoliação e Hidratação" />
                            <div className="card-body">
                                <h5 className="card-title">Esfoliação e Hidratação</h5>
                            </div>
                        </div>
                    </div>

                    <div className="col-6 col-md-4 col-lg-2 d-flex">
                        <div className="card h-100 w-100">
                            <img src='/imagens/banhodelua.jpg' className="card-img-top" alt="Banho de Lua" />
                            <div className="card-body">
                                <h5 className="card-title">Banho de Lua</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </>
  );
}

export default PaginaCorporal;