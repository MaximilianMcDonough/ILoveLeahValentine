import { Heart } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
      <div className="text-center z-10 max-w-4xl mx-auto">
        {/* Decorative hearts */}
        <div className="flex justify-center gap-4 mb-8">
          <Heart className="w-8 h-8 text-primary fill-primary animate-pulse-soft" />
          <Heart className="w-12 h-12 text-primary fill-primary animate-pulse-soft delay-200" />
          <Heart className="w-8 h-8 text-primary fill-primary animate-pulse-soft delay-500" />
        </div>

        {/* Main heading */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-semibold mb-6 animate-fade-in-up text-romantic-gradient">
          Ms. Valentine
        </h1>
        
        <p className="text-xl md:text-2xl lg:text-3xl font-display italic text-foreground/80 mb-4 animate-fade-in-up delay-200">
          To my Cutest Cherry Tomato.
        </p>

        <div className="w-32 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-8 animate-fade-in-up delay-300" />

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-500">
          I hope by the end of this, both of our wishes will come true and we will be each other's valentine.
          Hope you enjoy what I threw together.
        </p>

        {/* Scroll indicator */}
        <div className="mt-16 animate-fade-in-up delay-700">
          <div className="flex flex-col items-center gap-2 text-muted-foreground">
            <span className="text-sm">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex items-start justify-center p-2">
              <div className="w-1.5 h-3 bg-primary rounded-full animate-bounce" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
