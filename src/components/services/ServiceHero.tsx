interface ServiceHeroProps {
  name: string;
  tagline: string;
  description: string;
}

export function ServiceHero({ name, tagline, description }: ServiceHeroProps) {
  return (
    <section className="bg-gradient-to-br from-primary/10 via-background to-accent/10">
      <div className="container mx-auto px-4 py-20 md:py-28">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            {name}
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-6">
            {tagline}
          </p>
          <p className="text-lg text-muted-foreground max-w-3xl">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
