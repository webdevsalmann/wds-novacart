"use client"
import Image from "next/image";
import { formatCurrencyString, useShoppingCart } from "use-shopping-cart";
import { X } from 'lucide-react';
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { toast } from "../ui/use-toast";
import sanityService from "@/lib/sanity/services";

export default function CartProductCard({ product }) {
    const { _id, name, price, quantity } = product;
    const { setItemQuantity, removeItem, clearCart } = useShoppingCart();

    function removeCartItem(product) {
        removeItem(product._id)
        toast({
            title: `${product.name} removed`,
            description: "The product is remove from cart",
            variant: "destructive"
        })
    }

    return (
        <div className="relative py-6 overflow-hidden">
            <div className="grid gap-2 grid-cols-5">
                {/* Product Image */}
                <div className="aspect-square col-span-2">
                    <Image
                        className="aspect-square object-cover object-center rounded-md"
                        src={sanityService.getImageUrl(product.images[0]).url()}
                        width={300}
                        height={300}
                        alt="Image"
                    />
                </div>

                {/* Product Detail */}
                <div className="pl-2 w-full flex-between self-start col-span-3">
                    <div className="flex-between gap-2 w-full">
                        <div className=" w-full">
                            <div className="">
                                <div className="text-lg md:text-xl">{name}</div>
                                <div className="mt-2 ">{formatCurrencyString({ value: price, currency: "USD" })}</div>
                            </div>

                            <div className="mt-2">
                                <Input
                                    className="w-16"
                                    type="number"
                                    min={1}
                                    max={10}
                                    value={quantity}
                                    onChange={e => setItemQuantity(_id, Number(e.target.value))}
                                />
                            </div>
                        </div>

                        <div className="self-start">
                            <Button
                                className="p-1 aspect-square"
                                variant="ghost"
                                type="button"
                                size="sm"
                                onClick={() => removeCartItem(product)}
                            >
                                <X className="size-4" />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
