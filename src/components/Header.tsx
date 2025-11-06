import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo.png";

const Header = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== "/") {
      window.location.href = `/#${sectionId}`;
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false); // close menu after click on mobile
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            to="/"
            onClick={(e) => {
              e.preventDefault(); // prevent default reload
              if (location.pathname === "/") {
                // ✅ If already on the landing page → smooth scroll to top
                window.scrollTo({ top: 0, behavior: "smooth" });
              } else {
                // ✅ If on another route (like /menu, /reservations) → navigate home
                window.location.href = "/";
              }
            }}
            className="flex items-center gap-3 cursor-pointer"
          >
            <img
              src={logo}
              alt="The White Hart Logo"
              className="h-10 w-10 sm:h-12 sm:w-12"
            />
            <span className="text-base sm:text-lg font-semibold tracking-wider">
              THE WHITE HART
            </span>
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-8">
            <li>
              <button
                onClick={() => scrollToSection("whats-on")}
                className="text-sm font-medium tracking-wide hover:text-primary transition-colors"
              >
                What's On
              </button>
            </li>
            <li>
              <Link
                to="/menu"
                className="text-sm font-medium tracking-wide hover:text-primary transition-colors"
              >
                Menu
              </Link>
            </li>
            <li>
              <Link
                to="/reservations"
                className="text-sm font-medium tracking-wide hover:text-primary transition-colors"
              >
                Book a Table
              </Link>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("location")}
                className="text-sm font-medium tracking-wide hover:text-primary transition-colors"
              >
                Location
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-sm font-medium tracking-wide hover:text-primary transition-colors"
              >
                Contact
              </button>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white hover:text-gray-300 transition-colors duration-200 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            {menuOpen ? (
              <span className="text-5xl">×</span> // Cross = Larger
            ) : (
              <span className="text-3xl">☰</span> // Hamburger = Smaller
            )}
          </button>
        </nav>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="md:hidden bg-background/95 border-t border-border shadow-md">
            <ul className="flex flex-col items-center py-4 space-y-4">
              <li>
                <button
                  onClick={() => scrollToSection("whats-on")}
                  className="text-base font-medium tracking-wide hover:text-primary transition-colors"
                >
                  What's On
                </button>
              </li>
              <li>
                <Link
                  to="/menu"
                  className="text-base font-medium tracking-wide hover:text-primary transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  Menu
                </Link>
              </li>
              <li>
                <Link
                  to="/reservations"
                  className="text-base font-medium tracking-wide hover:text-primary transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  Book a Table
                </Link>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("location")}
                  className="text-base font-medium tracking-wide hover:text-primary transition-colors"
                >
                  Location
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-base font-medium tracking-wide hover:text-primary transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
