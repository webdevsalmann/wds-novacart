import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function Transitional() {
    return (
        <section className="py-0 sm:py-0 md:py-0 lg:py-0">
            <div className="section-wrapper">
                <div className="p-block bg-muted/80 text-center rounded-md">
                    <h2>Hand-picked fabrics and sustainable materials ensure comfort without compromise.</h2>
                    <div className="mt-base flex-center gap-base">
                        <Link className={buttonVariants()} href="/shop">Explore Our Bestsellers</Link>
                        <Link className={buttonVariants({ variant: "outline" })} href="/shop">Explore Our Bestsellers</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
