import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AnimeCard } from "@/components/anime-card"
import { HeroSection } from "@/components/hero-section"
import { FeaturedAnime } from "@/components/featured-anime"
import { GenreList } from "@/components/genre-list"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      <HeroSection />

      <section className="container py-12 space-y-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Featured Anime</h2>
            <p className="text-muted-foreground">Discover the most popular anime this season</p>
          </div>
          <Link href="/browse">
            <Button variant="outline">View All</Button>
          </Link>
        </div>

        <FeaturedAnime />
      </section>

      <section className="container py-12 space-y-6 border-t">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Browse by Genre</h2>
            <p className="text-muted-foreground">Find your next favorite anime by genre</p>
          </div>
        </div>

        <GenreList />
      </section>

      <section className="container py-12 space-y-6 border-t">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Latest Releases</h2>
            <p className="text-muted-foreground">Stay up to date with the newest episodes</p>
          </div>
          <Link href="/latest">
            <Button variant="outline">View All</Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <AnimeCard
            title="Demon Slayer"
            image="/placeholder.svg?height=300&width=200"
            rating={4.8}
            episodes={26}
            genres={["Action", "Fantasy"]}
            slug="demon-slayer"
          />
          <AnimeCard
            title="Attack on Titan"
            image="/placeholder.svg?height=300&width=200"
            rating={4.9}
            episodes={75}
            genres={["Action", "Drama"]}
            slug="attack-on-titan"
          />
          <AnimeCard
            title="My Hero Academia"
            image="/placeholder.svg?height=300&width=200"
            rating={4.7}
            episodes={113}
            genres={["Action", "Superhero"]}
            slug="my-hero-academia"
          />
          <AnimeCard
            title="Jujutsu Kaisen"
            image="/placeholder.svg?height=300&width=200"
            rating={4.8}
            episodes={24}
            genres={["Action", "Supernatural"]}
            slug="jujutsu-kaisen"
          />
        </div>
      </section>
    </div>
  )
}
