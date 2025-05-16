import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Star, Clock } from "lucide-react"

interface AnimeCardProps {
  title: string
  image: string
  rating: number
  episodes: number
  genres: string[]
  slug: string
  isMovie?: boolean
  isUpcoming?: boolean
}

export function AnimeCard({
  title,
  image,
  rating,
  episodes,
  genres,
  slug,
  isMovie = false,
  isUpcoming = false,
}: AnimeCardProps) {
  return (
    <Link href={`/anime/${slug}`}>
      <div className="group overflow-hidden rounded-lg border bg-card transition-all hover:shadow-md">
        <div className="relative aspect-[2/3] overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          {isUpcoming && (
            <div className="absolute top-2 left-2">
              <Badge variant="secondary" className="bg-yellow-500/90 text-black hover:bg-yellow-500/90">
                Upcoming
              </Badge>
            </div>
          )}
          {isMovie && (
            <div className="absolute top-2 left-2">
              <Badge variant="secondary" className="bg-primary/90 hover:bg-primary/90">
                Movie
              </Badge>
            </div>
          )}
        </div>
        <div className="p-3">
          <h3 className="font-medium line-clamp-1">{title}</h3>
          <div className="mt-1 flex items-center text-sm text-muted-foreground">
            {!isUpcoming && (
              <div className="flex items-center">
                <Star className="mr-1 h-3.5 w-3.5 fill-yellow-500 text-yellow-500" />
                <span>{rating}</span>
              </div>
            )}
            {!isUpcoming && <span className="mx-2">•</span>}
            <div className="flex items-center">
              <Clock className="mr-1 h-3.5 w-3.5" />
              <span>{isMovie ? "Movie" : isUpcoming ? "TBA" : `${episodes} Eps`}</span>
            </div>
          </div>
          <div className="mt-2 flex flex-wrap gap-1">
            {genres.slice(0, 2).map((genre) => (
              <Badge key={genre} variant="outline" className="text-xs">
                {genre}
              </Badge>
            ))}
            {genres.length > 2 && (
              <Badge variant="outline" className="text-xs">
                +{genres.length - 2}
              </Badge>
            )}
          </div>
        </div>
      </div>
    </Link>
  )
}
