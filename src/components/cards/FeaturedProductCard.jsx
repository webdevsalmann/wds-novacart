import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export default function FeaturedProductCard({ className, slug, imageUrl, name }) {
    return (
        <div className={cn("relative bg-[#f3f3f3] flex-center rounded-md hover:scale-105 transition-all overflow-hidden", className)}>
            <Link className="p-4 size-full " href={`/shop/${slug}`}>
                <div className="aspect-square">
                    <Image
                        className="size-full rounded-md object-contain object-center"
                        src={imageUrl}
                        width={200}
                        height={200}
                        alt={`${name} image`}
                    />
                </div>

                <div className="text-center text-xl text-neutral-900 font-semibold">
                    {name}
                </div>
            </Link>
        </div>
    )
}
