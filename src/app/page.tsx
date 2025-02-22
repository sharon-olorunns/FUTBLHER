// src/app/page.tsx
export default function Home() {
    return (
      <div className="px-4 py-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-purple-700 mb-6">
            Welcome to Women's Super League
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4">Latest Matches</h2>
              <p className="text-gray-600">
                Stay up to date with the latest WSL matches and results.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4">League News</h2>
              <p className="text-gray-600">
                Get the latest updates from the Women's Super League.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }