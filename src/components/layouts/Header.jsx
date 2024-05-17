"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button, buttonVariants } from "@/components/ui/button"
import ThemeToggleBtn from "@/components/ui/ThemeToggleBtn"
import { Ilogo } from '../svgs/svgs';
import { AlignRight, X, ShoppingBag } from 'lucide-react';
import { useState } from 'react';
import { useShoppingCart } from 'use-shopping-cart';

const navigationLinks = [
  {
    title: "Home",
    path: "/",
    varient: "ghost"
  },
  {
    title: "Shop",
    path: "/shop",
    varient: "ghost"
  },
]


export default function Header() {
  const path = usePathname();
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const { cartCount } = useShoppingCart();

  if (path.includes('/studio')) return null
  return (
    <header className="container px-0 w-full bg-background border-b">
      <nav className="px-[5%] py-2 w-full grid grid-cols-2 justify-center items-center">

        {/* Logo */}
        <Link className="w-fit flex-center gap-2" href="/">
          <Ilogo className="size-12 text-primary" />
          <div className="text-2xl font-bold">NovaCart</div>
        </Link>

        {/* Hamburger menu */}
        <div className="size-8 flex-center md:hidden justify-self-end"
          onClick={() => setIsNavbarOpen(!isNavbarOpen)}>
          {isNavbarOpen ? <X /> : <AlignRight />}
        </div>

        {/* Links */}
        <ul className={`relative py-4 md:py-0 w-full md:w-fit flex-center flex-col gap-4   md:justify-self-end md:flex-row md:flex ${isNavbarOpen ? 'flex' : 'hidden'} col-span-2 md:col-span-1`}>
          {/* Other Navigation Links */}
          {navigationLinks.map((item) => (
            <li key={item.title}>
              <Link className={`${buttonVariants({ variant: item.varient, size: 'sm' })} ${path === item.path && "bg-accent"} capitalize text-muted-foreground`} href={item.path}>
                {item.title}
              </Link>
            </li>
          ))}

          {/* Cart Button */}
          <li>
            <Link className={`${buttonVariants({ variant: "outline", size: 'sm' })} ${path === "/cart" && "bg-muted "} capitalize text-muted-foreground`} href="/cart">
              <ShoppingBag className="mr-2 size-4 inline" /> {cartCount}
            </Link>
          </li>

          <li>
            <ThemeToggleBtn />
          </li>
        </ul>
      </nav>
    </header>
  )
}
