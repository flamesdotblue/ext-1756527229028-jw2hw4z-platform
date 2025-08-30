import Spline from '@splinetool/react-spline';

function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/vc19ejtcC5VJjy5v/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 pt-28 pb-24 text-center sm:pt-32 md:pt-40">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white">
          Parallel
        </h1>
        <p className="mt-4 max-w-2xl text-base sm:text-lg md:text-xl text-gray-300">
          A community for people practicing deep work and digital minimalism. Fewer distractions. More meaningful output.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <a
            href="#request-invite"
            className="rounded-full bg-yellow-400 px-6 py-3 text-sm font-semibold text-black shadow hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-offset-2 focus:ring-offset-black"
          >
            Request Invite
          </a>
          <a
            href="#login"
            className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white/90 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30 focus:ring-offset-2 focus:ring-offset-black"
            aria-label="Login to Private Forum"
          >
            Login to Private Forum
          </a>
        </div>
        <a href="#principles" className="mt-16 text-sm text-white/60 hover:text-white/80">
          Learn more ↓
        </a>
      </div>
    </section>
  );
}

export default Hero;
