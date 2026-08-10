import { useState } from "react";
import { motion } from "framer-motion";

const links = ["Home", "Gallery", "About", "Location", "Contact"];

export default function Navbar() {
  const [currentPage, setCurrentPage] = useState("Home");

  return (
    <nav className="absolute inset-x-0 top-0 z-50">
      <div className="flex justify-center gap-8 py-5 text-white">
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