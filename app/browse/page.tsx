import { AnimeCard } from "@/components/anime-card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function BrowsePage() {
  return (
    <div className="container py-8 space-y-8">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">Browse Anime</h1>
        <p className="text-muted-foreground">Discover new and popular anime series</p>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <Input placeholder="Search anime..." className="md:max-w-xs" />
        <div className="flex gap-2">
          <Select defaultValue="popularity">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="popularity">Popularity</SelectItem>
              <SelectItem value="rating">Rating</SelectItem>
              <SelectItem value="newest">Newest</SelectItem>
              <SelectItem value="oldest">Oldest</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="all">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Genre" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Genres</SelectItem>
              <SelectItem value="action">Action</SelectItem>
              <SelectItem value="adventure">Adventure</SelectItem>
              <SelectItem value="comedy">Comedy</SelectItem>
              <SelectItem value="drama">Drama</SelectItem>
              <SelectItem value="fantasy">Fantasy</SelectItem>
              <SelectItem value="horror">Horror</SelectItem>
              <SelectItem value="romance">Romance</SelectItem>
              <SelectItem value="sci-fi">Sci-Fi</SelectItem>
              <SelectItem value="slice-of-life">Slice of Life</SelectItem>
              <SelectItem value="sports">Sports</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid w-full md:w-auto grid-cols-3 md:grid-cols-5">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="airing">Airing</TabsTrigger>
          <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
          <TabsTrigger value="tv">TV</TabsTrigger>
          <TabsTrigger value="movie">Movies</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="mt-6">
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
              genres={["Superhero", "Action"]}
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
            <AnimeCard
              title="One Piece"
              image="/placeholder.svg?height=300&width=200"
              rating={4.9}
              episodes={1000}
              genres={["Adventure", "Fantasy"]}
              slug="one-piece"
            />
            <AnimeCard
              title="Naruto"
              image="/placeholder.svg?height=300&width=200"
              rating={4.7}
              episodes={720}
              genres={["Action", "Adventure"]}
              slug="naruto"
            />
            <AnimeCard
              title="Fullmetal Alchemist: Brotherhood"
              image="/placeholder.svg?height=300&width=200"
              rating={4.9}
              episodes={64}
              genres={["Action", "Fantasy"]}
              slug="fullmetal-alchemist-brotherhood"
            />
            <AnimeCard
              title="Death Note"
              image="/placeholder.svg?height=300&width=200"
              rating={4.8}
              episodes={37}
              genres={["Mystery", "Thriller"]}
              slug="death-note"
            />
          </div>
          <div className="flex justify-center mt-8">
            <Button variant="outline">Load More</Button>
          </div>
        </TabsContent>
        <TabsContent value="airing" className="mt-6">
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
              title="Jujutsu Kaisen"
              image="/placeholder.svg?height=300&width=200"
              rating={4.8}
              episodes={24}
              genres={["Action", "Supernatural"]}
              slug="jujutsu-kaisen"
            />
            <AnimeCard
              title="One Piece"
              image="/placeholder.svg?height=300&width=200"
              rating={4.9}
              episodes={1000}
              genres={["Adventure", "Fantasy"]}
              slug="one-piece"
            />
            <AnimeCard
              title="My Hero Academia"
              image="/placeholder.svg?height=300&width=200"
              rating={4.7}
              episodes={113}
              genres={["Superhero", "Action"]}
              slug="my-hero-academia"
            />
          </div>
        </TabsContent>
        <TabsContent value="upcoming" className="mt-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <AnimeCard
              title="Chainsaw Man Season 2"
              image="/placeholder.svg?height=300&width=200"
              rating={0}
              episodes={0}
              genres={["Action", "Horror"]}
              slug="chainsaw-man-2"
              isUpcoming={true}
            />
            <AnimeCard
              title="Spy x Family Season 2"
              image="/placeholder.svg?height=300&width=200"
              rating={0}
              episodes={0}
              genres={["Comedy", "Action"]}
              slug="spy-family-2"
              isUpcoming={true}
            />
          </div>
        </TabsContent>
        <TabsContent value="tv" className="mt-6">
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
              genres={["Superhero", "Action"]}
              slug="my-hero-academia"
            />
          </div>
        </TabsContent>
        <TabsContent value="movie" className="mt-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <AnimeCard
              title="Demon Slayer: Mugen Train"
              image="/placeholder.svg?height=300&width=200"
              rating={4.9}
              episodes={1}
              genres={["Action", "Fantasy"]}
              slug="demon-slayer-mugen-train"
              isMovie={true}
            />
            <AnimeCard
              title="Your Name"
              image="/placeholder.svg?height=300&width=200"
              rating={4.9}
              episodes={1}
              genres={["Romance", "Fantasy"]}
              slug="your-name"
              isMovie={true}
            />
            <AnimeCard
              title="Spirited Away"
              image="/placeholder.svg?height=300&width=200"
              rating={4.9}
              episodes={1}
              genres={["Adventure", "Fantasy"]}
              slug="spirited-away"
              isMovie={true}
            />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
