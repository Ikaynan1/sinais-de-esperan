
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

          {/* Pain points */}
          <div className="grid md:grid-cols-3 gap-8 py-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <MessageCircle className="w-10 h-10 text-trust-500 mx-auto mb-4" />
              <p className="text-lg text-slate-700 leading-relaxed">
                <span className="font-semibold">Você sente que seu filho é diferente</span> das outras crianças, 
                mas ninguém te leva a sério?
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Users className="w-10 h-10 text-trust-500 mx-auto mb-4" />
              <p className="text-lg text-slate-700 leading-relaxed">
                <span className="font-semibold">Ele evita contato visual?</span> Não responde quando é chamado? 
                Parece estar em seu próprio mundo?
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Heart className="w-10 h-10 text-trust-500 mx-auto mb-4" />
              <p className="text-lg text-slate-700 leading-relaxed">
                <span className="font-semibold">Você se sente perdida</span> e não sabe por onde começar 
                ou a quem recorrer?
              </p>
            </div>
          </div>

          {/* Empathy message */}
          <div className="bg-trust-500 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
            
            <div className="relative z-10 text-center space-y-6">
              <h3 className="text-2xl md:text-3xl font-heading font-bold">
                Você não está sozinha.
              </h3>
              <p className="text-xl md:text-2xl leading-relaxed text-trust-100">
                <span className="font-semibold">Milhares de mães</span> sentem isso… e esse guia foi feito 
                <span className="font-semibold text-white"> exatamente para te ajudar</span> a entender o que está acontecendo.
              </p>
              
              <div className="bg-white/20 rounded-xl p-6 mt-8">
                <p className="text-lg italic text-trust-100">
                  "De mãe para mãe. Ninguém entende melhor sua dor do que outra mãe que passou por isso."
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
