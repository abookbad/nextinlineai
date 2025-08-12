import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-white/10 bg-black/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-8 text-sm text-white/80 sm:flex-row sm:px-6 lg:px-8">
        <p>
          © {new Date().getFullYear()} Next In Line AI — <a className="hover:underline hover:text-white" href="mailto:hello@nextinlineai.com">hello@nextinlineai.com</a>
        </p>
        <nav className="flex gap-6">
          <Link href="#features" className="hover:underline hover:text-white">
            Features
          </Link>
          <Link href="#pricing" className="hover:underline hover:text-white">
            Pricing
          </Link>
          <Link href="/book" className="hover:underline hover:text-white">
            Contact
          </Link>
        </nav>
      </div>
    </footer>
  );
}


