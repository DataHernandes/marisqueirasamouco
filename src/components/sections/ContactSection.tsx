import { Phone, MessageCircle, Clock, MapPin, Facebook, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
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
    <section id="contacto" className="py-16 bg-foreground text-cream">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-10">
            <span className="text-terracotta font-medium uppercase tracking-wider text-sm mb-2 block">
              Reserve a Sua Mesa
            </span>
            <h2 className="font-serif text-3xl md:text-4xl mb-3">
              Entre em Contacto
            </h2>
            <p className="text-cream/70 max-w-lg mx-auto text-sm">
              Faça a sua reserva e venha saborear os melhores frutos do mar.
            </p>
            <div className="w-16 h-0.5 bg-terracotta mx-auto mt-4" />
          </div>

          {/* Contact Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {/* WhatsApp */}
            <div className="bg-cream/5 backdrop-blur-sm border border-cream/10 rounded-lg p-4 text-center">
              <div className="w-10 h-10 rounded-full bg-terracotta/20 flex items-center justify-center mx-auto mb-3">
                <MessageCircle className="w-5 h-5 text-terracotta" />
              </div>
              <h3 className="font-semibold mb-1 text-sm">WhatsApp</h3>
              <a
                href={`https://wa.me/${whatsappNumber}`}
                className="text-terracotta hover:text-terracotta/80 font-medium transition-colors text-sm"
              >
                913 184 552
              </a>
            </div>

            {/* Phone */}
            <div className="bg-cream/5 backdrop-blur-sm border border-cream/10 rounded-lg p-4 text-center">
              <div className="w-10 h-10 rounded-full bg-terracotta/20 flex items-center justify-center mx-auto mb-3">
                <Phone className="w-5 h-5 text-terracotta" />
              </div>
              <h3 className="font-semibold mb-1 text-sm">Telefone</h3>
              <a
                href={`tel:${phoneNumber}`}
                className="text-terracotta hover:text-terracotta/80 font-medium transition-colors text-sm"
              >
                913 184 552
              </a>
            </div>

            {/* Hours */}
            <div className="bg-cream/5 backdrop-blur-sm border border-cream/10 rounded-lg p-4 text-center">
              <div className="w-10 h-10 rounded-full bg-terracotta/20 flex items-center justify-center mx-auto mb-3">
                <Clock className="w-5 h-5 text-terracotta" />
              </div>
              <h3 className="font-semibold mb-1 text-sm">Horário</h3>
              <p className="text-cream/70 text-xs">12:30–15:00 | 19:00–22:00</p>
            </div>

            {/* Address */}
            <div className="bg-cream/5 backdrop-blur-sm border border-cream/10 rounded-lg p-4 text-center">
              <div className="w-10 h-10 rounded-full bg-terracotta/20 flex items-center justify-center mx-auto mb-3">
                <MapPin className="w-5 h-5 text-terracotta" />
              </div>
              <h3 className="font-semibold mb-1 text-sm">Morada</h3>
              <p className="text-cream/70 text-xs">Praça da República, 39</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
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
              Ligar Agora
            </Button>
          </div>

          {/* Social Links */}
          <div className="mt-10 text-center">
            <p className="text-cream/50 mb-4 text-sm">Siga-nos nas redes sociais</p>
            <div className="flex justify-center gap-4">
              <a
                href="https://www.facebook.com/pages/Marisqueira-do-Samouco/197224063671691"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-cream/70 hover:text-terracotta transition-colors"
              >
                <Facebook className="w-5 h-5" />
                <span className="text-sm">Facebook</span>
              </a>
              <a
                href="https://www.instagram.com/marisqueiradosamouco"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-cream/70 hover:text-terracotta transition-colors"
              >
                <Instagram className="w-5 h-5" />
                <span className="text-sm">Instagram</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
