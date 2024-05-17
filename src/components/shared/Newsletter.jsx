import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Newsletter() {
  return (
    <section className="sm:pt-0 md:pt-0 lg:pt-0">
      <div className="section-wrapper">
        <div className="p-8 bg-primary/20 rounded-md grid sm:grid-cols-7 gap-block">
          <h2 className="font-semibold sm:col-span-4">
            Join Our Community <br /> Sign Up for Exclusive Offers
          </h2>
          <div className="flex flex-col gap-4 sm:col-span-3">
            <Input className="w-full" type="email" placeholder="abc@mail.com" />
            <Button className="w-full">Subscribe</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
