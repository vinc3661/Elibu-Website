import Aurora from './components/Aurora'
import Hero from "./components/Hero";
export default function App() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Hero />
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Aurora
            colorStops={['#5227FF', '#7cff67', '#5227FF']}
            amplitude={1.5}
            blend={0.5}
            speed={1.2}
          />
        </div>

        <div className="relative z-10 flex min-h-screen items-center justify-center px-6">
          <section className="max-w-3xl rounded-3xl border border-white/10 bg-white/10 p-8 shadow-2xl backdrop-blur-xl">
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-emerald-300">Elibu</p>
            <h1 className="text-4xl font-semibold sm:text-6xl">Your site is loading again.</h1>
            <p className="mt-4 text-lg text-slate-300">
              Tailwind and the app shell are now wired up properly, so the browser can render the page.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#" className="rounded-full bg-white px-5 py-3 font-medium text-slate-900">
                Get Started
              </a>
              <a href="#" className="rounded-full border border-white/20 px-5 py-3 font-medium text-white">
                Learn More
              </a>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
