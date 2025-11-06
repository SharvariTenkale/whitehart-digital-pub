import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";
import menuBanner from "@/assets/menu-banner.jpg";
import menuSideImage from "@/assets/menu-side-image.jpg";
import appletini from "@/assets/appletini.jpg";
import whiskySour from "@/assets/whisky-sour.jpg";
import tequilaSunrise from "@/assets/tequila-sunrise.jpg";
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
  const menuCategories: MenuCategory[] = [
    {
      title: "WHITE HART SIGNATURES",
      description: "Distinctive cocktails crafted with premium spirits and fresh flavors—The White Hart's own creations for memorable moments.",
      items: [
        {
          name: "APPLETINI",
          description: "A vibrant blend of Smirnoff Green Apple, apple syrup, and lime juice for a crisp, refreshing finish.",
          price: "₹9.99",
          image: appletini
        },
        {
          name: "Whisky Sour",
          description: "The classic concoction that balances whisky with zesty lemon and a hint of sweetness.",
          price: "₹9.99",
          image: whiskySour
        },
        {
          name: "Tequila Sunrise",
          description: "Sunny layers of tequila, orange juice, and grenadine create a beautiful gradient in your glass.",
          price: "₹9.99",
          image: tequilaSunrise
        }
      ]
    },
    {
      title: "MOCKTAILS",
      description: "A refreshing collection of handcrafted blends made to thrill your taste buds — vibrant, colorful, and full of flavor. Perfect for those who prefer non-alcoholic beverages without compromising on taste.",
      items: [
        {
          name: "CRANBERRY TWISTER",
          description: "I'm a dish description. Click 'Edit Menu' to open the Restaurant Menu editor and change my text.",
          price: "₹9.99",
          image: cranberryTwister
        },
        {
          name: "Classic Mojito",
          description: "I'm a dish description. Click 'Edit Menu' to open the Restaurant Menu editor and change my text.",
          price: "₹9.99"
        }
      ]
    },
    {
      title: "FINGER FOOD",
      description: "I'm a description. Click me and 'Edit Menu' to open the Restaurant Menu editor and change my text.",
      items: [
        {
          name: "House Fries",
          description: "I'm a dish description. Click 'Edit Menu' to open the Restaurant Menu editor and change my text.",
          price: "₹9.99",
          image: houseFries
        },
        {
          name: "Nachos and Guacamole",
          description: "I'm a dish description. Click 'Edit Menu' to open the Restaurant Menu editor and change my text.",
          price: "₹9.99"
        }
      ]
    },
    {
      title: "VEG APPETIZERS",
      items: [
        {
          name: "GARLIC BREAD",
          image: garlicBread
        }
      ]
    },
    {
      title: "NON-VEG APPETIZERS",
      items: [
        {
          name: "MURGH DUM KABAB",
          image: murghDumKabab
        }
      ]
    },
    {
      title: "MARINE APPETIZERS",
      items: [
        {
          name: "TANDOORI PRAWN",
          image: tandooriPrawn
        }
      ]
    },
    {
      title: "VEG STARTERS",
      items: [
        {
          name: "PANEER CHILLY",
          image: paneerChilly
        }
      ]
    },
    {
      title: "NON-VEG STARTERS",
      items: [
        {
          name: "CHICKEN CHILLY",
          image: chickenChilly
        }
      ]
    },
    {
      title: "PIZZA VEG",
      items: [
        {
          name: "MARGARITA",
          image: margaritaPizza
        }
      ]
    },
    {
      title: "DESSERTS",
      items: [
        {
          name: "SIZZLING BROWNIE",
          image: sizzlingBrownie
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Menu Banner */}
      <section className="relative h-[400px] mt-20">
        <img 
          src={menuBanner} 
          alt="Delicious Pub Food & Drinks" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-wider">
            Delicious Pub Food & Drinks
          </h2>
        </div>
      </section>

      <main className="py-24">
        {/* Menu Title and Introduction */}
        <div className="container mx-auto px-4 mb-20">
          <h1 className="text-5xl md:text-6xl font-bold text-center mb-16 tracking-wide">MENU</h1>
          
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Explore our signature cocktails, classic drinks, and refreshing mocktails made with premium ingredients. 
                Perfectly paired with tasty bites for an unforgettable experience. Cheers!
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
                  <div key={itemIndex} className="border-b border-border pb-6 last:border-0">
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
            <Button variant="hero" size="lg">Book a Table</Button>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Menu;
