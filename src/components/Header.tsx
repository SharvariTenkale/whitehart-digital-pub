import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo.png";

const Header = () => {
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== "/") {
      window.location.href = `/#${sectionId}`;
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="The White Hart Logo" className="h-12 w-12" />
            <span className="text-sm font-semibold tracking-wider">BAR 121</span>
          </Link>

          <ul className="flex items-center gap-8">
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
        </nav>
      </div>
    </header>
  );
};

export default Header;
