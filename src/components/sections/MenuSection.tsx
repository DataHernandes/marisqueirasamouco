import { Fish, Shell, Waves, Flame } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const menuCategories = [
  {
    icon: Shell,
    title: "Mariscos",
    description: "Seleção premium de frutos do mar",
    items: [
      { name: "Lagosta Grelhada", price: "P.V." },
      { name: "Lavagante Suado", price: "P.V." },
      { name: "Camarão Tigre Grelhado", price: "P.V." },
      { name: "Sapateira Recheada", price: "P.V." },
      { name: "Percebes", price: "P.V." },
    ],
  },
  {
    icon: Waves,
    title: "Pratos Tradicionais",
    description: "Receitas portuguesas autênticas",
    items: [
      { name: "Cataplana de Marisco (2p)", price: "€45" },
      { name: "Arroz de Marisco", price: "€38" },
      { name: "Caldeirada à Pescador", price: "€32" },
      { name: "Açorda de Marisco", price: "€28" },
      { name: "Arroz de Lavagante", price: "€55" },
    ],
  },
  {
    icon: Fish,
    title: "Peixes Frescos",
    description: "Peixe do dia ao seu gosto",
    items: [
      { name: "Robalo Grelhado", price: "P.V." },
      { name: "Dourada no Forno", price: "P.V." },
      { name: "Linguado Grelhado", price: "P.V." },
      { name: "Cherne Grelhado", price: "P.V." },
      { name: "Pregado no Forno", price: "P.V." },
    ],
  },
  {
    icon: Flame,
    title: "Entradas & Petiscos",
    description: "Para começar a refeição",
    items: [
      { name: "Amêijoas à Bulhão Pato", price: "€18" },
      { name: "Mexilhões à Marinheira", price: "€14" },
      { name: "Camarão ao Alho", price: "€16" },
      { name: "Polvo à Lagareiro", price: "€22" },
      { name: "Salada de Polvo", price: "€16" },
    ],
  },
];

const MenuSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="ementa" className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div 
          ref={headerRef}
          className={`text-center mb-10 transition-all duration-1000 ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="text-terracotta font-medium uppercase tracking-wider text-sm mb-2 block">
            A Nossa Ementa
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-3">
            Especialidades da Casa
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-sm">
            Pratos preparados com ingredientes frescos. P.V. = Preço Variável (peso do dia)
          </p>
          <div className="w-16 h-0.5 bg-terracotta mx-auto mt-4" />
        </div>

        {/* Menu Grid */}
        <div 
          ref={gridRef}
          className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto"
        >
          {menuCategories.map((category, index) => (
            <div
              key={category.title}
              className={`bg-card rounded-lg p-5 shadow-soft border border-border hover:shadow-medium transition-all duration-700 ${
                gridVisible 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-10"
              }`}
              style={{ 
                transitionDelay: gridVisible ? `${index * 150}ms` : '0ms'
              }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-4 pb-3 border-b border-border">
                <div className="w-10 h-10 rounded-lg bg-terracotta/10 flex items-center justify-center">
                  <category.icon className="w-5 h-5 text-terracotta" />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-foreground">{category.title}</h3>
                  <p className="text-muted-foreground text-xs">{category.description}</p>
                </div>
              </div>

              {/* Menu Items */}
              <div className="space-y-2">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex justify-between items-center py-1">
                    <span className="text-foreground text-sm">{item.name}</span>
                    <span className="font-serif text-terracotta font-medium text-sm">
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <div 
          className={`text-center mt-8 max-w-xl mx-auto transition-all duration-1000 delay-500 ${
            gridVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          <p className="text-muted-foreground text-xs">
            Preços sujeitos a variação. Contacte-nos:{" "}
            <a
              href="tel:+351913184552"
              className="text-terracotta hover:text-terracotta-dark font-medium transition-colors"
            >
              +351 913 184 552
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
