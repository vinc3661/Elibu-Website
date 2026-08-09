
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import Aurora from "./Aurora";
import Navbar from "./Navbar";

import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";
import img6 from "../assets/img6.jpg";
import img7 from "../assets/img7.jpg";
import img8 from "../assets/img8.jpg";
import img9 from "../assets/img9.jpg";

const images = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
];

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-black"
    >
      
      <Navbar />


      <AnimatePresence mode="wait">
        <motion.img
          key={currentImage}
          src={images[currentImage]}
          alt="Beautiful natural scenery"
          className="absolute inset-0 h-full w-full object-cover"
          initial={{
            opacity: 0,
            scale: 1.08,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          exit={{
            opacity: 0,
          }}
          transition={{
            opacity: {
              duration: 1.2,
            },
            scale: {
              duration: 6,
              ease: "easeOut",
            },
          }}
        />
      </AnimatePresence>

      
      <div className="absolute inset-0 bg-black/35" />

      
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/30 via-transparent to-emerald-950/90" />

      
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <Aurora
          colorStops={["#14532d", "#7cff67", "#166534"]}
          amplitude={1.3}
          blend={0.5}
          speed={0.8}
        />
      </div>

      
      <div className="relative z-10 flex min-h-screen items-center justify-center px-5 py-28 sm:px-8 lg:px-12">
        <div className="mx-auto w-full max-w-5xl text-center text-white">

          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.2,
            }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.25em] text-lime-200 backdrop-blur-md sm:text-sm">
              <span className="h-2 w-2 rounded-full bg-lime-300" />
              Nature • Flowers • Trees
            </span>
          </motion.div>

          
          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.35,
              ease: "easeOut",
            }}
            className="text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
          >
            Bring the beauty
            <span className="block text-lime-300">
              of nature home.
            </span>
          </motion.h1>

          
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.55,
            }}
            className="mx-auto mt-7 max-w-2xl text-sm leading-7 text-white/85 sm:text-base sm:leading-8 md:text-lg"
          >
            Discover beautiful flowers, plants and trees carefully selected
            to bring fresh life, colour and natural beauty into your space.
          </motion.p>

          
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.7,
            }}
            className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <motion.a
              href="#gallery"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="w-full rounded-full bg-lime-300 px-7 py-3.5 text-sm font-semibold text-emerald-950 shadow-lg shadow-lime-950/20 transition hover:bg-lime-200 sm:w-auto"
            >
              Explore Our Collection
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="w-full rounded-full border border-white/30 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/20 sm:w-auto"
            >
              Talk to Us
            </motion.a>

            <motion.a
              href="#location"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="w-full rounded-full border border-white/30 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/20 sm:w-auto"
            >
              Find Our Location
            </motion.a>
          </motion.div>

          {/* Image Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.8,
              delay: 1,
            }}
            className="mt-12 flex justify-center gap-2"
          >
            {images.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setCurrentImage(index)}
                aria-label={`Show hero image ${index + 1}`}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  currentImage === index
                    ? "w-9 bg-lime-300"
                    : "w-1.5 bg-white/50 hover:bg-white/80"
                }`}
              />
            ))}
          </motion.div>
        </div>
      </div>

      
      <motion.a
        href="#gallery"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1,
          delay: 1.3,
        }}
        className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-2 text-xs uppercase tracking-[0.2em] text-white/60 transition hover:text-white"
      >
        <span>Scroll</span>

        <motion.span
          animate={{
            y: [0, 6, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="h-8 w-px bg-white/50"
        />
      </motion.a>
    </section>
  );
}

