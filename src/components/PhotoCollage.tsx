import { motion } from "framer-motion";

const PhotoCollage = () => {
  // Photos from Unsplash for a beautiful birthday theme
  const photos = [
    { src: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&q=80", alt: "Delicious Cake", delay: 0.1 },
    { src: "https://images.unsplash.com/photo-1530103862676-de3c9a59af57?w=800&q=80", alt: "Pink Balloons", delay: 0.2 },
    { src: "https://images.unsplash.com/photo-1490750967868-58cb75079ed6?w=800&q=80", alt: "Flowers", delay: 0.3 },
    { src: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=800&q=80", alt: "Gift Box", delay: 0.4 },
    { src: "https://images.unsplash.com/photo-1514525253440-b39345208668?w=800&q=80", alt: "Confetti", delay: 0.5 },
    { src: "https://images.unsplash.com/photo-1464349153735-7db50ed83c84?w=800&q=80", alt: "Birthday Candles", delay: 0.6 },
    { src: "https://images.unsplash.com/photo-1558636508-e0db3836bd1b?w=800&q=80", alt: "Celebration", delay: 0.7 },
    { src: "https://images.unsplash.com/photo-1527481138388-318cd18863ef?w=800&q=80", alt: "Party Vibes", delay: 0.8 },
    { src: "https://images.unsplash.com/photo-1623428454614-abaf00244e52?w=800&q=80", alt: "Sparkler", delay: 0.9 },
    { src: "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?w=800&q=80", alt: "Pink Gift", delay: 1.0 },
    { src: "https://images.unsplash.com/photo-1572451479139-6a308211d8be?w=800&q=80", alt: "Chocolates", delay: 1.1 },
    { src: "https://images.unsplash.com/photo-1520854221256-17451cc330e7?w=800&q=80", alt: "Happy Vibes", delay: 1.2 },
  ];

  const isMobile = window.innerWidth < 768;

  return (
    <section className="py-20 px-3 md:px-8 relative z-20">

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-6xl font-display font-bold text-center mb-12 md:mb-16 
        bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent"
      >
        Beautiful Memories
      </motion.h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
        {photos.map((photo, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: photo.delay, duration: 0.5 }}
            whileHover={!isMobile ? { scale: 1.06, rotate: index % 2 === 0 ? 2 : -2 } : {}}
            className="relative group"
          >
            <div
              className="overflow-hidden rounded-2xl md:rounded-3xl
              shadow-[0_6px_25px_rgba(255,150,180,0.25)]
              hover:shadow-[0_10px_35px_rgba(255,120,160,0.35)]
              border border-pink-200 bg-white/90 backdrop-blur-md
              transition-all duration-300"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-64 sm:h-72 md:h-72 object-cover 
                transition duration-500 group-hover:scale-110"
              />
            </div>

            <div
              className="absolute inset-0 bg-gradient-to-t from-pink-200/25 to-transparent 
              rounded-2xl md:rounded-3xl opacity-0 group-hover:opacity-100 
              transition duration-300"
            />

            <motion.span
              initial={{ opacity: 0, scale: 0 }}
              whileHover={!isMobile ? { opacity: 1, scale: 1.2, y: -8 } : {}}
              className="absolute bottom-2 right-3 text-pink-500 text-lg md:text-xl"
            >
              💖
            </motion.span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PhotoCollage;
