import { Heart, Star, Sparkles, Sun, Moon, Coffee } from "lucide-react";

const reasons = [
  { icon: Heart, text: "Your smile lights up my entire world" },
  { icon: Star, text: "The way you laugh at my silly jokes" },
  { icon: Sparkles, text: "How you always know what to say" },
  { icon: Sun, text: "Your kindness to everyone you meet" },
  { icon: Moon, text: "Late night talks that never get old" },
  { icon: Coffee, text: "Morning cuddles and coffee together" },
];

const ReasonsSection = () => {
  return (
    <section className="py-20 px-4 relative z-10">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <Sparkles className="w-8 h-8 text-gold mx-auto mb-4 animate-float" />
          <h2 className="text-4xl md:text-5xl font-display font-semibold text-romantic-gradient mb-4">
            Reasons I Love You
          </h2>
          <p className="text-muted-foreground text-lg">
            Countless reasons, here are just a few...
          </p>
        </div>

        {/* Reasons grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={index}
                className="card-romantic group hover:scale-105 transition-all duration-300 cursor-default"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 group-hover:bg-primary/10 transition-colors">
                    <Icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                  </div>
                  <p className="text-foreground font-body text-lg leading-relaxed pt-2">
                    {reason.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Add more reasons note */}
        <p className="text-center text-muted-foreground mt-8 text-sm italic">
          ✨ Add your own special reasons here
        </p>
      </div>
    </section>
  );
};

export default ReasonsSection;
