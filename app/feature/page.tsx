import { Layers, Hash, Globe, Puzzle, Flag, ThumbsUp } from "lucide-react";

export default function FeaturePage() {
  return (
    <section className="min-h-screen bg-background py-8 sm:py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <header className="text-center mb-8 sm:mb-12 md:mb-16 max-w-3xl mx-auto px-4">
          <h2 className="text-sm font-semibold text-primary mb-2 tracking-wider">
            HALA DUBAI MAIN FEATURES
          </h2>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 leading-tight">
            A new way to collect and explore{" "}
            <span className="text-[#FF4D00] block sm:inline">Dubai.</span>
          </h1>
        </header>

        {/* Bento Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {/* Boards and Pages */}
          <section className="bg-white rounded-xl p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="bento-body space-y-2 sm:space-y-4">
              <div className="p-2 sm:p-3 bg-primary/10 rounded-xl w-fit">
                <Layers className="h-4 w-4 sm:h-6 sm:w-6 text-primary" />
              </div>
              <h3 className="text-base sm:text-xl font-semibold">Boards and Pages</h3>
              <p className="text-xs sm:text-base text-gray-600">
                Use Hala Dubai to discover and explore curated locations across the city.
              </p>
            </div>
          </section>

          {/* Custom Tags */}
          <section className="bg-white rounded-xl p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="bento-body space-y-3 sm:space-y-4">
              <div className="p-2 sm:p-3 bg-primary/10 rounded-xl w-fit">
                <Hash className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold">Custom Tags</h3>
              <p className="text-sm sm:text-base text-gray-600">
                Filter and find places based on your preferences and interests.
              </p>
            </div>
          </section>

          {/* Custom Domains */}
          <section className="bg-white rounded-xl p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="bento-body space-y-3 sm:space-y-4">
              <div className="p-2 sm:p-3 bg-primary/10 rounded-xl w-fit">
                <Globe className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold">Area Guides</h3>
              <p className="text-sm sm:text-base text-gray-600">
                Detailed guides for every neighborhood and district in Dubai.
              </p>
            </div>
          </section>

          {/* Integrations */}
          <section className="bg-white rounded-xl p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="bento-body space-y-3 sm:space-y-4">
              <div className="p-2 sm:p-3 bg-primary/10 rounded-xl w-fit">
                <Puzzle className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold">Integrations</h3>
              <p className="text-sm sm:text-base text-gray-600">
                Connect with maps, reviews, and booking platforms seamlessly.
              </p>
            </div>
          </section>

          {/* Public Roadmap */}
          <section className="bg-white rounded-xl p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="bento-body space-y-3 sm:space-y-4">
              <div className="p-2 sm:p-3 bg-primary/10 rounded-xl w-fit">
                <Flag className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold">Event Calendar</h3>
              <p className="text-sm sm:text-base text-gray-600">
                Stay updated with upcoming events and activities in Dubai.
              </p>
            </div>
          </section>

          {/* Vote System */}
          <section className="bg-white rounded-xl p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="bento-body space-y-3 sm:space-y-4">
              <div className="p-2 sm:p-3 bg-primary/10 rounded-xl w-fit">
                <ThumbsUp className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold">Reviews & Ratings</h3>
              <p className="text-sm sm:text-base text-gray-600">
                Share your experiences and help others discover the best of Dubai.
              </p>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
