import { Button } from "@/components/ui/button";
import { Star, Download, Users, MapPin, Trophy, Building2, Compass, Coffee } from "lucide-react";
import Link from "next/link";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Image from "next/image";

// Separate component for feature cards to improve readability
const FeatureCard = ({ 
  icon: Icon, 
  title, 
  description 
}: { 
  icon: any; 
  title: string; 
  description: string 
}) => {
  return (
    <section className="sm:col-span-1 md:col-span-4 bg-white dark:bg-violet-2 rounded-2xl p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start gap-3 sm:gap-4">
        <div className="p-2 sm:p-3 bg-primary/10 dark:bg-violet-surface rounded-xl w-fit">
          <Icon className="h-6 w-6 sm:h-8 sm:w-8 text-primary dark:text-violet-9" aria-hidden="true" />
        </div>
        <div>
          <h3 className="text-lg sm:text-xl font-bold mb-2 dark:text-violet-12">{title}</h3>
          <p className="text-sm sm:text-base text-gray-600 dark:text-violet-11 text-pretty">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};

// Separate component for the hero section
const HeroSection = () => {
  return (
    <header className="text-center max-w-4xl mx-auto mb-8 sm:mb-12 md:mb-16">
      <h1 className="text-responsive-3xl font-bold tracking-tight text-gray-900 dark:text-violet-12 mb-4 sm:mb-6 text-balance">
        Your{" "}
        <span className="inline-flex gap-2 mx-2">
          <Building2 
            className="w-12 h-12 sm:w-16 sm:h-16 text-primary dark:text-violet-9"
            strokeWidth={1.5}
            aria-hidden="true"
          />
        </span>
        personalized
        <span className="block mt-2">guide to Dubai</span>
      </h1>
      <p className="text-responsive-base text-gray-600 dark:text-violet-11 mb-6 sm:mb-8 max-w-2xl mx-auto px-4 text-pretty">
        Embark on a journey towards new experiences, discoveries, and
        unforgettable moments in Dubai.
      </p>
      <Button 
        size="lg" 
        className="h-10 sm:h-12 px-6 sm:px-8 text-base sm:text-lg bg-primary hover:bg-primary/90 dark:bg-violet-9 dark:hover:bg-violet-10"
      >
        <Building2 className="mr-2 h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
        <Link href="/student-spots">Hala Feed</Link>
      </Button>
    </header>
  );
};

// Separate component for the stats card
const StatsCard = () => {
  return (
    <section className="sm:col-span-2 md:col-span-4 bg-primary dark:bg-violet-9 rounded-2xl p-4 sm:p-6 text-white">
      <div className="space-y-3 sm:space-y-4">
        <div className="flex items-center gap-1">
          <span className="text-3xl sm:text-4xl font-bold">4.8</span>
          <Star className="h-5 w-5 sm:h-6 sm:w-6 fill-white" aria-hidden="true" />
        </div>
        <p className="text-sm sm:text-base text-white/90">Based on 470+ reviews</p>
        <div className="flex -space-x-2" aria-label="Reviewers">
          {[1, 2, 3, 4].map((i) => (
            <Avatar key={i} className="border-2 border-primary dark:border-violet-7 bg-white/20 w-8 h-8 sm:w-10 sm:h-10">
              <AvatarImage src={`/avatars/avatar-${i}.jpg`} alt={`Reviewer ${i}`} />
              <AvatarFallback className="bg-white/20 text-xs sm:text-sm">U{i}</AvatarFallback>
            </Avatar>
          ))}
        </div>
      </div>
    </section>
  );
};

// Main component
export default function Home() {
  // Feature data
  const features = [
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
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 dark:from-violet-1 dark:via-violet-2 dark:to-violet-3">
      {/* Hero Section */}
      <section className="py-8 sm:py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <HeroSection />

          {/* Bento Grid Container */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-4 md:gap-6 max-w-7xl mx-auto">
            {/* Featured Section */}
            <section className="sm:col-span-2 md:col-span-8 bg-white dark:bg-violet-2 rounded-2xl p-4 sm:p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 items-center">
                <div className="space-y-3 sm:space-y-4">
                  <div className="p-2 sm:p-3 bg-primary/10 dark:bg-violet-surface rounded-xl w-fit">
                    <Building2 className="h-6 w-6 sm:h-8 sm:w-8 text-primary dark:text-violet-9" aria-hidden="true" />
                  </div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold dark:text-violet-12">Discover Dubai's Hidden Gems</h2>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-violet-11 text-pretty">
                    From iconic landmarks to secret spots, explore the city like never before with our curated recommendations.
                  </p>
                </div>
                <div className="hidden sm:block relative h-full min-h-[200px]">
                  <Image 
                    src="/dubai-skyline.jpg" 
                    alt="Dubai Skyline" 
                    fill 
                    className="object-cover rounded-xl"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    priority
                  />
                </div>
              </div>
            </section>

            {/* Stats Card */}
            <StatsCard />

            {/* Feature Cards */}
            {features.map((feature, index) => (
              <FeatureCard 
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}