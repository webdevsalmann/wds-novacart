import Image from "next/image";

export default function InstagramCard() {
    return (
        <div className="relative aspect-[4/5] overflow-hidden">
            <Image
                className="size-full aspect-[4/5] object-cover object-center"
                // src={imageUrl}
                src="/images/common/error.png"
                width={200}
                height={200}
                alt={`Instagram Post Image`}
            />
        </div>
    )
}
