import { XCircle } from "lucide-react";

export default function EmptyShopItem() {
    return (
        <div className="mx-auto grid h-40 w-full place-items-center rounded-md border-2 border-dashed bg-muted py-10 text-center dark:bg-gray-900">
            <div>
                <XCircle className="mx-auto h-10 w-10 text-foreground" />
                <h1 className="mt-2 text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                    No products found
                </h1>
            </div>
        </div>
    )
}
