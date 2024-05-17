import InstagramCard from "@/components/cards/InstagramCard";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function Instagram() {
  return (
    <section>
      <div className="section-wrapper">
        <h2 className="relative rest-line"><span>Our Instagram</span></h2>

        <div className="mt-block grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 divide-x divide-y divide-primary">
          <InstagramCard />
          <InstagramCard />
          <InstagramCard />
          <InstagramCard />
          <InstagramCard />
          <InstagramCard />
          <InstagramCard />
          <InstagramCard />
          <InstagramCard />
          <InstagramCard />
          <InstagramCard />
          <InstagramCard />
        </div>

        <div className="mt-base flex-center">
          <Link className={buttonVariants()} href="/">Follow us on Instagram</Link>
        </div>
      </div>
    </section>
  )
}
