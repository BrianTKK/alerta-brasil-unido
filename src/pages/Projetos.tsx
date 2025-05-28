
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const Projetos = () => {
  useEffect(() => {
    // Load external scripts
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
              <li className="breadcrumb-item active">Projetos</li>
            </ol>
          </nav>
          <div className="row">
            <div className="col-lg-8">
              <h1>Projetos de Prevenção</h1>
              <p className="lead">Explore iniciativas e sistemas de monitoramento, alerta e resposta a desastres naturais em todo o Brasil</p>
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
                <input type="text" className="form-control" id="searchInput" placeholder="Buscar projetos..." />
              </div>
            </div>
            <div className="col-md-3 col-lg-2">
              <select className="form-select" id="areaFilter">
                <option value="">Todas as áreas</option>
                <option value="Hidrometeorológica">Hidrometeorológica</option>
                <option value="Geológica">Geológica</option>
                <option value="Incêndios">Incêndios</option>
                <option value="Tecnológica">Tecnológica</option>
                <option value="Saúde">Saúde</option>
                <option value="Educação">Educação</option>
              </select>
            </div>
            <div className="col-md-3 col-lg-2">
              <select className="form-select" id="typeFilter">
                <option value="">Todos os tipos</option>
                <option value="Monitoramento">Monitoramento</option>
                <option value="Alerta">Alerta</option>
                <option value="Resposta">Resposta</option>
                <option value="Prevenção">Prevenção</option>
                <option value="Educação">Educação</option>
              </select>
            </div>
            <div className="col-md-6 col-lg-2">
              <select className="form-select" id="locationFilter">
                <option value="">Todas as localizações</option>
                <option value="Nacional">Nacional</option>
                <option value="São Paulo">São Paulo</option>
                <option value="Rio de Janeiro">Rio de Janeiro</option>
                <option value="Minas Gerais">Minas Gerais</option>
                <option value="Rio Grande do Sul">Rio Grande do Sul</option>
                <option value="Santa Catarina">Santa Catarina</option>
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

      {/* Projects Grid */}
      <section className="py-5">
        <div className="container">
          <div className="row mb-3">
            <div className="col-lg-6">
              <div id="resultsCount" className="text-muted">
                Carregando projetos...
              </div>
            </div>
            <div className="col-lg-6 text-lg-end">
              <div className="btn-group" role="group">
                <input type="radio" className="btn-check" name="sortBy" id="sortRelevance" value="relevance" defaultChecked />
                <label className="btn btn-outline-primary btn-sm" htmlFor="sortRelevance">Relevância</label>
                
                <input type="radio" className="btn-check" name="sortBy" id="sortDate" value="date" />
                <label className="btn btn-outline-primary btn-sm" htmlFor="sortDate">Mais recentes</label>
                
                <input type="radio" className="btn-check" name="sortBy" id="sortName" value="name" />
                <label className="btn btn-outline-primary btn-sm" htmlFor="sortName">Nome A-Z</label>
              </div>
            </div>
          </div>
          
          <div className="row g-4" id="projectsGrid">
            {/* Projects will be loaded here by JavaScript */}
          </div>
          
          {/* No results message */}
          <div id="noResults" className="text-center py-5" style={{display: 'none'}}>
            <i className="fas fa-search fa-3x text-muted mb-3"></i>
            <h4 className="text-muted">Nenhum projeto encontrado</h4>
            <p className="text-muted">Tente ajustar os filtros ou termos de busca</p>
            <button className="btn btn-primary">Limpar Filtros</button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projetos;
