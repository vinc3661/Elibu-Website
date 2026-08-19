import { lazy, Suspense } from "react";

import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Gallery from "./components/Gallery";
import About from "./components/About";

const Location = lazy(() => import("./components/Location"));

export default function App() {
  return (
    <main>
      <Hero />
      <Navbar />

      <Gallery />
      <About />

      <Suspense fallback={<div className="h-[550px]" />}>
        <Location />
      </Suspense>
    </main>
  );
}
