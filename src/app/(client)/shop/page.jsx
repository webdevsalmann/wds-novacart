import { client } from "@/lib/sanity/lib/client";
import Shop from "./Shop";
import Newsletter from "@/components/shared/Newsletter";

export default async function page() {
  const productsQuery = `*[_type=="product"]{images,name,slug,description,price}`;
  const products = await client.fetch(productsQuery);
  
  return (
    <main>
      <Shop products={products} />
      <Newsletter />
    </main>
  )
}
