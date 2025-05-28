
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const Sobre = () => {
  useEffect(() => {
    const loadScript = (src: string) => {
      const script = document.createElement('script');
      script.src = src;
      document.body.appendChild(script);
    };

    loadScript('https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js');
  }, []);

  return (
    <div>
      <Navbar />
      
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><Link to="/">Início</Link></li>
              <li className="breadcrumb-item active">Sobre</li>
            </ol>
          </nav>
          <div className="row">
            <div className="col-lg-8">
              <h1>Sobre o Brasil Unido</h1>
              <p className="lead">Conectando pessoas, projetos e tecnologia para criar um Brasil mais seguro e preparado para enfrentar desastres naturais</p>
            </div>
            <div className="col-lg-4 text-lg-end">
              <div className="d-inline-flex align-items-center bg-primary bg-opacity-10 text-primary px-3 py-2 rounded-pill">
                <i className="fas fa-heart me-2"></i>
                <span className="fw-medium">Unidos Somos Mais Fortes</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <h2 className="mb-4">Nossa Missão</h2>
              <p className="lead mb-4">
                Criar uma rede nacional integrada de prevenção, monitoramento e resposta a desastres naturais, 
                conectando projetos científicos, voluntários dedicados e comunidades vulneráveis.
              </p>
              <p className="mb-4">
                Acreditamos que através da colaboração entre ciência, tecnologia e sociedade civil, 
                podemos reduzir significativamente os impactos dos desastres naturais no Brasil, 
                salvando vidas e protegendo comunidades.
              </p>
              <div className="row g-3">
                <div className="col-sm-6">
                  <div className="d-flex align-items-center">
                    <i className="fas fa-check-circle text-success me-2"></i>
                    <span>Prevenção baseada em dados</span>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="d-flex align-items-center">
                    <i className="fas fa-check-circle text-success me-2"></i>
                    <span>Resposta rápida e coordenada</span>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="d-flex align-items-center">
                    <i className="fas fa-check-circle text-success me-2"></i>
                    <span>Educação e conscientização</span>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="d-flex align-items-center">
                    <i className="fas fa-check-circle text-success me-2"></i>
                    <span>Tecnologia acessível</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="card border-0 shadow-sm">
                <div className="card-body p-5 text-center">
                  <div className="mb-4">
                    <i className="fas fa-shield-alt fa-4x text-primary"></i>
                  </div>
                  <h4 className="text-primary mb-3">Proteção Nacional</h4>
                  <p className="text-muted">
                    Um portal que centraliza informações, conecta pessoas e facilita a colaboração 
                    entre todos os atores envolvidos na prevenção de desastres.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2>Nossos Valores</h2>
            <p className="lead text-muted">Os princípios que guiam nossas ações e decisões</p>
          </div>
          <div className="row g-4">
            <div className="col-md-6 col-lg-3">
              <div className="card border-0 shadow-sm h-100 text-center">
                <div className="card-body p-4">
                  <div className="mb-3">
                    <i className="fas fa-hands-helping fa-3x text-primary"></i>
                  </div>
                  <h5>Colaboração</h5>
                  <p className="text-muted mb-0">
                    Acreditamos na força da união entre ciência, governo e sociedade civil
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card border-0 shadow-sm h-100 text-center">
                <div className="card-body p-4">
                  <div className="mb-3">
                    <i className="fas fa-lightbulb fa-3x text-warning"></i>
                  </div>
                  <h5>Inovação</h5>
                  <p className="text-muted mb-0">
                    Utilizamos tecnologia e dados para criar soluções eficazes e acessíveis
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card border-0 shadow-sm h-100 text-center">
                <div className="card-body p-4">
                  <div className="mb-3">
                    <i className="fas fa-eye fa-3x text-info"></i>
                  </div>
                  <h5>Transparência</h5>
                  <p className="text-muted mb-0">
                    Todas as informações são abertas e acessíveis para consulta pública
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card border-0 shadow-sm h-100 text-center">
                <div className="card-body p-4">
                  <div className="mb-3">
                    <i className="fas fa-clock fa-3x text-danger"></i>
                  </div>
                  <h5>Agilidade</h5>
                  <p className="text-muted mb-0">
                    Resposta rápida é essencial quando vidas estão em risco
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2>Impacto em Números</h2>
            <p className="lead text-muted">Nosso crescimento e alcance pelo Brasil</p>
          </div>
          <div className="row g-4 text-center">
            <div className="col-md-3 col-sm-6">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body p-4">
                  <i className="fas fa-project-diagram fa-3x text-primary mb-3"></i>
                  <h3 className="text-primary mb-2">127</h3>
                  <p className="text-muted mb-0">Projetos Conectados</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body p-4">
                  <i className="fas fa-users fa-3x text-success mb-3"></i>
                  <h3 className="text-success mb-2">3.2K</h3>
                  <p className="text-muted mb-0">Voluntários Ativos</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body p-4">
                  <i className="fas fa-map-marker-alt fa-3x text-warning mb-3"></i>
                  <h3 className="text-warning mb-2">445</h3>
                  <p className="text-muted mb-0">Pontos de Apoio</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body p-4">
                  <i className="fas fa-heart fa-3x text-danger mb-3"></i>
                  <h3 className="text-danger mb-2">12M</h3>
                  <p className="text-muted mb-0">Vidas Protegidas</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Sobre;
