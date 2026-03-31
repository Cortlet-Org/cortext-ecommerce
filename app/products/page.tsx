import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const products = [
    {
        name: "Black Shirt",
        price: "$49",
        slug: "black-shirt",
        bg: "bg-black",
    },
    {
        name: "White Pants",
        price: "$89",
        slug: "white-pants",
        bg: "bg-gray-200 dark:bg-neutral-800",
    },
    {
        name: "Black Mug",
        price: "$19",
        slug: "black-mug",
        bg: "bg-black",
    },
    {
        name: "White Watch",
        price: "$199",
        slug: "white-watch",
        bg: "bg-gray-200 dark:bg-neutral-800",
    },
]

export default function ProductsPage() {
    return (
        <main className="max-w-6xl mx-auto px-6 py-16">

            <h1 className="text-4xl font-bold mb-10">
                Products
            </h1>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                {products.map((product) => (
                    <Card
                        key={product.name}
                        className="rounded-2xl transition hover:shadow-xl"
                    >
                        <CardContent className="p-6">
                            <div className={`h-56 rounded-xl mb-4 ${product.bg}`} />

                            <div className="flex justify-between items-start mb-2">
                                <h2 className="text-xl font-semibold">
                                    {product.name}
                                </h2>
                                <span className="font-medium">
                  {product.price}
                </span>
                            </div>
                        </CardContent>

                        <CardFooter className="px-6 pb-6">
                            <Button asChild className="w-full">
                                <Link href={`/${product.slug}`}>
                                    View Product
                                </Link>
                            </Button>
                        </CardFooter>
                    </Card>
                ))}

            </div>

        </main>
    )
}
