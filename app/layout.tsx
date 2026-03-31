import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"
import { ThemeProvider } from "@/components/theme-provider"
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { ThemeSwitcher } from "@/components/ThemeSwitcher"
import Link from "next/link"

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-sans",
})

export const metadata: Metadata = {
    title: "Cortext",
    description:
        "Build. Deploy. Edit. No assumptions. Cortext is a modern ecommerce foundation.",
    metadataBase: new URL("https://www.cortlet.com"),

    openGraph: {
        title: "Cortext",
        description: "Build. Deploy. Edit. No assumptions.",
        url: "https://www.cortlet.com",
        siteName: "Cortext",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "Cortext",
            },
        ],
        locale: "en_US",
        type: "website",
    },

    twitter: {
        card: "summary_large_image",
        title: "Cortext",
        description: "Build. Deploy. Edit. No assumptions.",
        images: ["/og-image.png"],
    },
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html
            lang="en"
            suppressHydrationWarning
            className={cn(
                "h-full antialiased",
                inter.variable,
                "font-sans"
            )}
        >
        <body className="min-h-full flex flex-col bg-white text-black dark:bg-black dark:text-white transition-colors">
        <ThemeProvider>

            {/* NAVBAR */}
            <nav className="border-b px-8 py-5 flex justify-between items-center">
                <div className="text-xl font-semibold tracking-tight">
                    <Link href="/">
                        Cortext
                    </Link>
                </div>

                <div className="flex items-center gap-6">
                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuLink asChild>
                                    <Link
                                        href="/products"
                                        className="text-sm font-medium hover:text-muted-foreground transition"
                                    >
                                        Products
                                    </Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>

                    <ThemeSwitcher />
                </div>
            </nav>

            {/* HERO */}
            <section className="py-20 text-center">
                <h1 className="text-6xl font-bold tracking-tight mb-4">
                    Cortext
                </h1>
                <p className="text-muted-foreground text-lg">
                    Products
                </p>
            </section>

            {children}

        </ThemeProvider>
        </body>
        </html>
    )
}
