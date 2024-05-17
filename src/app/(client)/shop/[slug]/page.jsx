import Newsletter from "@/components/shared/Newsletter";
import ProductDetails from "./ProductDetails";
import SimilarProducts from "./SimilarProducts";
import { client } from "@/lib/sanity/lib/client";

export default async function page({ params }) {
  const productQuery = `*[_type=="product" &&  slug.current == "${params.slug}"][0]{
    _id,images,name,slug,description,price}`;
  const product = await client.fetch(productQuery);

  const productsQuery = `*[_type=="product"]{images,name,slug,description,price}`;
  const products = await client.fetch(productsQuery);

  return (
    <>
      <ProductDetails product={product} />
      <SimilarProducts products={products} />
      <Newsletter />
    </>
  )
}
