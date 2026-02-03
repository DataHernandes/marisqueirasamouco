import { Fish, Shell, Waves, UtensilsCrossed, Wine, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

const ServicesSection = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation(0.15);

  const services = [
    {
      icon: Fish,
      title: t("services.fish.title"),
      description: t("services.fish.desc"),
    },
    {
      icon: Shell,
      title: t("services.seafood.title"),
      description: t("services.seafood.desc"),
    },
    {
      icon: Waves,
      title: t("services.traditional.title"),
      description: t("services.traditional.desc"),
    },
    {
      icon: UtensilsCrossed,
      title: t("services.appetizers.title"),
      description: t("services.appetizers.desc"),
    },
    {
      icon: Wine,
      title: t("services.wine.title"),
      description: t("services.wine.desc"),
    },
    {
      icon: Users,
      title: t("services.events.title"),
      description: t("services.events.desc"),
    },
  ];

  return (
    <section 
      id="servicos" 
      className="py-16 bg-secondary"
      ref={ref as React.RefObject<HTMLElement>}
    >
      <div className={cn(
        "container mx-auto px-4 transition-all duration-700",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      )}>
        {/* Section Header */}
        <div className="text-center mb-10">
          <span className="text-terracotta font-medium uppercase tracking-wider text-sm mb-2 block">
            {t("services.label")}
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-3">
            {t("services.title")}
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-sm">
            {t("services.description")}
          </p>
          <div className="w-16 h-0.5 bg-terracotta mx-auto mt-4" />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className={cn(
                "group bg-card border-border hover:border-terracotta/30 transition-all duration-500 hover:shadow-medium",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              )}
              style={{ transitionDelay: isVisible ? `${index * 100}ms` : "0ms" }}
            >
              <CardContent className="p-4">
                <div className="w-10 h-10 rounded-lg bg-terracotta/10 flex items-center justify-center mb-3 group-hover:bg-terracotta/15 transition-colors">
                  <service.icon className="w-5 h-5 text-terracotta" />
                </div>
                <h3 className="font-serif text-base text-foreground mb-1">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
