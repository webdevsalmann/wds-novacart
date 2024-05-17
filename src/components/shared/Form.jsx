"use client"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export default function Form() {

    return (
        <form className="mt-block p-4 mx-auto w-11/12 md:w-1/2 flex flex-col gap-6 rounded-md">
            <div className="w-full grid gap-2 items-center">
                <Label htmlFor="fullname">Full Name</Label>
                <Input className="w-full" type="text" name="fullname" id="fullname" required />
            </div>

            <div className="w-full grid gap-2 items-center">
                <Label htmlFor="email">Email</Label>
                <Input className="w-full" type="email" name="email" id="email" required />
            </div>

            <div className="w-full grid gap-2 items-center">
                <Label htmlFor="phonenumber">Mobile No.</Label>
                <Input className="w-full" type="tel" name="phonenumber" id="phonenumber" required />
            </div>

            <div className="w-full grid gap-2 items-center">
                <Label htmlFor="message">Message/Inquiry:</Label>
                <Textarea className="w-full" name="message" id="message" placeholder="Type your message here." required />
            </div>

            <Button className="w-fit mx-auto">Send Message</Button>
        </form>
    )
}