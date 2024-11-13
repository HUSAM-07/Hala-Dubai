export default function ExplorePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-900 to-emerald-800">
      <div className="container py-8">
        <h1 className="text-4xl font-bold text-white mb-8">Explore Dubai</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Placeholder for explore content */}
          <div className="bg-white/10 rounded-lg p-6 text-white">
            <h2 className="text-xl font-semibold mb-4">Coming Soon</h2>
            <p>We're working on bringing you the best places to explore in Dubai.</p>
          </div>
        </div>
      </div>
    </div>
  );
}