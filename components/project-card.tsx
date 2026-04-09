"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

interface ProjectCardProps {
  id: string
  title: string
  description: string
  team: string
}

function getFirstSentence(text: string): string {
  const match = text.match(/^[^.!?]*[.!?]/)
  return match ? match[0] : text
}

export function ProjectCard({ id, title, description, team }: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const firstSentence = getFirstSentence(description)
  const hasMoreContent = description.length > firstSentence.length

  return (
    <Card className="group bg-card border-border transition-all duration-300 hover:shadow-lg hover:-translate-y-1 overflow-hidden">
      <div className="relative w-full h-40 bg-muted">
        <Image
          src={`/placeholder.svg?height=160&width=320&text=${id}`}
          alt={`${title} project thumbnail`}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <CardContent className="pt-4">
        <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">
          {id}
        </div>
        <h3 className="text-lg font-semibold text-card-foreground mb-3 leading-tight">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          {isExpanded ? description : (
            <>
              {firstSentence}
              {hasMoreContent && <span className="text-muted-foreground/60">...</span>}
            </>
          )}
        </p>
        <p className="text-xs text-muted-foreground">
          <span className="font-medium">Team:</span> {team}
        </p>
      </CardContent>
      {hasMoreContent && (
        <CardFooter className="pt-0">
          <Button 
            variant="outline" 
            size="sm"
            className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? "Show less" : "Read more"}
          </Button>
        </CardFooter>
      )}
    </Card>
  )
}
