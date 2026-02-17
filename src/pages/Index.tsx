import { useEffect } from "react";
import Confetti from "react-confetti";
import { useWindowSize } from "@/hooks/use-window-size";
import FloatingHearts from "@/components/FloatingHearts";
import FloatingBalloons from "@/components/FloatingBalloons";
import HeroSection from "@/components/HeroSection";
import PhotoCollage from "@/components/PhotoCollage";
import LoveMessage from "@/components/LoveMessage";
import SurpriseButton from "@/components/SurpriseButton";
import MusicPlayer from "@/components/MusicPlayer";

const Index = () => {
  const { width, height } = useWindowSize();

  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <div className="min-h-screen relative">
      {/* Initial confetti celebration */}
      <Confetti
        width={width}
        height={height}
        recycle={true}
        numberOfPieces={100}
        colors={["#FF69B4", "#FFD700", "#FF1493", "#FFC0CB", "#C9A961"]}
        opacity={0.6}
      />

      {/* Floating animations */}
      <FloatingHearts />
      <FloatingBalloons />

      {/* Music player */}
      <MusicPlayer />

      {/* Main content */}
      <main>
        <HeroSection />
        <PhotoCollage />
        <LoveMessage />
        <SurpriseButton />
      </main>

      {/* Footer */}
      {/* Footer */}
<footer className="relative z-20 py-8 text-center">
  <p className="text-lg font-semibold tracking-wide"
     style={{
       color: "#b67991",
       fontFamily: "'Dancing Script', cursive",
     }}
  >
    Made with <span className="text-pink-500 text-2xl animate-pulse">❤️</span> by Vivek
  </p>

  <div className="mt-2 text-2xl">
    💖 🎂 🎉 🌸 ✨
  </div>
</footer>

    </div>
  );
};

export default Index;
