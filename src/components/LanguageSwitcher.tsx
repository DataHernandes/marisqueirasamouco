import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";

interface LanguageSwitcherProps {
  variant?: "light" | "dark";
}

const LanguageSwitcher = ({ variant = "light" }: LanguageSwitcherProps) => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className={cn(
      "flex items-center gap-1 rounded-full p-1 text-sm font-medium",
      variant === "light" ? "bg-foreground/5" : "bg-cream/10"
    )}>
      <button
        onClick={() => setLanguage("pt")}
        className={cn(
          "px-2 py-1 rounded-full transition-all",
          language === "pt"
            ? variant === "light" 
              ? "bg-foreground text-background" 
              : "bg-cream text-foreground"
            : variant === "light"
              ? "text-foreground/70 hover:text-foreground"
              : "text-cream/70 hover:text-cream"
        )}
      >
        PT
      </button>
      <button
        onClick={() => setLanguage("en")}
        className={cn(
          "px-2 py-1 rounded-full transition-all",
          language === "en"
            ? variant === "light" 
              ? "bg-foreground text-background" 
              : "bg-cream text-foreground"
            : variant === "light"
              ? "text-foreground/70 hover:text-foreground"
              : "text-cream/70 hover:text-cream"
        )}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageSwitcher;
