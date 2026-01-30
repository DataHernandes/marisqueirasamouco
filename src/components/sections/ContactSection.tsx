import { Phone, MessageCircle, Clock, MapPin, Facebook } from "lucide-react";
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
    <section id="contacto" className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="text-accent font-medium uppercase tracking-wider text-sm mb-2 block">
              Reserve a Sua Mesa
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-4">
              Entre em Contacto Connosco
            </h2>
            <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
              Faça a sua reserva na Marisqueira do Samouco e venha saborear os melhores
              frutos do mar da região do Montijo.
            </p>
            <div className="w-20 h-1 bg-accent mx-auto rounded-full mt-4" />
          </div>

          {/* Contact Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {/* WhatsApp */}
            <div className="bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-xl p-6 text-center">
              <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-semibold mb-2">WhatsApp</h3>
              <p className="text-primary-foreground/70 text-sm mb-3">Resposta rápida</p>
              <a
                href={`https://wa.me/${whatsappNumber}`}
                className="text-accent hover:text-accent/80 font-medium transition-colors"
              >
                +351 913 184 552
              </a>
            </div>

            {/* Phone */}
            <div className="bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-xl p-6 text-center">
              <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                <Phone className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-semibold mb-2">Telefone</h3>
              <p className="text-primary-foreground/70 text-sm mb-3">Ligue-nos diretamente</p>
              <a
                href={`tel:${phoneNumber}`}
                className="text-accent hover:text-accent/80 font-medium transition-colors"
              >
                +351 913 184 552
              </a>
            </div>

            {/* Hours */}
            <div className="bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-xl p-6 text-center">
              <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                <Clock className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-semibold mb-2">Horário</h3>
              <p className="text-primary-foreground/70 text-sm mb-1">Almoço: 12:30 – 15:00</p>
              <p className="text-primary-foreground/70 text-sm">Jantar: 19:00 – 22:00</p>
            </div>

            {/* Address */}
            <div className="bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-xl p-6 text-center">
              <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-semibold mb-2">Morada</h3>
              <p className="text-primary-foreground/70 text-sm">
                Praça da República nº39<br />
                2890-210 Samouco
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={handleWhatsAppClick}
              size="lg"
              className="bg-accent hover:bg-gold-dark text-primary font-semibold text-lg px-10 py-7 rounded-full shadow-strong transition-all hover:scale-105"
            >
              <MessageCircle className="w-6 h-6 mr-2" />
              Reservar via WhatsApp
            </Button>
            <Button
              onClick={handlePhoneClick}
              variant="outline"
              size="lg"
              className="border-2 border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 font-semibold text-lg px-10 py-7 rounded-full transition-all hover:scale-105"
            >
              <Phone className="w-6 h-6 mr-2" />
              Ligar Agora
            </Button>
          </div>

          {/* Social Links */}
          <div className="mt-12 text-center">
            <p className="text-primary-foreground/60 mb-4">Siga-nos nas redes sociais</p>
            <a
              href="http://www.facebook.com/pages/Marisqueira-do-Samouco/197224063671691"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary-foreground hover:text-accent transition-colors"
            >
              <Facebook className="w-6 h-6" />
              <span>Facebook</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
