import { Heart, Feather } from "lucide-react";

const LoveLetterSection = () => {
  return (
    <section className="py-20 px-4 relative z-10">
      <div className="max-w-3xl mx-auto">
        {/* Decorative element */}
        <div className="text-center mb-8">
          <Feather className="w-10 h-10 text-primary mx-auto mb-4 animate-float-slow" />
        </div>

        {/* Love letter card */}
        <div className="card-romantic relative overflow-hidden">
          {/* Corner decorations */}
          <div className="absolute top-4 left-4">
            <Heart className="w-4 h-4 text-primary/30 fill-primary/30" />
          </div>
          <div className="absolute top-4 right-4">
            <Heart className="w-4 h-4 text-primary/30 fill-primary/30" />
          </div>
          <div className="absolute bottom-4 left-4">
            <Heart className="w-4 h-4 text-primary/30 fill-primary/30" />
          </div>
          <div className="absolute bottom-4 right-4">
            <Heart className="w-4 h-4 text-primary/30 fill-primary/30" />
          </div>

          {/* Letter content */}
          <div className="py-8 px-4 md:px-12">
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-center mb-8 text-romantic-gradient">
              A Letter To My Love
            </h2>

            <div className="space-y-6 text-foreground/90 text-lg leading-relaxed font-body">
              <p className="first-letter:text-5xl first-letter:font-display first-letter:text-primary first-letter:float-left first-letter:mr-3 first-letter:mt-1">
                Leah Valentine, While I do have to point out that every day with you has been
                Valentine day I would love to have a Ms Valentine Valentines. It would be a missed
                opportunity if my Ms. Valentine was not my Valentine.
              </p>

              <p>
                On a more serious note, I love you and I hope you feel as special to me as you are.
                So that being said I would formal like to ask you;
              </p>

              <p>Will you make me a lucky duck and be my Ms Valentine? ❤️❤️❤️</p>

              <p className="text-right italic text-primary font-display text-xl pt-4">
                Love,
                <br />
                <span className="text-2xl">Max ♥</span>
              </p>
            </div>
          </div>
        </div>

        {/* Edit note */}
      </div>
    </section>
  );
};

export default LoveLetterSection;
