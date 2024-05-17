"use client"
import { formatCurrencyString } from "use-shopping-cart";

export default function PriceTag({ className, price }) {
    return (
        <div className={`font-semibold text-primary ${className}`}>
            {formatCurrencyString({ value: price, currency: "USD" })}
        </div>
    )
}
