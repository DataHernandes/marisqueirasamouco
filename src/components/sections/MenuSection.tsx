import { Fish, Shell, Waves, Flame } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

const MenuSection = () => {
  const { t, language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation(0.15);

  const menuCategories = [
    {
      icon: Shell,
      title: t("menu.seafood"),
      description: t("menu.seafood.desc"),
      items: [
        { name: language === "pt" ? "Lagosta Grelhada" : "Grilled Lobster", price: language === "pt" ? "P.V." : "M.P." },
        { name: language === "pt" ? "Lavagante Suado" : "Steamed Crayfish", price: language === "pt" ? "P.V." : "M.P." },
        { name: language === "pt" ? "Camarão Tigre Grelhado" : "Grilled Tiger Prawns", price: language === "pt" ? "P.V." : "M.P." },
        { name: language === "pt" ? "Sapateira Recheada" : "Stuffed Crab", price: language === "pt" ? "P.V." : "M.P." },
        { name: language === "pt" ? "Percebes" : "Barnacles", price: language === "pt" ? "P.V." : "M.P." },
      ],
    },
    {
      icon: Waves,
      title: t("menu.traditional"),
      description: t("menu.traditional.desc"),
      items: [
        { name: language === "pt" ? "Cataplana de Marisco (2p)" : "Seafood Cataplana (2p)", price: "€45" },
        { name: language === "pt" ? "Arroz de Marisco" : "Seafood Rice", price: "€38" },
        { name: language === "pt" ? "Caldeirada à Pescador" : "Fisherman's Stew", price: "€32" },
        { name: language === "pt" ? "Açorda de Marisco" : "Seafood Bread Soup", price: "€28" },
        { name: language === "pt" ? "Arroz de Lavagante" : "Crayfish Rice", price: "€55" },
      ],
    },
    {
      icon: Fish,
      title: t("menu.fish"),
      description: t("menu.fish.desc"),
      items: [
        { name: language === "pt" ? "Robalo Grelhado" : "Grilled Sea Bass", price: language === "pt" ? "P.V." : "M.P." },
        { name: language === "pt" ? "Dourada no Forno" : "Baked Sea Bream", price: language === "pt" ? "P.V." : "M.P." },
        { name: language === "pt" ? "Linguado Grelhado" : "Grilled Sole", price: language === "pt" ? "P.V." : "M.P." },
        { name: language === "pt" ? "Cherne Grelhado" : "Grilled Grouper", price: language === "pt" ? "P.V." : "M.P." },
        { name: language === "pt" ? "Pregado no Forno" : "Baked Turbot", price: language === "pt" ? "P.V." : "M.P." },
      ],
    },
    {
      icon: Flame,
      title: t("menu.appetizers"),
      description: t("menu.appetizers.desc"),
      items: [
        { name: language === "pt" ? "Amêijoas à Bulhão Pato" : "Clams Bulhão Pato", price: "€18" },
        { name: language === "pt" ? "Mexilhões à Marinheira" : "Sailor-Style Mussels", price: "€14" },
        { name: language === "pt" ? "Camarão ao Alho" : "Garlic Shrimp", price: "€16" },
        { name: language === "pt" ? "Polvo à Lagareiro" : "Octopus Lagareiro", price: "€22" },
        { name: language === "pt" ? "Salada de Polvo" : "Octopus Salad", price: "€16" },
      ],
    },
  ];

  return (
    <section 
      id="ementa" 
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
            {t("menu.label")}
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-3">
            {t("menu.title")}
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-sm">
            {t("menu.description")}
          </p>
          <div className="w-16 h-0.5 bg-terracotta mx-auto mt-4" />
        </div>

        {/* Menu Grid */}
        <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {menuCategories.map((category, index) => (
            <div
              key={category.title}
              className={cn(
                "bg-card rounded-lg p-5 shadow-soft border border-border transition-all duration-500",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              )}
              style={{ transitionDelay: isVisible ? `${index * 100}ms` : "0ms" }}
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
        <div className="text-center mt-8 max-w-xl mx-auto">
          <p className="text-muted-foreground text-xs">
            {t("menu.note")}{" "}
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
