import './Menu.css';
import { Link } from "react-router-dom";
import { useState } from "react";

function Menu() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid container-nav">
                <Link className="navbar-brand" to="/" onClick={closeMenu}>
                    Gabriella Souza
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    onClick={toggleMenu}
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/" onClick={closeMenu}>Início</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link
                                className="nav-link dropdown-toggle"
                                to="/"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Procedimentos
                            </Link>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to="facial" onClick={closeMenu}>Facial</Link></li>
                                <li><Link className="dropdown-item" to="corporal" onClick={closeMenu}>Corporal</Link></li>
                                <li><Link className="dropdown-item" to="epilacao" onClick={closeMenu}>Epilação</Link></li>
                                <li><Link className="dropdown-item" to="luz" onClick={closeMenu}>Luz Pulsada</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="sobre" onClick={closeMenu}>Sobre</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="contato" onClick={closeMenu}>Contato</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Menu;
