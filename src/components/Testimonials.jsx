import { Star } from 'lucide-react';

function Stars() {
  return (
    <div className="flex items-center gap-1 text-yellow-300">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={16} fill="currentColor" />
      ))}
    </div>
  );
}

function Testimonials() {
  const quotes = [
    {
      quote:
        'After a month with Parallel, I reclaimed 10+ hours a week from busywork and shipped the most important project of my quarter.',
      name: 'Maya R.',
      role: 'Staff Engineer',
    },
    {
      quote:
        'The forum is quiet, high-signal, and kind. It nudged me to redesign my mornings and finally stick to deep work blocks.',
      name: 'Jonah K.',
      role: 'Product Designer',
    },
    {
      quote:
        'Digital minimalism here isn’t dogma. It’s practice. My screen time dropped by half without feeling like I’m missing out.',
      name: 'Elena V.',
      role: 'Researcher',
    },
  ];

  return (
    <section className="mx-auto max-w-6xl px-6 py-20 md:py-24">
      <header className="mb-10 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-white tracking-tight">What members are saying</h2>
        <p className="mt-3 text-sm md:text-base text-gray-400">Calm voices, honest results.</p>
      </header>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {quotes.map((t, i) => (
          <figure
            key={i}
            className="flex h-full flex-col justify-between rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur"
          >
            <div className="mb-4"><Stars /></div>
            <blockquote className="text-sm text-gray-200">“{t.quote}”</blockquote>
            <figcaption className="mt-6 text-xs text-gray-400">
              <span className="text-white/90">{t.name}</span> · {t.role}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
