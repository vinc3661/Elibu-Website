import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const latitude = -1.203181998774037;
const longitude = 36.83846272329197;

export default function Location() {
  return (
    <section
      id="location"
      className="min-h-screen px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-emerald-600">
            Find Us
          </p>

          <h2 className="mt-3 text-4xl font-bold text-emerald-950 sm:text-5xl">
            Visit Elibu
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Find us at our floral shop and come discover beautiful
            flowers, plants and trees.
          </p>
        </div>

        <div className="overflow-hidden rounded-3xl shadow-lg">
          <MapContainer
            center={[latitude, longitude]}
            zoom={16}
            scrollWheelZoom={false}
            className="h-[350px] w-full sm:h-[450px] lg:h-[550px]"
          >
            <TileLayer
              attribution="&copy; OpenStreetMap contributors"
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <Marker position={[latitude, longitude]}>
              <Popup>
                <strong>Elibu Home Decoraytes</strong>
                <br />
                Visit our floral shop 🌿
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </section>
  );
}