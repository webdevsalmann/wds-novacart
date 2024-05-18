"use client"
import { Button, buttonVariants } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react';
import Image from "next/image"
import Link from "next/link"
import { useShoppingCart } from "use-shopping-cart"
import { useState } from "react";
import { toast } from "@/components/ui/use-toast";
import PriceTag from "@/components/ui/PriceTag";
import sanityService from "@/lib/sanity/services";

export default function ProductDetails({ product }) {
    // Others
    const [selectedImage, setSelectedImage] = useState(0)

    // Sanity Product Details
    const { images, name, description, price } = product;

    // Shopping Cart
    const { addItem, cartDetails, incrementItem } = useShoppingCart();
    function addToCart(product) {
        const item = { ...product, id: product._id }
        const isInCart = Object.keys(cartDetails).some(key => cartDetails[key]._id == item._id);
        isInCart ? incrementItem(item._id) : addItem(item);
        toast({
            title: item.name,
            description: "Product added to cart",
            action: (
                <Link className={`${buttonVariants({ variant: "link" })}`} href="/cart">
                    <span>Open Cart</span>
                    <ArrowRight className="ml-2 size-4" />
                </Link>
            )
        });
    }

    return (
        <section>
            <div className="section-wrapper grid gap-base md:gap-block md:grid-cols-2">
                {/* Image Gallery */}
                <div>
                    {/* Main Image */}
                    <div className="aspect-square rounded-md overflow-hidden">
                        <Image
                            className="size-full aspect-square object-cover object-center"
                            src={sanityService.getImageUrl(images[selectedImage]).url() || '/images/common/error.png'}
                            width={400}
                            height={300}
                            alt={"main " + name + " Image"}
                        />
                    </div>

                    {/* All Images */}
                    <div className="mt-4 flex gap-4">
                        {images.map((item, i) => (
                            <div className={`aspect-square size-20 rounded overflow-hidden ${selectedImage == i && "outline outline-4 -outline-offset-4 outline-primary"}`} key={item._key} onClick={() => setSelectedImage(i)}>
                                <Image
                                    className="size-full aspect-square object-cover object-center"
                                    src={sanityService.getImageUrl(item).url() || '/images/common/error.png'}
                                    width={100}
                                    height={100}
                                    alt={name + " Image"}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Details */}
                <div>
                    <h1 className="">{name}</h1>
                    <p className="mt-4 ">{description}</p>
                    <PriceTag className="mt-2" price={price} />

                    <div className="mt-4 flex-center md:justify-normal gap-4">
                        <Link className={buttonVariants()} href="/cart" onClick={() => addToCart(product)}>Buy Now</Link>
                        <Button variant="outline" onClick={() => addToCart(product)}>Add To Cart</Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
