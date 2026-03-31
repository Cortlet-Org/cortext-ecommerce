"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

export function ThemeSwitcher() {
    const { theme, setTheme, resolvedTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    // Prevent hydration mismatch
    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    const currentTheme = theme === "system" ? resolvedTheme : theme

    return (
        <div className="flex gap-2">
            <Button
                variant={currentTheme === "light" ? "default" : "outline"}
                size="sm"
                onClick={() => setTheme("light")}
            >
                Light
            </Button>

            <Button
                variant={currentTheme === "dark" ? "default" : "outline"}
                size="sm"
                onClick={() => setTheme("dark")}
            >
                Dark
            </Button>

            <Button
                variant={theme === "system" ? "default" : "outline"}
                size="sm"
                onClick={() => setTheme("system")}
            >
                System
            </Button>
        </div>
    )
}
