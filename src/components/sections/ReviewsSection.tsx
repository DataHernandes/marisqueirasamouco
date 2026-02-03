import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

const ReviewsSection = () => {
  const { t, language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation(0.15);
  const averageRating = 4.7;

  const reviews = language === "pt" ? [
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
  ] : [
    {
      name: "Maria F.",
      rating: 5,
      text: "The best seafood I've ever had in Portugal! The prawns were incredibly fresh.",
      date: "2 weeks ago",
    },
    {
      name: "João P.",
      rating: 5,
      text: "Cozy and family-friendly atmosphere. The seafood cataplana is spectacular!",
      date: "1 month ago",
    },
    {
      name: "Ana S.",
      rating: 5,
      text: "Fair prices for exceptional quality. A hidden gem in Samouco!",
      date: "3 weeks ago",
    },
    {
      name: "Pedro M.",
      rating: 4,
      text: "Excellent seafood rice and good white wine. Worth the visit.",
      date: "1 month ago",
    },
  ];

  return (
    <section 
      id="avaliacoes" 
      className="py-16 bg-background"
      ref={ref as React.RefObject<HTMLElement>}
    >
      <div className={cn(
        "container mx-auto px-4 transition-all duration-700",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      )}>
        {/* Section Header */}
        <div className="text-center mb-10">
          <span className="text-terracotta font-medium uppercase tracking-wider text-sm mb-2 block">
            {t("reviews.label")}
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-3">
            {t("reviews.title")}
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
              <div className="text-xs text-muted-foreground">{t("reviews.verified")}</div>
            </div>
          </div>
          <div className="w-16 h-0.5 bg-terracotta mx-auto mt-6" />
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {reviews.map((review, index) => (
            <Card
              key={index}
              className={cn(
                "bg-card border-border hover:shadow-medium transition-all duration-500",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              )}
              style={{ transitionDelay: isVisible ? `${index * 100}ms` : "0ms" }}
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
