import Image from "next/image"
import Link from "next/link"
import PriceTag from "@/components/ui/PriceTag";
import sanityService from "@/lib/sanity/services";

export default function ProductCard({ product }) {
    const { images, name, slug, price } = product || {};
    const imageUrl = sanityService.getImageUrl(images[0]).url()

    return (
        <Link className="relative rounded-md overflow-hidden hover:scale-105 transition-all group" href={`/shop/${slug.current}`}>
            <div className="aspect-square rounded-md overflow-hidden">
                <Image
                    className="size-full aspect-square object-cover"
                    src={imageUrl || '/images/common/error.png'}
                    width={400}
                    height={300}
                    alt={name + " Image"}
                />
            </div>

            <div className="p-2">
                <div className="text-xl group-hover:underline">{name}</div>
                <PriceTag price={price} />
            </div>
        </Link>
    )
}
