"use client"
import { Filter } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, } from "@/components/ui/accordion"
import { Checkbox } from "@/components/ui/checkbox"
import { dressCategories, dressColors, dressSizes } from "@/lib/const";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

const filters = [
    {
        id: "category",
        name: "Category",
        options: [
            { value: "bags", label: "Bags" },
            { value: "belts", label: "Belts" },
            { value: "gloves", label: "Gloves" },
            { value: "scarves", label: "Scarves" },
            { value: "wallets", label: "Wallets" },
        ],
    },
    {
        id: "size",
        name: "Size",
        options: [
            { value: "xs", label: "X-Small" },
            { value: "s", label: "Small" },
            { value: "m", label: "Medium" },
            { value: "l", label: "Large" },
            { value: "xl", label: "X-Large" },
            { value: "one-size", label: "One Size" },
        ],
    },
    {
        id: "color",
        name: "Color",
        options: [
            { value: "black", label: "Black" },
            { value: "blue", label: "Blue" },
            { value: "brown", label: "Brown" },
            { value: "green", label: "Green" },
            { value: "yellow", label: "Yellow" },
        ],
    },
]

export default function ShopFilter() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const searchValues = Array.from(searchParams.entries());

    return (
        <form id="rdx" className="md:sticky md:top-block h-fit md:pr-base md:border-r md:col-span-2">
            <div className="text-lg font-semibold flex items-center">
                <Filter className="mr-2 size-4 inline" />
                <span>Filter</span>
            </div>

            {filters.map((section, i) => (
                <Accordion key={i} type="single" collapsible>
                    <AccordionItem value={`item-${i}`}>
                        <AccordionTrigger className="text-xl">
                            <span>
                                {section.name}{" "}
                                <span className="ml-1 text-xs font-extrabold uppercase text-gray-400">
                                {searchParams.get(section.id) ? ` (${searchParams.get(section.id)})` : ""}
                                </span>
                            </span>
                        </AccordionTrigger>
                        <AccordionContent>
                            <div className="space-y-4">
                                {section.options.map((option, i) => (
                                    <div
                                        key={option.value}
                                        className="flex items-center space-x-2"
                                    >
                                        <Checkbox
                                            id={section.id + "-" + i}
                                            onClick={(event) => {
                                                const params = new URLSearchParams(searchParams)
                                                const checked = event.currentTarget.dataset.state === "checked";
                                                checked ? params.delete(section.id) : params.set(section.id, option.value)
                                                router.replace(`/shop/?${params.toString()}`)
                                            }}
                                            checked={searchValues.some(
                                                ([key, value]) => key === section.id && value === option.value
                                            )}
                                        />
                                        <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                            htmlFor={section.id + "-" + i}>
                                            {option.label}
                                        </label>
                                    </div>
                                ))}
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            ))}
        </form>
    )
}
