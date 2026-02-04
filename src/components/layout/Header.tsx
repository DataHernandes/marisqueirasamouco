import { useState, useEffect } from "react";
import { Menu, X, Phone, MessageCircle, Facebook, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

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
          ? "bg-cream/98 backdrop-blur-md shadow-medium py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <img 
              src={logo} 
              alt="Marisqueira do Samouco" 
              className={`transition-all duration-300 ${
                isScrolled ? "h-12 md:h-14" : "h-14 md:h-16"
              }`}
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`transition-colors text-sm font-medium ${
                  isScrolled 
                    ? "text-foreground/80 hover:text-foreground" 
                    : "text-cream/90 hover:text-cream"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social & CTA */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-2">
              <a
                href="https://www.facebook.com/pages/Marisqueira-do-Samouco/197224063671691"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-full transition-colors ${
                  isScrolled 
                    ? "text-foreground/70 hover:text-foreground hover:bg-foreground/5" 
                    : "text-cream/80 hover:text-cream hover:bg-cream/10"
                }`}
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/marisqueiradosamouco"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-full transition-colors ${
                  isScrolled 
                    ? "text-foreground/70 hover:text-foreground hover:bg-foreground/5" 
                    : "text-cream/80 hover:text-cream hover:bg-cream/10"
                }`}
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
            <div className="w-px h-6 bg-current opacity-20" />
            <a
              href="tel:+351913184552"
              className={`flex items-center gap-2 text-sm transition-colors ${
                isScrolled 
                  ? "text-foreground/80 hover:text-foreground" 
                  : "text-cream/90 hover:text-cream"
              }`}
            >
              <Phone className="w-4 h-4" />
              <span className="hidden xl:inline">+351 913 184 552</span>
            </a>
            <Button
              onClick={handleWhatsAppClick}
              size="sm"
              className="bg-terracotta hover:bg-terracotta-dark text-cream font-semibold rounded-full"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 ${isScrolled ? "text-foreground" : "text-cream"}`}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className={`lg:hidden mt-4 pb-4 border-t pt-4 ${
            isScrolled ? "border-foreground/10" : "border-cream/20"
          }`}>
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`font-medium transition-colors ${
                    isScrolled 
                      ? "text-foreground/80 hover:text-foreground" 
                      : "text-cream/90 hover:text-cream"
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <div className={`flex flex-col gap-3 pt-4 border-t ${
                isScrolled ? "border-foreground/10" : "border-cream/20"
              }`}>
                <div className="flex items-center gap-4">
                  <a
                    href="https://www.facebook.com/pages/Marisqueira-do-Samouco/197224063671691"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 transition-colors ${
                      isScrolled ? "text-foreground/70 hover:text-foreground" : "text-cream/80 hover:text-cream"
                    }`}
                  >
                    <Facebook className="w-5 h-5" />
                    <span>Facebook</span>
                  </a>
                  <a
                    href="https://www.instagram.com/marisqueiradosamouco"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 transition-colors ${
                      isScrolled ? "text-foreground/70 hover:text-foreground" : "text-cream/80 hover:text-cream"
                    }`}
                  >
                    <Instagram className="w-5 h-5" />
                    <span>Instagram</span>
                  </a>
                </div>
                <a
                  href="tel:+351913184552"
                  className={`flex items-center gap-2 transition-colors ${
                    isScrolled ? "text-foreground/80 hover:text-foreground" : "text-cream/90 hover:text-cream"
                  }`}
                >
                  <Phone className="w-5 h-5" />
                  +351 913 184 552
                </a>
                <Button
                  onClick={handleWhatsAppClick}
                  className="bg-terracotta hover:bg-terracotta-dark text-cream font-semibold rounded-full"
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
