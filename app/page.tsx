import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
export default function HomePage() {
    return (
        <main className="min-h-screen">
            {/* PRODUCTS */}
            <section className="max-w-6xl mx-auto px-6 pb-24">
                <div className="grid md:grid-cols-2 gap-10">

                    {/* Black Shirt */}
                    <Card className="rounded-2xl transition hover:shadow-xl">
                        <CardContent className="p-8">
                            <div className="h-64 bg-black rounded-xl mb-6" />

                            <div className="flex justify-between items-start mb-2">
                                <h2 className="text-2xl font-semibold">
                                    Black Shirt
                                </h2>
                                <span className="text-lg font-medium">
                  $49
                </span>
                            </div>

                            <p className="text-muted-foreground">
                                Minimal. Clean. Essential.
                            </p>
                        </CardContent>

                        <CardFooter className="px-8 pb-8">
                            <Link href="/black-shirt" className="w-full">
                                <Button className="w-full">
                                    View Product
                                </Button>
                            </Link>
                        </CardFooter>
                    </Card>

                    {/* White Pants */}
                    <Card className="rounded-2xl transition hover:shadow-xl">
                        <CardContent className="p-8">
                            <div className="h-64 bg-gray-200 dark:bg-neutral-800 rounded-xl mb-6" />

                            <div className="flex justify-between items-start mb-2">
                                <h2 className="text-2xl font-semibold">
                                    White Pants
                                </h2>
                                <span className="text-lg font-medium">
                  $89
                </span>
                            </div>

                            <p className="text-muted-foreground">
                                Sharp. Modern. Everyday wear.
                            </p>
                        </CardContent>

                        <CardFooter className="px-8 pb-8">
                            <Button className="w-full">
                                <Link href="/white-pants">
                                    View Product
                                </Link>
                            </Button>
                        </CardFooter>
                    </Card>

                </div>
            </section>

        </main>
    )
}
