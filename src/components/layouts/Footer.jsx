"use client"
import Link from "next/link";
import { Ilogo } from "../svgs/svgs";
import { usePathname } from "next/navigation";

export default function Footer() {
  const path = usePathname();
  if (path.includes('/studio')) return null
  return (
    <footer className="section-wrapper border-t">

      <div className="mb-8 md:mb-12 lg:mb-16 sm:container">
        <div className="grid gap-8 md:grid-cols-2">
          {/* Logo */}
          <div className="">
            <Link className="w-fit flex-center" href="/">
              <Ilogo className="h-14 w-fit text-primary" />
            </Link>
            <p className="leading-6 max-w-[20rem]">Discover sustainable style and connect with us for exclusive offers and updates.</p>
          </div>

          {/* Quick Links */}
          <div className="self-start">
            <div className="">
              <div className="font-semibold">Quick Links</div>
              <ul className="mt-2">
                <li><Link className="text-muted-foreground hover:text-primary hover:underline" href="/">Home</Link></li>
                <li><Link className="text-muted-foreground hover:text-primary hover:underline" href="/shop">shop</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>



      {/* Banner */}
      <p className="text-muted-foreground text-sm text-center">
        &copy;Copyright-2024 / <Link className="hover:underline" href="/credits">Credits</Link> / Developed by <Link className="hover:underline" href="https://webdevsalmann.com/" target="_blank"> webdevsalmann</Link> 💖
      </p>
    </footer>
  )
}
