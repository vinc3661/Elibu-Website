import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Aurora from "./Aurora";

import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";
import img6 from "../assets/img6.jpg";
import img7 from "../assets/img7.jpg";
import img8 from "../assets/img8.jpg";
import img9 from "../assets/img9.jpg";

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden">

      <AnimatePresence mode="wait">
        <motion.img
          key={currentImage}
          src={images[currentImage]}
          alt="Beautiful flowers and plants"
          className="absolute inset-0 h-full w-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        />
      </AnimatePresence>

      <div className="absolute inset-0 bg-black/40" />

      <div className="pointer-events-none absolute inset-0 opacity-30">
        <Aurora
          colorStops={["#14532d", "#7cff67", "#166534"]}
          amplitude={1.3}
          blend={0.5}
          speed={0.8}
        />
      </div>

      <div className="relative z-10 flex min-h-screen items-center justify-center px-5 text-center text-white">
        <div className="max-w-4xl">

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-5 text-sm uppercase tracking-[0.25em] text-lime-200"
          >
            Flowers • Plants • Nature
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold sm:text-6xl md:text-7xl"
          >
            Bring the beauty
            <span className="block text-lime-300">
              of nature home.
            </span>
          </motion.h1>

          <p className="mx-auto mt-6 max-w-2xl text-white/85 sm:text-lg">
            Discover beautiful flowers, plants and trees carefully selected
            to bring fresh life and natural beauty into your space.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

            <a
              href="#gallery"
              className="rounded-full bg-lime-300 px-6 py-3 font-semibold text-emerald-950"
            >
              Explore Collection
            </a>

            <a
              href="#location"
              className="rounded-full border border-white/30 bg-white/10 px-6 py-3 font-semibold backdrop-blur-md"
            >
              Find Our Location
            </a>

            <a
              href="#contact"
              className="rounded-full border border-white/30 bg-white/10 px-6 py-3 font-semibold backdrop-blur-md"
            >
              WhatsApp Us
            </a>

          </div>

        </div>
      </div>

    </section>
  );
}