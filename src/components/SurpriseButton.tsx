import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Heart, Sparkles, X, PartyPopper } from "lucide-react";
import Confetti from "react-confetti";
import { useWindowSize } from "@/hooks/use-window-size";
import confetti from "canvas-confetti";

const SurpriseButton = () => {
  const [showSurprise, setShowSurprise] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const { width, height } = useWindowSize();

  // NORMAL CONFETTI FUNCTION
  const startParty = (e) => {
    e.stopPropagation();
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 4500);
  };

  // FIREWORKS FUNCTION
  const triggerFireworks = () => {
    const duration = 4000;
    const animationEnd = Date.now() + duration;
    const defaults = { 
      startVelocity: 30,
      spread: 360,
      ticks: 80,
      zIndex: 200,
      disableForReducedMotion: true
    };

    function randomInRange(min, max) {
      return Math.random() * (max - min) + min;
    }

    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now();
      if (timeLeft <= 0) return clearInterval(interval);

      const particleCount = 60 * (timeLeft / duration);
      const colors = ["#FF4B9F", "#FF80BF", "#FFB3D9", "#FF66C4"];

      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        colors,
        shapes: ["circle", "square"],
        scalar: 1.3,
      });

      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        colors,
        shapes: ["circle", "square"],
        scalar: 1.3,
      });
    }, 250);
  };

  return (
    <>
      {showConfetti && (
        <div className="pointer-events-none fixed inset-0 z-[100]">
          <Confetti width={width} height={height} recycle={false} numberOfPieces={450} />
        </div>
      )}

      {/* Heading Section */}
      <section className="py-12 text-center bg-gradient-to-b from-pink-50 to-white">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="flex flex-col items-center">
          
          <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 2, repeat: Infinity }} className="text-5xl text-pink-500 mb-4">
            🎁
          </motion.div>

          <h2 className="text-3xl md:text-4xl font-extrabold text-pink-600 italic mb-2">
            I Have a Surprise for You! 💝
          </h2>
          <p className="text-gray-600 text-lg mb-6 font-medium">
            Click the button to reveal something special...
          </p>
        </motion.div>
      </section>

      {/* Surprise Button */}
      <section className="py-10 px-4 text-center">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="flex justify-center">
          <motion.div animate={{ scale: [1, 1.08, 1] }} transition={{ duration: 2, repeat: Infinity }}>
            <Button
              onClick={() => setShowSurprise(true)}
              size="lg"
              className="text-lg md:text-2xl px-10 py-5 md:px-12 md:py-6 rounded-full font-bold bg-gradient-to-r from-pink-400 to-rose-400 text-white shadow-xl hover:shadow-rose-300"
            >
              <Heart className="mr-3 fill-white" size={28} />
              Surprise 💖 <Sparkles className="ml-3" size={26} />
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {showSurprise && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-pink-200/40 backdrop-blur-md z-[90] flex items-center justify-center p-2" onClick={() => setShowSurprise(false)}>
            <motion.div initial={{ scale: 0.7, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.6 }} transition={{ type: "spring", duration: 0.8 }} className="relative w-full max-w-md pointer-events-auto" onClick={(e) => e.stopPropagation()}>
              
              <Button size="icon" className="absolute -top-8 right-2 text-pink-600 hover:bg-pink-100 rounded-full z-[200]" onClick={() => setShowSurprise(false)}>
                <X size={32} />
              </Button>

              <div className="bg-white/90 backdrop-blur-xl p-8 md:p-10 rounded-3xl shadow-[0_8px_60px_rgba(255,120,150,0.45)] border border-pink-200 text-center relative overflow-hidden">

                <motion.div animate={{ rotate: 360 }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }} className="relative mx-auto mb-4 w-20 h-20">
                  <motion.span className="absolute text-pink-400 text-3xl" style={{ top: "-10px", left: "50%" }}>💖</motion.span>
                  <Heart className="text-pink-500 fill-pink-500 w-20 h-20 mx-auto" />
                </motion.div>

                <motion.h2 className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-pink-600 to-rose-500 bg-clip-text text-transparent" animate={{ scale: [1, 1.04, 1] }} transition={{ duration: 1.6, repeat: Infinity }}>
                  I Love You 💞
                </motion.h2>

                <p className="text-lg md:text-xl text-pink-700 font-medium mb-3">
                  Forever & always, my heart 🌸
                </p>

                <p className="text-xl text-gray-700">
                  You are my today, tomorrow & always 💫
                </p>

                {/* FINAL CELEBRATE BUTTON */}
                <Button
                  onClick={(e) => {
                    startParty(e);
                    triggerFireworks();
                  }}
                  className="mt-6 px-6 py-3 rounded-full bg-gradient-to-r from-yellow-400 to-red-400 text-white font-semibold shadow-lg hover:scale-105 transition flex items-center gap-2 mx-auto"
                >
                  <PartyPopper size={22} /> Celebrate 💥
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default SurpriseButton;
