export default function Header() {
  return (
    <header className="bg-gray-900 text-white py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <a href="/" className="text-xl font-bold tracking-wide">
          Astro Boilerplate
        </a>

        {/* Nav Links */}
        <nav className="flex gap-6">
          <a href="/" className="hover:text-blue-400 transition-colors">
            Home
          </a>
          <a href="/about" className="hover:text-blue-400 transition-colors">
            About
          </a>
          <a href="/contact" className="hover:text-blue-400 transition-colors">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
