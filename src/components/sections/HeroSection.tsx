import { Phone, MessageCircle, MapPin, Star } from "lucide-react";
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

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/80 to-primary/95" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        {/* Rating Badge */}
        <div className="inline-flex items-center gap-2 bg-cream/10 backdrop-blur-sm border border-cream/20 rounded-full px-4 py-2 mb-6 animate-fade-in">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${i < 5 ? "fill-accent text-accent" : "text-cream/40"}`}
              />
            ))}
          </div>
          <span className="text-cream text-sm font-medium">4.7 no Google Maps</span>
        </div>

        {/* Main Heading */}
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-cream mb-4 animate-fade-in-up leading-tight">
          Marisqueira do Samouco
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl text-cream/90 font-light mb-2 animate-fade-in-up [animation-delay:100ms]">
          Restaurante de Frutos do Mar em Samouco
        </p>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-cream/80 max-w-2xl mx-auto mb-8 animate-fade-in-up [animation-delay:200ms]">
          Sabores autênticos do mar português, servidos com tradição e paixão
          na Praça da República, no coração de Samouco.
        </p>

        {/* Location Badge */}
        <div className="inline-flex items-center gap-2 text-cream/70 mb-10 animate-fade-in-up [animation-delay:300ms]">
          <MapPin className="w-5 h-5" />
          <span className="text-sm md:text-base">
            Praça da República nº39, 2890-210 Samouco, Portugal
          </span>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up [animation-delay:400ms]">
          <Button
            onClick={handleWhatsAppClick}
            size="lg"
            className="bg-accent hover:bg-gold-dark text-primary font-semibold text-lg px-8 py-6 rounded-full shadow-strong transition-all hover:scale-105"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Fale Conosco no WhatsApp
          </Button>
          <Button
            onClick={handlePhoneClick}
            variant="outline"
            size="lg"
            className="border-2 border-cream/30 bg-transparent text-cream hover:bg-cream/10 font-semibold text-lg px-8 py-6 rounded-full transition-all hover:scale-105"
          >
            <Phone className="w-5 h-5 mr-2" />
            +351 913 184 552
          </Button>
        </div>

        {/* Trust Badges */}
        <div className="mt-12 flex flex-wrap justify-center gap-6 animate-fade-in-up [animation-delay:500ms]">
          <div className="flex items-center gap-2 text-cream/60 text-sm">
            <span className="w-2 h-2 rounded-full bg-accent" />
            LGBTQ+ Friendly
          </div>
          <div className="flex items-center gap-2 text-cream/60 text-sm">
            <span className="w-2 h-2 rounded-full bg-accent" />
            Negócio Liderado por Mulheres
          </div>
          <div className="flex items-center gap-2 text-cream/60 text-sm">
            <span className="w-2 h-2 rounded-full bg-accent" />
            Frutos do Mar Frescos
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-cream/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-cream/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
