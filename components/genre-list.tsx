import Link from "next/link"

export function GenreList() {
  const genres = [
    { name: "Action", count: 1245, slug: "action" },
    { name: "Adventure", count: 987, slug: "adventure" },
    { name: "Comedy", count: 1532, slug: "comedy" },
    { name: "Drama", count: 876, slug: "drama" },
    { name: "Fantasy", count: 1098, slug: "fantasy" },
    { name: "Horror", count: 432, slug: "horror" },
    { name: "Mystery", count: 567, slug: "mystery" },
    { name: "Romance", count: 789, slug: "romance" },
    { name: "Sci-Fi", count: 654, slug: "sci-fi" },
    { name: "Slice of Life", count: 543, slug: "slice-of-life" },
    { name: "Sports", count: 321, slug: "sports" },
    { name: "Supernatural", count: 765, slug: "supernatural" },
  ]

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
      {genres.map((genre) => (
        <Link
          key={genre.slug}
          href={`/genres/${genre.slug}`}
          className="group flex flex-col items-center justify-center p-4 rounded-lg border bg-card text-center transition-colors hover:bg-muted"
        >
          <h3 className="font-medium group-hover:text-primary transition-colors">{genre.name}</h3>
          <p className="text-sm text-muted-foreground">{genre.count} titles</p>
        </Link>
      ))}
    </div>
  )
}
