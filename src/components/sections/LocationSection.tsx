import { MapPin, Navigation, Car, Train } from "lucide-react";

const neighborhoods = [
  "Samouco",
  "Montijo",
  "Alcochete",
  "Pinhal Novo",
  "Canha",
  "Palmela",
  "Setúbal",
  "Almada",
  "Barreiro",
  "Lisboa",
];

const LocationSection = () => {
  return (
    <section id="localizacao" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-accent font-medium uppercase tracking-wider text-sm mb-2 block">
            Como Chegar
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            Atendimento Local em Samouco e Região
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Estamos localizados no coração de Samouco, na histórica Praça da República.
            Fácil acesso para quem vem do Montijo, Alcochete e arredores.
          </p>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full mt-4" />
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Map Embed */}
            <div className="bg-card rounded-2xl overflow-hidden shadow-medium border border-border h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3115.5!2d-9.0040224!3d38.7209871!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1939f9add15243%3A0x38c7ddcf19bb6d5f!2sMarisqueira%20do%20Samouco!5e0!3m2!1spt-PT!2spt!4v1706000000000!5m2!1spt-PT!2spt"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização da Marisqueira do Samouco"
              />
            </div>

            {/* Location Info */}
            <div className="space-y-6">
              {/* Address Card */}
              <div className="bg-card p-6 rounded-xl shadow-soft border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-foreground mb-2">Morada Completa</h3>
                    <p className="text-muted-foreground text-lg">
                      Praça da República nº39<br />
                      2890-210 Samouco<br />
                      Portugal
                    </p>
                    <a
                      href="https://maps.app.goo.gl/eSifrxMnHNn68DZP6"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-accent hover:text-gold-dark font-medium mt-3 transition-colors"
                    >
                      <Navigation className="w-4 h-4" />
                      Abrir no Google Maps
                    </a>
                  </div>
                </div>
              </div>

              {/* How to Get There */}
              <div className="bg-card p-6 rounded-xl shadow-soft border border-border">
                <h3 className="font-serif text-xl text-foreground mb-4">Como Chegar</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Car className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <p className="font-medium text-foreground">De Carro</p>
                      <p className="text-muted-foreground text-sm">
                        Estacionamento disponível na Praça da República. A 10 minutos do centro do Montijo.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Train className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <p className="font-medium text-foreground">Transportes Públicos</p>
                      <p className="text-muted-foreground text-sm">
                        Autocarros locais com paragem próxima. Fácil acesso via Montijo.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Areas We Serve */}
              <div className="bg-card p-6 rounded-xl shadow-soft border border-border">
                <h3 className="font-serif text-xl text-foreground mb-4">
                  Regiões que Atendemos
                </h3>
                <p className="text-muted-foreground mb-4">
                  Recebemos clientes de toda a região metropolitana de Lisboa e margem sul.
                  Estamos <strong className="text-foreground">perto de si</strong>!
                </p>
                <div className="flex flex-wrap gap-2">
                  {neighborhoods.map((area) => (
                    <span
                      key={area}
                      className="bg-secondary text-muted-foreground px-3 py-1 rounded-full text-sm"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
