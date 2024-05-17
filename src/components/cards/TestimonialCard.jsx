import { numbersLoop } from '@/lib/const';
import { Star } from 'lucide-react';
import Image from "next/image"

export default function TestimonialCard({ name, imageUrl, location, comment }) {
    return (
        <div className="relative p-6 h-fit bg-backgroundlight border rounded-md overflow-hidden">
            <Image
                className="size-12 aspect-square object-contain object-center rounded"
                width={10}
                height={10}
                src="/images/svgs/quotation-mark.svg"
                alt="Quotation Mark"
            />

            <p className="mt-base text-base">{comment}</p>

            <div className="mt-base w-full h-fit flex gap-4">
                <Image
                    className="size-14 aspect-square object-cover object-center rounded"
                    width={50}
                    height={50}
                    src={imageUrl}
                    alt={name + " Image"}
                />
                <div className="text-left">
                    <div className="flex flex-wrap text-primary gap-[2px]">
                        {numbersLoop.slice(0, 5).map(item => (
                            <Image
                                className="size-3 aspect-square object-contain object-center rounded"
                                width={10}
                                height={10}
                                src="/images/svgs/star.svg"
                                alt="star Image"
                                key={item + "testStar"}
                            />
                        ))}
                    </div>
                    <div className="mt-[2px] font-bold">{name}</div>
                    <div className="text-muted-foreground text-sm">{location}</div>
                </div>
            </div>
        </div>
    )
}
