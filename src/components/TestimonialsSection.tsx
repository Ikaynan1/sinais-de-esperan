
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote, Heart } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Marina L.",
      child: "mãe da Sofia (3 anos)",
      content: "Esse guia me ajudou a entender minha filha e agir com segurança. Finalmente parei de me culpar e comecei a agir. Recomendo a todas as mães!",
      rating: 5,
      highlight: "agir com segurança"
    },
    {
      name: "Carla M.",
      child: "mãe do Pedro (2 anos)",
      content: "Estava perdida e com medo. Este guia me deu direção e esperança. Agora sei que posso ajudar meu filho da melhor forma.",
      rating: 5,
      highlight: "me deu direção e esperança"
    },
    {
      name: "Ana Paula S.",
      child: "mãe do Gabriel (4 anos)",
      content: "Identifiquei sinais que nem os professores percebiam. O guia é claro, prático e me trouxe muito alívio. Valeu cada centavo!",
      rating: 5,
      highlight: "me trouxe muito alívio"
    },
    {
      name: "Juliana R.",
      child: "mãe da Laura (2 anos)",
      content: "Parei de viver na ansiedade! O guia me ensinou a observar com amor, não com medo. Nossa relação melhorou muito.",
      rating: 5,
      highlight: "observar com amor, não com medo"
    },
    {
      name: "Fernanda C.",
      child: "mãe do Lucas (3 anos)",
      content: "Como mãe de primeira viagem, me sentia completamente perdida. Este material me deu a confiança que eu precisava.",
      rating: 5,
      highlight: "me deu a confiança que eu precisava"
    },
    {
      name: "Patricia L.",
      child: "mãe do João (5 anos)",
      content: "Linguagem simples, exemplos reais. Consegui entender melhor meu filho e hoje nossa conexão é muito mais forte.",
      rating: 5,
      highlight: "nossa conexão é muito mais forte"
    }
  ];

  return (
    <section className="bg-white section-padding">
      <div className="container-custom">
        <div className="text-center space-y-4 mb-16">
          <Badge className="bg-green-100 text-green-800 px-6 py-2 text-lg">
            💚 Mães Reais, Histórias Verdadeiras
          </Badge>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-800">
            Veja como outras mães transformaram sua jornada
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Mais de 1.200 mães já encontraram clareza e paz. Você também pode:
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-2 border-slate-100 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <CardContent className="p-6 space-y-4">
                {/* Stars */}
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Quote icon */}
                <Quote className="w-8 h-8 text-trust-300" />

                {/* Content */}
                <p className="text-slate-700 leading-relaxed text-lg">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="border-t pt-4 space-y-1">
                  <p className="font-semibold text-slate-800">{testimonial.name}</p>
                  <p className="text-sm text-slate-600">{testimonial.child}</p>
                </div>

                {/* Heart decoration */}
                <div className="flex justify-end">
                  <Heart className="w-5 h-5 text-trust-300" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Summary stats */}
        <div className="mt-16 bg-gradient-to-r from-trust-500 to-trust-600 rounded-3xl p-8 md:p-12 text-white text-center">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl font-bold mb-2">1.200+</div>
              <div className="text-trust-100">Mães transformadas</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">4.9/5</div>
              <div className="text-trust-100">Avaliação de satisfação</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-trust-100">Recomendariam para outras mães</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
