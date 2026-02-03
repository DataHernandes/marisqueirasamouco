import { MapPin, Clock, Phone, Heart } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="sobre" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-10">
            <span className="text-terracotta font-medium uppercase tracking-wider text-sm mb-2 block">
              Conheça-nos
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-3">
              Sobre a Marisqueira do Samouco
            </h2>
            <div className="w-16 h-0.5 bg-terracotta mx-auto" />
          </div>

          {/* Content */}
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Text Content */}
            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Situada na pitoresca <strong className="text-foreground">Praça da República</strong> em{" "}
                <strong className="text-foreground">Samouco, Portugal</strong>, a Marisqueira do Samouco é
                um restaurante de referência para os amantes de frutos do mar na região do Montijo.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Com uma <strong className="text-foreground">avaliação de 4.7 estrelas no Google Maps</strong>,
                somos reconhecidos pela qualidade excepcional dos nossos pratos de marisco, preparados
                com ingredientes frescos e técnicas tradicionais portuguesas.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Como um <strong className="text-foreground">negócio liderado por mulheres</strong> e
                comprometido com a inclusão, recebemos todos os nossos clientes com hospitalidade.
              </p>

              {/* Highlights */}
              <div className="flex items-center gap-3 pt-2">
                <Heart className="w-4 h-4 text-terracotta" />
                <span className="text-foreground font-medium text-sm">
                  Atendimento acolhedor em Samouco e região
                </span>
              </div>
            </div>

            {/* Info Cards */}
            <div className="space-y-3">
              {/* Address Card */}
              <div className="bg-card p-5 rounded-lg shadow-soft border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-terracotta/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-terracotta" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1 text-sm">Localização</h3>
                    <p className="text-muted-foreground text-sm">
                      Praça da República nº39<br />
                      2890-210 Samouco, Portugal
                    </p>
                  </div>
                </div>
              </div>

              {/* Hours Card */}
              <div className="bg-card p-5 rounded-lg shadow-soft border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-terracotta/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-terracotta" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1 text-sm">Horário</h3>
                    <p className="text-muted-foreground text-sm">
                      Almoço: 12:30 – 15:00 | Jantar: 19:00 – 22:00
                    </p>
                  </div>
                </div>
              </div>

              {/* Phone Card */}
              <div className="bg-card p-5 rounded-lg shadow-soft border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-terracotta/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-terracotta" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1 text-sm">Contacto</h3>
                    <a
                      href="tel:+351913184552"
                      className="text-terracotta hover:text-terracotta-dark font-medium transition-colors text-sm"
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
