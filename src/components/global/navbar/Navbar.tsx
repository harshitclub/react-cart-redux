import { Link } from "react-router-dom";
import "./styles.css";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { ShoppingBag, Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";

export default function Navbar() {
  const navItems = ["Home", "Products", "About", "Contact"];

  return (
    <header className="w-full border-b bg-white">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-2">
        {/* Logo */}
        <Link
          to="/"
          className="text-md font-semibold text-gray-800 hover:text-black"
        >
          ECOM
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList className="flex space-x-4">
              {navItems.map((item) => (
                <NavigationMenuItem key={item}>
                  <NavigationMenuLink asChild>
                    <Link
                      to={`/${item === "Home" ? "" : item.toLowerCase()}`}
                      className="text-gray-700 hover:text-black font-medium transition-colors"
                    >
                      {item}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Right side (Cart + Mobile Menu) */}
        <div className="flex items-center gap-4 relative">
          {/* Cart icon - always visible */}
          <Link to="/cart" className="relative">
            <ShoppingBag className="w-5 h-5 cursor-pointer hover:text-black text-gray-700 transition" />
            <span className="absolute -top-2 -right-2 bg-black text-white text-xs font-semibold w-4 h-4 flex items-center justify-center rounded-full">
              0
            </span>
          </Link>

          {/* Mobile Menu (Sheet Drawer) */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <button className="p-2 border rounded-md hover:bg-gray-100 transition">
                  <Menu className="h-5 w-5" />
                </button>
              </SheetTrigger>

              <SheetContent side="left" className="w-64 gap-0">
                <SheetHeader>
                  <SheetTitle>ECOM</SheetTitle>
                  <SheetDescription>
                    React.js ECOM Cart Project With Redux Toolkit.
                  </SheetDescription>
                </SheetHeader>
                <Separator />
                <div className="flex flex-col space-y-2 pl-4 pt-2">
                  {navItems.map((item) => (
                    <Link
                      key={item}
                      to={`/${item === "Home" ? "" : item.toLowerCase()}`}
                      className="text-md text-gray-800 hover:text-black font-semibold transition-colors"
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  );
}
