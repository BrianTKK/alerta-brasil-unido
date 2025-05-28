
import { ArrowRight, Shield, Users, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-600/10 via-blue-600/10 to-yellow-600/10"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23059669" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
      
      <div className="max-w-6xl mx-auto relative">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Shield className="h-4 w-4 mr-2" />
            Portal Nacional de Prevenção a Desastres
          </div>
          
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            <span className="text-green-600">Unidos</span> pela{" "}
            <span className="text-blue-600">Prevenção</span>,{" "}
            <span className="text-yellow-600">Fortes</span> na{" "}
            <span className="text-green-600">Proteção</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            Conectamos projetos, voluntários e comunidades para criar uma rede nacional
            de prevenção e resposta a desastres naturais. Juntos, construímos um Brasil mais seguro.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-lg px-8 py-4"
            >
              Explorar Projetos
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-green-600 text-green-600 hover:bg-green-50 text-lg px-8 py-4"
            >
              Seja Voluntário
              <Users className="ml-2 h-5 w-5" />
            </Button>
          </div>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-green-600 mb-2">150+</div>
              <div className="text-gray-700 font-medium">Projetos Ativos</div>
              <div className="text-sm text-gray-500">Em todo o Brasil</div>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">12K+</div>
              <div className="text-gray-700 font-medium">Voluntários</div>
              <div className="text-sm text-gray-500">Cadastrados</div>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-yellow-600 mb-2">1.2M+</div>
              <div className="text-gray-700 font-medium">Pessoas Atendidas</div>
              <div className="text-sm text-gray-500">Anualmente</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
