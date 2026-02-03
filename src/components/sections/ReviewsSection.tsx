import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const reviews = [
  {
    name: "Maria F.",
    rating: 5,
    text: "O melhor marisco que já comi em Portugal! Os camarões estavam incrivelmente frescos.",
    date: "Há 2 semanas",
  },
  {
    name: "João P.",
    rating: 5,
    text: "Ambiente acolhedor e familiar. A cataplana de marisco é espetacular!",
    date: "Há 1 mês",
  },
  {
    name: "Ana S.",
    rating: 5,
    text: "Os preços são justos para a qualidade excepcional. Uma pérola em Samouco!",
    date: "Há 3 semanas",
  },
  {
    name: "Pedro M.",
    rating: 4,
    text: "Excelente arroz de marisco e bom vinho branco. Vale a pena a visita.",
    date: "Há 1 mês",
  },
];

const ReviewsSection = () => {
  const averageRating = 4.7;

  return (
    <section id="avaliacoes" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-10">
          <span className="text-terracotta font-medium uppercase tracking-wider text-sm mb-2 block">
            Avaliações
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-3">
            O Que Dizem Sobre Nós
          </h2>

          {/* Rating Summary */}
          <div className="inline-flex items-center gap-4 bg-secondary rounded-xl px-6 py-3 shadow-soft mt-2">
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground">{averageRating}</div>
              <div className="flex items-center gap-0.5 mt-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.round(averageRating) ? "fill-gold text-gold" : "text-muted"
                    }`}
                  />
                ))}
              </div>
            </div>
            <div className="h-10 w-px bg-border" />
            <div className="text-left">
              <div className="font-medium text-foreground text-sm">Google Maps</div>
              <div className="text-xs text-muted-foreground">Avaliações verificadas</div>
            </div>
          </div>
          <div className="w-16 h-0.5 bg-terracotta mx-auto mt-6" />
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {reviews.map((review, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:shadow-medium transition-all duration-300"
            >
              <CardContent className="p-4">
                <Quote className="w-6 h-6 text-terracotta/30 mb-2" />
                
                {/* Rating */}
                <div className="flex items-center gap-0.5 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3 h-3 ${
                        i < review.rating ? "fill-gold text-gold" : "text-muted"
                      }`}
                    />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                  "{review.text}"
                </p>

                {/* Author */}
                <div className="flex items-center justify-between pt-2 border-t border-border">
                  <span className="font-medium text-foreground text-sm">{review.name}</span>
                  <span className="text-xs text-muted-foreground">{review.date}</span>
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
