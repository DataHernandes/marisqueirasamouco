import { Phone, MessageCircle, MapPin, Star, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-seafood.jpg";

const HeroSection = () => {
  const whatsappNumber = "351913184552";
  const phoneNumber = "+351913184552";

  const handleWhatsAppClick = () => {
    window.open(
      `https://wa.me/${whatsappNumber}?text=Olá! Gostaria de fazer uma reserva na Marisqueira do Samouco.`,
      "_blank"
    );
  };

  const handlePhoneClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const scrollToAbout = () => {
    document.getElementById("sobre")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/85 via-foreground/75 to-foreground/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* Rating Badge */}
        <div className="inline-flex items-center gap-2 bg-cream/10 backdrop-blur-sm border border-cream/20 rounded-full px-4 py-2 mb-8 animate-fade-in">
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${i < 5 ? "fill-gold text-gold" : "text-cream/40"}`}
              />
            ))}
          </div>
          <span className="text-cream text-sm font-medium">4.7 no Google Maps</span>
        </div>

        {/* Main Heading */}
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-cream mb-4 animate-fade-in-up leading-tight">
          Marisqueira do Samouco
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-cream/90 font-light mb-3 animate-fade-in-up [animation-delay:100ms]">
          Restaurante de Frutos do Mar em Samouco
        </p>

        {/* Subheadline */}
        <p className="text-base md:text-lg text-cream/75 max-w-xl mx-auto mb-6 animate-fade-in-up [animation-delay:200ms]">
          Sabores autênticos do mar português, servidos com tradição e paixão
        </p>

        {/* Location Badge */}
        <div className="inline-flex items-center gap-2 text-cream/60 mb-8 animate-fade-in-up [animation-delay:300ms]">
          <MapPin className="w-4 h-4" />
          <span className="text-sm">Praça da República nº39, Samouco</span>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center animate-fade-in-up [animation-delay:400ms]">
          <Button
            onClick={handleWhatsAppClick}
            size="lg"
            className="bg-terracotta hover:bg-terracotta-dark text-cream font-semibold px-8 py-5 rounded-full shadow-strong transition-all hover:scale-105"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Reservar via WhatsApp
          </Button>
          <Button
            onClick={handlePhoneClick}
            variant="outline"
            size="lg"
            className="border-2 border-cream/30 bg-transparent text-cream hover:bg-cream/10 font-semibold px-8 py-5 rounded-full transition-all hover:scale-105"
          >
            <Phone className="w-5 h-5 mr-2" />
            +351 913 184 552
          </Button>
        </div>

        {/* Trust Badges */}
        <div className="mt-10 flex flex-wrap justify-center gap-6 animate-fade-in-up [animation-delay:500ms]">
          <div className="flex items-center gap-2 text-cream/50 text-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-terracotta" />
            LGBTQ+ Friendly
          </div>
          <div className="flex items-center gap-2 text-cream/50 text-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-terracotta" />
            Negócio Liderado por Mulheres
          </div>
          <div className="flex items-center gap-2 text-cream/50 text-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-terracotta" />
            Marisco Fresco
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button 
        onClick={scrollToAbout}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-cream/50 hover:text-cream transition-colors animate-float"
        aria-label="Scroll para baixo"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
};

export default HeroSection;
