
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <div className="brand-icon me-3">
            <i className="fas fa-shield-alt"></i>
          </div>
          <div>
            <h5 className="mb-0 brand-title">Brasil Unido</h5>
            <small className="text-muted">Alerta e Prevenção</small>
          </div>
        </Link>
        
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Início</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/projetos">Projetos</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/voluntario">Voluntariado</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/pontos-apoio">Pontos de Apoio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/reportar">Reportar</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/sobre">Sobre</Link>
            </li>
          </ul>
          <a href="tel:199" className="btn btn-emergency ms-3">
            <i className="fas fa-phone me-1"></i>
            Emergência: 199
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
