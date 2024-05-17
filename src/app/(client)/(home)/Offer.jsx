import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function Offer() {
  return (
    <section className="md:pt-0 lg:pt-0">
      <div className="section-wrapper">
        <div className="py-8 px-12 w-full bg-teal-50 dark:bg-teal-950 rounded-md border grid md:grid-cols-2 gap-12 divide-y md:divide-y-0 md:divide-x divide-foreground">
          <div className="flex flex-col justify-center gap-2">
            <div className="text-base">From September 12 to 15</div>
            <div className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-wide">Member Day <br />
              15% OFF</div>
          </div>

          <div className="p-4 flex-center flex-col gap-2">
            <h2 >New arrivals</h2>
            <p>Update your wardrobe with the latest designs</p>
            <Link className={`${buttonVariants({ variant: "outline" })} mt-2`} href="/shop">Visit Shop</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
