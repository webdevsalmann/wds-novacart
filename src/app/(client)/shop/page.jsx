import { client } from "@/lib/sanity/lib/client";
import Shop from "./Shop";
import Newsletter from "@/components/shared/Newsletter";

export default async function page({ searchParams: { date, price, category, size, color } }) {
  // Sorting order
  const priceOrder = price ? `| order(price ${price}) ` : "";
  const dateOrder = date ? `| order(_createdAt ${date}) ` : "";
  const order = `${priceOrder}${dateOrder}`

  // Filter
  const productFilter = `_type=="product"`;
  const categoryFilter = category ? `&& "${category}" in categories` : "";
  const colorFilter = color ? `&& "${color}" in colors` : "";
  const sizeFilter = size ? `&& "${size}" in sizes` : "";

  // Query
  const productsQuery = `*[${productFilter} ${categoryFilter} ${colorFilter} ${sizeFilter}]  ${order}
  {images,name,slug,description,price}`;
  const products = await client.fetch(productsQuery);

  return (
    <main>
      <Shop products={products} />
      <Newsletter />
    </main>
  )
}
