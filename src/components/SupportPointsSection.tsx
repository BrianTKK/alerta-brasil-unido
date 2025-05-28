
import { useState } from "react";
import { MapPin, Phone, Clock, Filter } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { supportPoints } from "@/data/mockData";

const SupportPointsSection = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [selectedState, setSelectedState] = useState("");

  const types = [...new Set(supportPoints.map(point => point.type))];
  const states = [...new Set(supportPoints.map(point => point.address.split(" - ")[1]?.split(",")[1]?.trim() || ""))].filter(Boolean);

  const filteredPoints = supportPoints.filter(point => {
    const matchesSearch = point.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         point.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         point.services.some(service => service.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesType = !selectedType || point.type === selectedType;
    const pointState = point.address.split(" - ")[1]?.split(",")[1]?.trim() || "";
    const matchesState = !selectedState || pointState === selectedState;
    
    return matchesSearch && matchesType && matchesState;
  });

  return (
    <section id="apoio" className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <MapPin className="h-4 w-4 mr-2" />
            Rede de Apoio
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Pontos de Apoio
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Encontre abrigos, centros de doação, bases da Defesa Civil e outros pontos de apoio 
            próximos a você. Nossa rede está preparada para oferecer assistência em momentos de necessidade.
          </p>
        </div>

        {/* Filters */}
        <div className="bg-gray-50 p-6 rounded-xl mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Filter className="h-5 w-5 text-gray-600" />
            <h3 className="font-semibold text-gray-900">Filtros de Busca</h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Buscar</label>
              <Input
                type="text"
                placeholder="Nome, endereço ou serviço..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Tipo</label>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Todos os tipos</option>
                {types.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Estado</label>
              <select
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Todos os estados</option>
                {states.map(state => (
                  <option key={state} value={state}>{state}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="mb-6">
          <p className="text-gray-600">
            {filteredPoints.length} ponto(s) de apoio encontrado(s)
          </p>
        </div>

        {/* Support Points Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPoints.map((point) => (
            <Card key={point.id} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg mb-2">{point.name}</CardTitle>
                    <Badge variant="secondary" className="mb-2">
                      {point.type}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-2">
                  <MapPin className="h-4 w-4 text-gray-500 mt-1 flex-shrink-0" />
                  <p className="text-sm text-gray-600">{point.address}</p>
                </div>
                
                {point.phone && (
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-gray-500" />
                    <p className="text-sm text-gray-600">{point.phone}</p>
                  </div>
                )}
                
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-gray-500" />
                  <p className="text-sm text-gray-600">Capacidade: {point.capacity}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-sm mb-2">Serviços Oferecidos:</h4>
                  <div className="flex flex-wrap gap-1">
                    {point.services.map((service, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {service}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <Button variant="outline" className="w-full mt-4">
                  Mais Detalhes
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredPoints.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              Nenhum ponto de apoio encontrado com os filtros selecionados.
            </p>
            <Button 
              variant="outline" 
              onClick={() => {
                setSearchTerm("");
                setSelectedType("");
                setSelectedState("");
              }}
              className="mt-4"
            >
              Limpar Filtros
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default SupportPointsSection;
