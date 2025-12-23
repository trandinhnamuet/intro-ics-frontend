"use client"

import { cn } from "@/lib/utils"
import { HTMLAttributes, forwardRef } from "react"

interface AnimatedHeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
  gradient?: boolean
  underline?: boolean
  centered?: boolean
  animate?: boolean
}

const AnimatedHeading = forwardRef<HTMLHeadingElement, AnimatedHeadingProps>(
  ({ 
    className, 
    as: Component = "h2", 
    gradient = false, 
    underline = false,
    centered = true,
    animate = true,
    children, 
    ...props 
  }, ref) => {
    return (
      <div className={cn("mb-6 sm:mb-8 md:mb-12", centered && "text-center")}>
        <Component
          ref={ref}
          className={cn(
            "font-bold tracking-tight",
            gradient && "gradient-text",
            animate && "animate-fade-in-up",
            className
          )}
          {...props}
        >
          {children}
        </Component>
        {underline && (
          <div className={cn(
            "mt-4 h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full",
            centered && "mx-auto",
            animate && "animate-scale-in delay-200"
          )} />
        )}
      </div>
    )
  }
)

AnimatedHeading.displayName = "AnimatedHeading"

export { AnimatedHeading }
