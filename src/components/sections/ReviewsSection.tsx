import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const reviews = [
  {
    name: "Maria F.",
    rating: 5,
    text: "O melhor marisco que já comi em Portugal! Os camarões estavam incrivelmente frescos e o atendimento foi impecável. Recomendo a todos que visitem Samouco.",
    date: "Há 2 semanas",
  },
  {
    name: "João P.",
    rating: 5,
    text: "Ambiente acolhedor e familiar. A cataplana de marisco é espetacular! Voltarei sempre que estiver na região do Montijo.",
    date: "Há 1 mês",
  },
  {
    name: "Ana S.",
    rating: 5,
    text: "Localização perfeita na Praça da República. Os preços são justos para a qualidade excepcional dos frutos do mar. Uma verdadeira pérola em Samouco!",
    date: "Há 3 semanas",
  },
  {
    name: "Pedro M.",
    rating: 4,
    text: "Excelente arroz de marisco e bom vinho branco. O serviço foi atencioso e a vista da praça é encantadora. Vale muito a pena a visita.",
    date: "Há 1 mês",
  },
  {
    name: "Sofia L.",
    rating: 5,
    text: "Adorei o ambiente inclusivo e acolhedor. Os mexilhões à Bulhão Pato são os melhores da zona! Fica perto de tudo em Samouco.",
    date: "Há 2 meses",
  },
];

const ReviewsSection = () => {
  const averageRating = 4.7;

  return (
    <section id="avaliacoes" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-accent font-medium uppercase tracking-wider text-sm mb-2 block">
            O Que Dizem Sobre Nós
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            Avaliações de Clientes em Samouco
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-6">
            Veja o que os nossos clientes dizem sobre a experiência gastronómica
            na Marisqueira do Samouco.
          </p>

          {/* Rating Summary */}
          <div className="inline-flex items-center gap-4 bg-secondary rounded-2xl px-8 py-4 shadow-soft">
            <div className="text-center">
              <div className="text-4xl font-bold text-foreground">{averageRating}</div>
              <div className="flex items-center gap-1 mt-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.round(averageRating) ? "fill-accent text-accent" : "text-muted"
                    }`}
                  />
                ))}
              </div>
            </div>
            <div className="h-12 w-px bg-border" />
            <div className="text-left">
              <div className="font-medium text-foreground">Baseado em avaliações</div>
              <div className="text-sm text-muted-foreground">Google Maps</div>
            </div>
          </div>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full mt-6" />
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {reviews.map((review, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:shadow-medium transition-all duration-300"
            >
              <CardContent className="p-6">
                <Quote className="w-8 h-8 text-accent/30 mb-4" />
                
                {/* Rating */}
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < review.rating ? "fill-accent text-accent" : "text-muted"
                      }`}
                    />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-muted-foreground leading-relaxed mb-4">
                  "{review.text}"
                </p>

                {/* Author */}
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <span className="font-medium text-foreground">{review.name}</span>
                  <span className="text-sm text-muted-foreground">{review.date}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
