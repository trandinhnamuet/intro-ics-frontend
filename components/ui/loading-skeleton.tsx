"use client"

import { cn } from "@/lib/utils"
import { HTMLAttributes } from "react"

interface LoadingSkeletonProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "text" | "card" | "image" | "button" | "circle"
  lines?: number
}

export function LoadingSkeleton({ 
  className, 
  variant = "text", 
  lines = 1,
  ...props 
}: LoadingSkeletonProps) {
  const variants = {
    text: "h-4 w-full rounded",
    card: "h-64 w-full rounded-lg",
    image: "aspect-video w-full rounded-lg",
    button: "h-10 w-32 rounded-md",
    circle: "h-12 w-12 rounded-full",
  }

  if (variant === "text" && lines > 1) {
    return (
      <div className={cn("space-y-2", className)} {...props}>
        {Array.from({ length: lines }).map((_, i) => (
          <div
            key={i}
            className={cn(
              "bg-muted animate-pulse",
              variants.text,
              i === lines - 1 && "w-3/4"
            )}
          />
        ))}
      </div>
    )
  }

  return (
    <div
      className={cn(
        "bg-muted animate-pulse",
        variants[variant],
        className
      )}
      {...props}
    />
  )
}

export function CardSkeleton() {
  return (
    <div className="rounded-lg border border-border overflow-hidden">
      <LoadingSkeleton variant="image" />
      <div className="p-6 space-y-4">
        <LoadingSkeleton variant="text" className="h-6 w-3/4" />
        <LoadingSkeleton variant="text" lines={3} />
        <LoadingSkeleton variant="button" />
      </div>
    </div>
  )
}

export function ArticleListSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: 6 }).map((_, i) => (
        <CardSkeleton key={i} />
      ))}
    </div>
  )
}
