import { Fish, Shell, Waves, UtensilsCrossed, Wine, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Fish,
    title: "Peixe Fresco do Dia",
    description:
      "Peixes selecionados diariamente dos melhores fornecedores da costa portuguesa, grelhados ou preparados à sua preferência em Samouco.",
  },
  {
    icon: Shell,
    title: "Mariscos Premium",
    description:
      "Lagosta, lavagante, camarão, amêijoas, mexilhões e muito mais. Os melhores frutos do mar servidos frescos na região do Montijo.",
  },
  {
    icon: Waves,
    title: "Pratos Tradicionais",
    description:
      "Cataplanas, caldeiradas e arroz de marisco preparados com receitas tradicionais portuguesas que honram a nossa herança gastronómica.",
  },
  {
    icon: UtensilsCrossed,
    title: "Entradas e Petiscos",
    description:
      "Uma seleção de entradas frescas e petiscos típicos do mar para começar a sua refeição em grande estilo.",
  },
  {
    icon: Wine,
    title: "Carta de Vinhos",
    description:
      "Vinhos verdes e brancos selecionados para harmonizar perfeitamente com os nossos pratos de frutos do mar.",
  },
  {
    icon: Users,
    title: "Eventos e Grupos",
    description:
      "Espaço ideal para celebrações familiares, almoços de negócios e eventos especiais em Samouco e arredores.",
  },
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-accent font-medium uppercase tracking-wider text-sm mb-2 block">
            O Que Oferecemos
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            Especialidades da Marisqueira em Samouco
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Descubra a variedade de pratos e serviços que fazem da nossa marisqueira uma
            referência gastronómica no concelho do Montijo.
          </p>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full mt-4" />
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="group bg-card border-border hover:border-accent/50 transition-all duration-300 hover:shadow-medium overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-accent/10 transition-colors">
                  <service.icon className="w-7 h-7 text-primary group-hover:text-accent transition-colors" />
                </div>
                <h3 className="font-serif text-xl text-foreground mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
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
