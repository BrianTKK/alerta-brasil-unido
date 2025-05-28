
// Mock data for projects and support points based on Brazilian disaster prevention initiatives

export const projects = [
  {
    id: 1,
    name: "Sistema Nacional de Alertas (SNIRH)",
    institution: "Agência Nacional de Águas e Saneamento Básico",
    area: "Hidrometeorológica",
    type: "Monitoramento",
    description: "Sistema integrado de monitoramento hidrológico com estações automáticas para alertas de inundações e secas em tempo real.",
    location: "Nacional",
    url: "https://www.snirh.gov.br/hidroweb",
    contact: "contato@ana.gov.br",
    lastUpdate: "2024-05-15"
  },
  {
    id: 2,
    name: "CEMADEN - Centro Nacional de Monitoramento",
    institution: "Ministério da Ciência, Tecnologia e Inovação",
    area: "Hidrometeorológica",
    type: "Alerta",
    description: "Monitoramento 24h de eventos hidrometeorológicos extremos com rede de pluviômetros automáticos em municípios críticos.",
    location: "971 municípios brasileiros",
    url: "https://www.cemaden.gov.br",
    contact: "cemaden@cemaden.gov.br",
    lastUpdate: "2024-05-20"
  },
  {
    id: 3,
    name: "DefesaCivil.RS - Alerta Rio Grande do Sul",
    institution: "Defesa Civil do Estado do Rio Grande do Sul",
    area: "Hidrometeorológica",
    type: "Alerta",
    description: "Sistema estadual de alertas para enchentes, vendavais e granizo com integração aos municípios gaúchos.",
    location: "Rio Grande do Sul",
    url: "https://www.defesacivil.rs.gov.br",
    contact: "defesacivil@ssp.rs.gov.br",
    lastUpdate: "2024-05-18"
  },
  {
    id: 4,
    name: "Geo-Rio - Sistema de Alerta de Chuvas",
    institution: "Fundação Instituto de Geotécnica do Município do Rio de Janeiro",
    area: "Geológica",
    type: "Monitoramento",
    description: "Monitoramento de encostas e alertas para deslizamentos de terra na cidade do Rio de Janeiro com rede de pluviômetros.",
    location: "Rio de Janeiro - RJ",
    url: "https://www.rio.rj.gov.br/web/geo-rio",
    contact: "geo-rio@pcrj.rj.gov.br",
    lastUpdate: "2024-05-10"
  },
  {
    id: 5,
    name: "INPE Queimadas - Programa de Monitoramento",
    institution: "Instituto Nacional de Pesquisas Espaciais",
    area: "Incêndios",
    type: "Monitoramento",
    description: "Sistema de detecção de focos de calor por satélite para prevenção e combate aos incêndios florestais.",
    location: "Nacional",
    url: "https://queimadas.dgi.inpe.br",
    contact: "queimadas@inpe.br",
    lastUpdate: "2024-05-22"
  },
  {
    id: 6,
    name: "Rede Sismográfica Brasileira",
    institution: "Universidade de Brasília",
    area: "Geológica",
    type: "Monitoramento",
    description: "Monitoramento sísmico nacional com estações distribuídas pelo território brasileiro para detecção de terremotos.",
    location: "Nacional",
    url: "https://www.sismo.iag.usp.br",
    contact: "sismo@unb.br",
    lastUpdate: "2024-05-05"
  },
  {
    id: 7,
    name: "SP Alerta - Sistema de Alertas da Capital",
    institution: "Prefeitura de São Paulo",
    area: "Hidrometeorológica",
    type: "Alerta",
    description: "Sistema de alertas meteorológicos para a população paulistana via SMS, aplicativo e sirenes.",
    location: "São Paulo - SP",
    url: "https://www.saopaulo.sp.gov.br",
    contact: "spalerta@prefeitura.sp.gov.br",
    lastUpdate: "2024-05-12"
  },
  {
    id: 8,
    name: "Portal da Transparência de Desastres",
    institution: "Ministério da Integração e do Desenvolvimento Regional",
    area: "Tecnológica",
    type: "Prevenção",
    description: "Plataforma com dados abertos sobre reconhecimentos federais de situação de emergência e calamidade pública.",
    location: "Nacional",
    url: "https://s2id.mi.gov.br",
    contact: "s2id@mdr.gov.br",
    lastUpdate: "2024-05-08"
  },
  {
    id: 9,
    name: "PREVFOGO - Prevenção e Combate aos Incêndios",
    institution: "Instituto Brasileiro do Meio Ambiente - IBAMA",
    area: "Incêndios",
    type: "Resposta",
    description: "Sistema nacional de prevenção e combate aos incêndios florestais com brigadas especializadas.",
    location: "Nacional",
    url: "https://www.ibama.gov.br/prevfogo",
    contact: "prevfogo@ibama.gov.br",
    lastUpdate: "2024-05-14"
  },
  {
    id: 10,
    name: "Alerta Belo Horizonte",
    institution: "Defesa Civil de Belo Horizonte",
    area: "Hidrometeorológica",
    type: "Alerta",
    description: "Sistema municipal de alertas para chuvas intensas, vendavais e granizo na região metropolitana.",
    location: "Belo Horizonte - MG",
    url: "https://portalpbh.pbh.gov.br/pbh/ecp/comunidade.do?evento=portlet&pIdPlc=ecpTaxonomiaMenuPortal&app=defesacivil",
    contact: "defesacivil@pbh.gov.br",
    lastUpdate: "2024-05-16"
  },
  {
    id: 11,
    name: "Sistema de Informações Hospitalares - SIH/SUS",
    institution: "Ministério da Saúde",
    area: "Saúde",
    type: "Resposta",
    description: "Sistema de gestão de leitos e recursos hospitalares para emergências e desastres de grande escala.",
    location: "Nacional",
    url: "https://www.gov.br/saude",
    contact: "sih@saude.gov.br",
    lastUpdate: "2024-05-11"
  },
  {
    id: 12,
    name: "Educação para Redução de Riscos",
    institution: "Universidade Federal de Santa Catarina",
    area: "Educação",
    type: "Educação",
    description: "Programa de capacitação de professores e desenvolvimento de material didático sobre prevenção de desastres.",
    location: "Santa Catarina",
    url: "https://www.ufsc.br",
    contact: "prevencao@ufsc.br",
    lastUpdate: "2024-05-09"
  }
];

export const supportPoints = [
  {
    id: 1,
    name: "Abrigo Municipal Parque Ibirapuera",
    type: "Abrigo",
    address: "Av. Paulista, 1578 - Bela Vista, São Paulo - SP",
    phone: "(11) 3111-1000",
    capacity: "500 pessoas",
    services: ["Dormitório", "Alimentação", "Atendimento médico", "Área infantil"],
    coordinates: { lat: -23.587, lng: -46.656 }
  },
  {
    id: 2,
    name: "Centro de Distribuição de Doações - Zona Norte",
    type: "Centro de Doações",
    address: "Rua das Flores, 123 - Santana, São Paulo - SP",
    phone: "(11) 3222-2000", 
    capacity: "2000m² de estoque",
    services: ["Roupas", "Alimentos", "Produtos de higiene", "Medicamentos"],
    coordinates: { lat: -23.512, lng: -46.625 }
  },
  {
    id: 3,
    name: "Base Avançada Defesa Civil RJ",
    type: "Base de Operações",
    address: "Av. Brasil, 4365 - Manguinhos, Rio de Janeiro - RJ",
    phone: "(21) 2334-5000",
    capacity: "50 agentes",
    services: ["Resgate", "Evacuação", "Primeiros socorros", "Coordenação"],
    coordinates: { lat: -22.876, lng: -43.244 }
  },
  {
    id: 4,
    name: "Hospital de Emergência Regional",
    type: "Unidade de Saúde",
    address: "Rua Saldanha Marinho, 188 - Centro, Porto Alegre - RS",
    phone: "(51) 3444-6000",
    capacity: "200 leitos",
    services: ["Trauma", "UTI", "Cirurgia", "Hemodiálise"],
    coordinates: { lat: -30.027, lng: -51.229 }
  },
  {
    id: 5,
    name: "Centro Comunitário de Apoio",
    type: "Centro Comunitário",
    address: "Rua da Paz, 456 - Savassi, Belo Horizonte - MG",
    phone: "(31) 3555-7000",
    capacity: "300 pessoas",
    services: ["Reuniões", "Treinamentos", "Distribuição de kits", "Cadastramento"],
    coordinates: { lat: -19.937, lng: -43.937 }
  },
  {
    id: 6,
    name: "Abrigo Temporário Governador",
    type: "Abrigo",
    address: "Av. Boa Viagem, 789 - Boa Viagem, Recife - PE",
    phone: "(81) 3666-8000",
    capacity: "400 pessoas",
    services: ["Dormitório", "Alimentação", "Creche", "Atendimento psicológico"],
    coordinates: { lat: -8.113, lng: -34.896 }
  }
];

export const emergencyContacts = [
  {
    service: "Defesa Civil Nacional",
    phone: "199",
    description: "Emergências relacionadas a desastres naturais"
  },
  {
    service: "Bombeiros",
    phone: "193", 
    description: "Incêndios, resgates e emergências gerais"
  },
  {
    service: "SAMU",
    phone: "192",
    description: "Emergências médicas e atendimento pré-hospitalar"
  },
  {
    service: "Polícia Militar",
    phone: "190",
    description: "Emergências de segurança pública"
  },
  {
    service: "Polícia Civil",
    phone: "197",
    description: "Denúncias e ocorrências policiais"
  }
];

export const volunteers = [
  {
    id: 1,
    name: "Ana Silva",
    location: "São Paulo - SP",
    skills: ["Primeiros Socorros", "Comunicação"],
    areas: ["Resposta Emergencial", "Educação"],
    availability: "Fins de Semana",
    registrationDate: "2024-03-15"
  },
  {
    id: 2,
    name: "Carlos Oliveira", 
    location: "Rio de Janeiro - RJ",
    skills: ["Desenvolvimento Web", "Análise de Dados"],
    areas: ["Desenvolvimento de Software", "Monitoramento"],
    availability: "Flexível",
    registrationDate: "2024-04-02"
  },
  {
    id: 3,
    name: "Maria Santos",
    location: "Belo Horizonte - MG",
    skills: ["Coordenação", "Logística"],
    areas: ["Apoio Logístico", "Coordenação"],
    availability: "Período Integral",
    registrationDate: "2024-02-28"
  }
];
