
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, BookOpen, Heart, Shield } from "lucide-react";

const HeroSection = () => {
  const scrollToAction = () => {
    const element = document.getElementById('cta-section');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="bg-gradient-to-br from-trust-50 via-white to-trust-100 section-padding min-h-screen flex items-center">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="text-center lg:text-left space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <Badge className="bg-warmth-100 text-warmth-800 px-4 py-2 text-sm font-medium">
                💝 Mais de 1.200 mães já transformaram sua jornada
              </Badge>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-slate-800 leading-tight">
                Desconfia que seu filho pode ser{" "}
                <span className="text-trust-600 relative">
                  autista?
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-trust-200 rounded"></div>
                </span>{" "}
                Descubra os sinais precoces e aprenda como agir com segurança e amor
              </h1>
              
              <p className="text-xl md:text-2xl text-slate-600 font-medium leading-relaxed">
                Um guia essencial para mães que precisam de{" "}
                <span className="text-trust-600 font-semibold">respostas claras</span> e{" "}
                <span className="text-trust-600 font-semibold">apoio verdadeiro</span>.
              </p>
            </div>

            {/* Benefits - Mais práticos e específicos */}
            <div className="space-y-4">
              <div className="flex items-center justify-center lg:justify-start gap-3">
                <CheckCircle className="w-6 h-6 text-trust-500 flex-shrink-0" />
                <span className="text-lg text-slate-700 font-medium">Aprenda a identificar os 10 sinais mais comuns do autismo</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-3">
                <CheckCircle className="w-6 h-6 text-trust-500 flex-shrink-0" />
                <span className="text-lg text-slate-700 font-medium">Saiba o que fazer sem medo ou culpa</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-3">
                <CheckCircle className="w-6 h-6 text-trust-500 flex-shrink-0" />
                <span className="text-lg text-slate-700 font-medium">Descubra quando e como buscar ajuda profissional</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-3">
                <CheckCircle className="w-6 h-6 text-trust-500 flex-shrink-0" />
                <span className="text-lg text-slate-700 font-medium">Acolha e estimule seu filho da melhor forma possível</span>
              </div>
            </div>

            {/* CTA Button - Mais empático */}
            <div className="pt-4">
              <Button 
                onClick={scrollToAction}
                className="cta-button text-lg h-16 px-8 w-full sm:w-auto"
              >
                <Heart className="w-6 h-6 mr-3" />
                💝 Quero Ajudar Meu Filho Agora
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center justify-center lg:justify-start gap-6 pt-4">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-trust-500" />
                <span className="text-sm text-slate-600">Pagamento Seguro</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="w-5 h-5 text-trust-500" />
                <span className="text-sm text-slate-600">Garantia 7 dias</span>
              </div>
            </div>
          </div>

          {/* Right side - Visual */}
          <div className="relative">
            <div className="bg-white rounded-3xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="bg-gradient-to-br from-trust-400 to-trust-600 rounded-2xl p-8 text-white text-center">
                <BookOpen className="w-20 h-20 mx-auto mb-4 opacity-90" />
                <h3 className="text-2xl font-bold mb-2">Descubra os Sinais</h3>
                <p className="text-trust-100 text-lg">Um Guia para Mães Identificarem o Autismo Precoce</p>
                <div className="mt-6 bg-white/20 rounded-lg p-4">
                  <span className="text-3xl font-bold">R$ 29,90</span>
                  <span className="text-trust-200 block text-sm">Acesso imediato</span>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-warmth-400 rounded-full p-4 animate-bounce">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-trust-400 rounded-full p-4 animate-pulse">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
