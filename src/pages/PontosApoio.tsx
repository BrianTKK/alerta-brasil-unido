
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const PontosApoio = () => {
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
              <li className="breadcrumb-item active">Pontos de Apoio</li>
            </ol>
          </nav>
          <div className="row">
            <div className="col-lg-8">
              <h1>Pontos de Apoio</h1>
              <p className="lead">Encontre abrigos, centros de distribuição e pontos de assistência emergencial em sua região</p>
            </div>
            <div className="col-lg-4 text-lg-end">
              <div className="d-inline-flex align-items-center bg-danger bg-opacity-10 text-danger px-3 py-2 rounded-pill">
                <i className="fas fa-map-marker-alt me-2"></i>
                <span className="fw-medium">Localize Ajuda</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-4 bg-light">
        <div className="container">
          <div className="row g-3">
            <div className="col-md-6 col-lg-4">
              <div className="input-group">
                <span className="input-group-text">
                  <i className="fas fa-search"></i>
                </span>
                <input type="text" className="form-control" id="searchSupport" placeholder="Buscar por cidade ou tipo..." />
              </div>
            </div>
            <div className="col-md-3 col-lg-2">
              <select className="form-select" id="typeFilter">
                <option value="">Todos os tipos</option>
                <option value="Abrigo">Abrigos</option>
                <option value="Hospital">Hospitais</option>
                <option value="Distribuição">Distribuição</option>
                <option value="Bombeiros">Bombeiros</option>
                <option value="Defesa Civil">Defesa Civil</option>
              </select>
            </div>
            <div className="col-md-3 col-lg-2">
              <select className="form-select" id="statusFilter">
                <option value="">Todos os status</option>
                <option value="Ativo">Ativos</option>
                <option value="Lotado">Lotados</option>
                <option value="Emergência">Emergência</option>
              </select>
            </div>
            <div className="col-md-6 col-lg-2">
              <select className="form-select" id="regionFilter">
                <option value="">Todas as regiões</option>
                <option value="São Paulo">São Paulo</option>
                <option value="Rio de Janeiro">Rio de Janeiro</option>
                <option value="Minas Gerais">Minas Gerais</option>
                <option value="Rio Grande do Sul">Rio Grande do Sul</option>
              </select>
            </div>
            <div className="col-md-6 col-lg-2">
              <button className="btn btn-outline-secondary w-100">
                <i className="fas fa-times me-1"></i>
                Limpar
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Support Points Grid */}
      <section className="py-5">
        <div className="container">
          <div className="row mb-3">
            <div className="col-lg-6">
              <div id="supportResultsCount" className="text-muted">
                Carregando pontos de apoio...
              </div>
            </div>
            <div className="col-lg-6 text-lg-end">
              <button className="btn btn-outline-primary btn-sm">
                <i className="fas fa-map me-1"></i>
                Ver no Mapa
              </button>
            </div>
          </div>
          
          <div className="row g-4" id="supportPointsGrid">
            {/* Support points will be loaded here */}
          </div>
          
          {/* No results message */}
          <div id="noSupportResults" className="text-center py-5" style={{display: 'none'}}>
            <i className="fas fa-map-marker-alt fa-3x text-muted mb-3"></i>
            <h4 className="text-muted">Nenhum ponto de apoio encontrado</h4>
            <p className="text-muted">Tente ajustar os filtros ou termos de busca</p>
            <button className="btn btn-primary">Limpar Filtros</button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PontosApoio;
