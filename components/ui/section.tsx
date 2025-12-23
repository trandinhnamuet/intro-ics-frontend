"use client"

import { cn } from "@/lib/utils"
import { HTMLAttributes, forwardRef } from "react"

interface SectionProps extends HTMLAttributes<HTMLElement> {
  container?: boolean
  spacing?: "none" | "sm" | "md" | "lg" | "xl"
  background?: "default" | "muted" | "accent" | "gradient"
}

const Section = forwardRef<HTMLElement, SectionProps>(
  ({ className, container = true, spacing = "lg", background = "default", children, ...props }, ref) => {
    const spacingClasses = {
      none: "",
      sm: "py-8 sm:py-12",
      md: "py-12 sm:py-16 md:py-20",
      lg: "py-16 sm:py-20 md:py-24 lg:py-28",
      xl: "py-20 sm:py-24 md:py-28 lg:py-32 xl:py-40",
    }

    const backgroundClasses = {
      default: "bg-background",
      muted: "bg-muted/30",
      accent: "bg-accent/5",
      gradient: "bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5",
    }

    return (
      <section
        ref={ref}
        className={cn(
          "w-full",
          spacingClasses[spacing],
          backgroundClasses[background],
          className
        )}
        {...props}
      >
        {container ? (
          <div className="container-responsive">{children}</div>
        ) : (
          children
        )}
      </section>
    )
  }
)

Section.displayName = "Section"

export { Section }
