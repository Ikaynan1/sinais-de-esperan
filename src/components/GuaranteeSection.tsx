
import { Badge } from "@/components/ui/badge";
import { Shield, CheckCircle, Clock, RefreshCw } from "lucide-react";

const GuaranteeSection = () => {
  return (
    <section className="bg-gradient-to-br from-green-50 to-trust-50 section-padding">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Header */}
          <div className="space-y-4">
            <Badge className="bg-green-500 text-white px-6 py-2 text-lg">
              🔒 Sua Compra 100% Protegida
            </Badge>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-800">
              Garantia Incondicional de 7 Dias
            </h2>
            <p className="text-xl text-slate-600">
              Se você não gostar do material, devolvemos seu dinheiro. <span className="font-semibold">Simples assim.</span>
            </p>
          </div>

          {/* Main guarantee box */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border-4 border-green-200">
            <div className="space-y-8">
              <div className="flex justify-center">
                <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center">
                  <Shield className="w-12 h-12 text-white" />
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl md:text-3xl font-heading font-bold text-slate-800">
                  Como funciona nossa garantia?
                </h3>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Você tem <span className="font-bold text-green-600">7 dias completos</span> para 
                  testar o guia. Se por qualquer motivo você não ficar satisfeita, 
                  <span className="font-bold"> devolvemos 100% do seu investimento</span>.
                </p>
              </div>

              {/* Steps */}
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center space-y-3">
                  <div className="w-16 h-16 bg-trust-500 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-slate-800">1. Compre com Segurança</h4>
                  <p className="text-sm text-slate-600">Acesso imediato ao conteúdo completo</p>
                </div>

                <div className="text-center space-y-3">
                  <div className="w-16 h-16 bg-trust-500 rounded-full flex items-center justify-center mx-auto">
                    <Clock className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-slate-800">2. Teste por 7 Dias</h4>
                  <p className="text-sm text-slate-600">Use todo o material sem pressa</p>
                </div>

                <div className="text-center space-y-3">
                  <div className="w-16 h-16 bg-trust-500 rounded-full flex items-center justify-center mx-auto">
                    <RefreshCw className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-slate-800">3. Reembolso Fácil</h4>
                  <p className="text-sm text-slate-600">Um clique e seu dinheiro volta</p>
                </div>
              </div>

              {/* Trust indicators */}
              <div className="bg-green-50 rounded-2xl p-6 space-y-4">
                <h4 className="text-lg font-semibold text-slate-800 text-center">Por que oferecemos essa garantia?</h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">Confiamos 100% na qualidade do nosso material</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">Queremos que você se sinta segura para testar</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">99% das mães ficam completamente satisfeitas</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">Seu risco é zero, o benefício é imenso</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Security badges */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-4 shadow-lg">
              <Shield className="w-8 h-8 text-trust-500 mx-auto mb-2" />
              <h5 className="font-semibold text-slate-800 text-center mb-1">Pagamento Seguro</h5>
              <p className="text-sm text-slate-600 text-center">Processado pela Hotmart com criptografia SSL</p>
            </div>

            <div className="bg-white rounded-xl p-4 shadow-lg">
              <CheckCircle className="w-8 h-8 text-green-500 mx-auto mb-2" />
              <h5 className="font-semibold text-slate-800 text-center mb-1">Acesso Imediato</h5>
              <p className="text-sm text-slate-600 text-center">Receba o material direto no seu email</p>
            </div>

            <div className="bg-white rounded-xl p-4 shadow-lg">
              <RefreshCw className="w-8 h-8 text-trust-500 mx-auto mb-2" />
              <h5 className="font-semibold text-slate-800 text-center mb-1">Suporte Total</h5>
              <p className="text-sm text-slate-600 text-center">Equipe pronta para te ajudar</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
