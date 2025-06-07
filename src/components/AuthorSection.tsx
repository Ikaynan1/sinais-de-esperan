
import { Badge } from "@/components/ui/badge";
import { Award, BookOpen, Users, Heart, Quote } from "lucide-react";

const AuthorSection = () => {
  return (
    <section className="bg-gradient-to-br from-trust-50 to-slate-50 section-padding">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-trust-500 text-white px-6 py-2 text-lg">
              👨‍⚕️ Sobre o Especialista
            </Badge>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-800">
              Conheça o profissional por trás do guia
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Author photo and basic info */}
            <div className="text-center lg:text-left space-y-6">
              <div className="relative inline-block">
                <div className="w-64 h-64 mx-auto lg:mx-0 rounded-3xl overflow-hidden shadow-2xl">
                  <img 
                    src="/lovable-uploads/eb7ee9d7-b757-450c-b5a3-ce7bf0da7a62.png" 
                    alt="Dr. Emanuel France"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Floating badges */}
                <Badge className="absolute -top-4 -right-4 bg-green-500 text-white px-3 py-1 text-sm">
                  ✅ Especialista
                </Badge>
                <Badge className="absolute -bottom-4 -left-4 bg-warmth-500 text-white px-3 py-1 text-sm">
                  💙 Dedicado
                </Badge>
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl md:text-3xl font-heading font-bold text-slate-800">
                  Dr. Emanuel France
                </h3>
                <p className="text-xl text-trust-600 font-medium">
                  Especialista em Autismo e Desenvolvimento Infantil
                </p>
              </div>
            </div>

            {/* Author description and credentials */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <Quote className="w-8 h-8 text-trust-400 mb-4" />
                <p className="text-xl italic text-slate-700 leading-relaxed mb-6">
                  "Dedico meu trabalho a ajudar mães a entenderem melhor seus filhos 
                  e não se sentirem perdidas diante do diagnóstico."
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Com anos de experiência no acompanhamento de famílias e crianças, 
                  Dr. Emanuel France criou este guia para tornar o conhecimento especializado 
                  acessível a todas as mães que precisam de direção.
                </p>
              </div>

              {/* Credentials */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-trust-50 rounded-xl p-4 border border-trust-200">
                  <BookOpen className="w-8 h-8 text-trust-500 mb-2" />
                  <h4 className="font-semibold text-slate-800 mb-1">Experiência Clínica</h4>
                  <p className="text-sm text-slate-600">Anos de prática com famílias e diagnósticos precoces</p>
                </div>

                <div className="bg-trust-50 rounded-xl p-4 border border-trust-200">
                  <Users className="w-8 h-8 text-trust-500 mb-2" />
                  <h4 className="font-semibold text-slate-800 mb-1">Famílias Atendidas</h4>
                  <p className="text-sm text-slate-600">Centenas de famílias orientadas e acompanhadas</p>
                </div>

                <div className="bg-trust-50 rounded-xl p-4 border border-trust-200">
                  <Award className="w-8 h-8 text-trust-500 mb-2" />
                  <h4 className="font-semibold text-slate-800 mb-1">Formação Especializada</h4>
                  <p className="text-sm text-slate-600">Especialização em desenvolvimento infantil e autismo</p>
                </div>

                <div className="bg-trust-50 rounded-xl p-4 border border-trust-200">
                  <Heart className="w-8 h-8 text-trust-500 mb-2" />
                  <h4 className="font-semibold text-slate-800 mb-1">Abordagem Humana</h4>
                  <p className="text-sm text-slate-600">Cuidado empático e compreensão familiar</p>
                </div>
              </div>

              {/* Mission statement */}
              <div className="bg-gradient-to-r from-trust-500 to-trust-600 rounded-xl p-6 text-white">
                <h4 className="text-lg font-semibold mb-3">Missão do Dr. Emanuel France:</h4>
                <p className="leading-relaxed">
                  Empoderar mães com conhecimento claro e acessível, transformando 
                  ansiedade em ação e dúvidas em direcionamento prático.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthorSection;
