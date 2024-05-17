"use client"
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { formatCurrencyString, useShoppingCart } from "use-shopping-cart";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Summery({className}) {
    const { formattedTotalPrice, totalPrice, cartDetails, cartCount, redirectToCheckout } = useShoppingCart();
    const [isLoading, setIsLoading] = useState(false);
    const isDisabled = isLoading || cartCount == 0;

    const shippingAmount = cartCount > 0 ? 500 : 0
    const totalAmount = totalPrice + shippingAmount

    async function onCheckout() {
        try {
            setIsLoading(true)
            const response = await fetch('/api/checkout', {
                method: "POST",
                body: JSON.stringify(cartDetails)
            })
            const data = await response.json()
            const result = await redirectToCheckout(data.id)
            if (result.error) {
                console.log(result)
            }
        } catch (error) {
            console.log(error)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className={cn("sticky top-block p-4 h-fit rounded border lg:col-span-1", className)}>
            <h2>Checkout Summery</h2>
            <div className="mt-4 divide-y">
                {/* Subtotal */}
                <div className="py-4 flex-between">
                    <div className="text-muted-foreground">Subtotal</div>
                    <div>
                        {formattedTotalPrice && formattedTotalPrice}
                    </div>
                </div>
                {/* Shipping Amount */}
                <div className="py-4 flex-between">
                    <div className="text-muted-foreground">Shipping Amount</div>
                    <div>
                        {shippingAmount && formatCurrencyString({ value: shippingAmount, currency: "USD" })}
                    </div>
                </div>
                {/* Order Total */}
                <div className="py-4 flex-between">
                    <div>Order Total</div>
                    <div>
                        {totalAmount && formatCurrencyString({ value: totalAmount, currency: "USD" })}
                    </div>
                </div>
            </div>

            <Button className="w-full" disabled={isDisabled} onClick={onCheckout}>
                {isLoading && <Loader2 className="mr-2 size-4 animate-spin" />}
                {isLoading ? "Loading" : "Checkout"}
            </Button>
        </div>
    )
}
