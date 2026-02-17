import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const FloatingBalloons = () => {
  const [screenH, setScreenH] = useState(800);

  useEffect(() => {
    setScreenH(window.innerHeight);
  }, []);

  const balloons = Array.from({ length: 14 }, (_, i) => ({
    id: i,
    left: Math.random() * 100, 
    duration: 8 + Math.random() * 5,
    delay: Math.random() * 4,
    color:
      i % 3 === 0
        ? "hsl(340 85% 75%)"
        : i % 3 === 1
        ? "hsl(330 81% 60%)"
        : "hsl(45 80% 65%)",
  }));

  return (
    <div className="fixed inset-0 pointer-events-none z-[2] overflow-hidden">
      {balloons.map((b) => (
        <motion.div
          key={b.id}
          className="absolute"
          style={{ left: `${b.left}%`, bottom: "-120px" }}
          animate={{
            y: [0, -screenH - 200],
            x: [0, Math.sin(b.id * 2) * 50],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: b.duration,
            repeat: Infinity,
            delay: b.delay,
            ease: "easeInOut",
          }}
        >
          <div className="relative">
            {/* Balloon Body */}
            <div
              className="w-10 h-12 md:w-14 md:h-16 rounded-full shadow-xl"
              style={{
                background: `radial-gradient(circle at 30% 30%, ${b.color}, #ffffff30)`,
              }}
            />

            {/* String */}
            <div
              className="absolute top-full left-1/2 w-[2px] h-14 md:h-20"
              style={{
                background: `linear-gradient(to bottom, ${b.color}, transparent)`,
                transform: "translateX(-50%)",
              }}
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingBalloons;
