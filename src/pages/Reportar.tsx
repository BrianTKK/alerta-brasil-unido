
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const Reportar = () => {
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
              <li className="breadcrumb-item active">Reportar</li>
            </ol>
          </nav>
          <div className="row">
            <div className="col-lg-8">
              <h1>Reportar Situação</h1>
              <p className="lead">Relate situações de risco, emergências ou problemas que possam afetar a segurança da comunidade</p>
            </div>
            <div className="col-lg-4 text-lg-end">
              <div className="d-inline-flex align-items-center bg-warning bg-opacity-10 text-warning px-3 py-2 rounded-pill">
                <i className="fas fa-exclamation-triangle me-2"></i>
                <span className="fw-medium">Reporte com Responsabilidade</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Alert */}
      <section className="py-3 bg-danger text-white">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-8">
              <div className="d-flex align-items-center">
                <i className="fas fa-exclamation-triangle fa-2x me-3"></i>
                <div>
                  <h6 className="mb-0">Situação de Emergência Imediata?</h6>
                  <small>Para emergências que requerem ação imediata, ligue diretamente para os serviços de emergência</small>
                </div>
              </div>
            </div>
            <div className="col-md-4 text-md-end">
              <div className="d-flex gap-2 justify-content-md-end">
                <a href="tel:199" className="btn btn-outline-light btn-sm">199 - Defesa Civil</a>
                <a href="tel:193" className="btn btn-outline-light btn-sm">193 - Bombeiros</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-5">
        <div className="container">
          <div className="row g-5">
            {/* Left Column - Form */}
            <div className="col-lg-8">
              <div className="card shadow-sm">
                <div className="card-header bg-transparent">
                  <h5 className="mb-0">Formulário de Reporte</h5>
                </div>
                <div className="card-body p-4">
                  <form id="reportForm">
                    {/* Tipo de Situação */}
                    <h6 className="text-muted mb-3">Tipo de Situação</h6>
                    <div className="row g-3 mb-4">
                      <div className="col-md-6">
                        <label htmlFor="reportType" className="form-label">Categoria *</label>
                        <select className="form-select" id="reportType" required>
                          <option value="">Selecione o tipo</option>
                          <option value="inundacao">Inundação / Alagamento</option>
                          <option value="deslizamento">Deslizamento de Terra</option>
                          <option value="incendio">Incêndio</option>
                          <option value="estrutural">Problema Estrutural</option>
                          <option value="contaminacao">Contaminação</option>
                          <option value="clima">Evento Climático Extremo</option>
                          <option value="outro">Outro</option>
                        </select>
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="urgency" className="form-label">Nível de Urgência *</label>
                        <select className="form-select" id="urgency" required>
                          <option value="">Selecione a urgência</option>
                          <option value="baixa">Baixa - Situação de risco potencial</option>
                          <option value="media">Média - Requer atenção</option>
                          <option value="alta">Alta - Risco iminente</option>
                          <option value="critica">Crítica - Emergência ativa</option>
                        </select>
                      </div>
                    </div>

                    {/* Localização */}
                    <h6 className="text-muted mb-3">Localização</h6>
                    <div className="row g-3 mb-4">
                      <div className="col-md-6">
                        <label htmlFor="location" className="form-label">Endereço ou Referência *</label>
                        <input type="text" className="form-control" id="location" required
                            placeholder="Rua, número, bairro ou ponto de referência" />
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="city" className="form-label">Cidade/Estado *</label>
                        <input type="text" className="form-control" id="city" required
                            placeholder="Ex: São Paulo, SP" />
                      </div>
                    </div>

                    {/* Descrição */}
                    <h6 className="text-muted mb-3">Descrição da Situação</h6>
                    <div className="mb-4">
                      <label htmlFor="description" className="form-label">Descreva detalhadamente a situação *</label>
                      <textarea className="form-control" id="description" rows={5} required
                          placeholder="Descreva o que está acontecendo, quando começou, quantas pessoas podem estar afetadas, etc."></textarea>
                    </div>

                    {/* Submit Button */}
                    <div className="d-grid">
                      <button type="submit" className="btn btn-danger btn-lg">
                        <i className="fas fa-exclamation-triangle me-2"></i>
                        Enviar Reporte
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            {/* Right Column - Guidelines */}
            <div className="col-lg-4">
              <div className="sticky-lg-top" style={{top: '100px'}}>
                {/* Guidelines Card */}
                <div className="card shadow-sm mb-4">
                  <div className="card-header bg-transparent">
                    <h6 className="mb-0">
                      <i className="fas fa-info-circle text-primary me-2"></i>
                      Diretrizes para Reporte
                    </h6>
                  </div>
                  <div className="card-body">
                    <div className="mb-3">
                      <h6 className="text-success">
                        <i className="fas fa-check me-1"></i>
                        O que reportar:
                      </h6>
                      <ul className="list-unstyled small text-muted">
                        <li>• Situações de risco à comunidade</li>
                        <li>• Problemas estruturais</li>
                        <li>• Eventos climáticos extremos</li>
                        <li>• Contaminações ambientais</li>
                        <li>• Situações preventivas</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Emergency Contacts */}
                <div className="card bg-danger text-white shadow-sm">
                  <div className="card-body p-4">
                    <h6 className="mb-3">
                      <i className="fas fa-phone me-2"></i>
                      Emergência Imediata?
                    </h6>
                    <p className="small mb-3">
                      Se a situação requer ação imediata, 
                      ligue diretamente:
                    </p>
                    <div className="d-grid gap-2">
                      <a href="tel:199" className="btn btn-outline-light btn-sm">
                        <i className="fas fa-shield-alt me-1"></i>
                        199 - Defesa Civil
                      </a>
                      <a href="tel:193" className="btn btn-outline-light btn-sm">
                        <i className="fas fa-fire me-1"></i>
                        193 - Bombeiros
                      </a>
                      <a href="tel:192" className="btn btn-outline-light btn-sm">
                        <i className="fas fa-ambulance me-1"></i>
                        192 - SAMU
                      </a>
                    </div>
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

export default Reportar;
