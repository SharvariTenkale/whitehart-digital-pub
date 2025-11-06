import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-32 pb-24 min-h-screen">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-8 tracking-wide">MENU</h1>
          <p className="text-xl text-muted-foreground mb-12">
            Our menu is coming soon. Check back later or visit us in person to see what we have to offer!
          </p>
          <Link to="/reservations">
            <Button variant="hero" size="lg">Book a Table</Button>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Menu;
