import { Fish, Shell, Waves, Flame } from "lucide-react";

const menuCategories = [
  {
    icon: Shell,
    title: "Mariscos",
    description: "Seleção premium de frutos do mar frescos",
    items: [
      { name: "Lagosta Grelhada", description: "Lagosta fresca grelhada com manteiga de ervas", price: "P.V." },
      { name: "Lavagante Suado", description: "Lavagante cozinhado em vinho branco e alho", price: "P.V." },
      { name: "Camarão Tigre Grelhado", description: "Camarões tigre XXL grelhados com azeite", price: "P.V." },
      { name: "Sapateira Recheada", description: "Sapateira com recheio tradicional", price: "P.V." },
      { name: "Percebes", description: "Percebes frescos da costa portuguesa", price: "P.V." },
    ],
  },
  {
    icon: Waves,
    title: "Pratos Tradicionais",
    description: "Receitas portuguesas preparadas com amor",
    items: [
      { name: "Cataplana de Marisco", description: "Para 2 pessoas, com amêijoas, camarão e peixe", price: "€45" },
      { name: "Arroz de Marisco", description: "Arroz cremoso com variedade de mariscos", price: "€38" },
      { name: "Caldeirada à Pescador", description: "Tradicional caldeirada com peixes variados", price: "€32" },
      { name: "Açorda de Marisco", description: "Pão alentejano com ovos e mariscos", price: "€28" },
      { name: "Arroz de Lavagante", description: "Arroz cremoso com lavagante fresco", price: "€55" },
    ],
  },
  {
    icon: Fish,
    title: "Peixes Frescos",
    description: "Peixe do dia grelhado ou ao seu gosto",
    items: [
      { name: "Robalo Grelhado", description: "Robalo fresco grelhado com legumes", price: "P.V." },
      { name: "Dourada no Forno", description: "Dourada assada com batatas a murro", price: "P.V." },
      { name: "Linguado Grelhado", description: "Linguado inteiro grelhado na brasa", price: "P.V." },
      { name: "Cherne Grelhado", description: "Posta de cherne com molho de manteiga", price: "P.V." },
      { name: "Pregado no Forno", description: "Pregado assado com ervas aromáticas", price: "P.V." },
    ],
  },
  {
    icon: Flame,
    title: "Entradas & Petiscos",
    description: "Para começar a refeição em grande estilo",
    items: [
      { name: "Amêijoas à Bulhão Pato", description: "Amêijoas frescas com coentros e alho", price: "€18" },
      { name: "Mexilhões à Marinheira", description: "Mexilhões em molho de vinho branco", price: "€14" },
      { name: "Camarão ao Alho", description: "Camarão salteado com alho e piri-piri", price: "€16" },
      { name: "Polvo à Lagareiro", description: "Tentáculos de polvo com batata a murro", price: "€22" },
      { name: "Salada de Polvo", description: "Polvo tenro com cebola e pimento", price: "€16" },
    ],
  },
];

const MenuSection = () => {
  return (
    <section id="ementa" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-accent font-medium uppercase tracking-wider text-sm mb-2 block">
            A Nossa Ementa
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            Especialidades da Casa em Samouco
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Descubra os sabores autênticos do mar português. Todos os nossos pratos são
            preparados com ingredientes frescos selecionados diariamente.
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            P.V. = Preço Variável (conforme peso do dia)
          </p>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full mt-4" />
        </div>

        {/* Menu Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {menuCategories.map((category, index) => (
            <div
              key={category.title}
              className="bg-card rounded-2xl p-6 md:p-8 shadow-soft border border-border"
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-6 pb-4 border-b border-border">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                  <category.icon className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl text-foreground">{category.title}</h3>
                  <p className="text-muted-foreground text-sm">{category.description}</p>
                </div>
              </div>

              {/* Menu Items */}
              <div className="space-y-5">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="group">
                    <div className="flex justify-between items-start gap-4">
                      <div className="flex-1">
                        <h4 className="font-medium text-foreground group-hover:text-primary transition-colors">
                          {item.name}
                        </h4>
                        <p className="text-muted-foreground text-sm mt-1">{item.description}</p>
                      </div>
                      <span className="font-serif text-lg text-accent font-semibold whitespace-nowrap">
                        {item.price}
                      </span>
                    </div>
                    {itemIndex < category.items.length - 1 && (
                      <div className="border-b border-dashed border-border/50 mt-4" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="text-center mt-12 max-w-2xl mx-auto">
          <p className="text-muted-foreground text-sm">
            Os preços dos mariscos e peixes podem variar conforme a disponibilidade e peso do dia.
            Para informações atualizadas, contacte-nos pelo{" "}
            <a
              href="tel:+351913184552"
              className="text-accent hover:text-gold-dark font-medium transition-colors"
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
