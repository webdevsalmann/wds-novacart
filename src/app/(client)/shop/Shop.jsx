import ProductCard from "@/components/cards/ProductCard";
import ShopFilter from "./ShopFilter";
import ShopProducts from "./ShopProducts";
import ProductSorting from "./ProductSorting";

export default function Shop({ products }) {

    return (
        <section>
            <div className="section-wrapper">

                <h1 className="text-center">Shop</h1>

                {/* Heading & Sorting */}
                <ProductSorting products={products} />

                <div className="relative pt-base grid md:grid-cols-8 gap-base">
                    {/* Filter */}
                    <ShopFilter />


                    {/* Products */}
                    <ShopProducts products={products} />
                </div>
            </div>
        </section>
    )
}
