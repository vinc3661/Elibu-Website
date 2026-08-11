import {motion} from "framer-motion";

const images = import.meta.glob(
"../assets/Gallery/*.{jpg,jpeg,npg,webp}",
{
eager:true,
query:"?url",
import:"default",


}

);

export default function Gallery() {
  return (
    <section id="gallery" className="min-h-screen bg-white px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-emerald-600">
            Our Collection
          </p>

          <h2 className="mt-3 text-4xl font-bold text-emerald-950 sm:text-5xl">
            Flowers, Plants & Trees
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Explore our collection of beautiful flowers, plants and trees.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          
       {Object.entries(images).map(([path,image])=>(
           <motion.div
           key={path}
           initial={{opacity:0, y:20}}
           whileInView={{opacity:1, y:0}}
            transition={{duration:1.2}}
            viewport={{once:true}}
            className="over-flow-hidden rounded-2xl"

          >
            <motion.img
            src={image}
            alt="Elibu Home Decorates"
            whileHover={{scale:1.05}}
            transition={{duration:0.3}}
            className="h-72 w-full object-cover"
            
            
            
            
            >
                 </motion.img>
            </motion.div>


       ))}


          
        </div>
      </div>
    </section>
  );
}