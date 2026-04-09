interface OrganiserCardProps {
  name: string
  bio: string
}

export function OrganiserCard({ name, bio }: OrganiserCardProps) {
  return (
    <div className="text-center">
      <h3 className="text-lg font-semibold text-white mb-2">
        {name}
      </h3>
      <p className="text-sm text-white/70 leading-relaxed">
        {bio}
      </p>
    </div>
  )
}
