"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Input } from "@/components/ui/input"

export default function WhiteWatchPage() {
    const [quantity, setQuantity] = useState(1)
    const [action, setAction] = useState<string | null>(null)

    function handleAction(type: string) {
        if (quantity < 1) return
        setAction(type)
    }

    return (
        <main className="min-h-screen max-w-5xl mx-auto px-6 py-16">

            <div className="grid md:grid-cols-2 gap-12">

                {/* Product Image */}
                <div className="h-96 bg-gray-200 dark:bg-neutral-800 rounded-2xl" />

                {/* Product Info */}
                <div className="space-y-6">

                    <h1 className="text-4xl font-bold">
                        White Watch
                    </h1>

                    <p className="text-muted-foreground">
                        Modern minimalist watch with a clean white finish.
                    </p>

                    <p className="text-2xl font-semibold">
                        $199
                    </p>

                    {/* Quantity Selector */}
                    <div className="space-y-2">
                        <label className="text-sm font-medium">
                            Quantity
                        </label>

                        <Input
                            type="number"
                            min={1}
                            value={quantity}
                            onChange={(e) => setQuantity(Number(e.target.value))}
                            className="w-24"
                        />
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-4 pt-4">
                        <Button
                            onClick={() => handleAction("Added to Cart")}
                        >
                            Add to Cart
                        </Button>

                        <Button
                            variant="secondary"
                            onClick={() => handleAction("Purchased")}
                        >
                            Buy Now
                        </Button>
                    </div>

                    {/* Alert */}
                    {action && (
                        <Alert className="mt-6">
                            <AlertTitle>Success</AlertTitle>
                            <AlertDescription>
                                {action} — White Watch (Qty: {quantity})
                            </AlertDescription>
                        </Alert>
                    )}

                </div>
            </div>

        </main>
    )
}
