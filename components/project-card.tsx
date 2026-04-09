"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

interface ProjectCardProps {
  id: string
  title: string
  description: string
  team: string
}

export function ProjectCard({ id, title, description, team }: ProjectCardProps) {
  return (
    <Card className="group bg-card border-border transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <CardContent className="pt-6">
        <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">
          {id}
        </div>
        <h3 className="text-lg font-semibold text-card-foreground mb-3 leading-tight">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          {description}
        </p>
        <p className="text-xs text-muted-foreground">
          <span className="font-medium">Team:</span> {team}
        </p>
      </CardContent>
      <CardFooter className="pt-0">
        <Button 
          variant="outline" 
          size="sm"
          className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
        >
          Read more
        </Button>
      </CardFooter>
    </Card>
  )
}
