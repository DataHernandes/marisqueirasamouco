import { Fish, Shell, Waves, UtensilsCrossed, Wine, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const services = [
  {
    icon: Fish,
    title: "Peixe Fresco",
    description:
      "Peixes selecionados diariamente dos melhores fornecedores da costa portuguesa.",
  },
  {
    icon: Shell,
    title: "Mariscos Premium",
    description:
      "Lagosta, camarão, amêijoas e mais. Os melhores frutos do mar servidos frescos.",
  },
  {
    icon: Waves,
    title: "Pratos Tradicionais",
    description:
      "Cataplanas, caldeiradas e arroz de marisco com receitas tradicionais portuguesas.",
  },
  {
    icon: UtensilsCrossed,
    title: "Petiscos do Mar",
    description:
      "Entradas frescas e petiscos típicos para começar a sua refeição.",
  },
  {
    icon: Wine,
    title: "Carta de Vinhos",
    description:
      "Vinhos selecionados para harmonizar com os nossos pratos de marisco.",
  },
  {
    icon: Users,
    title: "Eventos",
    description:
      "Espaço ideal para celebrações familiares e eventos especiais.",
  },
];

const ServicesSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="servicos" className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div 
          ref={headerRef}
          className={`text-center mb-10 transition-all duration-1000 ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="text-terracotta font-medium uppercase tracking-wider text-sm mb-2 block">
            O Que Oferecemos
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-3">
            Especialidades da Casa
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-sm">
            Descubra a variedade de pratos que fazem da nossa marisqueira uma referência em Samouco.
          </p>
          <div className="w-16 h-0.5 bg-terracotta mx-auto mt-4" />
        </div>

        {/* Services Grid */}
        <div 
          ref={gridRef}
          className="grid grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto"
        >
          {services.map((service, index) => (
            <Card
              key={service.title}
              className={`group bg-card border-border hover:border-terracotta/30 transition-all duration-700 hover:shadow-medium ${
                gridVisible 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-10"
              }`}
              style={{ 
                transitionDelay: gridVisible ? `${index * 100}ms` : '0ms'
              }}
            >
              <CardContent className="p-4">
                <div className="w-10 h-10 rounded-lg bg-terracotta/10 flex items-center justify-center mb-3 group-hover:bg-terracotta/15 group-hover:scale-110 transition-all duration-300">
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
