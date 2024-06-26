"use client"
import { Toaster } from "@/components/ui/toaster"
import { ThemeProvider } from "./ThemeProvider"
import { CartProvider } from "use-shopping-cart"


export default function Providers({ children }) {
    return (
        <CartProvider
            currency="USD"
            shouldPersist
            cartMode="checkout-session"
            stripe={process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY}
        >
            <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
                {children}
                <Toaster />
            </ThemeProvider>
        </CartProvider>
    )
}
