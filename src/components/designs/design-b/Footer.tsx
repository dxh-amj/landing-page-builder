export default function Footer() {
  return (
    <footer className="bg-gray-50 text-gray-900 py-12 mt-16 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-6">
          {/* Links */}
          <nav className="flex gap-8">
            <a href="/privacy" className="text-sm text-gray-600 hover:text-green-600 transition-colors">
              Privacy
            </a>
            <a href="/terms" className="text-sm text-gray-600 hover:text-green-600 transition-colors">
              Terms
            </a>
            <a href="/help" className="text-sm text-gray-600 hover:text-green-600 transition-colors">
              Help
            </a>
          </nav>

          {/* Social Links */}
          <div className="flex gap-6">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-green-600 transition-colors text-sm font-medium"
              aria-label="LinkedIn"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-green-600 transition-colors text-sm font-medium"
              aria-label="GitHub"
            >
              GitHub
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-gray-500">
            © 2026 Minimal Site. Built with care.
          </p>
        </div>
      </div>
    </footer>
  );
}
