function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-primary" data-bs-theme="dark">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                <ul className="navbar-nav text-centered">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Boletos </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Souvenirs</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLinkDamas" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Damas
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLinkDamas">
                            <a className="dropdown-item" href="#">Jerseys</a>
                            <a className="dropdown-item" href="#">Chamarras</a>
                            <a className="dropdown-item" href="#">Accesorios</a>
                            <a className="dropdown-item" href="#">Maletas de viaje</a>
                        </div>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLinkCaballeros" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Caballeros
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLinkCaballeros">
                            <a className="dropdown-item" href="#">Jerseys</a>
                            <a className="dropdown-item" href="#">Chamarras</a>
                            <a className="dropdown-item" href="#">Accesorios</a>
                            <a className="dropdown-item" href="#">Entrenamiento</a>
                        </div>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLinkNinos" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Niños
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLinkNinos">
                            <a className="dropdown-item" href="#">Jerseys</a>
                            <a className="dropdown-item" href="#">Entrenamiento</a>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
export default NavBar