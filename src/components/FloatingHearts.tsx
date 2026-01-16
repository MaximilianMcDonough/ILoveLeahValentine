import { Heart } from "lucide-react";

const FloatingHearts = () => {
  const hearts = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 15,
    duration: 10 + Math.random() * 10,
    size: 12 + Math.random() * 24,
    opacity: 0.1 + Math.random() * 0.3,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((heart) => (
        <Heart
          key={heart.id}
          className="absolute text-primary fill-primary"
          style={{
            left: `${heart.left}%`,
            bottom: "-50px",
            width: heart.size,
            height: heart.size,
            opacity: heart.opacity,
            animation: `rise ${heart.duration}s linear infinite`,
            animationDelay: `${heart.delay}s`,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingHearts;
