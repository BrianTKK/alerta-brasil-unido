
import { TrendingUp, Shield, Users, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const StatsSection = () => {
  const stats = [
    {
      icon: Shield,
      label: "Projetos Ativos",
      value: "152",
      description: "Iniciativas em funcionamento",
      color: "text-green-600"
    },
    {
      icon: Users,
      label: "Voluntários Cadastrados",
      value: "12.847",
      description: "Pessoas engajadas",
      color: "text-blue-600"
    },
    {
      icon: MapPin,
      label: "Municípios Atendidos",
      value: "2.341",
      description: "Cidades com cobertura",
      color: "text-yellow-600"
    },
    {
      icon: TrendingUp,
      label: "Alertas Emitidos",
      value: "8.923",
      description: "Este ano",
      color: "text-red-600"
    }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-r from-green-600/5 via-blue-600/5 to-yellow-600/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Impacto Nacional
          </h2>
          <p className="text-lg text-gray-600">
            Números que demonstram a força da nossa rede de proteção
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-white/80 backdrop-blur-sm hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className={`inline-flex p-3 rounded-full bg-gray-50 mb-4`}>
                  <stat.icon className={`h-6 w-6 ${stat.color}`} />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="font-semibold text-gray-700 mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-500">
                  {stat.description}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
