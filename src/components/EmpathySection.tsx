
import { Heart, Users, MessageCircle } from "lucide-react";

const EmpathySection = () => {
  return (
    <section className="bg-gradient-to-r from-slate-50 to-trust-50 section-padding">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Title */}
          <div className="space-y-4">
            <div className="flex justify-center">
              <Heart className="w-12 h-12 text-trust-500" />
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-800">
              Você não está sozinha nessa jornada
            </h2>
          </div>

          {/* Pain points - mais específicos e emocionais */}
          <div className="grid md:grid-cols-3 gap-8 py-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <MessageCircle className="w-10 h-10 text-trust-500 mx-auto mb-4" />
              <p className="text-lg text-slate-700 leading-relaxed">
                <span className="font-semibold">"Será que estou imaginando coisas?"</span> Você percebe comportamentos diferentes 
                mas todos dizem que é "normal"?
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Users className="w-10 h-10 text-trust-500 mx-auto mb-4" />
              <p className="text-lg text-slate-700 leading-relaxed">
                <span className="font-semibold">Seu filho evita seu olhar?</span> Não responde ao nome? 
                Parece perdido em seu próprio mundinho?
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Heart className="w-10 h-10 text-trust-500 mx-auto mb-4" />
              <p className="text-lg text-slate-700 leading-relaxed">
                <span className="font-semibold">A ansiedade te consome?</span> Você não sabe por onde começar 
                nem como ajudar seu pequeno?
              </p>
            </div>
          </div>

          {/* Empathy message - mais direto e acolhedor */}
          <div className="bg-trust-500 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
            
            <div className="relative z-10 text-center space-y-6">
              <h3 className="text-2xl md:text-3xl font-heading font-bold">
                Eu entendo exatamente o que você está sentindo.
              </h3>
              <p className="text-xl md:text-2xl leading-relaxed text-trust-100">
                A preocupação, o medo, a culpa... <span className="font-semibold text-white">Você não está sozinha.</span> 
                Este guia foi criado para te dar a clareza e o apoio que você precisa.
              </p>
              
              <div className="bg-white/20 rounded-xl p-6 mt-8">
                <p className="text-lg italic text-trust-100">
                  "De mãe para mãe. Vamos juntas nessa jornada de amor e descobertas."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmpathySection;
