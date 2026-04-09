import { Card, CardContent } from "@/components/ui/card"
import { User } from "lucide-react"

interface OrganiserCardProps {
  name: string
  bio: string
}

export function OrganiserCard({ name, bio }: OrganiserCardProps) {
  return (
    <Card className="bg-card border-border hover:shadow-md transition-shadow duration-300">
      <CardContent className="pt-6">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-16 h-16 rounded-full bg-muted flex items-center justify-center">
            <User className="w-8 h-8 text-muted-foreground" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-semibold text-card-foreground mb-2">
              {name}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {bio}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
