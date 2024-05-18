"use client"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, } from "@/components/ui/select"
import { useRouter } from "next/navigation"

const sortOptions = [
    { id: "so1", name: "Newest", value: "/shop/?date=desc" },
    { id: "so2", name: "Price, low to high", value: "/shop/?price=asc" },
    { id: "so3", name: "Price, high to low", value: "/shop/?price=desc" },
]

export default function ProductSorting({products}) {
    const router = useRouter()

    return (
        <div className="mt-block flex-between pb-sm border-b">
            <div className="text-2xl font-semibold">{products.length} Items</div>

            <Select onValueChange={value => router.replace(value)}>
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Sort By" />
                </SelectTrigger>
                <SelectContent>
                    {sortOptions.map(item => (
                        <SelectItem value={item.value} key={item.id}>
                            {item.name}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </div>
    )
}
