"use client"
import CartProductCard from "@/components/cards/CartProductCard"
import { cn } from "@/lib/utils"
import { useShoppingCart } from "use-shopping-cart"

export default function CartItems({ className }) {
    const { cartDetails } = useShoppingCart()
    const cartItems = Object.entries(cartDetails).map(([_, product]) => product)

    return (
        <div className={cn("divide-y lg:col-span-2", className)}>
            {cartItems.map(item => (
                <CartProductCard product={item} key={item._id} />
            ))}
        </div>
    )
}
