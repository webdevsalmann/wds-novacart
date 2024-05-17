import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="bg-primary">
            <div className="section-wrapper">
                <div className="relative grid sm:grid-cols-9 gap-base items-center">
                    <div className="relative sm:col-span-6">
                        <h1>Find Your Perfect Outfit – Comfort and Style for Every Occasion</h1>
                        <p className="my-base text-xl text-white">Discover our curated collections that blend fashion with function.</p>
                        <Link className={buttonVariants({ variant: "secondary" })} href="/shop">Browse Collection</Link>
                    </div>

                    <div className="relative size-full flex-center sm:col-span-3 pointer-events-none">
                        <Image
                            className="relative max-w-[15rem] object-contain object-center"
                            src="/images/common/hero.png"
                            width={160}
                            height={90}
                            alt="Image"
                            priority
                        />

                        {/* Belt */}
                        <Image
                            className="absolute size-28 top-[60%] right-[5%] rotate-45 object-contain object-center"
                            src="/images/pngs/braided-leather-belt-1.png"
                            width={100}
                            height={100}
                            alt="Image"
                            priority
                        />

                        {/* Bag */}
                        <Image
                            className="absolute size-28 top-[10%] right-[5%] rotate-12 object-contain object-center"
                            src="/images/pngs/canvas-tote-bag-1.png"
                            width={100}
                            height={100}
                            alt="Image"
                            priority
                        />

                        {/* Scarf */}
                        <Image
                            className="absolute size-28 top-[5%] left-0 -rotate-[37deg] object-contain object-center"
                            src="/images/pngs/wool-scarf-1.png"
                            width={100}
                            height={100}
                            alt="Image"
                            priority
                        />

                        {/* Goggles */}
                        <Image
                            className="absolute size-28 top-[50%] left-[10%] -rotate-12 object-contain object-center"
                            src="/images/pngs/dock-sunglasses-1.png"
                            width={100}
                            height={100}
                            alt="Image"
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
