import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";
import logo from "@/assets/logo.png";
import happyHour from "@/assets/happy-hour.jpg";
import liveMusic from "@/assets/live-music.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="text-center z-10 space-y-8">
          <h1 className="text-6xl md:text-7xl font-bold tracking-widest">THE WHITE HART</h1>
          <img src={logo} alt="The White Hart" className="mx-auto h-48 w-48" />
          <p className="text-xl md:text-2xl tracking-wide">500 Terry Francine St. San Francisco, CA 94158</p>
          <Link to="/reservations">
            <Button variant="hero" size="lg">Book a Table</Button>
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-sm tracking-widest text-muted-foreground mb-4">ABOUT</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-wide">YOUR NEIGHBOURHOOD INSTITUTION</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click "Edit Text" or double click me to add your own content and make changes to the font. I'm a great place for you to tell a story and let your users know a little more about you.
          </p>
        </div>
      </section>

      {/* What's On Section */}
      <section id="whats-on" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 tracking-wide">WHAT'S ON</h2>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Happy Hour */}
            <article className="group">
              <div className="overflow-hidden rounded-lg mb-6">
                <img 
                  src={happyHour} 
                  alt="Happy Hour Cocktails" 
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className="text-3xl font-bold mb-4 tracking-wide">HAPPY HOUR</h3>
              <p className="text-lg text-muted-foreground mb-6">
                50% on all cocktails<br />
                Monday to Thursday, 3pm-6pm
              </p>
              <Link to="/reservations">
                <Button variant="hero">Book a Table</Button>
              </Link>
            </article>

            {/* Friday Night Live */}
            <article className="group">
              <div className="overflow-hidden rounded-lg mb-6">
                <img 
                  src={liveMusic} 
                  alt="Friday Night Live Music" 
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className="text-3xl font-bold mb-4 tracking-wide">FRIDAY NIGHT LIVE</h3>
              <p className="text-lg text-muted-foreground mb-6">
                Taylor Rees<br />
                January 1st, 2035, 8pm
              </p>
              <Link to="/reservations">
                <Button variant="hero">Book a Table</Button>
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 tracking-wide">
            COME DOWN & GRAB A PINT
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
            {[gallery1, gallery2, gallery3, gallery4, gallery5, gallery6].map((img, idx) => (
              <div key={idx} className="overflow-hidden rounded-lg aspect-square">
                <img 
                  src={img} 
                  alt={`Gallery image ${idx + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
