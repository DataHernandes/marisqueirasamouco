import { createContext, useContext, useState, ReactNode } from "react";

type Language = "pt" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  pt: {
    // Navigation
    "nav.about": "Sobre",
    "nav.menu": "Ementa",
    "nav.gallery": "Galeria",
    "nav.reviews": "Avaliações",
    "nav.location": "Localização",
    "nav.contact": "Contacto",
    
    // Hero
    "hero.subtitle": "Restaurante de Frutos do Mar em Samouco",
    "hero.description": "Sabores autênticos do mar português, servidos com tradição e paixão",
    "hero.location": "Praça da República nº39, Samouco",
    "hero.cta.whatsapp": "Reservar via WhatsApp",
    "hero.rating": "no Google Maps",
    "hero.badge.lgbtq": "LGBTQ+ Friendly",
    "hero.badge.women": "Negócio Liderado por Mulheres",
    "hero.badge.fresh": "Marisco Fresco",
    
    // About
    "about.label": "Conheça-nos",
    "about.title": "Sobre a Marisqueira do Samouco",
    "about.p1": "Situada na pitoresca",
    "about.p1.location": "Praça da República",
    "about.p1.in": "em",
    "about.p1.country": "Samouco, Portugal",
    "about.p1.end": ", a Marisqueira do Samouco é um restaurante de referência para os amantes de frutos do mar na região do Montijo.",
    "about.p2.rating": "avaliação de 4.7 estrelas no Google Maps",
    "about.p2.text": ", somos reconhecidos pela qualidade excepcional dos nossos pratos de marisco, preparados com ingredientes frescos e técnicas tradicionais portuguesas.",
    "about.p3.women": "negócio liderado por mulheres",
    "about.p3.text": " e comprometido com a inclusão, recebemos todos os nossos clientes com hospitalidade.",
    "about.highlight": "Atendimento acolhedor em Samouco e região",
    "about.card.location": "Localização",
    "about.card.hours": "Horário",
    "about.card.contact": "Contacto",
    "about.hours.lunch": "Almoço: 12:30 – 15:00",
    "about.hours.dinner": "Jantar: 19:00 – 22:00",
    
    // Services
    "services.label": "O Que Oferecemos",
    "services.title": "Especialidades da Casa",
    "services.description": "Descubra a variedade de pratos que fazem da nossa marisqueira uma referência em Samouco.",
    "services.fish.title": "Peixe Fresco",
    "services.fish.desc": "Peixes selecionados diariamente dos melhores fornecedores da costa portuguesa.",
    "services.seafood.title": "Mariscos Premium",
    "services.seafood.desc": "Lagosta, camarão, amêijoas e mais. Os melhores frutos do mar servidos frescos.",
    "services.traditional.title": "Pratos Tradicionais",
    "services.traditional.desc": "Cataplanas, caldeiradas e arroz de marisco com receitas tradicionais portuguesas.",
    "services.appetizers.title": "Petiscos do Mar",
    "services.appetizers.desc": "Entradas frescas e petiscos típicos para começar a sua refeição.",
    "services.wine.title": "Carta de Vinhos",
    "services.wine.desc": "Vinhos selecionados para harmonizar com os nossos pratos de marisco.",
    "services.events.title": "Eventos",
    "services.events.desc": "Espaço ideal para celebrações familiares e eventos especiais.",
    
    // Menu
    "menu.label": "A Nossa Ementa",
    "menu.title": "Especialidades da Casa",
    "menu.description": "Pratos preparados com ingredientes frescos. P.V. = Preço Variável (peso do dia)",
    "menu.seafood": "Mariscos",
    "menu.seafood.desc": "Seleção premium de frutos do mar",
    "menu.traditional": "Pratos Tradicionais",
    "menu.traditional.desc": "Receitas portuguesas autênticas",
    "menu.fish": "Peixes Frescos",
    "menu.fish.desc": "Peixe do dia ao seu gosto",
    "menu.appetizers": "Entradas & Petiscos",
    "menu.appetizers.desc": "Para começar a refeição",
    "menu.note": "Preços sujeitos a variação. Contacte-nos:",
    
    // Gallery
    "gallery.label": "Galeria",
    "gallery.title": "Os Nossos Pratos",
    
    // Reviews
    "reviews.label": "Avaliações",
    "reviews.title": "O Que Dizem Sobre Nós",
    "reviews.verified": "Avaliações verificadas",
    
    // Location
    "location.label": "Como Chegar",
    "location.title": "Localização",
    "location.description": "Estamos na histórica Praça da República, em Samouco.",
    "location.address": "Morada",
    "location.open.maps": "Abrir no Google Maps",
    "location.how": "Como Chegar",
    "location.car": "De Carro",
    "location.car.desc": "Estacionamento na Praça. 10 min do Montijo.",
    "location.transport": "Transportes",
    "location.transport.desc": "Autocarros com paragem próxima.",
    "location.areas": "Regiões Atendidas",
    
    // Contact
    "contact.label": "Reserve a Sua Mesa",
    "contact.title": "Entre em Contacto",
    "contact.description": "Faça a sua reserva e venha saborear os melhores frutos do mar.",
    "contact.whatsapp": "WhatsApp",
    "contact.phone": "Telefone",
    "contact.hours": "Horário",
    "contact.address": "Morada",
    "contact.cta.whatsapp": "Reservar via WhatsApp",
    "contact.cta.call": "Ligar Agora",
    "contact.social": "Siga-nos nas redes sociais",
    
    // Footer
    "footer.description": "Restaurante de frutos do mar em Samouco, Portugal. Servindo os melhores mariscos da região do Montijo com tradição e qualidade.",
    "footer.women": "Negócio liderado por mulheres",
    "footer.rights": "Todos os direitos reservados.",
    "footer.social": "Redes Sociais",
  },
  en: {
    // Navigation
    "nav.about": "About",
    "nav.menu": "Menu",
    "nav.gallery": "Gallery",
    "nav.reviews": "Reviews",
    "nav.location": "Location",
    "nav.contact": "Contact",
    
    // Hero
    "hero.subtitle": "Seafood Restaurant in Samouco",
    "hero.description": "Authentic Portuguese seafood flavors, served with tradition and passion",
    "hero.location": "Praça da República nº39, Samouco",
    "hero.cta.whatsapp": "Book via WhatsApp",
    "hero.rating": "on Google Maps",
    "hero.badge.lgbtq": "LGBTQ+ Friendly",
    "hero.badge.women": "Women-Led Business",
    "hero.badge.fresh": "Fresh Seafood",
    
    // About
    "about.label": "About Us",
    "about.title": "About Marisqueira do Samouco",
    "about.p1": "Located in the picturesque",
    "about.p1.location": "Praça da República",
    "about.p1.in": "in",
    "about.p1.country": "Samouco, Portugal",
    "about.p1.end": ", Marisqueira do Samouco is a reference restaurant for seafood lovers in the Montijo region.",
    "about.p2.rating": "4.7 star rating on Google Maps",
    "about.p2.text": ", we are recognized for the exceptional quality of our seafood dishes, prepared with fresh ingredients and traditional Portuguese techniques.",
    "about.p3.women": "women-led business",
    "about.p3.text": " committed to inclusion, we welcome all our guests with hospitality.",
    "about.highlight": "Warm service in Samouco and region",
    "about.card.location": "Location",
    "about.card.hours": "Hours",
    "about.card.contact": "Contact",
    "about.hours.lunch": "Lunch: 12:30 – 15:00",
    "about.hours.dinner": "Dinner: 19:00 – 22:00",
    
    // Services
    "services.label": "What We Offer",
    "services.title": "House Specialties",
    "services.description": "Discover the variety of dishes that make our restaurant a reference in Samouco.",
    "services.fish.title": "Fresh Fish",
    "services.fish.desc": "Daily selected fish from the best suppliers on the Portuguese coast.",
    "services.seafood.title": "Premium Seafood",
    "services.seafood.desc": "Lobster, shrimp, clams and more. The best fresh seafood.",
    "services.traditional.title": "Traditional Dishes",
    "services.traditional.desc": "Cataplanas, fish stews and seafood rice with traditional Portuguese recipes.",
    "services.appetizers.title": "Sea Appetizers",
    "services.appetizers.desc": "Fresh starters and typical snacks to begin your meal.",
    "services.wine.title": "Wine List",
    "services.wine.desc": "Selected wines to pair with our seafood dishes.",
    "services.events.title": "Events",
    "services.events.desc": "Ideal space for family celebrations and special events.",
    
    // Menu
    "menu.label": "Our Menu",
    "menu.title": "House Specialties",
    "menu.description": "Dishes prepared with fresh ingredients. M.P. = Market Price (daily weight)",
    "menu.seafood": "Seafood",
    "menu.seafood.desc": "Premium seafood selection",
    "menu.traditional": "Traditional Dishes",
    "menu.traditional.desc": "Authentic Portuguese recipes",
    "menu.fish": "Fresh Fish",
    "menu.fish.desc": "Catch of the day, your way",
    "menu.appetizers": "Starters & Appetizers",
    "menu.appetizers.desc": "To start your meal",
    "menu.note": "Prices subject to change. Contact us:",
    
    // Gallery
    "gallery.label": "Gallery",
    "gallery.title": "Our Dishes",
    
    // Reviews
    "reviews.label": "Reviews",
    "reviews.title": "What People Say About Us",
    "reviews.verified": "Verified reviews",
    
    // Location
    "location.label": "How to Get Here",
    "location.title": "Location",
    "location.description": "We are in the historic Praça da República, in Samouco.",
    "location.address": "Address",
    "location.open.maps": "Open in Google Maps",
    "location.how": "How to Get Here",
    "location.car": "By Car",
    "location.car.desc": "Parking at the Square. 10 min from Montijo.",
    "location.transport": "Public Transport",
    "location.transport.desc": "Bus stops nearby.",
    "location.areas": "Areas We Serve",
    
    // Contact
    "contact.label": "Book Your Table",
    "contact.title": "Get in Touch",
    "contact.description": "Make your reservation and come enjoy the best seafood.",
    "contact.whatsapp": "WhatsApp",
    "contact.phone": "Phone",
    "contact.hours": "Hours",
    "contact.address": "Address",
    "contact.cta.whatsapp": "Book via WhatsApp",
    "contact.cta.call": "Call Now",
    "contact.social": "Follow us on social media",
    
    // Footer
    "footer.description": "Seafood restaurant in Samouco, Portugal. Serving the best seafood in the Montijo region with tradition and quality.",
    "footer.women": "Women-led business",
    "footer.rights": "All rights reserved.",
    "footer.social": "Social Media",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("pt");

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
