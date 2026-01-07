import Button from '@components/ui/Button';

export default function Hero() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[500px] p-12 bg-gradient-to-b from-green-50 to-white">
      <h1 className="text-6xl font-light mb-6 text-center text-gray-900">
        Simple. Fast. Beautiful.
      </h1>
      <p className="text-3xl text-center mb-4 text-gray-700 font-light">
        Modern web development made life easy
      </p>
      <p className="text-lg text-center mb-10 max-w-2xl text-gray-600">
        Experience the power of minimalist design with maximum performance.
      </p>
      <div className="flex gap-4">
        <Button
          onClick={() => window.location.href = '#start'}
          className="px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium"
        >
          Start Building
        </Button>
        <Button
          onClick={() => window.location.href = '#learn'}
          className="px-8 py-3 bg-white text-green-600 border-2 border-green-600 rounded-lg hover:bg-green-50 transition-colors font-medium"
        >
          Learn More
        </Button>
      </div>
    </div>
  );
}
