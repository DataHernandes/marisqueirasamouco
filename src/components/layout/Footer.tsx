import { MapPin, Phone, Clock, Facebook, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="font-serif text-2xl mb-4">Marisqueira do Samouco</h3>
            <p className="text-background/70 mb-4 leading-relaxed">
              Restaurante de frutos do mar em Samouco, Portugal. Servindo os melhores
              mariscos da região do Montijo com tradição e qualidade.
            </p>
            <div className="flex items-center gap-2 text-background/50 text-sm">
              <Heart className="w-4 h-4 text-accent" />
              <span>Negócio liderado por mulheres</span>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contacto</h4>
            <div className="space-y-3">
              <a
                href="tel:+351913184552"
                className="flex items-start gap-3 text-background/70 hover:text-accent transition-colors"
              >
                <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>+351 913 184 552</span>
              </a>
              <div className="flex items-start gap-3 text-background/70">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>
                  Praça da República nº39<br />
                  2890-210 Samouco, Portugal
                </span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Horário</h4>
            <div className="flex items-start gap-3 text-background/70">
              <Clock className="w-5 h-5 mt-0.5 flex-shrink-0" />
              <div>
                <p className="mb-1">Almoço: 12:30 – 15:00</p>
                <p>Jantar: 19:00 – 22:00</p>
              </div>
            </div>
          </div>

          {/* Social & Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Redes Sociais</h4>
            <div className="space-y-3">
              <a
                href="http://www.facebook.com/pages/Marisqueira-do-Samouco/197224063671691"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-background/70 hover:text-accent transition-colors"
              >
                <Facebook className="w-5 h-5" />
                <span>Facebook</span>
              </a>
              <a
                href="https://maps.app.goo.gl/eSifrxMnHNn68DZP6"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-background/70 hover:text-accent transition-colors"
              >
                <MapPin className="w-5 h-5" />
                <span>Google Maps</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/50 text-sm text-center md:text-left">
              © {currentYear} Marisqueira do Samouco. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-4 text-background/50 text-sm">
              <span>Restaurante de Frutos do Mar em Samouco, Portugal</span>
            </div>
          </div>

          {/* SEO Text */}
          <p className="text-background/30 text-xs mt-6 text-center max-w-4xl mx-auto">
            Marisqueira do Samouco - O melhor restaurante de frutos do mar em Samouco, Montijo.
            Marisco fresco, lagosta, camarão, amêijoas e pratos tradicionais portugueses.
            Localizado na Praça da República, Samouco. Atendimento em toda a região do Montijo,
            Alcochete, Pinhal Novo e margem sul de Lisboa. Reservas pelo WhatsApp: +351 913 184 552.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
