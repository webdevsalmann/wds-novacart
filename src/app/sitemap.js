import { baseUrl } from "@/lib/config";

export default function sitemap() {
    return [
        {
            url: baseUrl,
        },
        {
            url: `${baseUrl}/shop`,
        },
        {
            url: `${baseUrl}/cart`,
        },
        {
            url: `${baseUrl}/checkout`,
        },
        {
            url: `${baseUrl}/credits`,
        },
    ]
}