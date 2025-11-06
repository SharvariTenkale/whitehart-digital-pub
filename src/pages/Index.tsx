import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";
import logo from "@/assets/logo1.png";
import happyHour from "@/assets/happy-hour.jpg";
import liveMusic from "@/assets/live-music.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // When landing page loads
    const handleHashScroll = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          // Delay ensures sections are rendered first
          setTimeout(() => {
            element.scrollIntoView({ behavior: "smooth" });
          }, 200);
        }
      }
    };

    // Run once on mount
    handleHashScroll();

    // Run again if hash changes (important for instant navigation)
    window.addEventListener("hashchange", handleHashScroll);

    return () => {
      window.removeEventListener("hashchange", handleHashScroll);
    };
  }, []);
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section
        className="relative min-h-[calc(100vh-80px)] pt-20 flex items-center justify-center"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* dark overlay */}
        <div className="absolute inset-0 bg-black/50" aria-hidden="true" />

        {/* content */}
        <div className="relative z-10 flex flex-col items-center text-center gap-3 sm:gap-5 md:gap-8 px-4">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-[0.25em] text-white drop-shadow-xl">
            THE WHITE HART
          </h1>

          <img
            src={logo}
            alt="The White Hart"
            className="h-40 w-auto sm:h-56 md:h-72 lg:h-80 drop-shadow-2xl"
          />

          <p className="text-base sm:text-lg md:text-xl tracking-wide text-gray-200 leading-snug max-w-2xl">
            Survey no 29, Sriram Chowk, 1/1A, Pimpri-Chinchwad, Maharashtra
            411057
          </p>

          <Link to="/reservations">
            <Button
              variant="hero"
              size="lg"
              className="mt-2 sm:mt-4 mb-8 px-6 py-3 text-base sm:text-lg font-semibold transition-transform hover:scale-105"
            >
              Book a Table
            </Button>
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-card">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 tracking-wide">
            ABOUT
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
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
      <section id="whats-on" className="py-16 sm:py-20 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 sm:mb-16 tracking-wide">
            WHAT'S ON
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 max-w-6xl mx-auto">
            {/* Happy Hour */}
            <article className="group text-center md:text-left">
              <div className="overflow-hidden rounded-lg mb-6">
                <img
                  src={happyHour}
                  alt="Happy Hour Cocktails"
                  className="w-full h-64 sm:h-72 md:h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 tracking-wide">
                HAPPY HOUR
              </h3>
              <p className="text-base sm:text-lg text-muted-foreground mb-6">
                50% on all cocktails
                <br />
                Monday to Thursday, 3pm-6pm
              </p>
              <Link to="/reservations">
                <Button variant="hero" className="text-sm sm:text-base">
                  Book a Table
                </Button>
              </Link>
            </article>

            {/* Friday Night Live */}
            <article className="group text-center md:text-left">
              <div className="overflow-hidden rounded-lg mb-6">
                <img
                  src={liveMusic}
                  alt="Friday Night Live Music"
                  className="w-full h-64 sm:h-72 md:h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 tracking-wide">
                FRIDAY NIGHT LIVE
              </h3>
              <p className="text-base sm:text-lg text-muted-foreground mb-6">
                Taylor Rees
                <br />
                January 1st, 2035, 8pm
              </p>
              <Link to="/reservations">
                <Button variant="hero" className="text-sm sm:text-base">
                  Book a Table
                </Button>
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-card">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 sm:mb-16 tracking-wide">
            COME DOWN & GRAB A PINT
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 max-w-6xl mx-auto">
            {[gallery1, gallery2, gallery3, gallery4, gallery5, gallery6].map(
              (img, idx) => (
                <div
                  key={idx}
                  className="overflow-hidden rounded-lg aspect-square"
                >
                  <div
                    key={idx}
                    className="overflow-hidden rounded-lg aspect-square"
                    onTouchStart={(e) => {
                      e.currentTarget.classList.add("bounce-in");
                      setTimeout(
                        () => e.currentTarget.classList.remove("bounce-in"),
                        700
                      );
                    }}
                  >
                    <img
                      src={img}
                      alt={`Gallery image ${idx + 1}`}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className="py-16 sm:py-20 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 tracking-wide">
            FIND US
          </h2>
          <p className="text-center text-base sm:text-lg md:text-xl text-muted-foreground mb-8 sm:mb-12 px-4">
            Survey no 29, Sriram Chowk, 1/1A, Pimpri-Chinchwad, Maharashtra
            411057
          </p>

          <div className="max-w-5xl mx-auto">
            <div className="rounded-lg overflow-hidden shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30252.5924992101!2d73.69780260120682!3d18.593232006884477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bb003c27683d%3A0x15c30b8c10af9cde!2sThe%20White%20Hart%20-%20Lounge%20%7C%20Bar%20%7C%20Eatery!5e0!3m2!1sen!2sin!4v1762441749591!5m2!1sen!2sin"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="The White Hart Location"
              />
            </div>
            <div className="text-center mt-6 sm:mt-8">
              <Button
                variant="hero"
                size="lg"
                onClick={() =>
                  window.open(
                    "https://www.google.com/maps/dir//Survey+no+29,+The+White+Hart+-+Lounge+%7C+Bar+%7C+Eatery,+Sriram+Chowk,+1%2F1A,+near+Laxmi+Chowk+Road,+Phase+1,+Hinjawadi+Rajiv+Gandhi+Infotech+Park,+Hinjawadi,+Marunji,+Pimpri-Chinchwad,+Maharashtra+411057/@18.593232,73.6978026,14z/data=!4m17!1m8!3m7!1s0x3bc2bb003c27683d:0x15c30b8c10af9cde!2sThe+White+Hart+-+Lounge+%7C+Bar+%7C+Eatery!8m2!3d18.6065118!4d73.7353011!15sCqABU3VydmV5IG5vIDI5LCBTcmlyYW0gQ2hvd2ssIDEvMUEsIG5lYXIgTGF4bWkgQ2hvd2sgUm9hZCwgUGhhc2UgMSwgSGluamF3YWRpIFJhaml2IEdhbmRoaSBJbmZvdGVjaCBQYXJrLCBIaW5qYXdhZGksIE1hcnVuamksIFBpbXByaS1DaGluY2h3YWQsIE1haGFyYXNodHJhIDQxMTA1N1qaASKXAXN1cnZleSBubyAyOSBzcmlyYW0gY2hvd2sgMSAxYSBuZWFyIGxheG1pIGNob3drIHJvYWQgcGhhc2UgMSBoaW5qYXdhZGkgcmFqaXYgZ2FuZGhpIGluZm90ZWNoIHBhcmsgaGluamF3YWRpIG1hcnVuamkgcGltcHJpIGNoaW5jaHdhZCBtYWhhcmFzaHRyYSA0MTEwNTeSAQpyZXN0YXVyYW504AEA!16s%2Fg%2F11lv7xl75g!4m7!1m0!1m5!1m1!1s0x3bc2bb003c27683d:0x15c30b8c10af9cde!2m2!1d73.7353011!2d18.6065118?entry=ttu&g_ep=EgoyMDI1MTEwMi4wIKXMDSoASAFQAw%3D%3D",
                    "_blank"
                  )
                }
                className="px-6 py-3 text-sm sm:text-base font-semibold transition-transform hover:scale-105"
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
