import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useLanguage } from "@/contexts/LanguageContext";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

import lobsterImg from "@/assets/gallery/lobster.jpg";
import cataplanaImg from "@/assets/gallery/cataplana.jpg";
import prawnsImg from "@/assets/gallery/prawns.jpg";
import interiorImg from "@/assets/gallery/interior.jpg";
import arrozMariscoImg from "@/assets/gallery/arroz-marisco.jpg";
import grilledFishImg from "@/assets/gallery/grilled-fish.jpg";

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const { t, language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation(0.15);

  const galleryImages = [
    { src: lobsterImg, alt: "Lagosta grelhada", title: language === "pt" ? "Lagosta Grelhada" : "Grilled Lobster" },
    { src: cataplanaImg, alt: "Cataplana de marisco", title: "Cataplana" },
    { src: prawnsImg, alt: "Camarões frescos", title: language === "pt" ? "Camarões" : "Prawns" },
    { src: interiorImg, alt: "Interior do restaurante", title: language === "pt" ? "O Nosso Espaço" : "Our Space" },
    { src: arrozMariscoImg, alt: "Arroz de marisco", title: language === "pt" ? "Arroz de Marisco" : "Seafood Rice" },
    { src: grilledFishImg, alt: "Peixe grelhado", title: language === "pt" ? "Peixe Grelhado" : "Grilled Fish" },
  ];

  const openLightbox = (index: number) => setSelectedImage(index);
  const closeLightbox = () => setSelectedImage(null);

  const goToPrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1);
    }
  };

  const goToNext = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === galleryImages.length - 1 ? 0 : selectedImage + 1);
    }
  };

  return (
    <section 
      id="galeria" 
      className="py-16 bg-background"
      ref={ref as React.RefObject<HTMLElement>}
    >
      <div className={cn(
        "container mx-auto px-4 transition-all duration-700",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      )}>
        {/* Section Header */}
        <div className="text-center mb-8">
          <span className="text-terracotta font-medium uppercase tracking-wider text-sm mb-2 block">
            {t("gallery.label")}
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-3">
            {t("gallery.title")}
          </h2>
          <div className="w-16 h-0.5 bg-terracotta mx-auto" />
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 max-w-4xl mx-auto">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              onClick={() => openLightbox(index)}
              className={cn(
                "group relative aspect-square overflow-hidden rounded-lg cursor-pointer transition-all duration-500",
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
              )}
              style={{ transitionDelay: isVisible ? `${index * 80}ms` : "0ms" }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-cream font-medium text-sm">{image.title}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        <Dialog open={selectedImage !== null} onOpenChange={closeLightbox}>
          <DialogContent className="max-w-4xl p-0 bg-transparent border-none">
            {selectedImage !== null && (
              <div className="relative">
                <img
                  src={galleryImages[selectedImage].src}
                  alt={galleryImages[selectedImage].alt}
                  className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
                />
                <button
                  onClick={closeLightbox}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-foreground/80 text-cream flex items-center justify-center hover:bg-foreground transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
                <button
                  onClick={goToPrevious}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-foreground/80 text-cream flex items-center justify-center hover:bg-foreground transition-colors"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={goToNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-foreground/80 text-cream flex items-center justify-center hover:bg-foreground transition-colors"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-foreground/80 text-cream px-4 py-2 rounded-full">
                  <p className="font-medium text-sm">{galleryImages[selectedImage].title}</p>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default GallerySection;
