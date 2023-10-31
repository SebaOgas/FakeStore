export default function Header () {
    return (
        <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <div className="container-fluid">
            <a className="navbar-brand" href="/">Fake Store</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-0 ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link" aria-current="page" href="productos">Productos</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="administracion">Administración</a>
                    </li>
                </ul>
            </div>
        </div>
        </nav>
    )
}