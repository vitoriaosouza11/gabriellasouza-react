import Facial from '../componentes/Facial.jsx';

function PaginaFacial() {
    return (
        <>
            <h2 style={{textAlign: 'center', color: '#bb8a50'}}>TRATAMENTOS FACIAIS</h2>
            <div className="container mt-4">
                <div className="row g-4 justify-content-center">
                    <div className="col-6 col-md-4 col-lg-2 d-flex">
                        <div className="card h-100 w-100">
                            <img src='/imagens/microagulhamento.jpg' className="card-img-top" alt="Microagulhamento" />
                            <div className="card-body">
                                <h5 className="card-title">Microagulhamento facial</h5>
                            </div>
                        </div>
                    </div>

                    <div className="col-6 col-md-4 col-lg-2 d-flex">
                        <div className="card h-100 w-100">
                            <img src='/imagens/hidragloss.jpg' className="card-img-top" alt="Hidragloss" />
                            <div className="card-body">
                                <h5 className="card-title">Hidragloss</h5>
                            </div>
                        </div>
                    </div>

                    <div className="col-6 col-md-4 col-lg-2 d-flex">
                        <div className="card h-100 w-100">
                            <img src='/imagens/limpezadepele.jpg' className="card-img-top" alt="Limpeza de Pele" />
                            <div className="card-body">
                                <h5 className="card-title">Limpeza de pele</h5>
                            </div>
                        </div>
                    </div>

                    <div className="col-6 col-md-4 col-lg-2 d-flex">
                        <div className="card h-100 w-100">
                            <img src='/imagens/limpezadepeleacneica.jpg' className="card-img-top" alt="Limpeza Acneica" />
                            <div className="card-body">
                                <h5 className="card-title">Limpeza de pele acneica</h5>
                            </div>
                        </div>
                    </div>

                    <div className="col-6 col-md-4 col-lg-2 d-flex">
                        <div className="card h-100 w-100">
                            <img src='/imagens/revitalizacaofacial.png' className="card-img-top" alt="Revitalização Facial" />
                            <div className="card-body">
                                <h5 className="card-title">Revitalização facial</h5>
                            </div>
                        </div>
                    </div>

                    <div className="col-6 col-md-4 col-lg-2 d-flex">
                        <div className="card h-100 w-100">
                            <img src='/imagens/peelingquimico.png' className="card-img-top" alt="Peeling Químico" />
                            <div className="card-body">
                                <h5 className="card-title">Peeling químico</h5>
                            </div>
                        </div>
                    </div>

                    <div className="col-6 col-md-4 col-lg-2 d-flex">
                        <div className="card h-100 w-100">
                            <img src='/imagens/acnecontrol.jpg' className="card-img-top" alt="Acne Control" />
                            <div className="card-body">
                                <h5 className="card-title">Acne control</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PaginaFacial;