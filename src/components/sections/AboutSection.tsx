import { MapPin, Clock, Phone, Heart } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="sobre" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="text-accent font-medium uppercase tracking-wider text-sm mb-2 block">
              Conheça-nos
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
              Sobre a Marisqueira do Samouco
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
          </div>

          {/* Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Situada na pitoresca <strong className="text-foreground">Praça da República</strong> em{" "}
                <strong className="text-foreground">Samouco, Portugal</strong>, a Marisqueira do Samouco é
                um restaurante de referência para os amantes de frutos do mar na região do Montijo e
                arredores.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Com uma <strong className="text-foreground">avaliação de 4.7 estrelas no Google Maps</strong>,
                somos reconhecidos pela qualidade excepcional dos nossos pratos de marisco, preparados
                com ingredientes frescos e técnicas tradicionais portuguesas.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Como um <strong className="text-foreground">negócio liderado por mulheres</strong> e
                comprometido com a inclusão, recebemos todos os nossos clientes com o calor e a
                hospitalidade que caracterizam a cultura portuguesa.
              </p>

              {/* Highlights */}
              <div className="flex items-center gap-3 pt-4">
                <Heart className="w-5 h-5 text-accent" />
                <span className="text-foreground font-medium">
                  Atendimento acolhedor em Samouco e região
                </span>
              </div>
            </div>

            {/* Info Cards */}
            <div className="space-y-4">
              {/* Address Card */}
              <div className="bg-card p-6 rounded-xl shadow-soft border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Localização</h3>
                    <p className="text-muted-foreground">
                      Praça da República nº39<br />
                      2890-210 Samouco, Portugal
                    </p>
                  </div>
                </div>
              </div>

              {/* Hours Card */}
              <div className="bg-card p-6 rounded-xl shadow-soft border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Horário de Funcionamento</h3>
                    <p className="text-muted-foreground">
                      Almoço: 12:30 – 15:00<br />
                      Jantar: 19:00 – 22:00
                    </p>
                  </div>
                </div>
              </div>

              {/* Phone Card */}
              <div className="bg-card p-6 rounded-xl shadow-soft border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Contacto</h3>
                    <a
                      href="tel:+351913184552"
                      className="text-accent hover:text-gold-dark font-medium transition-colors"
                    >
                      +351 913 184 552
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
