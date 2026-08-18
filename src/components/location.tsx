import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  LayersControl,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { motion } from "framer-motion";
import { MapPin, Flower2, Navigation } from "lucide-react";

const latitude = -1.203181998774037;
const longitude = 36.83846272329197;

export default function Location() {
  return (
    <section
      id="location"
      className="min-h-screen px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">

        
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

    
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="overflow-hidden rounded-3xl"
        >
          <MapContainer
            center={[latitude, longitude]}
            zoom={18}
            className="h-[350px] w-full sm:h-[450px] lg:h-[550px]"
          >
            
            <LayersControl position="topright">

              
              <LayersControl.BaseLayer checked name="Street Map">
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution="&copy; OpenStreetMap contributors"
                />
              </LayersControl.BaseLayer>

              
              <LayersControl.BaseLayer name="Satellite">
                <TileLayer
                  url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
                  attribution="Tiles &copy; Esri"
                />
              </LayersControl.BaseLayer>

            </LayersControl>

    
            <Marker position={[latitude, longitude]}>
              <Popup>
                <strong>Elibu Home Decoraytes</strong>
                <br />
                Visit us here!
              </Popup>
            </Marker>
          </MapContainer>
        </motion.div>

        
        <motion.a
          href={`https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto mt-6 block w-fit rounded-full bg-emerald-700 px-8 py-4 font-semibold text-white transition hover:bg-emerald-800"
        >
          Get Directions
        </motion.a>

        
        <div className="mt-10 grid gap-6 sm:grid-cols-3">

          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-2xl bg-emerald-50 p-6 text-center"
          >
            <MapPin className="mx-auto h-8 w-8 text-emerald-700" />

            <h3 className="mt-4 font-bold text-emerald-950">
              Location
            </h3>

            <p className="mt-2 text-gray-600">
              Thindigua, Kiambu
            </p>
          </motion.div>

          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true }}
            className="rounded-2xl bg-emerald-50 p-6 text-center"
          >
            <Flower2 className="mx-auto h-8 w-8 text-emerald-700" />

            <h3 className="mt-4 font-bold text-emerald-950">
              Visit Us
            </h3>

            <p className="mt-2 text-gray-600">
              Come explore our flowers, plants and trees.
            </p>
          </motion.div>

          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="rounded-2xl bg-emerald-50 p-6 text-center"
          >
            <Navigation className="mx-auto h-8 w-8 text-emerald-700" />

            <h3 className="mt-4 font-bold text-emerald-950">
              Directions
            </h3>

            <p className="mt-2 text-gray-600">
              Use the map above to find us.
            </p>
          </motion.div>

        </div>

        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="mx-auto mt-10 max-w-2xl text-center text-gray-600"
        >
          We look forward to welcoming you. Use the map above to find our
          exact location.
        </motion.p>

      </div>
    </section>
  );
}