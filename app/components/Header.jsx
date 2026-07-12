export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-between px-6 py-5 mix-blend-difference md:px-12">
      <a href="#" className="text-lg font-extrabold tracking-tight">
        MAJO.PASKUVAN
      </a>
      <nav className="flex items-center gap-8 font-mono text-xs tracking-widest">
        <a href="#work" className="hidden text-ink-dim transition-colors hover:text-ink md:block">
          WORK
        </a>
        <a href="#about" className="hidden text-ink-dim transition-colors hover:text-ink md:block">
          ABOUT
        </a>
        <a href="#contact" className="text-ink-dim transition-colors hover:text-ink">
          CONTACT
        </a>
      </nav>
    </header>
  );
}
