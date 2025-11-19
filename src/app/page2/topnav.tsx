import Link from "next/link"
import Image from "next/image"

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../components/ui/navigation-menu"

export default function Topnav() {
  return (
    <NavigationMenu className="fixed top-0 left-0 right-0 w-full z-[9999] bg-pink-600/95 border-b border-pink-500 h-14 relative">
        {/* Logo positioned at the far left of the viewport */}
        <div className="absolute left-6 top-1/2 -translate-y-1/2">
          <Link href="/" className="inline-flex items-center">
            <Image src="/chiikawa.ico" alt="logo" width={36} height={36} className="rounded-full" />
          </Link>
        </div>

        {/* Nav items positioned at the far right of the viewport */}
        <div className="absolute right-6 top-1/2 -translate-y-1/2">
          <NavigationMenuList className="flex items-center gap-8">
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
                <Link href="/" className="text-white hover:text-black-100">Home</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link href="/movie" className="text-white hover:text-black-100">Movie</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link href="/docs" className="text-white hover:text-black-100">Docs</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link href="/about" className="text-white hover:text-black-100">About</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link href="/faq" className="text-white hover:text-black-100">FAQ</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link href="/get-started" className="rounded-md bg-pink text-white-600 px-3 py-1">Get started</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
        </div>
    </NavigationMenu>
  );
}
