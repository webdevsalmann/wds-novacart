import ProductCard from "@/components/cards/ProductCard";
import EmptyShopItem from "@/components/layouts/EmptyShopItem";
import { cn } from "@/lib/utils";

export default function ShopProducts({ products }) {
    return (
        <div className={cn("grid sm:grid-cols-2 gap-base md:col-span-6", products.length > 0 ? "lg:grid-cols-3" : "lg:grid-cols-1")}>
            {products.length > 0 ? products.map(item => (
                <ProductCard product={item} key={item.name + "shop"} />
            )) : <EmptyShopItem />}
        </div>
    )
}
