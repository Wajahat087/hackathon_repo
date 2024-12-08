import Image from 'next/image';

export default function ProductCard() {
  return (
    <div>
      <section className="py-12">
        <h3 className="text-xl font-bold text-center mb-4 text-gray-600">Practice Advice</h3>
        <h2 className="text-3xl font-bold text-center mb-4">Feature Posts</h2>
        <p className="text-center mb-12 text-lg text-gray-600">
          Problems trying to resolve the conflict between<br />
          the two major realms of Classical physics: Newtonian mechanics
        </p>
      </section>

      {/* Flex container for horizontal layout */}
      <div className="flex justify-center gap-8 overflow-x-auto">
        {/* Card 1 */}
        <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white">
          <div className="relative">
            <Image
              src="/01-(2).png" // Replace with the path to your image
              alt="alt+text"
              width={500}
              height={500}
              className="w-full h-64 object-cover"
            />
            <span className="absolute top-2 left-2 px-3 py-1 text-white bg-red-500 text-xs font-semibold rounded-full">
              NEW
            </span>
          </div>
          <div className="p-4">
            <h2 className="text-xl font-bold text-gray-900">Loudest à la Madison #1 (L'integral)</h2>
            <p className="text-sm text-gray-600 mt-2">
              We focus on ergonomics and meeting you where you work. It’s only a keystroke away.
            </p>
            <div className="flex justify-between items-center mt-4">
              <span className="text-xs text-gray-500">22 April 2021</span>
              <div className="flex items-center space-x-2">
                <span className="text-xs text-gray-500">10 comments</span>
              </div>
            </div>
            <button className="mt-4 px-4 py-2 text-white bg-blue-600 rounded-full text-sm hover:bg-blue-700 transition">
              Learn More
            </button>
          </div>
        </div>

        {/* Card 2 */}
        <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white">
          <div className="relative">
            <Image
              src="/02-(2).png" // Replace with the path to your image
              alt="alt+text"
              width={500}
              height={500}
              className="w-full h-64 object-cover"
            />
            <span className="absolute top-2 left-2 px-3 py-1 text-white bg-red-500 text-xs font-semibold rounded-full">
              NEW
            </span>
          </div>
          <div className="p-4">
            <h2 className="text-xl font-bold text-gray-900">Loudest à la Madison #1 (L'integral)</h2>
            <p className="text-sm text-gray-600 mt-2">
              We focus on ergonomics and meeting you where you work. It’s only a keystroke away.
            </p>
            <div className="flex justify-between items-center mt-4">
              <span className="text-xs text-gray-500">22 April 2021</span>
              <div className="flex items-center space-x-2">
                <span className="text-xs text-gray-500">10 comments</span>
              </div>
            </div>
            <button className="mt-4 px-4 py-2 text-white bg-blue-600 rounded-full text-sm hover:bg-blue-700 transition">
              Learn More
            </button>
          </div>
        </div>

        {/* Card 3 */}
        <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white">
          <div className="relative">
            <Image
              src="/3-(3).png" // Replace with the path to your image
              alt="alt+text"
              width={500}
              height={500}
              className="w-full h-64 object-cover"
            />
            <span className="absolute top-2 left-2 px-3 py-1 text-white bg-red-500 text-xs font-semibold rounded-full">
              NEW
            </span>
          </div>
          <div className="p-4">
            <h2 className="text-xl font-bold text-gray-900">Loudest à la Madison #1 (L'integral)</h2>
            <p className="text-sm text-gray-600 mt-2">
              We focus on ergonomics and meeting you where you work. It’s only a keystroke away.
            </p>
            <div className="flex justify-between items-center mt-4">
              <span className="text-xs text-gray-500">22 April 2021</span>
              <div className="flex items-center space-x-2">
                <span className="text-xs text-gray-500">10 comments</span>
              </div>
            </div>
            <button className="mt-4 px-4 py-2 text-white bg-blue-600 rounded-full text-sm hover:bg-blue-700 transition">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
