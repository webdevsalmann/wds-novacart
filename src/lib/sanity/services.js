import imageUrlBuilder from '@sanity/image-url';
import { client } from './lib/client';

const builder = imageUrlBuilder(client);

class SanityService {
    getImageUrl(source) {
        return builder.image(source);
    }

    async getAllProducts(query) {
        try {
            const productsQuery = `*[_type=="product"]${query}`;
            const products = await client.fetch(productsQuery);
            return products;
        } catch (error) {
            console.error("Error fetching products:", error);
            throw new Error("An error occurred while fetching products.");
        }
    }
}

const sanityService = new SanityService();
export default sanityService;
