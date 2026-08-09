
import { useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [currentPage, setCurrentPage] = useState<string>("home");

  return (
    <nav className="absolute inset-x-0 top-0 z-50 px-6 py-5">
      <div className="mx-auto flex max-w-6xl items-center justify-center gap-8 font-semibold tracking-normal text-white">
        <motion.a
          href="#home"
          onClick={() => setCurrentPage("home")}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.95 }}
          className={`transition ${
            currentPage === "home"
              ? "text-lime-300"
              : "text-white/80 hover:text-white"
          }`}
        >
          Home
        </motion.a>

        <motion.a
          href="#about"
          onClick={() => setCurrentPage("about")}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.95 }}
          className={`transition ${
            currentPage === "about"
              ? "text-lime-300"
              : "text-white/80 hover:text-white"
          }`}
        >
          About
        </motion.a>

        <motion.a
          href="#gallery"
          onClick={() => setCurrentPage("gallery")}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.95 }}
          className={`transition ${
            currentPage === "gallery"
              ? "text-lime-300"
              : "text-white/80 hover:text-white"
          }`}
        >
          Gallery
        </motion.a>

        <motion.a
          href="#contact"
          onClick={() => setCurrentPage("contact")}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.95 }}
          className={`transition ${
            currentPage === "contact"
              ? "text-lime-300"
              : "text-white/80 hover:text-white"
          }`}
        >
          Contact
        </motion.a>

        <motion.a
          href="#location"
          onClick={() => setCurrentPage("location")}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.95 }}
          className={`transition ${
            currentPage === "location"
              ? "text-lime-300"
              : "text-white/80 hover:text-white"
          }`}
        >
          Location
        </motion.a>
      </div>
    </nav>
  );
}
```
