import { motion } from "framer-motion";

const LoveMessage = () => {
  return (
    <section className="py-20 px-4 md:px-8 relative z-20">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="
            bg-white/90 
            backdrop-blur-lg 
            rounded-3xl 
            p-10 md:p-14 
            shadow-[0_8px_40px_rgba(255,155,190,0.25)] 
            border border-pink-200 
            text-center 
          "
        >
          <h2
            className="
              text-4xl md:text-5xl 
              font-extrabold 
              mb-6 
              bg-gradient-to-r 
              from-pink-500 to-rose-500 
              bg-clip-text text-transparent 
              font-[serif]
            "
          >
            A Letter for Vinii
          </h2>

          <p className="text-gray-500 mb-6 font-medium">My dearest Vinii,</p>

          <div className="space-y-6 text-lg md:text-xl text-gray-700 leading-relaxed">
            <p>
              Happy Birthday meri Vinii! 🎂✨
            </p>
            <p>
              Finally 21! Par sach kahun, numbers matter nahi karte. Tumhari smile, tumhara innocence, aur kabhi kabhi tumhara wo pyaara sa gussa... sabse special ho tum.
            </p>

            <p className="text-pink-500 font-semibold text-xl md:text-2xl">
              "Tum meri favorite notification ho."
            </p>

            <p>
              Maine notice kiya hai ki tum kitni strong aur caring ho. Jab tum hansti ho na, sach mein din ban jata hai.
              Aaj ka din sirf tumhara hai. Khoob celebrate karo, khush raho, aur hamesha aise hi chamakti raho.
            </p>

            <p>
              Meri dua hai ki tumhari life mein bas khushiyan hi khushiyan ho.
              Always keep shining like a star! 🌟
            </p>
          </div>

          <p className="mt-10 text-xl md:text-2xl font-semibold text-gray-900">
            Happy birthday meri pyari Vinii! Love you loads! ❤️🌸✨
          </p>

          <div className="flex justify-center gap-3 mt-6 text-2xl">
            <span>💗</span>
            <span>💖</span>
            <span>💛</span>
            <span>💗</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LoveMessage;
