import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

import lobsterImg from "@/assets/gallery/lobster.jpg";
import cataplanaImg from "@/assets/gallery/cataplana.jpg";
import prawnsImg from "@/assets/gallery/prawns.jpg";
import interiorImg from "@/assets/gallery/interior.jpg";
import arrozMariscoImg from "@/assets/gallery/arroz-marisco.jpg";
import grilledFishImg from "@/assets/gallery/grilled-fish.jpg";

const galleryImages = [
  { src: lobsterImg, alt: "Lagosta grelhada", title: "Lagosta Grelhada" },
  { src: cataplanaImg, alt: "Cataplana de marisco", title: "Cataplana de Marisco" },
  { src: prawnsImg, alt: "Camarões frescos", title: "Camarões Frescos" },
  { src: interiorImg, alt: "Interior do restaurante", title: "O Nosso Espaço" },
  { src: arrozMariscoImg, alt: "Arroz de marisco", title: "Arroz de Marisco" },
  { src: grilledFishImg, alt: "Peixe grelhado", title: "Peixe do Dia Grelhado" },
];

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

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
    <section id="galeria" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-accent font-medium uppercase tracking-wider text-sm mb-2 block">
            Galeria
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            Momentos na Marisqueira do Samouco
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Conheça os nossos pratos, o nosso espaço e a experiência gastronómica que o espera
            em Samouco.
          </p>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full mt-4" />
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              onClick={() => openLightbox(index)}
              className="group relative aspect-square overflow-hidden rounded-xl cursor-pointer"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-cream font-medium text-sm md:text-base">{image.title}</p>
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
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-primary/80 text-cream flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
                <button
                  onClick={goToPrevious}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-primary/80 text-cream flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={goToNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-primary/80 text-cream flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-primary/80 text-cream px-4 py-2 rounded-full">
                  <p className="font-medium">{galleryImages[selectedImage].title}</p>
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
