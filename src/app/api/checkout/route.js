import sanityService from "@/lib/sanity/services";
import { stripe } from "@/lib/stripe"
import { NextResponse } from "next/server"
import { validateCartItems } from "use-shopping-cart/utilities"

export async function POST(request) {
    const products = await sanityService.getAllProducts(`{'id':_id, ...}`);
    const cartDetails = await request.json()
    const lineItems = validateCartItems(products, cartDetails);
    const origin = request.headers.get("origin")

    const session = await stripe.checkout.sessions.create({
        submit_type: "pay",
        mode: "payment",
        payment_method_types: ["card"],
        line_items: lineItems,
        shipping_address_collection: {
            allowed_countries: ['US']
        },
        shipping_options: [{
            shipping_rate: "shr_1PHevwSHKp5Gz1wBwyyZzf2Z"
        }],
        billing_address_collection: "auto",
        success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${origin}/cart`
    })
    return NextResponse.json(session);
}