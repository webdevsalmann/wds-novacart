import { client } from "@/lib/sanity/lib/client";
import sanityService from "@/lib/sanity/services";
import FeaturedProductCard from "@/components/cards/FeaturedProductCard";

export default async function Featured() {

    const productsQuery = `*[_type=="product"][0..4]{images,name,slug}`;
    const products = await client.fetch(productsQuery);

    const imageClass = 'w-full h-full rounded-md object-contain object-center'
    return (
        <section>
            <div className="section-wrapper">
                <h2 className="relative rest-line"> <span>Featured Products</span></h2>

                <div className="grid gap-base sm:grid-cols-2 sm:grid-rows-2 md:grid-cols-4 md:grid-rows-2">
                    {/* Featured Product 1 */}
                    <FeaturedProductCard
                        className="md:col-span-2 md:row-span-2"
                        slug={products[0].slug.current}
                        name={products[0].name}
                        imageUrl={sanityService.getImageUrl(products[0].images[0]).url()}
                    />
                    {/* Featured Product 2 */}
                    <FeaturedProductCard
                        className="md:col-span-1 md:row-span-1"
                        slug={products[1].slug.current}
                        name={products[1].name}
                        imageUrl={sanityService.getImageUrl(products[1].images[0]).url()}
                    />
                    {/* Featured Product 3 */}
                    <FeaturedProductCard
                        className="md:col-span-1 md:row-span-1"
                        slug={products[2].slug.current}
                        name={products[2].name}
                        imageUrl={sanityService.getImageUrl(products[2].images[0]).url()}
                    />
                    {/* Featured Product 4 */}
                    < FeaturedProductCard
                        className="md:col-span-1 md:row-span-1"
                        slug={products[3].slug.current}
                        name={products[3].name}
                        imageUrl={sanityService.getImageUrl(products[3].images[0]).url()}
                    />
                    {/* Featured Product 5 */}
                    < FeaturedProductCard
                        className="md:col-span-1 md:row-span-1"
                        slug={products[4].slug.current}
                        name={products[4].name}
                        imageUrl={sanityService.getImageUrl(products[4].images[0]).url()}
                    />
                </div>
            </div>
        </section >
    )
}
