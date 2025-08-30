function CTAFooter() {
  return (
    <footer id="request-invite" className="relative mx-auto max-w-6xl px-6 pb-24 pt-12">
      <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.03] p-8 text-center backdrop-blur">
        <h3 className="text-xl md:text-2xl font-semibold text-white tracking-tight">Build in Parallel.</h3>
        <p className="mx-auto mt-3 max-w-2xl text-sm md:text-base text-gray-300">
          Join a private forum for focused makers. Apply for access—log in if you already have an account.
        </p>
        <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#login"
            className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white/90 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30 focus:ring-offset-2 focus:ring-offset-black"
          >
            Login to Private Forum
          </a>
          <a
            href="https://forms.gle/" target="_blank" rel="noreferrer"
            className="rounded-full bg-yellow-400 px-6 py-3 text-sm font-semibold text-black shadow hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-offset-2 focus:ring-offset-black"
          >
            Request Invite
          </a>
        </div>
        <p className="mt-4 text-xs text-white/50">No spam. No feeds. Just practice.</p>
      </div>

      <div id="login" className="sr-only">Login anchor</div>
    </footer>
  );
}

export default CTAFooter;
