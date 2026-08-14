import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { motion } from "framer-motion";

const latitude = -1.203181998774037;
const longitude = 36.83846272329197;

export default function Location() {
  return (
    <section
      id="location"
      className="min-h-screen px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-10 text-center"
        >
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-emerald-600">
            Find Us
          </p>

          <h2 className="mt-3 text-4xl font-bold text-emerald-950 sm:text-5xl">
            Visit Elibu
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-600">
            Come visit us and explore our beautiful collection of flowers,
            plants and trees. We are located near Coral Bells, Tsavo,
            Thindigua, just a short distance from Tsavo Apartments.
          </p>
        </motion.div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="overflow-hidden rounded-3xl"
        >
          <MapContainer
            center={[latitude, longitude]}
            zoom={16}
            className="h-[350px] w-full sm:h-[450px] lg:h-[550px]"
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution="&copy; OpenStreetMap contributors"
            />

            <Marker position={[latitude, longitude]}>
              <Popup>
                <strong>Elibu Home Decoraytes</strong>
                <br />
                Visit us here!
              </Popup>
            </Marker>
          </MapContainer>
        </motion.div>

        {/* Bottom paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="mx-auto mt-6 max-w-2xl text-center text-gray-600"
        >
          We look forward to welcoming you. Use the map above to find our
          exact location.
        </motion.p>

      </div>
    </section>
  );
}