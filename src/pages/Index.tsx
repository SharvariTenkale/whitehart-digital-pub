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
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="text-center z-10 flex flex-col items-center">
          {/* Title */}
          <h1 className="text-6xl md:text-7xl font-bold tracking-widest mt-10">
            THE WHITE HART
          </h1>

          {/* Logo */}
          <img
            src={logo}
            alt="The White Hart"
            className="mx-auto h-96 w-96 mt-4 mb-1"
          />

          {/* Address */}
          <p className="text-xl md:text-2xl tracking-wide mt-0 mb-6 leading-snug">
            Survey no 29, Sriram Chowk, 1/1A, Pimpri-Chinchwad, Maharashtra
            411057
          </p>

          {/* Button */}
          <Link to="/reservations">
            <Button variant="hero" size="lg">
              Book a Table
            </Button>
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-wide">
            ABOUT
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Welcome to The White Hart Club - where the night comes alive and
            every moment tells a story. It’s not just a club, it’s a vibe - a
            perfect fusion of rhythm, flavor, and style. Sip on signature
            cocktails, move to electrifying beats, and lose yourself in an
            atmosphere that’s effortlessly chic yet wildly alive. Whether it’s a
            laid-back evening or an unforgettable night out, The White Hart Club
            is where the city comes to unwind, connect, and celebrate life in
            its finest form.
          </p>
        </div>
      </section>

      {/* What's On Section */}
      <section id="whats-on" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 tracking-wide">
            WHAT'S ON
          </h2>

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
              <h3 className="text-3xl font-bold mb-4 tracking-wide">
                HAPPY HOUR
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                50% on all cocktails
                <br />
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
              <h3 className="text-3xl font-bold mb-4 tracking-wide">
                FRIDAY NIGHT LIVE
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                Taylor Rees
                <br />
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
            {[gallery1, gallery2, gallery3, gallery4, gallery5, gallery6].map(
              (img, idx) => (
                <div
                  key={idx}
                  className="overflow-hidden rounded-lg aspect-square"
                >
                  <img
                    src={img}
                    alt={`Gallery image ${idx + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 tracking-wide">
            FIND US
          </h2>
          <p className="text-center text-xl text-muted-foreground mb-12">
            Survey no 29, Sriram Chowk, 1/1A, Pimpri-Chinchwad, Maharashtra
            411057
          </p>

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
                onClick={() =>
                  window.open(
                    "https://www.google.com/maps/dir//500+Terry+Francine+St,+San+Francisco,+CA+94158",
                    "_blank"
                  )
                }
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
