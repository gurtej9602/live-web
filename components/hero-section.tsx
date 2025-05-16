import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { PlayCircle } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative">
      <div className="relative h-[500px] md:h-[600px] w-full overflow-hidden">
        <Image
          src="/placeholder.svg?height=600&width=1600"
          alt="Hero Banner"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-background/10" />
      </div>

      <div className="container absolute inset-0 flex flex-col justify-center">
        <div className="max-w-2xl space-y-4">
          <Badge className="mb-2">Trending Now</Badge>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Demon Slayer: Swordsmith Village Arc
          </h1>
          <p className="text-lg text-muted-foreground md:text-xl">
            Tanjiro and his friends embark on a new mission within the Swordsmith Village, where they face the powerful
            threats of the Upper Moons.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="gap-2">
              <PlayCircle className="h-5 w-5" />
              Watch Now
            </Button>
            <Link href="/anime/demon-slayer-swordsmith-village">
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
