import { Card, CardContent } from "@/components/ui/card"

interface OrganiserCardProps {
  name: string
  bio: string
}

export function OrganiserCard({ name, bio }: OrganiserCardProps) {
  return (
    <Card className="bg-card border-border hover:shadow-md transition-shadow duration-300">
      <CardContent className="py-6 text-center flex flex-col items-center justify-center">
        <h3 className="text-lg font-semibold text-card-foreground mb-2">
          {name}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {bio}
        </p>
      </CardContent>
    </Card>
  )
}
