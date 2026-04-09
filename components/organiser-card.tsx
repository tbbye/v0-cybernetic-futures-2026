import { Card, CardContent } from "@/components/ui/card"

interface OrganiserCardProps {
  name: string
  bio: string
}

export function OrganiserCard({ name, bio }: OrganiserCardProps) {
  return (
    <Card className="bg-card border-border hover:shadow-md transition-shadow duration-300 h-full">
      <CardContent className="pt-6 text-center h-full flex flex-col justify-center">
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
