import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const floatingHearts = Array.from({ length: 10 });

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative px-4 
      bg-gradient-to-b from-rose-200 via-pink-100 to-rose-200 overflow-hidden">

      {/* 💗 Floating Hearts */}
      {floatingHearts.map((_, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: [0, 1, 1, 0], y: "-100vh" }}
          transition={{
            duration: 7 + Math.random() * 5,
            repeat: Infinity,
            delay: i * 0.7,
          }}
          className="absolute text-pink-400/60"
          style={{
            left: `${Math.random() * 100}%`,
            fontSize: `${18 + Math.random() * 28}px`,
          }}
        >
          ❤️
        </motion.span>
      ))}

      {/* Main content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9 }}
        className="text-center relative z-10"
      >

        {/* Image */}
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="mb-4"
        >
          <div className="w-44 h-44 md:w-60 md:h-60 rounded-full overflow-hidden border-4 border-pink-300 
            shadow-[0_0_35px_rgba(255,120,150,0.5)] mx-auto mb-6">
            <img
              src="https://images.unsplash.com/photo-1563804368595-5c1a74d22184?w=800&q=80"
              alt="Birthday Girl"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Happy Birthday line */}
        <h2 className="text-2xl md:text-3xl font-semibold text-pink-600 mb-2 drop-shadow-sm">
          Happy Birthday My Love
        </h2>

        {/* Name + Heartbeat */}
        <div className="flex items-center justify-center gap-3">
          <h1 className="text-6xl md:text-7xl font-extrabold 
            bg-gradient-to-r from-rose-600 via-pink-500 to-rose-400 
            bg-clip-text text-transparent tracking-wide drop-shadow-md">
            Vinii
          </h1>

          {/* 💖 Heart Beat Animation */}
          <motion.span
            animate={{ scale: [1, 1.4, 1] }}
            transition={{ duration: 0.8, repeat: Infinity }}
            className="text-4xl md:text-5xl text-pink-500 drop-shadow-xl"
          >
            ❤️
          </motion.span>
        </div>

        {/* Typewriter */}
        <div className="mt-3 mb-4">
          <TypeAnimation
            sequence={[
              "You’re my happy place 💕",
              2000,
              "You make life magical ✨",
              2000,
              "Forever yours 💍❤️",
              2000,
            ]}
            speed={45}
            wrapper="div"
            className="text-2xl md:text-4xl font-bold text-pink-700"
            repeat={Infinity}
          />
        </div>

        {/* Date */}
        <p className="text-lg md:text-xl text-pink-700/80 font-medium">
          November 3rd • The day an angel was born 🌷
        </p>
      </motion.div>

      {/* Scroll */}
      <motion.div
        className="absolute bottom-8 text-pink-600 text-sm font-medium"
        animate={{ opacity: [0.4, 1, 0.4], y: [0, 6, 0] }}
        transition={{ duration: 1.8, repeat: Infinity }}
      >
        Scroll to feel the love ↓
      </motion.div>
    </section>
  );
};

export default HeroSection;
