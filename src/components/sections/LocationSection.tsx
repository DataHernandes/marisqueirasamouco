import { MapPin, Navigation, Car, Train } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const neighborhoods = [
  "Samouco", "Montijo", "Alcochete", "Pinhal Novo", "Palmela", "Setúbal", "Barreiro", "Lisboa",
];

const LocationSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: mapRef, isVisible: mapVisible } = useScrollAnimation({ threshold: 0.1 });
  const { ref: infoRef, isVisible: infoVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="localizacao" className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div 
          ref={headerRef}
          className={`text-center mb-10 transition-all duration-1000 ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="text-terracotta font-medium uppercase tracking-wider text-sm mb-2 block">
            Como Chegar
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-3">
            Localização
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto text-sm">
            Estamos na histórica Praça da República, em Samouco.
          </p>
          <div className="w-16 h-0.5 bg-terracotta mx-auto mt-4" />
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Map Embed */}
            <div 
              ref={mapRef}
              className={`bg-card rounded-lg overflow-hidden shadow-medium border border-border h-[300px] transition-all duration-1000 ${
                mapVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
            >
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
            <div 
              ref={infoRef}
              className={`space-y-4 transition-all duration-1000 delay-200 ${
                infoVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              }`}
            >
              {/* Address Card */}
              <div className="bg-card p-5 rounded-lg shadow-soft border border-border hover:shadow-medium transition-shadow duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-terracotta/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-terracotta" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg text-foreground mb-1">Morada</h3>
                    <p className="text-muted-foreground text-sm">
                      Praça da República nº39, 2890-210 Samouco
                    </p>
                    <a
                      href="https://maps.app.goo.gl/eSifrxMnHNn68DZP6"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-terracotta hover:text-terracotta-dark font-medium mt-2 transition-colors text-sm"
                    >
                      <Navigation className="w-4 h-4" />
                      Abrir no Google Maps
                    </a>
                  </div>
                </div>
              </div>

              {/* How to Get There */}
              <div className="bg-card p-5 rounded-lg shadow-soft border border-border hover:shadow-medium transition-shadow duration-300">
                <h3 className="font-serif text-lg text-foreground mb-3">Como Chegar</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Car className="w-4 h-4 text-foreground mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground text-sm">De Carro</p>
                      <p className="text-muted-foreground text-xs">
                        Estacionamento na Praça. 10 min do Montijo.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Train className="w-4 h-4 text-foreground mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground text-sm">Transportes</p>
                      <p className="text-muted-foreground text-xs">
                        Autocarros com paragem próxima.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Areas */}
              <div className="bg-card p-5 rounded-lg shadow-soft border border-border hover:shadow-medium transition-shadow duration-300">
                <h3 className="font-serif text-lg text-foreground mb-2">Regiões Atendidas</h3>
                <div className="flex flex-wrap gap-2">
                  {neighborhoods.map((area) => (
                    <span
                      key={area}
                      className="bg-secondary text-muted-foreground px-3 py-1 rounded-full text-xs hover:bg-terracotta/10 hover:text-terracotta transition-colors"
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
