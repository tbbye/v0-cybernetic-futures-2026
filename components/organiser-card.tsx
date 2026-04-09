interface OrganiserCardProps {
  name: string
  bio: string
}

export function OrganiserCard({ name, bio }: OrganiserCardProps) {
  return (
    <div className="text-center">
      <h3 className="text-lg font-semibold text-foreground mb-2">
        {name}
      </h3>
      <p className="text-sm text-muted-foreground leading-relaxed">
        {bio}
      </p>
    </div>
  )
}
