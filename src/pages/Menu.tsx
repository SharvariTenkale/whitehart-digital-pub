import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import menuBanner from "@/assets/menu-banner.jpg";
import menuSideImage from "@/assets/menu-side-image.jpg";

//cocktail images
import appletini from "@/assets/appletini.jpg";
import whiskySour from "@/assets/whisky-sour.jpg";
import whiskyChai from "@/assets/cocktails/whisky-chai.jpeg.jpg";
import tequilaSunrise from "@/assets/tequila-sunrise.jpg";
import tropicalBliss from "@/assets/cocktails/tropical-bliss.jpg";
import sangria from "@/assets/cocktails/sangria.jpg";
import southWest from "@/assets/cocktails/south-west.jpg";
import blackRussian from "@/assets/cocktails/black-russian.jpg";
import cosmopolitan from "@/assets/cocktails/cosmopolitian.jpg";
import blueLagoon from "@/assets/cocktails/blue-lagoon.jpg";
import mojito from "@/assets/cocktails/mojito.jpg";
import blueShark from "@/assets/cocktails/blue-shark.jpg";
import flavoredMargaritas from "@/assets/cocktails/flavoured-margaritas.jpg";
import longIslandIcedTea from "@/assets/cocktails/long-island-iced-tea.jpg";
import bullFrog from "@/assets/cocktails/bull-frog.jpg";
import jaegerbomb from "@/assets/cocktails/jaegerbomb.jpg";
import pinacolada from "@/assets/cocktails/Pinacolada .jpg";
import breezers from "@/assets/cocktails/breezers .jpg";

import cranberryTwister from "@/assets/cranberry-twister.jpg";
import houseFries from "@/assets/house-fries.jpg";
import garlicBread from "@/assets/garlic-bread.jpg";
import murghDumKabab from "@/assets/murgh-dum-kabab.jpg";
import tandooriPrawn from "@/assets/tandoori-prawn.jpg";
import paneerChilly from "@/assets/paneer-chilly.jpg";
import chickenChilly from "@/assets/chicken-chilly.jpg";
import margaritaPizza from "@/assets/margarita-pizza.jpg";
import sizzlingBrownie from "@/assets/sizzling-brownie.jpg";

interface MenuItem {
  name: string;
  description?: string;
  price?: string;
  image?: string;
}

interface MenuCategory {
  title: string;
  description?: string;
  items: MenuItem[];
}

const Menu = () => {
  // Scroll to top (and handle hash navigation, if any)
  useEffect(() => {
    window.scrollTo({ top: 0 }); // always reset scroll position

    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 300);
    }
  }, []);

  const menuCategories: MenuCategory[] = [
    {
      title: "WHITE HART SIGNATURES",
      description:
        "Distinctive cocktails crafted with premium spirits and fresh flavors—The White Hart's own creations for memorable moments.",
      items: [
        {
          name: "APPLETINI",
          description:
            "A vibrant blend of Smirnoff Green Apple, apple syrup, and lime juice for a crisp, refreshing finish.",
          price: "₹9.99",
          image: appletini,
        },
        {
          name: "Whisky Sour",
          description:
            "The classic concoction that balances whisky with zesty lemon and a hint of sweetness.",
          price: "₹9.99",
          image: whiskySour,
        },
        {
          name: "Tequila Sunrise",
          description:
            "Sunny layers of tequila, orange juice, and grenadine create a beautiful gradient in your glass.",
          price: "₹9.99",
          image: tequilaSunrise,
        },
      ],
    },
    //COCKTAILS
    {
      title: "COCKTAILS",
      description:
        "An irresistible lineup of handcrafted cocktails — from bold classics to tropical twists, mixed to perfection for every mood and moment.",
      items: [
        {
          name: "Appletini",
          description:
            "A refreshing fusion of Smirnoff green apple, syrup, and lime juice — crisp, tangy, and stylishly sweet.",
          price: "₹445",
          image: appletini,
        },
        {
          name: "Whisky Sour",
          description:
            "The timeless classic — whisky shaken with lime and sugar for a perfectly balanced sweet-sour hit.",
          price: "₹475",
          image: whiskySour,
        },
        {
          name: "Whisky Chai",
          description:
            "Where desi vibes meet bold whisky — smooth, spiced, and comfortingly warm.",
          price: "₹475",
          image: whiskyChai,
        },
        {
          name: "Tequila Sunrise",
          description:
            "A vibrant blend of tequila, orange juice, and grenadine — bright like a tropical dawn in your glass.",
          price: "₹475",
          image: tequilaSunrise,
        },
        {
          name: "Tropical Bliss",
          description:
            "Dark rum, pineapple, and orange juice unite for a rich, fruity island escape.",
          price: "₹445",
          image: tropicalBliss,
        },
        {
          name: "Sangria",
          description:
            "Red or white wine infused with chopped seasonal fruits — chilled, flavorful, and oh-so-smooth.",
          price: "₹445",
          image: sangria,
        },
        {
          name: "South-West",
          description:
            "A punchy mix of gin, dark rum, and brandy with citrus notes — bold and adventurous.",
          price: "₹445",
          image: southWest,
        },
        {
          name: "Black Russian",
          description:
            "A mysterious mix of vodka and Kahlua — deep, dark, and dangerously smooth.",
          price: "₹445",
          image: blackRussian,
        },
        {
          name: "Cosmopolitan",
          description:
            "Vodka, triple sec, and cranberry with a lime twist — elegant, tangy, and city-chic.",
          price: "₹445",
          image: cosmopolitan,
        },
        {
          name: "Blue Lagoon",
          description:
            "Vodka and blue curacao topped with lemonade — sparkling, tropical, and irresistibly blue.",
          price: "₹445",
          image: blueLagoon,
        },
        {
          name: "Mojito",
          description:
            "A Cuban classic — rum, mint, lime, and soda creating a cool, zesty refreshment.",
          price: "₹445",
          image: mojito,
        },
        {
          name: "Blue Shark",
          description:
            "Vodka, tequila, and blue curacao — strong, bold, and made to make waves.",
          price: "₹475",
          image: blueShark,
        },
        {
          name: "Flavored Margaritas",
          description:
            "Tequila with fruity blends of the season — colorful, tangy, and full of fiesta.",
          price: "₹495",
          image: flavoredMargaritas,
        },
        {
          name: "Long Island Iced Tea",
          description:
            "A powerhouse of spirits mixed with cola and lemon — smooth, strong, and not for the faint-hearted.",
          price: "₹595",
          image: longIslandIcedTea,
        },
        {
          name: "Bull Frog",
          description:
            "A charged-up mix of Red Bull and white spirits — energetic, electric, and made to kickstart the night.",
          price: "₹625",
          image: bullFrog,
        },
        {
          name: "Jaegerbomb",
          description:
            "The wild child — a shot of Jaeger dropped into an energy drink for instant buzz.",
          price: "₹625",
          image: jaegerbomb,
        },
        {
          name: "Pinacolada / Bloody Mary / Screwdriver / Gimlet",
          description:
            "Classic staples — from creamy coconut vibes to spicy tomato or citrusy vodka freshness.",
          price: "₹425",
          image: pinacolada,
        },
        {
          name: "Breezers",
          description:
            "Light, bubbly, and fruity — available in cranberry, blackberry, blueberry, or Jamaican passion.",
          price: "₹395",
          image: breezers,
        },
      ],
    },

    {
      title: "FINGER FOOD",
      description:
        "I'm a description. Click me and 'Edit Menu' to open the Restaurant Menu editor and change my text.",
      items: [
        {
          name: "House Fries",
          description:
            "I'm a dish description. Click 'Edit Menu' to open the Restaurant Menu editor and change my text.",
          price: "₹9.99",
          image: houseFries,
        },
        {
          name: "Nachos and Guacamole",
          description:
            "I'm a dish description. Click 'Edit Menu' to open the Restaurant Menu editor and change my text.",
          price: "₹9.99",
        },
      ],
    },
    {
      title: "VEG APPETIZERS",
      items: [
        {
          name: "GARLIC BREAD",
          image: garlicBread,
        },
      ],
    },
    {
      title: "NON-VEG APPETIZERS",
      items: [
        {
          name: "MURGH DUM KABAB",
          image: murghDumKabab,
        },
      ],
    },
    {
      title: "MARINE APPETIZERS",
      items: [
        {
          name: "TANDOORI PRAWN",
          image: tandooriPrawn,
        },
      ],
    },
    {
      title: "VEG STARTERS",
      items: [
        {
          name: "PANEER CHILLY",
          image: paneerChilly,
        },
      ],
    },
    {
      title: "NON-VEG STARTERS",
      items: [
        {
          name: "CHICKEN CHILLY",
          image: chickenChilly,
        },
      ],
    },
    {
      title: "PIZZA VEG",
      items: [
        {
          name: "MARGARITA",
          image: margaritaPizza,
        },
      ],
    },
    {
      title: "DESSERTS",
      items: [
        {
          name: "SIZZLING BROWNIE",
          image: sizzlingBrownie,
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Menu Banner */}
      <section className="relative h-[250px] sm:h-[350px] md:h-[400px] mt-20 overflow-hidden">
        <img
          src={menuBanner}
          alt="Delicious Pub Food & Drinks"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex items-center justify-center px-4 text-center">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-wide leading-tight drop-shadow-lg">
            Delicious Pub <br className="sm:hidden" /> Food & Drinks
          </h2>
        </div>
      </section>

      <main className="py-24">
        {/* Menu Title and Introduction */}
        <div className="container mx-auto px-4 mb-20">
          <h1 className="text-5xl md:text-6xl font-bold text-center mb-16 tracking-wide">
            MENU
          </h1>

          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Explore our signature cocktails, classic drinks, and refreshing
                mocktails made with premium ingredients. Perfectly paired with
                tasty bites for an unforgettable experience. Cheers!
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-2xl">
              <img
                src={menuSideImage}
                alt="Signature Cocktails and Food"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <Separator className="my-12" />

        {/* Menu Categories */}
        <div className="container mx-auto px-4 max-w-5xl">
          {menuCategories.map((category, index) => (
            <div key={index} className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 tracking-wider">
                {category.title}
              </h2>

              {category.description && (
                <p className="text-center text-muted-foreground mb-8 max-w-3xl mx-auto">
                  {category.description}
                </p>
              )}

              <div className="space-y-8">
                {category.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="border-b border-border pb-6 last:border-0"
                  >
                    <div className="flex justify-between items-start gap-6">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-2 tracking-wide">
                          {item.name}
                        </h3>
                        {item.description && (
                          <p className="text-muted-foreground mb-2">
                            {item.description}
                          </p>
                        )}
                        {item.price && (
                          <p className="text-primary font-semibold">
                            {item.price}
                          </p>
                        )}
                      </div>
                      {item.image && (
                        <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {index < menuCategories.length - 1 && (
                <Separator className="mt-12" />
              )}
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="container mx-auto px-4 text-center mt-20">
          <Link to="/reservations">
            <Button variant="hero" size="lg">
              Book a Table
            </Button>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Menu;
