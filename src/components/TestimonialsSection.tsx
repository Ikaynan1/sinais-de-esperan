
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote, Heart } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Camila S.",
      child: "mãe do Noah (2 anos)",
      content: "Eu não sabia por onde começar. Esse eBook abriu meus olhos de uma forma que nenhuma consulta médica fez. Finalmente entendi os sinais que meu filho estava mostrando.",
      rating: 5,
      highlight: "abriu meus olhos"
    },
    {
      name: "Juliane M.",
      child: "mãe solo",
      content: "Valeu cada centavo. Identifiquei sinais que nem a escola percebia! Agora sei como ajudar minha filha e me sinto muito mais confiante.",
      rating: 5,
      highlight: "sinais que nem a escola percebia"
    },
    {
      name: "Maria Clara R.",
      child: "mãe da Sofia (3 anos)",
      content: "Como mãe de primeira viagem, me sentia perdida. Este guia me deu a direção que eu precisava. Recomendo para todas as mães que têm dúvidas.",
      rating: 5,
      highlight: "me deu a direção que eu precisava"
    },
    {
      name: "Patricia L.",
      child: "mãe do Lucas (4 anos)",
      content: "Linguagem super clara e exemplos que fazem sentido. Consegui entender melhor meu filho e hoje nossa relação está muito mais forte.",
      rating: 5,
      highlight: "nossa relação está muito mais forte"
    },
    {
      name: "Ana Carolina F.",
      child: "mãe do Gabriel (2 anos)",
      content: "Estava ansiosa e sem saber o que fazer. O guia me trouxe paz e conhecimento. Agora sei que estou no caminho certo para ajudar meu bebê.",
      rating: 5,
      highlight: "me trouxe paz e conhecimento"
    },
    {
      name: "Roberta M.",
      child: "mãe da Isabella (3 anos)",
      content: "Melhor investimento que fiz. Em poucas páginas, aprendi mais do que em meses de pesquisas na internet. Muito obrigada!",
      rating: 5,
      highlight: "melhor investimento que fiz"
    }
  ];

  return (
    <section className="bg-white section-padding">
      <div className="container-custom">
        <div className="text-center space-y-4 mb-16">
          <Badge className="bg-green-100 text-green-800 px-6 py-2 text-lg">
            💚 Depoimentos Reais
          </Badge>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-800">
            O que as mães estão falando sobre o guia
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Mais de 1.200 mães já transformaram sua jornada. Veja alguns depoimentos reais:
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
                  "{testimonial.content.replace(testimonial.highlight, `**${testimonial.highlight}**`)}"
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
              <div className="text-trust-100">Mães satisfeitas</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">4.9/5</div>
              <div className="text-trust-100">Avaliação média</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-trust-100">Recomendariam</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
