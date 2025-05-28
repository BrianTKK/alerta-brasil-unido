
import { useState } from "react";
import { Heart, Users, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "@/hooks/use-toast";

const VolunteerSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    skills: "",
    areas: [],
    availability: ""
  });

  const areas = [
    "Monitoramento",
    "Apoio Logístico", 
    "Comunicação",
    "Educação",
    "Resposta Emergencial",
    "Desenvolvimento de Software",
    "Primeiros Socorros",
    "Coordenação"
  ];

  const availabilityOptions = [
    "Diurno",
    "Noturno", 
    "Fins de Semana",
    "Período Integral",
    "Flexível"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Cadastro realizado com sucesso!",
      description: "Entraremos em contato em breve com oportunidades de voluntariado.",
    });
    console.log("Volunteer data:", formData);
  };

  const handleAreaChange = (area: string, checked: boolean | string) => {
    const isChecked = checked === true;
    setFormData(prev => ({
      ...prev,
      areas: isChecked 
        ? [...prev.areas, area]
        : prev.areas.filter(a => a !== area)
    }));
  };

  return (
    <section id="voluntario" className="py-16 px-4 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Heart className="h-4 w-4 mr-2" />
            Faça a Diferença
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Seja um Voluntário
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Sua contribuição pode salvar vidas. Junte-se a milhares de brasileiros que 
            dedicam seu tempo e habilidades para proteger nossas comunidades.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Side - Impact & Motivation */}
          <div className="space-y-6">
            <Card className="bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="h-5 w-5 mr-2 text-blue-600" />
                  Por Que Ser Voluntário?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Impacto Real</h4>
                    <p className="text-gray-600">Contribua diretamente para a proteção de vidas e comunidades</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Desenvolvimento Pessoal</h4>
                    <p className="text-gray-600">Desenvolva novas habilidades e ganhe experiência valiosa</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Rede de Contatos</h4>
                    <p className="text-gray-600">Conecte-se com profissionais e organizações do setor</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Flexibilidade</h4>
                    <p className="text-gray-600">Contribua de acordo com sua disponibilidade e habilidades</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-green-600 to-blue-600 text-white">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Depoimento</h3>
                <blockquote className="text-lg italic mb-4">
                  "Ser voluntário mudou minha perspectiva sobre como posso contribuir para um Brasil mais seguro. 
                  Cada alerta emitido, cada pessoa orientada, faz toda a diferença."
                </blockquote>
                <cite className="font-semibold">- Maria Silva, Voluntária em São Paulo</cite>
              </CardContent>
            </Card>
          </div>

          {/* Right Side - Form */}
          <Card className="bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>Cadastro de Voluntário</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Nome Completo *</label>
                    <Input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                      placeholder="Seu nome completo"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">E-mail *</label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Telefone</label>
                    <Input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      placeholder="(11) 99999-9999"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Localização *</label>
                    <Input
                      type="text"
                      value={formData.location}
                      onChange={(e) => setFormData({...formData, location: e.target.value})}
                      required
                      placeholder="Cidade, Estado"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Como você pode agregar? *</label>
                  <Textarea
                    value={formData.skills}
                    onChange={(e) => setFormData({...formData, skills: e.target.value})}
                    required
                    placeholder="Descreva suas habilidades, experiências e como gostaria de contribuir (ex: conhecimento em tecnologia, experiência em emergências, habilidades de comunicação, conhecimento local...)"
                    rows={4}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-3">Áreas de Interesse</label>
                  <div className="grid grid-cols-2 gap-3">
                    {areas.map((area) => (
                      <label key={area} className="flex items-center space-x-2">
                        <Checkbox
                          checked={formData.areas.includes(area)}
                          onCheckedChange={(checked) => handleAreaChange(area, checked as boolean)}
                        />
                        <span className="text-sm">{area}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Disponibilidade</label>
                  <select
                    value={formData.availability}
                    onChange={(e) => setFormData({...formData, availability: e.target.value})}
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  >
                    <option value="">Selecione sua disponibilidade</option>
                    {availabilityOptions.map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <label className="flex items-start space-x-2">
                    <Checkbox required />
                    <span className="text-sm text-gray-700">
                      Concordo em compartilhar meus dados com projetos relevantes e aceito receber 
                      comunicações sobre oportunidades de voluntariado. Seus dados serão tratados 
                      conforme nossa política de privacidade.
                    </span>
                  </label>
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700"
                >
                  Cadastrar como Voluntário
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default VolunteerSection;
