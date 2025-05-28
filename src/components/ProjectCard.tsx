
import { ExternalLink, MapPin, Calendar, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface Project {
  id: number;
  name: string;
  institution: string;
  area: string;
  type: string;
  description: string;
  location: string;
  url?: string;
  contact?: string;
  lastUpdate: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const getAreaColor = (area: string) => {
    const colors: { [key: string]: string } = {
      "Hidrometeorológica": "bg-blue-100 text-blue-800",
      "Geológica": "bg-amber-100 text-amber-800",
      "Incêndios": "bg-red-100 text-red-800",
      "Tecnológica": "bg-purple-100 text-purple-800",
      "Saúde": "bg-green-100 text-green-800",
      "Educação": "bg-indigo-100 text-indigo-800"
    };
    return colors[area] || "bg-gray-100 text-gray-800";
  };

  const getTypeColor = (type: string) => {
    const colors: { [key: string]: string } = {
      "Monitoramento": "bg-emerald-100 text-emerald-800",
      "Alerta": "bg-orange-100 text-orange-800",
      "Resposta": "bg-red-100 text-red-800",
      "Prevenção": "bg-green-100 text-green-800",
      "Educação": "bg-blue-100 text-blue-800",
      "Pesquisa": "bg-purple-100 text-purple-800"
    };
    return colors[type] || "bg-gray-100 text-gray-800";
  };

  return (
    <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white/90 backdrop-blur-sm">
      <CardHeader>
        <div className="flex justify-between items-start mb-2">
          <div className="flex gap-2 flex-wrap">
            <Badge className={getAreaColor(project.area)}>
              {project.area}
            </Badge>
            <Badge className={getTypeColor(project.type)}>
              {project.type}
            </Badge>
          </div>
        </div>
        <CardTitle className="text-lg leading-tight">{project.name}</CardTitle>
        <p className="text-sm text-gray-600 font-medium">{project.institution}</p>
      </CardHeader>
      
      <CardContent>
        <p className="text-gray-700 mb-4 leading-relaxed">{project.description}</p>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm text-gray-600">
            <MapPin className="h-4 w-4 mr-2 text-gray-400" />
            {project.location}
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <Calendar className="h-4 w-4 mr-2 text-gray-400" />
            Atualizado em {new Date(project.lastUpdate).toLocaleDateString('pt-BR')}
          </div>
        </div>
        
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="flex-1">
            Saber Mais
          </Button>
          {project.url && (
            <Button 
              variant="ghost" 
              size="sm"
              className="px-3"
              onClick={() => window.open(project.url, '_blank')}
            >
              <ExternalLink className="h-4 w-4" />
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
