
import { useState } from "react";
import { AlertTriangle, Send } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

const ReportSection = () => {
  const [formData, setFormData] = useState({
    type: "",
    state: "",
    city: "",
    address: "",
    description: "",
    name: "",
    email: ""
  });

  const reportTypes = [
    "Área de Risco",
    "Ocorrência Recente",
    "Sugestão de Melhoria",
    "Infraestrutura Danificada",
    "Outro"
  ];

  const brazilianStates = [
    "AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA",
    "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN",
    "RS", "RO", "RR", "SC", "SP", "SE", "TO"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.type || !formData.state || !formData.city || !formData.description) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Denúncia enviada com sucesso!",
      description: "Sua denúncia foi recebida e será analisada por nossa equipe. Obrigado por contribuir para um Brasil mais seguro.",
    });

    console.log("Report data:", formData);
    
    // Reset form
    setFormData({
      type: "",
      state: "",
      city: "",
      address: "",
      description: "",
      name: "",
      email: ""
    });
  };

  return (
    <section id="reportar" className="py-16 px-4 bg-gradient-to-br from-red-50 to-orange-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <AlertTriangle className="h-4 w-4 mr-2" />
            Participação Cidadã
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Denúncia / Reportar Ocorrência
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Sua participação é fundamental para identificar áreas de risco, reportar ocorrências 
            e sugerir melhorias. Juntos, podemos construir uma rede mais eficiente de prevenção a desastres.
          </p>
        </div>

        <Card className="bg-white/90 backdrop-blur-sm shadow-xl">
          <CardHeader>
            <CardTitle className="text-xl text-center">Formulário de Denúncia</CardTitle>
            <p className="text-center text-gray-600">
              Todas as informações são confidenciais e serão utilizadas apenas para fins de prevenção
            </p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Tipo de Denúncia/Reportagem *
                </label>
                <select
                  value={formData.type}
                  onChange={(e) => setFormData({...formData, type: e.target.value})}
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  required
                >
                  <option value="">Selecione o tipo...</option>
                  {reportTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Estado *</label>
                  <select
                    value={formData.state}
                    onChange={(e) => setFormData({...formData, state: e.target.value})}
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    required
                  >
                    <option value="">Selecione o estado...</option>
                    {brazilianStates.map(state => (
                      <option key={state} value={state}>{state}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Município *</label>
                  <Input
                    type="text"
                    value={formData.city}
                    onChange={(e) => setFormData({...formData, city: e.target.value})}
                    placeholder="Nome do município"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Endereço / Ponto de Referência
                </label>
                <Input
                  type="text"
                  value={formData.address}
                  onChange={(e) => setFormData({...formData, address: e.target.value})}
                  placeholder="Rua, bairro, ponto de referência próximo..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Descrição Detalhada *
                </label>
                <Textarea
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  placeholder="Descreva detalhadamente a situação, área de risco, ocorrência ou sugestão. Inclua informações como: o que aconteceu, quando, condições observadas, pessoas afetadas, etc."
                  rows={5}
                  required
                />
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-3 text-gray-900">
                  Contato (Opcional)
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Caso queira ser contatado para mais informações ou acompanhar o andamento
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Nome</label>
                    <Input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="Seu nome"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">E-mail</label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-sm text-blue-800">
                  <strong>Importante:</strong> Em caso de emergência imediata, ligue para:
                  <br />
                  • Defesa Civil: 199
                  <br />
                  • Bombeiros: 193
                  <br />
                  • SAMU: 192
                </p>
              </div>

              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-lg py-3"
              >
                <Send className="mr-2 h-5 w-5" />
                Enviar Denúncia
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ReportSection;
