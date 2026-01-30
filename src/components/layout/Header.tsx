import { useState, useEffect } from "react";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "#sobre", label: "Sobre" },
  { href: "#ementa", label: "Ementa" },
  { href: "#galeria", label: "Galeria" },
  { href: "#avaliacoes", label: "Avaliações" },
  { href: "#localizacao", label: "Localização" },
  { href: "#contacto", label: "Contacto" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleWhatsAppClick = () => {
    window.open(
      `https://wa.me/351913184552?text=Olá! Gostaria de fazer uma reserva na Marisqueira do Samouco.`,
      "_blank"
    );
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-primary/95 backdrop-blur-md shadow-medium py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex flex-col">
            <span className="font-serif text-xl md:text-2xl text-cream font-semibold">
              Marisqueira do Samouco
            </span>
            <span className="text-xs text-cream/60 hidden sm:block">
              Restaurante de Frutos do Mar em Samouco
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-cream/80 hover:text-cream transition-colors text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+351913184552"
              className="flex items-center gap-2 text-cream/80 hover:text-cream transition-colors text-sm"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden lg:inline">+351 913 184 552</span>
            </a>
            <Button
              onClick={handleWhatsAppClick}
              size="sm"
              className="bg-accent hover:bg-gold-dark text-primary font-semibold rounded-full"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-cream p-2"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-cream/10 pt-4">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-cream/80 hover:text-cream transition-colors font-medium"
                >
                  {link.label}
                </a>
              ))}
              <div className="flex flex-col gap-3 pt-4 border-t border-cream/10">
                <a
                  href="tel:+351913184552"
                  className="flex items-center gap-2 text-cream/80 hover:text-cream transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  +351 913 184 552
                </a>
                <Button
                  onClick={handleWhatsAppClick}
                  className="bg-accent hover:bg-gold-dark text-primary font-semibold rounded-full"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Fale Conosco no WhatsApp
                </Button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
