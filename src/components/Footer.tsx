import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-16 px-4 text-center relative z-10">
      <div className="max-w-2xl mx-auto">
        {/* Final message */}
        <div className="flex justify-center gap-2 mb-6">
          <Heart className="w-6 h-6 text-primary fill-primary animate-pulse-soft" />
          <Heart className="w-8 h-8 text-primary fill-primary animate-pulse-soft delay-100" />
          <Heart className="w-6 h-6 text-primary fill-primary animate-pulse-soft delay-200" />
        </div>

        <h3 className="text-3xl md:text-4xl font-display font-semibold text-romantic-gradient mb-4">
          I Love You
        </h3>
        
        <p className="text-muted-foreground text-lg mb-8">
          Today, tomorrow, and forever
        </p>

        <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-primary/50 to-transparent mx-auto" />

        <p className="text-muted-foreground/60 text-sm mt-8">Max McDonough 💕</p>
      </div>
    </footer>
  );
};

export default Footer;
