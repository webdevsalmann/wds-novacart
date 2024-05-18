import InstagramCard from "@/components/cards/InstagramCard";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function Instagram() {
  return (
    <section>
      <div className="section-wrapper">
        <h2 className="relative rest-line"><span>Our Instagram</span></h2>

        <div className="mt-block grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 divide-x divide-y divide-primary">
          <InstagramCard imageUrl="/images/products/braided-leather-belt-1.jpg" />
          <InstagramCard imageUrl="/images/products/brooks-sunglasses-1.jpg" />
          <InstagramCard imageUrl="/images/products/brooks-sunglasses-2.jpg" />
          <InstagramCard imageUrl="/images/products/canvas-tote-bag-1.jpg" />
          <InstagramCard imageUrl="/images/products/dock-sunglasses-1.jpg" />
          <InstagramCard imageUrl="/images/products/down-mittens-1.jpg" />
          <InstagramCard imageUrl="/images/products/khaki-tote-bag-1.jpg" />
          <InstagramCard imageUrl="/images/products/leather-gloves-1.jpg" />
          <InstagramCard imageUrl="/images/products/tartan-scarf-1.jpg" />
          <InstagramCard imageUrl="/images/products/woolblend-suit-belt-1.jpg" />
          <InstagramCard imageUrl="/images/products/wool-scarf-1.jpg" />
          <InstagramCard imageUrl="/images/products/wool-scarf-2.jpg" />
        </div>

        <div className="mt-base flex-center">
          <Link className={buttonVariants()} href="/">Follow us on Instagram</Link>
        </div>
      </div>
    </section>
  )
}
