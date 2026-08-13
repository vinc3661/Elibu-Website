import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Location() {
  const [locationData, setLocationData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        
        const response = await fetch("https://api.example.com/location");
        if (!response.ok) {
          throw new Error("Failed to load location");
        }
        const data = await response.json();
        setLocationData(data);
      } catch (err) {
        console.error("Failed to load location:", err);
        setError("Network Error");
      }
    };

    fetchLocation();
  }, []);

  return (
    <section id="location" className="min-h-screen px-20 py-6">
      <div className="grid md:grid-cols-1 items-center gap-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
          whileInView={{ scale: 1.05 }}
        >
          {error && <p className="text-red-500">{error}</p>}
          {locationData ? (
            <p>Location data loaded</p>
          ) : (
            <p>Loading location...</p>
          )}
        </motion.div>
      </div>
    </section>
  );
}







    
