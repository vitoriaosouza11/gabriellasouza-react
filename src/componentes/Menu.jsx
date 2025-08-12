import './Menu.css'

function Menu() {
    return (
        <>
            <nav className="navbar navbar-expand-lg ">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Gabriella Souza</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item"></li>
                                <li className="nav-item">
                                    <a className="nav-link" href="index.html">Início</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                        aria-expanded="false">Procedimentos</a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="facial.html">Facial</a></li>
                                        <li><a className="dropdown-item" href="corporal.html">Corporal</a></li>
                                        <li><a className="dropdown-item" href="epilacao.html">Epilação</a></li>
                                        <li><a className="dropdown-item" href="luzpulsada.html">Luz Pulsada</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="sobre.html">Sobre</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="contato.html">Contato</a>
                                </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Menu;