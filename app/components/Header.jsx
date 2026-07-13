import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-between px-6 py-5 mix-blend-difference md:px-12">
      <Link href="/" className="text-lg font-extrabold tracking-tight">
        MAJO.PASKUVAN
      </Link>
      <nav className="flex items-center gap-8 font-mono text-xs tracking-widest">
        <Link
          href="/#work"
          className="hidden text-ink-dim transition-colors hover:text-ink md:block"
        >
          WORK
        </Link>
        <Link
          href="/#about"
          className="hidden text-ink-dim transition-colors hover:text-ink md:block"
        >
          ABOUT
        </Link>
        <Link
          href="/#contact"
          className="text-ink-dim transition-colors hover:text-ink"
        >
          CONTACT
        </Link>
      </nav>
    </header>
  );
}
