
import { Badge } from "@/components/ui/badge";
import { Clock, Users, Shield, Heart, Award, Gift } from "lucide-react";

const TriggerSection = () => {
  const triggers = [
    {
      icon: Clock,
      title: "Urgência",
      content: "Poucas cópias promocionais por R$29,90 disponíveis!",
      subtitle: "Promoção válida somente até hoje à meia-noite.",
      bgColor: "bg-red-50 border-red-200",
      iconColor: "text-red-500"
    },
    {
      icon: Award,
      title: "Autoridade",
      content: "Escrito com apoio de especialistas e baseado em dados reais.",
      subtitle: "Conteúdo validado por profissionais da área",
      bgColor: "bg-trust-50 border-trust-200",
      iconColor: "text-trust-500"
    },
    {
      icon: Users,
      title: "Prova Social",
      content: "Mais de 1.200 mães já baixaram e transformaram sua jornada com seus filhos.",
      subtitle: "Junte-se a milhares de mães satisfeitas",
      bgColor: "bg-green-50 border-green-200",
      iconColor: "text-green-500"
    },
    {
      icon: Heart,
      title: "Empatia",
      content: "De mãe para mãe. Ninguém entende melhor sua dor do que outra mãe que passou por isso.",
      subtitle: "Criado com amor e compreensão",
      bgColor: "bg-pink-50 border-pink-200",
      iconColor: "text-pink-500"
    },
    {
      icon: Gift,
      title: "Reciprocidade",
      content: "Esse eBook vai te entregar clareza e direção. Só depois disso você decide se valeu a pena.",
      subtitle: "Garantia incondicional de satisfação",
      bgColor: "bg-purple-50 border-purple-200",
      iconColor: "text-purple-500"
    },
    {
      icon: Shield,
      title: "Escassez",
      content: "Apenas hoje você tem acesso a esse preço especial. Não perca essa oportunidade única!",
      subtitle: "Oferta limitada e exclusiva",
      bgColor: "bg-orange-50 border-orange-200",
      iconColor: "text-orange-500"
    }
  ];

  return (
    <section className="bg-gradient-to-br from-slate-50 to-trust-50 section-padding">
      <div className="container-custom">
        <div className="text-center space-y-4 mb-16">
          <Badge className="bg-trust-500 text-white px-6 py-2 text-lg">
            ⚡ Por que escolher este guia?
          </Badge>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-800">
            Mais de 1.200 mães já transformaram suas vidas
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Descubra por que tantas mães confiam em nosso guia para entender melhor seus filhos
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {triggers.map((trigger, index) => (
            <div 
              key={index}
              className={`${trigger.bgColor} rounded-2xl p-6 border-2 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}
            >
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 rounded-xl bg-white shadow-md flex items-center justify-center`}>
                    <trigger.icon className={`w-6 h-6 ${trigger.iconColor}`} />
                  </div>
                  <h3 className="font-semibold text-slate-800 text-lg">{trigger.title}</h3>
                </div>
                
                <p className="text-slate-700 font-medium leading-relaxed">
                  {trigger.content}
                </p>
                
                <p className="text-sm text-slate-600 italic">
                  {trigger.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Central message */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-slate-800 mb-6">
              Este não é apenas um eBook...
            </h3>
            <p className="text-xl text-slate-600 leading-relaxed mb-8">
              É uma <span className="font-semibold text-trust-600">ferramenta de transformação</span> que vai te dar 
              a <span className="font-semibold">clareza e confiança</span> que você precisa para ajudar seu filho 
              da melhor forma possível.
            </p>
            
            <div className="bg-trust-500 text-white rounded-2xl p-6">
              <p className="text-lg font-medium">
                ⏰ <span className="font-bold">Restam poucas horas</span> para garantir seu acesso por apenas R$ 29,90
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TriggerSection;
