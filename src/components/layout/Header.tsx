import { useState, useEffect } from "react";
import { Menu, X, Phone, MessageCircle, Facebook, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import logo from "@/assets/logo.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  const navLinks = [
    { href: "#sobre", label: t("nav.about") },
    { href: "#ementa", label: t("nav.menu") },
    { href: "#galeria", label: t("nav.gallery") },
    { href: "#avaliacoes", label: t("nav.reviews") },
    { href: "#localizacao", label: t("nav.location") },
    { href: "#contacto", label: t("nav.contact") },
  ];

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
        isScrolled || isMobileMenuOpen
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
                isScrolled || isMobileMenuOpen ? "h-12 md:h-14" : "h-14 md:h-16"
              }`}
              style={{ filter: (!isScrolled && !isMobileMenuOpen) ? 'drop-shadow(0 2px 8px rgba(0,0,0,0.3))' : 'none' }}
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

          {/* Social, Language & CTA */}
          <div className="hidden md:flex items-center gap-3">
            <LanguageSwitcher variant={isScrolled ? "light" : "dark"} />
            <div className={`w-px h-5 ${isScrolled ? "bg-foreground/20" : "bg-cream/20"}`} />
            <div className="flex items-center gap-1">
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

          {/* Mobile: Language + Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <LanguageSwitcher variant={(isScrolled || isMobileMenuOpen) ? "light" : "dark"} />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 ${(isScrolled || isMobileMenuOpen) ? "text-foreground" : "text-cream"}`}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-foreground/10 pt-4">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-foreground/80 hover:text-foreground font-medium transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="flex flex-col gap-3 pt-4 border-t border-foreground/10">
                <div className="flex items-center gap-4">
                  <a
                    href="https://www.facebook.com/pages/Marisqueira-do-Samouco/197224063671691"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-foreground/70 hover:text-foreground transition-colors"
                  >
                    <Facebook className="w-5 h-5" />
                    <span>Facebook</span>
                  </a>
                  <a
                    href="https://www.instagram.com/marisqueiradosamouco"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-foreground/70 hover:text-foreground transition-colors"
                  >
                    <Instagram className="w-5 h-5" />
                    <span>Instagram</span>
                  </a>
                </div>
                <a
                  href="tel:+351913184552"
                  className="flex items-center gap-2 text-foreground/80 hover:text-foreground transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  +351 913 184 552
                </a>
                <Button
                  onClick={handleWhatsAppClick}
                  className="bg-terracotta hover:bg-terracotta-dark text-cream font-semibold rounded-full"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  {t("hero.cta.whatsapp")}
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
