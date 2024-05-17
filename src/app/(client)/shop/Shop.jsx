import ProductCard from "@/components/cards/ProductCard";

export default function Shop({ products }) {

    return (
        <section className="">
            <div className="section-wrapper">

                <h1 className="text-center">Shop</h1>

                <div className="mt-block grid gap-base sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {products.map(item => (
                        <ProductCard product={item} key={item.name} />
                    ))}
                </div>
            </div>
        </section>
    )
}
