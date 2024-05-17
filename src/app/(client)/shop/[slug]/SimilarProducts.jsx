import ProductCard from "@/components/cards/ProductCard";

export default function SimilarProducts({ products }) {
    return (
        <section className="md:pt-0 lg:pt-0">
            <div className="section-wrapper">
                <h2>View Similar Products</h2>

                <div className="my-10 md:my-12 lg:my-14 grid gap-4 sm:gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {products?.slice(0, 4).map(item => (
                        <ProductCard product={item} key={item.name} />
                    ))}
                </div>
            </div>
        </section>
    )
}
