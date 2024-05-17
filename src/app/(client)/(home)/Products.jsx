import ProductCard from "@/components/cards/ProductCard";
import { buttonVariants } from "@/components/ui/button";
import { client } from "@/lib/sanity/lib/client";
import Link from "next/link";

export default async function Products() {

  const productsQuery = `*[_type=="product"][0..5]{images,name,slug,description,price}`;
  const products = await client.fetch(productsQuery);

  return (
    <section className='sm:pb-0 md:pb-0 lg:pb-0'>
      <div className="section-wrapper">

        <h2 className="relative rest-line"><span>New Arraival</span></h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-base">
          {products.map(item => (
            <ProductCard product={item} key={item.name} />
          ))}
        </div>

        <div className="mt-base flex-center">
          <Link className={buttonVariants({ variant: "secondary" })} href="/shop">View More</Link>
        </div>
      </div>
    </section>
  )
}
