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

      {/* Location Section */}
      <section id="location" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 tracking-wide">FIND US</h2>
          <p className="text-center text-xl text-muted-foreground mb-12">500 Terry Francine St. San Francisco, CA 94158</p>
          
          <div className="max-w-5xl mx-auto">
            <div className="rounded-lg overflow-hidden shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434509374!2d-122.41941508468197!3d37.77492997975903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c6c8f4459%3A0xb10ed6d9b5050fa5!2sSan%20Francisco%2C%20CA%2094158!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="The White Hart Location"
              />
            </div>
            <div className="text-center mt-8">
              <Button 
                variant="hero" 
                size="lg"
                onClick={() => window.open('https://www.google.com/maps/dir//500+Terry+Francine+St,+San+Francisco,+CA+94158', '_blank')}
              >
                Get Directions
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
