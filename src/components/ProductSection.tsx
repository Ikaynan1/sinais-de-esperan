
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen, CheckCircle, Clock, Target, Users, Heart } from "lucide-react";

const ProductSection = () => {
  const scrollToAction = () => {
    const element = document.getElementById('cta-section');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const benefits = [
    {
      icon: Target,
      title: "Os 10 sinais mais comuns do autismo em crianças pequenas",
      description: "Aprenda a identificar com segurança, sem ansiedade ou medo"
    },
    {
      icon: Heart,
      title: "Como agir com amor e sem culpa",
      description: "Estratégias práticas para apoiar seu filho de forma amorosa"
    },
    {
      icon: Clock,
      title: "Quando e como buscar ajuda profissional",
      description: "Saiba o momento certo e como abordar especialistas"
    },
    {
      icon: Users,
      title: "Como acolher e estimular seu filho",
      description: "Técnicas para fortalecer o vínculo e estimular o desenvolvimento"
    }
  ];

  return (
    <section className="bg-white section-padding">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Product mockup */}
          <div className="relative order-2 lg:order-1">
            <div className="bg-gradient-to-br from-trust-500 to-trust-700 rounded-3xl p-8 shadow-2xl transform -rotate-2 hover:rotate-0 transition-transform duration-500">
              <div className="bg-white rounded-2xl p-8 text-center">
                <BookOpen className="w-24 h-24 mx-auto mb-6 text-trust-500" />
                <h3 className="text-2xl font-bold text-slate-800 mb-2">Descubra os Sinais</h3>
                <p className="text-lg text-slate-600 mb-6">Um Guia para Mães Identificarem o Autismo Precoce</p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <CheckCircle className="w-4 h-4 text-trust-500" />
                    <span>+ de 50 páginas de conteúdo prático</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <CheckCircle className="w-4 h-4 text-trust-500" />
                    <span>Linguagem acessível para mães</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <CheckCircle className="w-4 h-4 text-trust-500" />
                    <span>Exemplos reais do dia a dia</span>
                  </div>
                </div>

                <div className="bg-trust-50 rounded-xl p-4">
                  <span className="text-3xl font-bold text-trust-600">R$ 29,90</span>
                  <span className="block text-sm text-slate-600">Acesso imediato após o pagamento</span>
                </div>
              </div>
            </div>

            {/* Floating badges */}
            <Badge className="absolute -top-4 -right-4 bg-warmth-500 text-white px-4 py-2 animate-bounce">
              💝 Mais escolhido
            </Badge>
            <Badge className="absolute -bottom-4 -left-4 bg-green-500 text-white px-4 py-2 animate-pulse">
              ✅ Garantido
            </Badge>
          </div>

          {/* Right side - Content */}
          <div className="space-y-8 order-1 lg:order-2">
            <div className="space-y-4">
              <Badge className="bg-trust-100 text-trust-800 px-4 py-2">
                💝 Criado com Amor para Mães
              </Badge>
              
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-800 leading-tight">
                Tudo que você precisa saber para{" "}
                <span className="text-trust-600">ajudar seu filho</span> da melhor forma
              </h2>
              
              <p className="text-xl text-slate-600 leading-relaxed">
                Com <span className="font-semibold">linguagem simples</span>, 
                <span className="font-semibold"> exemplos práticos</span> e 
                <span className="font-semibold"> muito acolhimento</span>, você vai aprender:
              </p>
            </div>

            {/* Benefits list */}
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex gap-4 p-4 bg-slate-50 rounded-xl hover:bg-trust-50 transition-colors duration-300">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-trust-500 rounded-xl flex items-center justify-center">
                      <benefit.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-1">{benefit.title}</h4>
                    <p className="text-slate-600">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-4">
              <Button 
                onClick={scrollToAction}
                className="cta-button text-lg h-16 px-8 w-full sm:w-auto"
              >
                <Heart className="w-6 h-6 mr-3" />
                💝 Quero Ajudar Meu Filho Agora!
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
