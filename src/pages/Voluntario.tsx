
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const Voluntario = () => {
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
              <li className="breadcrumb-item active">Voluntariado</li>
            </ol>
          </nav>
          <div className="row">
            <div className="col-lg-8">
              <h1>Voluntariado</h1>
              <p className="lead">Junte-se a milhares de brasileiros dedicados a proteger suas comunidades através do voluntariado em projetos de prevenção</p>
            </div>
            <div className="col-lg-4 text-lg-end">
              <div className="d-inline-flex align-items-center bg-success bg-opacity-10 text-success px-3 py-2 rounded-pill">
                <i className="fas fa-heart me-2"></i>
                <span className="fw-medium">Faça a Diferença</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Form */}
      <section className="py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-8">
              <div className="card shadow-sm">
                <div className="card-header bg-transparent">
                  <h5 className="mb-0">Cadastro de Voluntário</h5>
                </div>
                <div className="card-body p-4">
                  <form id="volunteerForm">
                    <div className="row g-3 mb-4">
                      <div className="col-md-6">
                        <label htmlFor="name" className="form-label">Nome Completo *</label>
                        <input type="text" className="form-control" id="name" required />
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="email" className="form-label">Email *</label>
                        <input type="email" className="form-control" id="email" required />
                      </div>
                    </div>
                    
                    <div className="row g-3 mb-4">
                      <div className="col-md-6">
                        <label htmlFor="phone" className="form-label">Telefone *</label>
                        <input type="tel" className="form-control" id="phone" required />
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="location" className="form-label">Cidade/Estado *</label>
                        <input type="text" className="form-control" id="location" required />
                      </div>
                    </div>

                    <div className="mb-4">
                      <label className="form-label">Áreas de Interesse *</label>
                      <div className="row g-2">
                        <div className="col-md-6">
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="monitoring" />
                            <label className="form-check-label" htmlFor="monitoring">
                              Monitoramento e Alertas
                            </label>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="response" />
                            <label className="form-check-label" htmlFor="response">
                              Resposta a Emergências
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="d-grid">
                      <button type="submit" className="btn btn-success btn-lg">
                        <i className="fas fa-heart me-2"></i>
                        Cadastrar como Voluntário
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="card shadow-sm">
                <div className="card-body p-4">
                  <h6 className="mb-3">
                    <i className="fas fa-info-circle text-primary me-2"></i>
                    Como Funciona
                  </h6>
                  <div className="mb-3">
                    <h6 className="text-success">
                      <i className="fas fa-check me-1"></i>
                      1. Cadastre-se
                    </h6>
                    <p className="text-muted small">
                      Preencha o formulário com suas informações e áreas de interesse
                    </p>
                  </div>
                  <div className="mb-3">
                    <h6 className="text-primary">
                      <i className="fas fa-users me-1"></i>
                      2. Conecte-se
                    </h6>
                    <p className="text-muted small">
                      Seja conectado com projetos e equipes em sua região
                    </p>
                  </div>
                  <div>
                    <h6 className="text-warning">
                      <i className="fas fa-hands-helping me-1"></i>
                      3. Contribua
                    </h6>
                    <p className="text-muted small">
                      Participe de atividades de monitoramento, educação e resposta
                    </p>
                  </div>
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

export default Voluntario;
