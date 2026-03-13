import { MoonStar, SunMedium } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { cn } from "@/lib/utils";

interface ThemeToggleProps {
  className?: string;
}

export const ThemeToggle = ({ className }: ThemeToggleProps) => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "clinic" ? "luxury" : "clinic")}
      className={cn(
        "flex h-14 w-14 items-center justify-center rounded-full border border-primary/10 bg-background/90 text-primary shadow-2xl backdrop-blur-xl transition duration-300 hover:-translate-y-1",
        className
      )}
      aria-label="Alternar tema"
    >
      {theme === "clinic" ? (
        <MoonStar className="h-6 w-6" />
      ) : (
        <SunMedium className="h-6 w-6 text-accent" />
      )}
    </button>
  );
};
