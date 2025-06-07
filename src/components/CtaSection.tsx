
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Clock, Heart, ArrowRight, CheckCircle } from "lucide-react";

const CtaSection = () => {
  const handlePurchase = () => {
    window.open('https://pay.hotmart.com/G99778413C?checkoutMode=10', '_blank');
  };

  return (
    <section id="cta-section" className="bg-gradient-to-br from-trust-500 via-trust-600 to-trust-700 section-padding relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-24 -translate-x-24"></div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white space-y-8">
          {/* Urgency badge */}
          <Badge className="bg-red-500 text-white px-6 py-3 text-lg animate-pulse-soft">
            ⏰ Oferta especial por tempo limitado!
          </Badge>

          {/* Main heading - mais emocional */}
          <div className="space-y-4">
            <Heart className="w-16 h-16 mx-auto text-white/90" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold leading-tight">
              Seu filho precisa de você segura e confiante.
            </h2>
            <p className="text-xl md:text-2xl text-trust-100 leading-relaxed">
              Pare de sofrer na incerteza. Tenha as respostas que você precisa{" "}
              <span className="font-semibold text-white">ainda hoje</span>.
            </p>
          </div>

          {/* Value proposition */}
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 space-y-6">
            <h3 className="text-2xl font-semibold text-white">O que você receberá agora:</h3>
            
            <div className="grid md:grid-cols-2 gap-4 text-left">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-300 flex-shrink-0 mt-1" />
                <span className="text-trust-100">Guia completo com os 10 sinais mais importantes</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-300 flex-shrink-0 mt-1" />
                <span className="text-trust-100">Estratégias para agir sem medo ou culpa</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-300 flex-shrink-0 mt-1" />
                <span className="text-trust-100">Orientações sobre quando buscar ajuda profissional</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-300 flex-shrink-0 mt-1" />
                <span className="text-trust-100">Técnicas para acolher e estimular seu filho</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-300 flex-shrink-0 mt-1" />
                <span className="text-trust-100">Linguagem simples e acessível para todas as mães</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-300 flex-shrink-0 mt-1" />
                <span className="text-trust-100">Garantia total de satisfação por 7 dias</span>
              </div>
            </div>
          </div>

          {/* Price and urgency */}
          <div className="bg-white rounded-3xl p-8 text-slate-800 shadow-2xl">
            <div className="space-y-4">
              <div className="flex items-center justify-center gap-4">
                <span className="text-lg text-slate-500 line-through">De R$ 97,00</span>
                <Badge className="bg-red-500 text-white px-3 py-1">70% OFF</Badge>
              </div>
              
              <div className="text-center">
                <span className="text-5xl md:text-6xl font-bold text-trust-600">R$ 29,90</span>
                <p className="text-lg text-slate-600 mt-2">Acesso imediato após a confirmação do pagamento</p>
              </div>

              <div className="flex items-center justify-center gap-2 text-red-600">
                <Clock className="w-5 h-5" />
                <span className="font-semibold">Não deixe para depois. Seu filho precisa de você!</span>
              </div>
            </div>
          </div>

          {/* Main CTA button - mais empático */}
          <div className="space-y-4">
            <Button 
              onClick={handlePurchase}
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-6 px-12 rounded-2xl text-xl shadow-2xl transform hover:scale-105 transition-all duration-300 w-full sm:w-auto animate-pulse-soft"
            >
              <Heart className="w-8 h-8 mr-4" />
              💝 Quero Acesso ao Guia Completo
              <ArrowRight className="w-6 h-6 ml-4" />
            </Button>
            
            <p className="text-trust-100 text-sm">
              🔒 Pagamento 100% seguro via Hotmart | ✅ Acesso imediato | 💝 Garantia de 7 dias
            </p>
          </div>

          {/* Final urgency message - mais emocional */}
          <div className="bg-yellow-400 text-yellow-900 rounded-2xl p-6 font-semibold text-lg">
            <Heart className="w-6 h-6 inline mr-2" />
            Você e seu filho merecem essa clareza e tranquilidade. Não espere mais!
          </div>

          {/* Trust indicators */}
          <div className="grid md:grid-cols-3 gap-6 pt-8">
            <div className="text-center">
              <div className="text-3xl font-bold">1.200+</div>
              <div className="text-trust-200">Mães satisfeitas</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">4.9/5</div>
              <div className="text-trust-200">Avaliação de satisfação</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">7 dias</div>
              <div className="text-trust-200">Garantia total</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
