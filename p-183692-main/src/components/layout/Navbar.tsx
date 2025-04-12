
import { Link } from "react-router-dom";
import { AuthButtons } from "@/components/auth/AuthButtons";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home Page", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Link Three", path: "/link-three" },
    { name: "Services", path: "/services" },
  ];

  return (
    <nav className="bg-white flex min-h-[72px] w-full flex-col items-stretch justify-center px-16 max-md:max-w-full max-md:px-5">
      <div className="flex w-full items-center gap-[40px_100px] justify-between flex-wrap max-md:max-w-full">
        <div className="self-stretch flex min-h-10 items-center justify-center w-20 my-auto">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/71b0140b33944e6398dee8f119772414/3ebf708e7602201a7e75b4b48510d2d9caaac5a5?placeholderIfAbsent=true"
            alt="Logo"
            className="aspect-[2.33] object-contain w-[84px] self-stretch my-auto"
          />
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex self-stretch min-w-60 items-center gap-8 text-base font-normal justify-center flex-wrap my-auto max-md:max-w-full">
          <div className="self-stretch flex min-w-60 items-center gap-8 text-black flex-wrap my-auto max-md:max-w-full">
            {navLinks.map((link) => (
              <Link 
                key={link.path}
                to={link.path} 
                className="hover:text-gray-600 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="self-stretch flex items-center gap-4 justify-center my-auto">
            <AuthButtons />
          </div>
        </div>
        
        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center">
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[80%] sm:w-[385px]">
              <div className="flex flex-col h-full py-6">
                <div className="flex flex-col space-y-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className="text-lg font-medium hover:text-gray-600 transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
                <div className="mt-auto flex flex-col space-y-4">
                  <AuthButtons />
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};
