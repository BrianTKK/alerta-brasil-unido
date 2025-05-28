
import { useState, useEffect } from "react";
import { Search, Shield, Users, MapPin, AlertTriangle, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProjectCard from "@/components/ProjectCard";
import StatsSection from "@/components/StatsSection";
import VolunteerSection from "@/components/VolunteerSection";
import SupportPointsSection from "@/components/SupportPointsSection";
import ReportSection from "@/components/ReportSection";
import { projects, supportPoints } from "@/data/mockData";

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProjects, setFilteredProjects] = useState(projects.slice(0, 6));
  const [activeSection, setActiveSection] = useState("inicio");

  useEffect(() => {
    const filtered = projects.filter(project =>
      project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.area.toLowerCase().includes(searchTerm.toLowerCase())
    ).slice(0, 6);
    setFilteredProjects(filtered);
  }, [searchTerm]);

  // Handle navigation and active section tracking
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['inicio', 'projetos', 'voluntario', 'apoio', 'reportar'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current && current !== activeSection) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  const featuredProjects = projects.slice(0, 3);
  const recentNews = [
    {
      title: "Sistema de Alerta do Rio Grande do Sul é Ampliado",
      date: "2024-05-20",
      summary: "Nova tecnologia permitirá alertas mais precisos para enchentes."
    },
    {
      title: "Campanha de Voluntariado Alcança 10 Mil Inscrições",
      date: "2024-05-18",
      summary: "Cidadãos de todo o Brasil se engajam na prevenção de desastres."
    },
    {
      title: "Mapeamento de Áreas de Risco em São Paulo",
      date: "2024-05-15",
      summary: "Defesa Civil atualiza mapa de áreas vulneráveis na capital."
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-yellow-50">
      <Navbar activeSection={activeSection} onNavigate={scrollToSection} />
      
      <div id="inicio">
        <HeroSection onNavigate={scrollToSection} />
      </div>

      {/* Quick Search Section */}
      <section className="py-12 px-4 bg-white/80 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Encontre Projetos e Recursos
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Busque por projetos, pontos de apoio ou informações específicas
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              type="text"
              placeholder="Digite palavras-chave como 'enchente', 'São Paulo', 'monitoramento'..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-12 py-4 text-lg border-2 border-green-200 focus:border-green-500 rounded-xl"
            />
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projetos" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">
              Projetos em Destaque
            </h2>
            <Button 
              variant="outline" 
              className="border-green-600 text-green-600 hover:bg-green-50"
              onClick={() => scrollToSection('projetos')}
            >
              Ver Todos os Projetos
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* Recent News */}
      <section className="py-16 px-4 bg-white/60 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Últimas Notícias
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {recentNews.map((news, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <Badge variant="secondary" className="w-fit mb-2">
                    {new Date(news.date).toLocaleDateString('pt-BR')}
                  </Badge>
                  <CardTitle className="text-lg">{news.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{news.summary}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer Section */}
      <VolunteerSection />

      {/* Support Points Section */}
      <SupportPointsSection />

      {/* Report Section */}
      <ReportSection />

      {/* Quick Actions */}
      <section className="py-16 px-4 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Como Você Pode Ajudar
            </h2>
            <p className="text-xl text-green-100">
              Junte-se à nossa rede de prevenção e resposta a desastres
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardHeader className="text-center">
                <Users className="h-12 w-12 mx-auto text-yellow-300 mb-4" />
                <CardTitle>Seja Voluntário</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="mb-4">Cadastre-se e contribua com suas habilidades</p>
                <Button 
                  variant="secondary" 
                  className="w-full"
                  onClick={() => scrollToSection('voluntario')}
                >
                  Quero Ajudar
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardHeader className="text-center">
                <MapPin className="h-12 w-12 mx-auto text-yellow-300 mb-4" />
                <CardTitle>Pontos de Apoio</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="mb-4">Encontre abrigos e centros de auxílio</p>
                <Button 
                  variant="secondary" 
                  className="w-full"
                  onClick={() => scrollToSection('apoio')}
                >
                  Localizar
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardHeader className="text-center">
                <AlertTriangle className="h-12 w-12 mx-auto text-yellow-300 mb-4" />
                <CardTitle>Reportar Risco</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="mb-4">Denuncie áreas de risco em sua região</p>
                <Button 
                  variant="secondary" 
                  className="w-full"
                  onClick={() => scrollToSection('reportar')}
                >
                  Reportar
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Shield className="h-6 w-6 mr-2 text-green-400" />
                Brasil Unido
              </h3>
              <p className="text-gray-300">
                Conectando pessoas e projetos para um Brasil mais seguro e preparado.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Navegação</h4>
              <ul className="space-y-2 text-gray-300">
                <li><button onClick={() => scrollToSection('inicio')} className="hover:text-green-400">Início</button></li>
                <li><button onClick={() => scrollToSection('projetos')} className="hover:text-green-400">Projetos</button></li>
                <li><button onClick={() => scrollToSection('voluntario')} className="hover:text-green-400">Voluntariado</button></li>
                <li><button onClick={() => scrollToSection('apoio')} className="hover:text-green-400">Pontos de Apoio</button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Recursos</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-green-400">Guias de Prevenção</a></li>
                <li><a href="#" className="hover:text-green-400">Contatos de Emergência</a></li>
                <li><button onClick={() => scrollToSection('reportar')} className="hover:text-green-400">Reportar Ocorrência</button></li>
                <li><a href="#" className="hover:text-green-400">FAQ</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Emergência</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Defesa Civil: 199</li>
                <li>Bombeiros: 193</li>
                <li>SAMU: 192</li>
                <li>Polícia: 190</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Brasil Unido - Portal de Prevenção a Desastres. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
