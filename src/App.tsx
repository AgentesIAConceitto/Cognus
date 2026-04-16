/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Shield, 
  MapPin, 
  Users, 
  Database, 
  BarChart3, 
  Cpu, 
  Search, 
  FileText, 
  GraduationCap, 
  CheckCircle2, 
  ChevronRight, 
  Phone, 
  Mail, 
  Globe,
  Menu,
  X,
  Target,
  ArrowRight,
  Fingerprint,
  Video,
  LineChart
} from "lucide-react";

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Quem Somos", href: "#quem-somos" },
    { name: "Metodologia", href: "#metodologia" },
    { name: "Serviços", href: "#servicos" },
    { name: "Tecnologia", href: "#tecnologia" },
    { name: "Roadmap", href: "#roadmap" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-[#050B15]/90 backdrop-blur-md py-4 border-b border-white/10" : "bg-transparent py-6"}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Shield className="w-8 h-8 text-cyan-400" />
          <span className="text-2xl font-bold tracking-tight text-white">
            COGNUS <span className="text-cyan-400 font-light">Tecnologia</span>
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-sm font-medium text-gray-300 hover:text-cyan-400 transition-colors">
              {link.name}
            </a>
          ))}
          <a href="#contato" className="bg-cyan-500 hover:bg-cyan-400 text-[#050B15] px-6 py-2 rounded-full text-sm font-bold transition-all transform hover:scale-105">
            Diagnóstico Gratuito
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0A1628] border-b border-white/10"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} onClick={() => setMobileMenuOpen(false)} className="text-lg text-gray-300 hover:text-cyan-400">
                  {link.name}
                </a>
              ))}
              <a href="#contato" onClick={() => setMobileMenuOpen(false)} className="bg-cyan-500 text-[#050B15] text-center py-3 rounded-lg font-bold">
                Diagnóstico Gratuito
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#050B15]">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1573164060897-425941c30241?auto=format&fit=crop&q=80&w=2000" 
          alt="Smart City Background" 
          className="w-full h-full object-cover opacity-20"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050B15] via-transparent to-[#050B15]"></div>
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-[#050B15] to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold uppercase tracking-widest mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            Consultoria de Inteligência Aplicada
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-8">
            Consultoria de Inteligência em <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Segurança Pública</span>
          </h1>
          <p className="text-xl text-gray-400 mb-10 leading-relaxed max-w-xl">
            Soluções estratégicas, baseadas em dados e inteligência aplicada, para municípios que buscam resultados concretos na proteção do cidadão.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-cyan-500 hover:bg-cyan-400 text-[#050B15] px-8 py-4 rounded-full font-bold transition-all flex items-center gap-2 group shadow-[0_0_20px_rgba(34,211,238,0.3)]">
              Agende um Diagnóstico
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border border-white/20 hover:border-cyan-400 text-white px-8 py-4 rounded-full font-bold transition-all">
              Conheça nossas Soluções
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative hidden md:block"
        >
          <div className="relative z-10 bg-[#0A1628]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl">
            <div className="flex items-center justify-between mb-8">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400/50"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400/50"></div>
                <div className="w-3 h-3 rounded-full bg-green-400/50"></div>
              </div>
              <div className="text-[10px] text-gray-500 font-mono">INCIDENT_DASHBOARD_V2.0</div>
            </div>
            
            <div className="space-y-4">
              {[1, 2, 3].map((item) => (
                <div key={item} className="bg-[#050B15] border border-white/5 rounded-lg p-4 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${item === 1 ? "bg-red-500/20 text-red-400" : "bg-cyan-500/20 text-cyan-400"}`}>
                      <Target className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-white text-sm font-bold">Ocorrência em Tempo Real</div>
                      <div className="text-gray-500 text-xs font-mono">Distrito {item * 102} • Prioridade Nível {item}</div>
                    </div>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-[10px] font-bold ${item === 1 ? "bg-red-500 text-white" : "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20"}`}>
                    {item === 1 ? "CRÍTICO" : "ATIVO"}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-cyan-500/5 border border-cyan-500/10">
                <LineChart className="text-cyan-400 w-5 h-5 mb-2" />
                <div className="text-2xl font-bold text-white">12.4%</div>
                <div className="text-[10px] text-gray-500 uppercase tracking-wider">Redução Criminal</div>
              </div>
              <div className="p-4 rounded-xl bg-blue-500/5 border border-blue-500/10">
                <Users className="text-blue-400 w-5 h-5 mb-2" />
                <div className="text-2xl font-bold text-white">98%</div>
                <div className="text-[10px] text-gray-500 uppercase tracking-wider">Aprovação Social</div>
              </div>
            </div>
          </div>
          
          {/* Decorative Glow */}
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-cyan-500/20 rounded-full blur-[100px] z-0"></div>
          <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-blue-500/20 rounded-full blur-[100px] z-0"></div>
        </motion.div>
      </div>
    </section>
  );
};

const SectionHeading = ({ subtitle, title, description, light = false }) => (
  <div className={`max-w-3xl mx-auto text-center mb-16 ${light ? "text-white" : "text-[#050B15]"}`}>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`text-xs font-bold uppercase tracking-[0.3em] mb-4 ${light ? "text-cyan-400" : "text-cyan-600"}`}
    >
      {subtitle}
    </motion.div>
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 }}
      className={`text-3xl md:text-5xl font-bold mb-6 ${light ? "text-white" : "text-[#050B15]"}`}
    >
      {title}
    </motion.h2>
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2 }}
      className={`text-lg transition-colors ${light ? "text-gray-400" : "text-gray-600"}`}
    >
      {description}
    </motion.p>
  </div>
);

const About = () => {
  const cards = [
    { 
      title: "Expertise Técnica", 
      desc: "Profissionais com décadas de experiência em segurança pública, gestão governamental e formulação de políticas.", 
      icon: <Target className="w-6 h-6 text-cyan-400" /> 
    },
    { 
      title: "Foco no Setor Público", 
      desc: "Atuação exclusivamente orientada às demandas, normas e realidades do poder público municipal e estadual.", 
      icon: <Globe className="w-6 h-6 text-cyan-400" /> 
    },
    { 
      title: "Abordagem Baseada em Dados", 
      desc: "Todas as análises e recomendações são sustentadas por evidências, indicadores e metodologias científicas.", 
      icon: <Database className="w-6 h-6 text-cyan-400" /> 
    },
  ];

  return (
    <section id="quem-somos" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeading 
              subtitle="QUEM SOMOS" 
              title="Transformando a Segurança Municipal com Inteligência"
              description="Somos uma consultoria especializada em inteligência e gestão de segurança pública, com atuação focada no fortalecimento institucional de municípios brasileiros."
            />
            <div className="space-y-8 mt-12">
              <p className="text-gray-600 leading-relaxed italic border-l-4 border-cyan-500 pl-6 text-lg">
                "Nossa equipe é formada por especialistas com trajetória consolidada no setor público, nas áreas de planejamento estratégico, políticas públicas e tecnologia da informação."
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex items-start gap-4 p-4 border border-gray-100 rounded-xl hover:shadow-lg transition-all">
                  <CheckCircle2 className="text-cyan-500 w-5 h-5 flex-shrink-0 mt-1" />
                  <div className="text-sm font-medium text-gray-700">Conformidade com a Lei 13.022/2014</div>
                </div>
                <div className="flex items-start gap-4 p-4 border border-gray-100 rounded-xl hover:shadow-lg transition-all">
                  <CheckCircle2 className="text-cyan-500 w-5 h-5 flex-shrink-0 mt-1" />
                  <div className="text-sm font-medium text-gray-700">Metodologia Científica Aplicada</div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-6">
            {cards.map((card, idx) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-[#050B15] p-8 rounded-2xl group hover:border-cyan-400 border border-transparent transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {card.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{card.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Challenges = () => {
  const challenges = [
    { title: "Fragmentação Institucional", desc: "Falta de integração entre órgãos municipais, estaduais e federais reduz a eficácia." },
    { title: "Ausência de Planejamento", desc: "Ações reativas e sem diagnóstico resultam em políticas descontínuas." },
    { title: "Capacitação Insuficiente", desc: "Gestores carecem de formação especializada em segurança moderna." },
    { title: "Escassez de Dados", desc: "Tomada de decisão sem indicadores estruturados compromete recursos." },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          subtitle="DESAFIOS" 
          title="O Cenário das Cidades Brasileiras"
          description="Os gestores enfrentam uma crescente complexidade. Compreender o diagnóstico é o primeiro passo para a transformação."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {challenges.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              <div className="text-cyan-500 font-mono text-xs mb-4">DESAFIO 0{idx + 1}</div>
              <h3 className="text-lg font-bold text-[#050B15] mb-4">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Methodology = () => {
  const steps = [
    { name: "Diagnóstico", icon: <Search />, color: "bg-blue-600", desc: "Análise profunda da maturidade institucional e gaps operacionais." },
    { name: "Planejamento", icon: <BarChart3 />, color: "bg-cyan-600", desc: "Criação do Plano Diretor de Segurança com metas SMART." },
    { name: "Implementação", icon: <Cpu />, color: "bg-cyan-500", desc: "Execução das estratégias, tecnologia e reestruturação normativa." },
    { name: "Avaliação", icon: <LineChart />, color: "bg-blue-500", desc: "Monitoramento contínuo e medição de resultados reais." },
  ];

  return (
    <section id="metodologia" className="py-24 bg-[#050B15] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-cyan-500/5 blur-[120px]"></div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeading 
          light
          subtitle="METODOLOGIA" 
          title="Inteligência Aplicada de Ponta a Ponta"
          description="Nossa abordagem combina rigoroso planejamento estratégico com avaliação contínua, garantindo intervenções precisas e sustentáveis."
        />
        
        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <motion.div
              key={step.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative text-center group"
            >
              <div className={`w-20 h-20 ${step.color} rounded-2xl mx-auto flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{step.name}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
              
              {idx < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 -right-4 w-8 h-px bg-white/10"></div>
              )}
            </motion.div>
          ))}
        </div>

        <div className="mt-20 p-8 rounded-3xl bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-white/10 text-center">
          <p className="text-gray-300 max-w-4xl mx-auto italic">
            "A metodologia de inteligência aplicada assegura que cada recomendação seja fundamentada em evidências reais do território municipal, aumentando significativamente a efetividade das políticas de segurança."
          </p>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: "Gestão e Planejamento",
      desc: "Consultoria em gestão estratégica, planejamento de políticas públicas e estruturação de secretarias de segurança.",
      icon: <Users className="w-8 h-8" />,
      deliverables: ["Diagnóstico Institucional", "Elaboração de Planos Municipais", "Fluxos Operacionais"]
    },
    {
      title: "Governança e Avaliação",
      desc: "Frameworks de governança e avaliação de impacto de políticas públicas. Auditoria legal completa da Lei 13.022.",
      icon: <Shield className="w-8 h-8" />,
      deliverables: ["Modelagem de Estruturas", "Pareceres Técnicos", "Relatórios de Conformidade"]
    },
    {
      title: "Estudos e Pareceres",
      desc: "Elaboração de estudos técnicos detalhados e pareceres especializados para embasar decisões executivas de alto nível.",
      icon: <FileText className="w-8 h-8" />,
      deliverables: ["Relatórios Especializados", "Análise de Gaps", "Notas de Gestão"]
    },
    {
      title: "Capacitação e Treinamento",
      desc: "Programas de formação inicial e continuada para guardas municipais e servidores, focados em excelência humana.",
      icon: <GraduationCap className="w-8 h-8" />,
      deliverables: ["Cursos de Gestão em Segurança", "Uso Progressivo da Força", "Mediação de Conflitos"]
    }
  ];

  return (
    <section id="servicos" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          subtitle="PORTFÓLIO" 
          title="Soluções Integradas para Gestão"
          description="Oferecemos um portfólio completo que atende desde o diagnóstico institucional até a capacitação técnica das equipes."
        />
        
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-10 rounded-3xl bg-gray-50 hover:bg-white hover:shadow-2xl border border-transparent hover:border-cyan-100 transition-all group"
            >
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="w-16 h-16 bg-cyan-500 rounded-2xl flex-shrink-0 flex items-center justify-center text-white shadow-lg shadow-cyan-500/20 group-hover:rotate-12 transition-all">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#050B15] mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.desc}</p>
                  <ul className="space-y-3">
                    {service.deliverables.map(del => (
                      <li key={del} className="flex items-center gap-2 text-sm text-gray-700 font-medium">
                        <ChevronRight className="w-4 h-4 text-cyan-500" />
                        {del}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Technology = () => {
  return (
    <section id="tecnologia" className="py-24 bg-gradient-to-b from-[#050B15] to-[#0A1628] text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="relative group rounded-3xl overflow-hidden shadow-2xl shadow-cyan-500/10">
              <img 
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000" 
                alt="Command Center" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050B15] via-transparent to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 bg-cyan-500 rounded-full flex items-center justify-center animate-pulse">
                      <Video className="w-5 h-5 text-[#050B15]" />
                    </div>
                    <div>
                      <div className="text-sm font-bold">CMI Operational Console</div>
                      <div className="text-xs text-cyan-400">Total System Integration Active</div>
                    </div>
                  </div>
                  <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-cyan-500" 
                      initial={{ width: "0%" }}
                      whileInView={{ width: "85%" }}
                      transition={{ duration: 2 }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <div>
            <SectionHeading 
              light
              subtitle="TECNOLOGIA" 
              title="A Vanguarda da Prevenção"
              description="Não apenas equipamentos, mas uma base tecnológica integrada que permite uma cidade se proteger antes do crime acontecer."
            />
            
            <div className="space-y-10">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                  <Fingerprint className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Reconhecimento Facial</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">Identificação em tempo real integrada ao CMI, conectada a bancos de dados nacionais em total conformidade com a LGPD.</p>
                </div>
              </div>
              
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                  <Cpu className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Gestão Digital de Ocorrências</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">Fim do papel. Registros georreferenciados em tempo real, gerando estatísticas automáticas para decisões imediatas.</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                  <Target className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Prevenção Preditiva</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">Algoritmos que cruzam dados históricos e em tempo real para antecipar manchas criminais e incidentes prováveis.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Roadmap = () => {
  const phases = [
    { num: "01", name: "Diagnóstico", desc: "Maturidade institucional, análise territorial e relatório de recomendações prioritárias." },
    { num: "02", name: "Estruturação Jurídica", desc: "Lei 13.022, reestruturação normativa, Corregedoria, Ouvidoria e Planos Municipais." },
    { num: "03", name: "Capacitação", desc: "Formação inicial, Uso Progressivo da Força, Polícia Comunitária e Patrulhas Especializadas." },
    { num: "04", name: "Tecnologia", desc: "Implantação de CMI, Reconhecimento Facial, Gestão Digital e integração de bases de dados." },
  ];

  return (
    <section id="roadmap" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          subtitle="IMPLEMENTAÇÃO" 
          title="Roadmap COGNUS"
          description="A transformação é um processo estruturado em quatro fases progressivas que constroem resultados sustentáveis."
        />
        
        <div className="relative">
          <div className="hidden lg:block absolute top-[4.5rem] left-0 right-0 h-0.5 bg-gray-200 z-0"></div>
          <div className="grid lg:grid-cols-4 gap-12">
            {phases.map((phase, idx) => (
              <motion.div
                key={phase.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative z-10"
              >
                <div className="w-16 h-16 rounded-full bg-white border-4 border-gray-100 flex items-center justify-center text-[#050B15] font-bold text-xl mb-8 mx-auto lg:mx-0 shadow-lg group hover:border-cyan-500 transition-all">
                  {phase.num}
                </div>
                <h3 className="text-xl font-bold mb-4">{phase.name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{phase.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contato" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-[#050B15] rounded-[2.5rem] overflow-hidden shadow-2xl relative">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-cyan-500/10 pointer-events-none"></div>
          <div className="grid lg:grid-cols-5 items-stretch">
            <div className="lg:col-span-2 p-12 lg:p-20 text-white">
              <h2 className="text-4xl font-bold mb-8">Vamos construir um município mais seguro?</h2>
              <p className="text-gray-400 mb-12 text-lg">
                Fale com nossos especialistas e agende um diagnóstico gratuito para avaliar as necessidades da sua gestão.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-cyan-400">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 uppercase font-bold tracking-wider">E-mail</div>
                    <div className="text-white font-medium">contato@cognus.seg.br</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-cyan-400">
                    <Globe className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 uppercase font-bold tracking-wider">Portal</div>
                    <div className="text-white font-medium">www.cognus.seg.br</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-cyan-400">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 uppercase font-bold tracking-wider">Telefones</div>
                    <div className="text-white font-medium text-sm">+55 81 9729-0379 / 9973-0413</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3 bg-white/5 backdrop-blur-sm p-12 lg:p-20">
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white text-xs font-bold uppercase tracking-widest mb-2">Nome Completo</label>
                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-cyan-500 outline-none transition-all" placeholder="Seu nome" />
                  </div>
                  <div>
                    <label className="block text-white text-xs font-bold uppercase tracking-widest mb-2">Email Institucional</label>
                    <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-cyan-500 outline-none transition-all" placeholder="exemplo@municipio.gov.br" />
                  </div>
                </div>
                <div>
                  <label className="block text-white text-xs font-bold uppercase tracking-widest mb-2">Município / Órgão</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-cyan-500 outline-none transition-all" placeholder="Nome da cidade ou secretaria" />
                </div>
                <div>
                  <label className="block text-white text-xs font-bold uppercase tracking-widest mb-2">Como podemos ajudar?</label>
                  <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-cyan-500 outline-none transition-all" placeholder="Descreva brevemente sua necessidade..."></textarea>
                </div>
                <button type="submit" className="w-full bg-cyan-500 hover:bg-cyan-400 text-[#050B15] font-bold py-4 rounded-xl transition-all shadow-[0_10px_20px_rgba(34,211,238,0.2)]">
                  Enviar Solicitação de Diagnóstico
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-[#050B15] pt-20 pb-10 border-t border-white/5">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-4 gap-12 mb-20">
        <div className="col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <Shield className="w-8 h-8 text-cyan-400" />
            <span className="text-2xl font-bold tracking-tight text-white">
              COGNUS <span className="text-cyan-400 font-light">Tecnologia</span>
            </span>
          </div>
          <p className="text-gray-400 max-w-sm">
            Especialistas em inteligência aplicada à segurança pública municipal. Transformando dados em proteção real.
          </p>
        </div>
        <div>
          <h4 className="text-white font-bold mb-6">Links Rápidos</h4>
          <ul className="space-y-4 text-sm text-gray-500">
            <li><a href="#quem-somos" className="hover:text-cyan-400 transition-colors">Quem Somos</a></li>
            <li><a href="#metodologia" className="hover:text-cyan-400 transition-colors">Metodologia</a></li>
            <li><a href="#servicos" className="hover:text-cyan-400 transition-colors">Portfolio</a></li>
            <li><a href="#tecnologia" className="hover:text-cyan-400 transition-colors">Desenvolvimento</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-6">Conformidade</h4>
          <ul className="space-y-4 text-sm text-gray-400 italic">
            <li>Estatuto das Guardas Municipais (Lei 13.022)</li>
            <li>Portaria SENASP 4.226/2010</li>
            <li>Lei Geral de Proteção de Dados (LGPD)</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-gray-600 text-[10px] items-center gap-4 flex">
           <span>© 2024 COGNUS TECNOLOGIA. Todos os direitos reservados.</span>
           <span className="h-3 w-px bg-white/10 hidden sm:block"></span>
           <span className="hidden sm:block">Intelligence applied to Public Safety.</span>
        </div>
        <div className="flex gap-6">
          <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-500 hover:text-cyan-400 hover:border-cyan-400 transition-all cursor-pointer">
            <Globe className="w-4 h-4" />
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="bg-[#050B15] min-h-screen selection:bg-cyan-500/30 selection:text-cyan-400 font-sans antialiased">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Challenges />
        <Methodology />
        <Services />
        <Technology />
        <Roadmap />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
