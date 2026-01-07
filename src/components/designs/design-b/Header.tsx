export default function Header() {
  return (
    <header className="bg-white text-gray-900 py-6 shadow-sm border-b border-gray-200">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <a href="/" className="text-2xl font-light tracking-tight">
          Minimal Site
        </a>

        {/* Nav Links */}
        <nav className="flex gap-8">
          <a href="/" className="text-gray-600 hover:text-green-600 transition-colors font-medium">
            Home
          </a>
          <a href="/about" className="text-gray-600 hover:text-green-600 transition-colors font-medium">
            About2
          </a>
          <a href="/contact" className="text-gray-600 hover:text-green-600 transition-colors font-medium">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
