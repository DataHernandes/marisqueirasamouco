import { MapPin, Clock, Phone, Heart } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

const AboutSection = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section 
      id="sobre" 
      className="py-16 bg-background"
      ref={ref as React.RefObject<HTMLElement>}
    >
      <div className={cn(
        "container mx-auto px-4 transition-all duration-700",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      )}>
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-10">
            <span className="text-terracotta font-medium uppercase tracking-wider text-sm mb-2 block">
              {t("about.label")}
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-3">
              {t("about.title")}
            </h2>
            <div className="w-16 h-0.5 bg-terracotta mx-auto" />
          </div>

          {/* Content */}
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Text Content */}
            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                {t("about.p1")} <strong className="text-foreground">{t("about.p1.location")}</strong> {t("about.p1.in")}{" "}
                <strong className="text-foreground">{t("about.p1.country")}</strong>{t("about.p1.end")}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Com uma <strong className="text-foreground">{t("about.p2.rating")}</strong>{t("about.p2.text")}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Como um <strong className="text-foreground">{t("about.p3.women")}</strong>{t("about.p3.text")}
              </p>

              {/* Highlights */}
              <div className="flex items-center gap-3 pt-2">
                <Heart className="w-4 h-4 text-terracotta" />
                <span className="text-foreground font-medium text-sm">
                  {t("about.highlight")}
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
                    <h3 className="font-semibold text-foreground mb-1 text-sm">{t("about.card.location")}</h3>
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
                    <h3 className="font-semibold text-foreground mb-1 text-sm">{t("about.card.hours")}</h3>
                    <p className="text-muted-foreground text-sm">
                      {t("about.hours.lunch")} | {t("about.hours.dinner")}
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
                    <h3 className="font-semibold text-foreground mb-1 text-sm">{t("about.card.contact")}</h3>
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
