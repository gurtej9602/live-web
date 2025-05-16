"use client"

import { useState, useRef, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AnimeCard } from "@/components/anime-card"

export function FeaturedAnime() {
  const [scrollPosition, setScrollPosition] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleScroll = (direction: "left" | "right") => {
    const container = containerRef.current
    if (!container) return

    const scrollAmount = 300
    const newPosition =
      direction === "left"
        ? Math.max(0, scrollPosition - scrollAmount)
        : Math.min(container.scrollWidth - container.clientWidth, scrollPosition + scrollAmount)

    container.scrollTo({
      left: newPosition,
      behavior: "smooth",
    })

    setScrollPosition(newPosition)
  }

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleScrollEvent = () => {
      setScrollPosition(container.scrollLeft)
    }

    container.addEventListener("scroll", handleScrollEvent)
    return () => container.removeEventListener("scroll", handleScrollEvent)
  }, [])

  const featuredAnime = [
    {
      title: "Demon Slayer",
      image: "/placeholder.svg?height=300&width=200",
      rating: 4.8,
      episodes: 26,
      genres: ["Action", "Fantasy"],
      slug: "demon-slayer",
    },
    {
      title: "Attack on Titan",
      image: "/placeholder.svg?height=300&width=200",
      rating: 4.9,
      episodes: 75,
      genres: ["Action", "Drama"],
      slug: "attack-on-titan",
    },
    {
      title: "Jujutsu Kaisen",
      image: "/placeholder.svg?height=300&width=200",
      rating: 4.8,
      episodes: 24,
      genres: ["Action", "Supernatural"],
      slug: "jujutsu-kaisen",
    },
    {
      title: "My Hero Academia",
      image: "/placeholder.svg?height=300&width=200",
      rating: 4.7,
      episodes: 113,
      genres: ["Superhero", "Action"],
      slug: "my-hero-academia",
    },
    {
      title: "One Piece",
      image: "/placeholder.svg?height=300&width=200",
      rating: 4.9,
      episodes: 1000,
      genres: ["Adventure", "Fantasy"],
      slug: "one-piece",
    },
    {
      title: "Chainsaw Man",
      image: "/placeholder.svg?height=300&width=200",
      rating: 4.8,
      episodes: 12,
      genres: ["Action", "Horror"],
      slug: "chainsaw-man",
    },
    {
      title: "Spy x Family",
      image: "/placeholder.svg?height=300&width=200",
      rating: 4.8,
      episodes: 25,
      genres: ["Comedy", "Action"],
      slug: "spy-family",
    },
  ]

  return (
    <div className="relative">
      <div
        ref={containerRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide pb-4 -mx-4 px-4"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {featuredAnime.map((anime, index) => (
          <div key={index} className="min-w-[200px] max-w-[200px]">
            <AnimeCard {...anime} />
          </div>
        ))}
      </div>

      <Button
        variant="outline"
        size="icon"
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm"
        onClick={() => handleScroll("left")}
        disabled={scrollPosition <= 0}
      >
        <ChevronLeft className="h-4 w-4" />
        <span className="sr-only">Scroll left</span>
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm"
        onClick={() => handleScroll("right")}
        disabled={
          containerRef.current
            ? scrollPosition >= containerRef.current.scrollWidth - containerRef.current.clientWidth - 10
            : false
        }
      >
        <ChevronRight className="h-4 w-4" />
        <span className="sr-only">Scroll right</span>
      </Button>
    </div>
  )
}
