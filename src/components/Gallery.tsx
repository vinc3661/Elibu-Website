const images = Object.values(
  import.meta.glob("../assets/Gallery/*.{jpg,jpeg,png,webp}", {
    eager: true,
    query: "?url",
    import: "default",
  })
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
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Elibu collection ${index + 1}`}
              className="h-72 w-full rounded-2xl object-cover"
            />
          ))}
        </div>
      </div>
    </section>
  );
}