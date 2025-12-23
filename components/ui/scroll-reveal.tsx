"use client"

import { cn } from "@/lib/utils"
import { HTMLAttributes, forwardRef, useEffect, useRef, useState } from "react"

interface ScrollRevealProps extends HTMLAttributes<HTMLDivElement> {
  direction?: "up" | "down" | "left" | "right" | "scale"
  delay?: number
  duration?: number
}

const ScrollReveal = forwardRef<HTMLDivElement, ScrollRevealProps>(
  ({ className, direction = "up", delay = 0, duration = 600, children, ...props }, ref) => {
    const [isVisible, setIsVisible] = useState(false)
    const internalRef = useRef<HTMLDivElement>(null)
    const combinedRef = ref || internalRef

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            observer.disconnect()
          }
        },
        { threshold: 0.1 }
      )

      const currentRef = (combinedRef as React.RefObject<HTMLDivElement>).current
      if (currentRef) {
        observer.observe(currentRef)
      }

      return () => {
        if (currentRef) {
          observer.unobserve(currentRef)
        }
      }
    }, [combinedRef])

    const animationClasses = {
      up: "animate-fade-in-up",
      down: "animate-fade-in-down",
      left: "animate-fade-in-left",
      right: "animate-fade-in-right",
      scale: "animate-scale-in",
    }

    return (
      <div
        ref={combinedRef as React.RefObject<HTMLDivElement>}
        className={cn(
          "transition-all",
          !isVisible && "opacity-0",
          isVisible && animationClasses[direction],
          className
        )}
        style={{
          animationDelay: `${delay}ms`,
          animationDuration: `${duration}ms`,
        }}
        {...props}
      >
        {children}
      </div>
    )
  }
)

ScrollReveal.displayName = "ScrollReveal"

export { ScrollReveal }
