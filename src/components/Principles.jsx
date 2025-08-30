import { Target, Clock, PhoneOff } from 'lucide-react';

function Principles() {
  const items = [
    {
      icon: Target,
      title: 'Deep Work First',
      text:
        'Prioritize high-impact, cognitively demanding tasks. Carve out uninterrupted blocks to do the work that truly moves the needle.',
    },
    {
      icon: PhoneOff,
      title: 'Digital Minimalism',
      text:
        'Be intentional about tools. Keep what serves your goals, remove what doesn’t. Create a calm, low-noise digital environment.',
    },
    {
      icon: Clock,
      title: 'Sustainable Rhythms',
      text:
        'Consistent routines beat sporadic sprints. Design weekly cadences and guard your attention with clear boundaries.',
    },
  ];

  return (
    <section id="principles" className="relative mx-auto max-w-6xl px-6 py-20 md:py-28">
      <header className="mb-12 md:mb-16">
        <h2 className="text-2xl md:text-3xl font-semibold text-white tracking-tight">Practice, not performative.</h2>
        <p className="mt-3 max-w-2xl text-sm md:text-base text-gray-400">
          Parallel is built for people who value clarity and craft. No feeds, no vanity metrics—just structure, support, and signal.
        </p>
      </header>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map(({ icon: Icon, title, text }) => (
          <div
            key={title}
            className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur transition-colors hover:border-white/20"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-yellow-400/10 text-yellow-300">
                <Icon size={20} />
              </div>
              <h3 className="text-lg font-semibold text-white">{title}</h3>
            </div>
            <p className="mt-3 text-sm text-gray-300">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Principles;
