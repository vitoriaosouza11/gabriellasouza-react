import './Menu.css'
import { Link } from "react-router-dom";

function Menu() {
    return (
        <>
            <nav className="navbar navbar-expand-lg ">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Gabriella Souza</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item"></li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">Início</Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown"
                                        aria-expanded="false">Procedimentos</Link>
                                    <ul className="dropdown-menu">
                                        <li><Link className="dropdown-item" to="facial">Facial</Link></li>
                                        <li><Link className="dropdown-item" to="corporal">Corporal</Link></li>
                                        <li><Link className="dropdown-item" to="epilacao">Epilação</Link></li>
                                        <li><Link className="dropdown-item" to="luzpulsada">Luz Pulsada</Link></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="sobre">Sobre</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="contato">Contato</Link>
                                </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Menu;