import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Star, Heart, Share2, PlayCircle, Calendar, Clock, Users } from "lucide-react"
import { AnimeCard } from "@/components/anime-card"

export default function AnimePage({ params }: { params: { slug: string } }) {
  // This would normally fetch data based on the slug
  const anime = {
    title: "Demon Slayer",
    japaneseTitle: "鬼滅の刃",
    image: "/placeholder.svg?height=450&width=300",
    banner: "/placeholder.svg?height=300&width=1200",
    rating: 4.8,
    episodes: 26,
    status: "Completed",
    season: "Spring 2019",
    studio: "ufotable",
    genres: ["Action", "Fantasy", "Historical", "Supernatural"],
    synopsis:
      "Tanjiro Kamado's peaceful life is shattered when his family is slaughtered by a demon. His sister Nezuko is the sole survivor, but she has been transformed into a demon herself. Tanjiro sets out to become a demon slayer to avenge his family and find a cure for Nezuko.",
    characters: [
      { name: "Tanjiro Kamado", role: "Protagonist", image: "/placeholder.svg?height=150&width=100" },
      { name: "Nezuko Kamado", role: "Deuteragonist", image: "/placeholder.svg?height=150&width=100" },
      { name: "Zenitsu Agatsuma", role: "Supporting", image: "/placeholder.svg?height=150&width=100" },
      { name: "Inosuke Hashibira", role: "Supporting", image: "/placeholder.svg?height=150&width=100" },
    ],
    related: [
      {
        title: "Demon Slayer: Mugen Train",
        image: "/placeholder.svg?height=300&width=200",
        slug: "demon-slayer-mugen-train",
      },
      {
        title: "Demon Slayer: Entertainment District Arc",
        image: "/placeholder.svg?height=300&width=200",
        slug: "demon-slayer-entertainment-district",
      },
    ],
  }

  return (
    <div className="min-h-screen">
      <div className="relative h-[300px] w-full">
        <Image
          src={anime.banner || "/placeholder.svg"}
          alt={anime.title}
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
      </div>

      <div className="container -mt-32 relative z-10">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="shrink-0">
            <Image
              src={anime.image || "/placeholder.svg"}
              alt={anime.title}
              width={300}
              height={450}
              className="rounded-lg shadow-lg"
              priority
            />
            <div className="mt-4 space-y-2">
              <Button className="w-full">
                <PlayCircle className="mr-2 h-4 w-4" />
                Watch Now
              </Button>
              <div className="flex gap-2">
                <Button variant="outline" size="icon" className="flex-1">
                  <Heart className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" className="flex-1">
                  <Share2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          <div className="flex-1 space-y-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold">{anime.title}</h1>
              <p className="text-muted-foreground">{anime.japaneseTitle}</p>
              <div className="flex items-center gap-2 mt-2">
                <div className="flex items-center">
                  <Star className="h-5 w-5 fill-yellow-500 text-yellow-500" />
                  <span className="ml-1 font-medium">{anime.rating}</span>
                </div>
                <span className="text-muted-foreground">•</span>
                <span>{anime.episodes} Episodes</span>
                <span className="text-muted-foreground">•</span>
                <span>{anime.status}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {anime.genres.map((genre) => (
                <Badge key={genre} variant="secondary">
                  {genre}
                </Badge>
              ))}
            </div>

            <div className="space-y-2">
              <h3 className="font-medium">Synopsis</h3>
              <p className="text-muted-foreground">{anime.synopsis}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="text-sm text-muted-foreground">Season</p>
                  <p className="font-medium">{anime.season}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="text-sm text-muted-foreground">Episodes</p>
                  <p className="font-medium">{anime.episodes}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="text-sm text-muted-foreground">Studio</p>
                  <p className="font-medium">{anime.studio}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Tabs defaultValue="episodes" className="mt-12">
          <TabsList className="grid w-full md:w-auto grid-cols-3 md:grid-cols-4">
            <TabsTrigger value="episodes">Episodes</TabsTrigger>
            <TabsTrigger value="characters">Characters</TabsTrigger>
            <TabsTrigger value="related">Related</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
          </TabsList>
          <TabsContent value="episodes" className="mt-6 space-y-4">
            <div className="grid gap-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 p-4 rounded-lg border hover:bg-muted/50 transition-colors"
                >
                  <div className="relative w-32 h-20 rounded overflow-hidden shrink-0">
                    <Image
                      src="/placeholder.svg?height=80&width=128"
                      alt={`Episode ${i + 1}`}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 hover:opacity-100 transition-opacity">
                      <PlayCircle className="h-8 w-8" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <h4 className="font-medium">Episode {i + 1}</h4>
                      <span className="text-sm text-muted-foreground">24m</span>
                    </div>
                    <p className="text-sm text-muted-foreground line-clamp-1">Episode title goes here</p>
                  </div>
                </div>
              ))}
            </div>
            <Button variant="outline" className="w-full">
              Load More
            </Button>
          </TabsContent>
          <TabsContent value="characters" className="mt-6">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {anime.characters.map((character, i) => (
                <div key={i} className="text-center">
                  <div className="relative w-full aspect-[2/3] rounded-lg overflow-hidden mb-2">
                    <Image
                      src={character.image || "/placeholder.svg"}
                      alt={character.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h4 className="font-medium">{character.name}</h4>
                  <p className="text-sm text-muted-foreground">{character.role}</p>
                </div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="related" className="mt-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {anime.related.map((related, i) => (
                <Link key={i} href={`/anime/${related.slug}`}>
                  <div className="group">
                    <div className="relative w-full aspect-[2/3] rounded-lg overflow-hidden mb-2">
                      <Image
                        src={related.image || "/placeholder.svg"}
                        alt={related.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <h4 className="font-medium group-hover:text-primary transition-colors">{related.title}</h4>
                  </div>
                </Link>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="reviews" className="mt-6 space-y-6">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3 space-y-4">
                <div className="text-center">
                  <div className="text-5xl font-bold">{anime.rating}</div>
                  <div className="flex justify-center mt-2">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${i < Math.floor(anime.rating) ? "fill-yellow-500 text-yellow-500" : "text-muted-foreground"}`}
                      />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">Based on 1,245 reviews</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-sm w-8">5 ★</span>
                    <Progress value={75} className="h-2" />
                    <span className="text-sm text-muted-foreground">75%</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm w-8">4 ★</span>
                    <Progress value={20} className="h-2" />
                    <span className="text-sm text-muted-foreground">20%</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm w-8">3 ★</span>
                    <Progress value={3} className="h-2" />
                    <span className="text-sm text-muted-foreground">3%</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm w-8">2 ★</span>
                    <Progress value={1} className="h-2" />
                    <span className="text-sm text-muted-foreground">1%</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm w-8">1 ★</span>
                    <Progress value={1} className="h-2" />
                    <span className="text-sm text-muted-foreground">1%</span>
                  </div>
                </div>
              </div>
              <div className="md:w-2/3 space-y-6">
                {Array.from({ length: 3 }).map((_, i) => (
                  <div key={i} className="p-4 rounded-lg border space-y-2">
                    <div className="flex justify-between">
                      <div className="font-medium">User{i + 1}</div>
                      <div className="flex">
                        {Array.from({ length: 5 }).map((_, j) => (
                          <Star
                            key={j}
                            className={`h-4 w-4 ${j < 5 - i ? "fill-yellow-500 text-yellow-500" : "text-muted-foreground"}`}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {i === 0
                        ? "Amazing animation and story. The fight scenes are breathtaking and the character development is excellent."
                        : "Really enjoyed watching this anime. The pacing is good and the characters are likable."}
                    </p>
                    <div className="text-xs text-muted-foreground">Posted on May 10, 2023</div>
                  </div>
                ))}
                <Button variant="outline" className="w-full">
                  Load More Reviews
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <section className="py-12 space-y-6">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">You May Also Like</h2>
            <p className="text-muted-foreground">If you enjoyed {anime.title}, check these out</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <AnimeCard
              title="Attack on Titan"
              image="/placeholder.svg?height=300&width=200"
              rating={4.9}
              episodes={75}
              genres={["Action", "Drama"]}
              slug="attack-on-titan"
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
              title="My Hero Academia"
              image="/placeholder.svg?height=300&width=200"
              rating={4.7}
              episodes={113}
              genres={["Superhero", "Action"]}
              slug="my-hero-academia"
            />
            <AnimeCard
              title="Fullmetal Alchemist: Brotherhood"
              image="/placeholder.svg?height=300&width=200"
              rating={4.9}
              episodes={64}
              genres={["Action", "Fantasy"]}
              slug="fullmetal-alchemist-brotherhood"
            />
          </div>
        </section>
      </div>
    </div>
  )
}
