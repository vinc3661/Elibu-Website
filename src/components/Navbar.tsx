
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = ["Home", "Gallery", "About", "Location", "Contact"];

export default function Navbar() {
  const [currentPage, setCurrentPage] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = (link: string) => {
    setCurrentPage(link);
    setMenuOpen(false);
  };

  return (
    <nav className="absolute inset-x-0 top-0 z-50 px-4">
      
      <div className="flex items-center justify-end py-5 md:hidden">
        <motion.button
          onClick={() => setMenuOpen(!menuOpen)}
          whileTap={{ scale: 0.9 }}
          className="rounded-lg p-2 text-2xl text-white"
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? "✕" : "☰"}
        </motion.button>
      </div>

      
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mx-auto flex w-full max-w-xs flex-col items-center gap-5 rounded-2xl bg-black/60 px-6 py-6 text-white backdrop-blur-md md:hidden"
          >
            {links.map((link) => (
              <motion.a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => handleLinkClick(link)}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={
                  currentPage === link
                    ? "text-lime-300"
                    : "text-white/80 hover:text-white"
                }
              >
                {link}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop Navbar */}
      <div className="hidden justify-center gap-8 py-5 text-white md:flex">
        {links.map((link) => (
          <motion.a
            key={link}
            href={`#${link.toLowerCase()}`}
            onClick={() => setCurrentPage(link)}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            className={
              currentPage === link
                ? "text-lime-300"
                : "text-white/80 hover:text-white"
            }
          >
            {link}
          </motion.a>
        ))}
      </div>
    </nav>
  );
}
