import Image from "next/image";
import Link from "next/link";

export default function CategoryCard({ imageUrl, title }) {
    return (
        <Link className="relative rounded-md overflow-hidden hover:scale-105 transition-all group" href={`/shop/`}>
            <div className="rounded-md overflow-hidden">
                <Image
                    className="size-full object-cover"
                    src={imageUrl || '/images/common/error.png'}
                    width={200}
                    height={200}
                    alt={" Image"}
                />
            </div>
            <div className="mt-base text-center">
                {title}
            </div>
        </Link>
    )
}
