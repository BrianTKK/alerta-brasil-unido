
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="row align-items-center min-vh-75">
            <div className="col-lg-6">
              <div className="badge-hero mb-4">
                <i className="fas fa-shield-alt me-2"></i>
                Proteção Nacional
              </div>
              <h1 className="display-4 fw-bold text-dark mb-4">
                Brasil Unido contra
                <span className="text-green"> Desastres Naturais</span>
              </h1>
              <p className="lead text-muted mb-5">
                Portal nacional que conecta projetos de prevenção, voluntários dedicados e 
                comunidades vulneráveis para criar um Brasil mais seguro e preparado.
              </p>
              <div className="d-flex flex-column flex-sm-row gap-3">
                <Link to="/projetos" className="btn btn-primary btn-lg">
                  <i className="fas fa-search me-2"></i>
                  Explorar Projetos
                </Link>
                <Link to="/voluntario" className="btn btn-outline-success btn-lg">
                  <i className="fas fa-heart me-2"></i>
                  Ser Voluntário
                </Link>
              </div>
            </div>
            <div className="col-lg-6 text-center">
              <div className="position-relative">
                <i className="fas fa-shield-alt" style={{fontSize: '20rem', color: 'rgba(5, 150, 105, 0.1)'}}></i>
                <div className="position-absolute top-50 start-50 translate-middle">
                  <div className="row g-2">
                    <div className="col-6">
                      <div className="bg-white p-3 rounded shadow-sm">
                        <i className="fas fa-eye text-primary"></i>
                        <div className="fw-bold">Monitoramento</div>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="bg-white p-3 rounded shadow-sm">
                        <i className="fas fa-bell text-warning"></i>
                        <div className="fw-bold">Alertas</div>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="bg-white p-3 rounded shadow-sm">
                        <i className="fas fa-hands-helping text-success"></i>
                        <div className="fw-bold">Resposta</div>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="bg-white p-3 rounded shadow-sm">
                        <i className="fas fa-graduation-cap text-info"></i>
                        <div className="fw-bold">Educação</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section py-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-6 col-lg-3">
              <div className="stats-card text-center">
                <div className="stats-icon green">
                  <i className="fas fa-project-diagram"></i>
                </div>
                <div className="stats-number">127</div>
                <h5>Projetos Conectados</h5>
                <p className="text-muted small">Iniciativas de monitoramento e prevenção ativas em todo o país</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="stats-card text-center">
                <div className="stats-icon blue">
                  <i className="fas fa-users"></i>
                </div>
                <div className="stats-number">3200</div>
                <h5>Voluntários Ativos</h5>
                <p className="text-muted small">Pessoas dedicadas a proteger suas comunidades</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="stats-card text-center">
                <div className="stats-icon yellow">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div className="stats-number">445</div>
                <h5>Pontos de Apoio</h5>
                <p className="text-muted small">Abrigos e centros de emergência mapeados</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="stats-card text-center">
                <div className="stats-icon red">
                  <i className="fas fa-heart"></i>
                </div>
                <div className="stats-number">12000000</div>
                <h5>Vidas Protegidas</h5>
                <p className="text-muted small">Brasileiros beneficiados por nossos sistemas</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Help */}
      <section className="how-to-help py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold mb-3">Como Você Pode Ajudar</h2>
            <p className="lead text-muted">Existem várias formas de contribuir para um Brasil mais seguro</p>
          </div>
          <div className="row g-4">
            <div className="col-md-6 col-lg-3">
              <div className="help-card text-center">
                <div className="help-icon">
                  <i className="fas fa-heart"></i>
                </div>
                <h5>Seja Voluntário</h5>
                <p className="text-muted mb-4">Dedique seu tempo e habilidades para projetos de prevenção</p>
                <Link to="/voluntario" className="btn btn-outline-primary">Cadastre-se</Link>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="help-card text-center">
                <div className="help-icon">
                  <i className="fas fa-exclamation-triangle"></i>
                </div>
                <h5>Reporte Situações</h5>
                <p className="text-muted mb-4">Ajude a identificar riscos em sua comunidade</p>
                <Link to="/reportar" className="btn btn-outline-warning">Reportar</Link>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="help-card text-center">
                <div className="help-icon">
                  <i className="fas fa-share-alt"></i>
                </div>
                <h5>Compartilhe</h5>
                <p className="text-muted mb-4">Divulgue informações importantes para sua rede</p>
                <button className="btn btn-outline-success">Compartilhar</button>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="help-card text-center">
                <div className="help-icon">
                  <i className="fas fa-graduation-cap"></i>
                </div>
                <h5>Aprenda</h5>
                <p className="text-muted mb-4">Conheça os riscos e como se proteger</p>
                <Link to="/sobre" className="btn btn-outline-info">Saiba Mais</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Alert */}
      <section className="py-4 bg-danger text-white">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <div className="d-flex align-items-center">
                <i className="fas fa-exclamation-triangle fa-2x me-3"></i>
                <div>
                  <h5 className="mb-1">Em uma situação de emergência?</h5>
                  <p className="mb-0">Para emergências imediatas, ligue diretamente para os serviços especializados</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 text-lg-end mt-3 mt-lg-0">
              <div className="d-flex flex-wrap gap-2 justify-content-lg-end">
                <a href="tel:199" className="btn btn-outline-light btn-sm">199 - Defesa Civil</a>
                <a href="tel:193" className="btn btn-outline-light btn-sm">193 - Bombeiros</a>
                <a href="tel:192" className="btn btn-outline-light btn-sm">192 - SAMU</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
