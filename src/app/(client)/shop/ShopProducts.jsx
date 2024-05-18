import ProductCard from "@/components/cards/ProductCard";

export default function ShopProducts({ products }) {
    return (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-base md:col-span-6">
            {products.map(item => (
                <ProductCard product={item} key={item.name + "shop"} />
            ))}
        </div>
    )
}
