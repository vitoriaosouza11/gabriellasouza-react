import './Menu.css'

function Menu() {
    return (
        <>
            <nav class="navbar navbar-expand-lg ">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Gabriella Souza</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item"></li>
                                <li class="nav-item">
                                    <a class="nav-link" href="index.html">Início</a>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                        aria-expanded="false">Procedimentos</a>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="facial.html">Facial</a></li>
                                        <li><a class="dropdown-item" href="corporal.html">Corporal</a></li>
                                        <li><a class="dropdown-item" href="epilacao.html">Epilação</a></li>
                                        <li><a class="dropdown-item" href="luzpulsada.html">Luz Pulsada</a></li>
                                    </ul>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="sobre.html">Sobre</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="contato.html">Contato</a>
                                </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Menu;