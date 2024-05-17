import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function Banner() {
    return (
        <section className="bg-[url('/images/common/banner.jpg')] bg-cover bg-opacity-10">
            <div className="section-wrapper">
                <div className="mx-auto sm:mx-0 max-w-72 text-center">
                    <h2 className="font-bold">Tired of Fast Fashion? We&apos;ve Got a Solution.</h2>
                    <p className="my-base text-white">Our pieces are made from sustainable materials, designed to last.</p>
                    <Link className={buttonVariants({ variant: "secondary" })} href="/shop">View Now</Link>
                </div>
            </div>
        </section>
    )
}
