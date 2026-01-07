import Button from '@components/ui/Button';

export default function Hero() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] p-12 rounded-2xl shadow-lg bg-gradient-to-r from-purple-600 to-blue-500 text-white">
      <h1 className="text-5xl font-bold mb-4 text-center">Build Websites</h1>
      <p className="text-2xl text-center mb-2">with Astro, React & Tailwind CSS</p>
      <p className="text-lg text-center mb-8 max-w-2xl opacity-90">
        A high-performance starter template optimized for speed, SEO, and developer experience.
      </p>
      <div className="flex gap-4">
        <Button onClick={() => window.location.href = '#get-started'}>
          Get Started
        </Button>
        <Button 
          variant="secondary" 
          onClick={() => window.location.href = '#demo'}
        >
          View Demo
        </Button>
      </div>
    </div>
  );
}
