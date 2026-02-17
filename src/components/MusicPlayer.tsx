import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Music, Pause, Play } from "lucide-react";

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(() => {});
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 2 }}
      className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50"
    >
      <button
        onClick={togglePlay}
        className="w-14 h-14 md:w-16 md:h-16 bg-pink-500 text-white flex items-center justify-center rounded-full shadow-xl backdrop-blur-sm border border-pink-300 hover:scale-110 transition-all"
      >
        {isPlaying ? <Pause size={26} /> : <Play size={26} className="ml-1" />}
      </button>

      <motion.div
        animate={{ rotate: isPlaying ? 360 : 0 }}
        transition={{
          duration: 3,
          repeat: isPlaying ? Infinity : 0,
          ease: "linear",
        }}
        className="absolute -top-1 -right-1"
      >
        <Music size={20} className="text-pink-300" />
      </motion.div>

      <audio ref={audioRef} loop>
        <source src="/music/song.mp3" type="audio/mpeg" />
      </audio>
    </motion.div>
  );
};

export default MusicPlayer;
