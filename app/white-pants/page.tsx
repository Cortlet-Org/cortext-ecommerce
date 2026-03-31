"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

export default function WhitePantsPage() {
    const [size, setSize] = useState<string>("")
    const [action, setAction] = useState<string | null>(null)

    function handleAction(type: string) {
        if (!size) return
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
                        White Pants
                    </h1>

                    <p className="text-muted-foreground">
                        Sharp. Modern. Everyday wear.
                    </p>

                    <p className="text-2xl font-semibold">
                        $89
                    </p>

                    {/* Size Selector */}
                    <div className="space-y-2">
                        <label className="text-sm font-medium">
                            Select Size
                        </label>

                        <Select onValueChange={(value) => setSize(value)}>
                            <SelectTrigger className="w-40">
                                <SelectValue placeholder="Choose size" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="S">S</SelectItem>
                                <SelectItem value="M">M</SelectItem>
                                <SelectItem value="L">L</SelectItem>
                                <SelectItem value="XL">XL</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-4 pt-4">
                        <Button
                            onClick={() => handleAction("Added to Cart")}
                            disabled={!size}
                        >
                            Add to Cart
                        </Button>

                        <Button
                            variant="secondary"
                            onClick={() => handleAction("Purchased")}
                            disabled={!size}
                        >
                            Buy Now
                        </Button>
                    </div>

                    {/* Alert */}
                    {action && (
                        <Alert className="mt-6">
                            <AlertTitle>Success</AlertTitle>
                            <AlertDescription>
                                {action} — White Pants (Size: {size})
                            </AlertDescription>
                        </Alert>
                    )}

                </div>
            </div>

        </main>
    )
}
