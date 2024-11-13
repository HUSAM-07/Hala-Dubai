import { Button } from "@/components/ui/button";
import { Star, Download, Users, MapPin, Trophy, Building2, Compass, Coffee } from "lucide-react";
import Link from "next/link";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      {/* Hero Section */}
      <section className="py-8 sm:py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <header className="text-center max-w-4xl mx-auto mb-8 sm:mb-12 md:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight text-gray-900 mb-4 sm:mb-6">
              Your{" "}
              <span className="inline-flex gap-2 mx-2">
                <Building2 
                  className="w-12 h-12 sm:w-16 sm:h-16 text-primary" 
                  strokeWidth={1.5}
                />
              </span>
              personalized
              <span className="block mt-2">guide to Dubai</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
              Embark on a journey towards new experiences, discoveries, and
              unforgettable moments in Dubai.
            </p>
            <Button size="lg" className="h-10 sm:h-12 px-6 sm:px-8 text-base sm:text-lg">
              <Download className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              Get the App
            </Button>
          </header>

          {/* Bento Grid Container */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-4 md:gap-6 max-w-7xl mx-auto">
            {/* Featured Section */}
            <section className="sm:col-span-2 md:col-span-8 bg-white rounded-2xl p-4 sm:p-6 md:p-8 shadow-sm">
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 items-center">
                <div className="space-y-3 sm:space-y-4">
                  <div className="p-2 sm:p-3 bg-primary/10 rounded-xl w-fit">
                    <Building2 className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                  </div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">Discover Dubai's Hidden Gems</h2>
                  <p className="text-sm sm:text-base text-gray-600">
                    From iconic landmarks to secret spots, explore the city like never before with our curated recommendations.
                  </p>
                </div>
                <div className="relative h-40 sm:h-48 md:h-full">
                  <Building2 
                    className="w-12 h-12 sm:w-16 sm:h-16 text-primary" 
                    strokeWidth={1.5}
                  />
                </div>
              </div>
            </section>

            {/* Stats Card */}
            <section className="sm:col-span-2 md:col-span-4 bg-primary rounded-2xl p-4 sm:p-6 text-white">
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center gap-1">
                  <span className="text-3xl sm:text-4xl font-bold">4.8</span>
                  <Star className="h-5 w-5 sm:h-6 sm:w-6 fill-white" />
                </div>
                <p className="text-sm sm:text-base text-white/90">Based on 470+ reviews</p>
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <Avatar key={i} className="border-2 border-primary bg-white/20 w-8 h-8 sm:w-10 sm:h-10">
                      <AvatarImage src={`/avatars/avatar-${i}.jpg`} alt={`Reviewer ${i}`} />
                      <AvatarFallback className="bg-white/20 text-xs sm:text-sm">U{i}</AvatarFallback>
                    </Avatar>
                  ))}
                </div>
              </div>
            </section>

            {/* Feature Cards */}
            {[
              {
                icon: Compass,
                title: "Explore Areas",
                description: "Navigate through Dubai's diverse neighborhoods and districts."
              },
              {
                icon: Coffee,
                title: "Local Favorites",
                description: "Discover authentic experiences recommended by locals."
              },
              {
                icon: Trophy,
                title: "Expert Insights",
                description: "Curated by Dubai's finest local guides"
              }
            ].map((feature, index) => (
              <section 
                key={index} 
                className="sm:col-span-1 md:col-span-4 bg-white rounded-2xl p-4 sm:p-6 shadow-sm"
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="p-2 sm:p-3 bg-primary/10 rounded-xl w-fit">
                    <feature.icon className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-sm sm:text-base text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}