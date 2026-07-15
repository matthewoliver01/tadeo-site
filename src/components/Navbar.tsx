import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import GlassSurface from "./GlassSurface";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Capabilities", path: "/capabilities" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-6xl">
      <GlassSurface
        width="100%"
        height={64}
        borderRadius={999}
        className="shadow-lg shadow-black/20"
      >
        <div className="w-full flex items-center justify-between h-16 px-3 sm:px-4">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <img
                src="/tadeo-logo-white.webp"
                alt="Tadeo Services"
                className="h-8 w-auto"
              />
              <span className="text-xl font-bold text-white tracking-tight">
                Tadeo Services
              </span>
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="flex items-center space-x-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    isActive(link.path)
                      ? "bg-zinc-700/70 text-white"
                      : "text-zinc-200 hover:text-white hover:bg-zinc-800/60"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-full text-zinc-200 hover:text-white hover:bg-white/10 focus:outline-none transition-all duration-200"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </GlassSurface>

      {isOpen && (
        <div className="md:hidden mt-2">
          <GlassSurface
            width="100%"
            height="auto"
            borderRadius={16}
            className="shadow-lg shadow-black/20"
          >
            <div className="w-full px-2 py-2 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 ${
                    isActive(link.path)
                      ? "bg-zinc-700/70 text-white"
                      : "text-zinc-200 hover:text-white hover:bg-zinc-800/60"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </GlassSurface>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
