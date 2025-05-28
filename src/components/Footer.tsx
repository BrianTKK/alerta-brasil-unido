
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 mb-4">
            <div className="d-flex align-items-center mb-3">
              <div className="brand-icon me-3">
                <i className="fas fa-shield-alt"></i>
              </div>
              <div>
                <h5 className="mb-0 text-white">Brasil Unido</h5>
                <small className="text-muted">Alerta e Prevenção</small>
              </div>
            </div>
            <p className="text-muted">
              Portal nacional dedicado à prevenção e resposta a desastres naturais, 
              conectando projetos, voluntários e comunidades por todo o Brasil.
            </p>
          </div>
          <div className="col-lg-2 col-md-6 mb-4">
            <h6 className="text-white mb-3">Navegação</h6>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-muted">Início</Link></li>
              <li><Link to="/projetos" className="text-muted">Projetos</Link></li>
              <li><Link to="/voluntario" className="text-muted">Voluntariado</Link></li>
              <li><Link to="/sobre" className="text-muted">Sobre</Link></li>
            </ul>
          </div>
          <div className="col-lg-2 col-md-6 mb-4">
            <h6 className="text-white mb-3">Serviços</h6>
            <ul className="list-unstyled">
              <li><Link to="/pontos-apoio" className="text-muted">Pontos de Apoio</Link></li>
              <li><Link to="/reportar" className="text-muted">Reportar</Link></li>
              <li><a href="#" className="text-muted">Alertas</a></li>
              <li><a href="#" className="text-muted">Monitoramento</a></li>
            </ul>
          </div>
          <div className="col-lg-4 mb-4">
            <h6 className="text-white mb-3">Emergências</h6>
            <div className="emergency-contacts">
              <div className="d-flex align-items-center mb-2">
                <i className="fas fa-phone text-danger me-2"></i>
                <span><strong>199</strong> - Defesa Civil</span>
              </div>
              <div className="d-flex align-items-center mb-2">
                <i className="fas fa-fire text-danger me-2"></i>
                <span><strong>193</strong> - Bombeiros</span>
              </div>
              <div className="d-flex align-items-center mb-2">
                <i className="fas fa-ambulance text-danger me-2"></i>
                <span><strong>192</strong> - SAMU</span>
              </div>
              <div className="d-flex align-items-center">
                <i className="fas fa-shield-alt text-danger me-2"></i>
                <span><strong>190</strong> - Polícia Militar</span>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-4" />
        <div className="row align-items-center">
          <div className="col-md-6">
            <p className="text-muted mb-0">&copy; 2024 Brasil Unido. Todos os direitos reservados.</p>
          </div>
          <div className="col-md-6 text-md-end">
            <p className="text-muted mb-0">Desenvolvido para proteger vidas brasileiras</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
