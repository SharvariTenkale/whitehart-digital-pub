import { Link } from "react-router-dom";
import { Facebook, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { toast } from "sonner";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && subscribed) {
      toast.success("Thank you for subscribing!");
      setEmail("");
      setSubscribed(false);
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer id="contact" className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Contact Column */}
          <div>
            <h3 className="text-xl font-bold mb-6 tracking-wider">CONTACT</h3>
            <div className="space-y-3 text-muted-foreground">
              <p>123-456-7890</p>
              <a href="mailto:info@mysite.com" className="hover:text-primary transition-colors block">
                info@mysite.com
              </a>
              <div className="flex gap-4 mt-6">
                <a href="#" className="hover:text-primary transition-colors">
                  <Facebook size={20} />
                </a>
                <a href="#" className="hover:text-primary transition-colors">
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Newsletter Column */}
          <div>
            <h3 className="text-xl font-bold mb-6 tracking-wider">JOIN THE CLUB</h3>
            <p className="text-muted-foreground mb-4">Get Updates on Special Events</p>
            <form onSubmit={handleSubscribe} className="space-y-4">
              <Input
                type="email"
                placeholder="Email*"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-input border-border"
              />
              <div className="flex items-start gap-2">
                <Checkbox
                  id="newsletter"
                  checked={subscribed}
                  onCheckedChange={(checked) => setSubscribed(checked as boolean)}
                />
                <label htmlFor="newsletter" className="text-sm text-muted-foreground leading-tight">
                  Yes, subscribe me to your newsletter.
                </label>
              </div>
              <Button type="submit" className="w-full">
                Subscribe
              </Button>
            </form>
          </div>

          {/* Opening Hours Column */}
          <div>
            <h3 className="text-xl font-bold mb-6 tracking-wider">OPENING HOURS</h3>
            <div className="space-y-2 text-muted-foreground">
              <p>Mon - Fri: 8am - 8pm</p>
              <p>Saturday: 9am - 7pm</p>
              <p>Sunday: 9am - 8pm</p>
            </div>
          </div>

          {/* Address Column */}
          <div>
            <h3 className="text-xl font-bold mb-6 tracking-wider">ADDRESS</h3>
            <address className="text-muted-foreground not-italic">
              500 Terry Francine St.<br />
              San Francisco, CA 94158
            </address>
          </div>
        </div>

        {/* Footer Navigation */}
        <nav className="mt-12 pt-8 border-t border-border">
          <ul className="flex flex-wrap justify-center gap-8 text-sm">
            <li>
              <button
                onClick={() => scrollToSection("whats-on")}
                className="hover:text-primary transition-colors"
              >
                What's On
              </button>
            </li>
            <li>
              <Link to="/menu" className="hover:text-primary transition-colors">
                Menu
              </Link>
            </li>
            <li>
              <Link to="/reservations" className="hover:text-primary transition-colors">
                Reserve a Table
              </Link>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("location")}
                className="hover:text-primary transition-colors"
              >
                Location
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("contact")}
                className="hover:text-primary transition-colors"
              >
                Contact
              </button>
            </li>
          </ul>
        </nav>
      </div>

      {/* Copyright Bar */}
      <div className="bg-background border-t border-border py-4">
        <div className="container mx-auto px-4">
          <p className="text-center text-sm text-muted-foreground">
            © 2035 by Bar 121. Powered and secured by <a href="https://wix.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Wix</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
