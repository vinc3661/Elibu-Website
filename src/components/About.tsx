import { motion } from "framer-motion";
import aboutImage from "../assets/Gallery/img10.jpeg";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-white px-6 py-20"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <motion.img
            src={aboutImage}
            alt="Elibu flowers and plants"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="h-[450px] w-full rounded-3xl object-cover"
          />

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-emerald-600">
              About Elibu Home Decorates
            </p>

            <h2 className="mt-3 text-4xl font-bold text-emerald-950 sm:text-5xl">
              Bringing nature closer to you.
            </h2>

            <p className="mt-6 leading-7 text-gray-600">
              We provide beautiful flowers, plants and trees carefully
              selected to bring freshness, colour and natural beauty
              into your space.
            </p>

            <div className="mt-8 space-y-3 text-emerald-900">
              <p>✓ Beautiful flowers</p>
              <p>✓ Healthy plants and trees</p>
              <p>✓ Quality natural products</p>
            </div>

            <a
              href="#contact"
              className="mt-8 inline-block rounded-full bg-emerald-700 px-6 py-3 font-semibold text-white transition hover:bg-emerald-800"
            >
              Talk to Us
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
