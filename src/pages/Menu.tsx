import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
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

//mocktail images
import PeachBlossom from "@/assets/mocktails/peach-blossom.jpg";
import GreenAppleMojito from "@/assets/mocktails/green-apple-mojito.jpg";
import MintyMango from "@/assets/mocktails/minty-mango.jpg";
import VirginMojito from "@/assets/mocktails/virgin-mojito.jpg";
import Cinderella from "@/assets/mocktails/cinderella.jpg";
import BlueLagoonMocktail from "@/assets/mocktails/blue-lagoon.jpg";
import Sunrise from "@/assets/mocktails/sunrise.jpg";
import RedDevil from "@/assets/mocktails/red-devil.jpg";
import FruitPunch from "@/assets/mocktails/fruit-punch.jpg";
import ChocolateMilkshake from "@/assets/mocktails/chocolate-milkshake.png";
import ColdCoffee from "@/assets/mocktails/cold-coffee.jpg";
import VirginPinaColada from "@/assets/mocktails/virgin-pina-colada.jpg";

//shooters
import Kamikaze from "@/assets/shooters/kamikaze .png";
import B52 from "@/assets/shooters/b-52.png";
import Jagerbomb from "@/assets/shooters/jaegerbomb.jpg";
import BrainHemorrhage from "@/assets/shooters/brain-hemorage.png";
import LemonDrop from "@/assets/shooters/lemon-drop.png";
import SlipperyNipple from "@/assets/shooters/slippery-nipple.png";
import BabyGuinness from "@/assets/shooters/baby-guiness.png";
import Fireball from "@/assets/shooters/fireball.png";
import BlowJob from "@/assets/shooters/blowjob.png";
import TequilaSlammer from "@/assets/shooters/tequila-slammer.png";

//finger food
import MasalaPapad from "@/assets/finger-food/masala-papad.jpg";
import RoastedPapad from "@/assets/finger-food/roasted-papad.jpg";
import FryPapad from "@/assets/finger-food/fry-papad.jpg";
import FrenchFries from "@/assets/finger-food/french-fries.jpg";
import PeriPeriFrenchFries from "@/assets/finger-food/peri-peri-french-fries.jpg";
import GarlicBread from "@/assets/finger-food/garlic-bread.jpg";
import GarlicBreadWithCheese from "@/assets/finger-food/garlic-bread-with-cheese.jpg";
import ManchowSoupVeg from "@/assets/finger-food/manchow-soup-veg.jpg";
import ManchowSoupNonVeg from "@/assets/finger-food/manchow-soup-non-veg.jpg";
import ExoticVegetableSoup from "@/assets/finger-food/exotic-vegetable-soup-with-fried-noodles (2).jpg";
import WatermelonGreekSalad from "@/assets/finger-food/watermelon-greek-salad.jpg";
import OrangeAndWalnutSalad from "@/assets/finger-food/orange-and-walnut-salad.jpg";
import RomainAndChickenSalad from "@/assets/finger-food/romain-and-chicken-salad.jpg";
import IndianGreenSalad from "@/assets/finger-food/indian-green-salad.jpg";
//tandoor images
import VegPlatter from "@/assets/Tandoor Appetizers/veg-platter.jpg";
import PeriPeriPaneerTikka from "@/assets/Tandoor Appetizers/peri-peri-paneer-tikka.jpg";
import PaneerMalaiTikka from "@/assets/Tandoor Appetizers/paneer-malai-tikka.jpg";
import VegetableAlmondSeekh from "@/assets/Tandoor Appetizers/vegetable-almond-seekh.jpg";
import KumbhKiNazakat from "@/assets/Tandoor Appetizers/kumbh-ki-nazakat.jpg";
import PaneerTikka from "@/assets/Tandoor Appetizers/paneer-tikka.jpg";
import PaneerZafranTikka from "@/assets/Tandoor Appetizers/paneer-zafran-tikka.jpg";
import HaraBharaKabab from "@/assets/Tandoor Appetizers/hara-bhara-kabab.jpg";
import MurghDumKabab from "@/assets/Tandoor Appetizers/murgh-dum-kabab.jpg";
import MurghPlatter from "@/assets/Tandoor Appetizers/murgh-platter.jpg";
import MurghTandooriHalf from "@/assets/Tandoor Appetizers/murgh-tandoori-half.jpg";
import MurghTandooriFull from "@/assets/Tandoor Appetizers/murgh-tandoori-full.jpg";
//continental & oriental images
import ChickenAkitri from "@/assets/Continental_&_Oriental_Appetizers/chicken-akitri.jpg";
import LemonBasilChicken from "@/assets/Continental_&_Oriental_Appetizers/lemon-basil-chicken.jpg";
import ChickenBlackPepper from "@/assets/Continental_&_Oriental_Appetizers/chicken-black-pepper.jpg";
import FishFinger from "@/assets/Continental_&_Oriental_Appetizers/fish-finger.jpg";
import ChimichurriChickenWings from "@/assets/Continental_&_Oriental_Appetizers/chimichurri-chicken-wings.jpg";
import ThaiSpringRoll from "@/assets/Continental_&_Oriental_Appetizers/thai-spring-roll.jpg";
import PaneerChilly from "@/assets/Continental_&_Oriental_Appetizers/paneer-chilly.jpg";
import VegManchurianDry from "@/assets/Continental_&_Oriental_Appetizers/veg-manchurian-dry.jpg";
import TeriyakiMushroom from "@/assets/Continental_&_Oriental_Appetizers/teriyaki-mushroom.jpg";
import HoneyChilliPotato from "@/assets/Continental_&_Oriental_Appetizers/honey-chilli-potato.jpg";
//Non-Veg Starters
import ChickenChilly from "@/assets/Non_Veg_Starters/chicken-chilli.jpg";
import ChickenTeriyaki from "@/assets/Non_Veg_Starters/chicken-teriyaki.jpg";
import ChickenLollipop from "@/assets/Non_Veg_Starters/chicken-lollipop.jpg";
import ChickenTaiPai from "@/assets/Non_Veg_Starters/chicken-tai-pai.jpg";
import KungPaoChicken from "@/assets/Non_Veg_Starters/kung-pao-chicken.jpg";
import ChickenHunon from "@/assets/Non_Veg_Starters/chicken-hunon.jpg";
//pizza images
import ChickenPepperoniPizza from "@/assets/Non_Veg_Starters/chicken-pepperoni-pizza.jpg";
import MargheritaPizza from "@/assets/Non_Veg_Starters/margherita-pizza.jpg";
import DoubleDeckerPizza from "@/assets/Non_Veg_Starters/double-decker-pizza.jpg";
import PeriPeriChickenPizza from "@/assets/Non_Veg_Starters/peri-peri-chicken-pizza.jpg";
import AlfredoPizza from "@/assets/Non_Veg_Starters/alfredo-pizza.jpg";
import JamaicanJerkSpicedChicken from "@/assets/Non_Veg_Starters/jamaican-jerk-spiced-chicken.jpg";
//Noodles images
import BamigoringPrawns from "@/assets/Oriental_Rice_Noodles/bamigoring-prawns.jpg";
import BamigoringVeg from "@/assets/Oriental_Rice_Noodles/bamigoring-veg.jpg";
import BamigoringChicken from "@/assets/Oriental_Rice_Noodles/bamigoring-chicken.jpg";
import HakkaNoodlesVeg from "@/assets/Oriental_Rice_Noodles/hakka-noodles-veg.jpg";
import HakkaNoodlesChicken from "@/assets/Oriental_Rice_Noodles/hakka-noodles-chicken.jpg";
import HakkaNoodlesPrawns from "@/assets/Oriental_Rice_Noodles/hakka-noodles-prawns.jpg";
import SchezwanNoodlesVeg from "@/assets/Oriental_Rice_Noodles/schezwan-noodles-veg.jpg";
import SchezwanNoodlesChicken from "@/assets/Oriental_Rice_Noodles/schezwan-noodles-chicken.jpg";
import SchezwanNoodlesPrawns from "@/assets/Oriental_Rice_Noodles/schezwan-noodles-prawns.jpg";
import SchezwanRiceVeg from "@/assets/Oriental_Rice_Noodles/schezwan-rice-veg.jpg";
import SchezwanRiceChicken from "@/assets/Oriental_Rice_Noodles/schezwan-rice-chicken.jpg";
import SchezwanRicePrawns from "@/assets/Oriental_Rice_Noodles/schezwan-rice-prawns.jpg";

//Main Course – indian comfort
import Roti from "@/assets/Indian_Comforts/roti.jpg";
import Naan from "@/assets/Indian_Comforts/naan.jpg";
import ButterNaan from "@/assets/Indian_Comforts/butter-naan.jpg";
import ButterRoti from "@/assets/Indian_Comforts/butter-roti.jpg";
import GarlicNaan from "@/assets/Indian_Comforts/garlic-naan.jpg";
import CheeseGarlicNaan from "@/assets/Indian_Comforts/cheese-garlic-naan.jpg";
import LacchaParatha from "@/assets/Indian_Comforts/laccha-paratha.jpg";
import DalFry from "@/assets/Indian_Comforts/dal-fry.jpg";
import DalTadka from "@/assets/Indian_Comforts/dal-tadka.jpg";
import VegRaita from "@/assets/Indian_Comforts/veg-raita.jpg";
import PineappleRaita from "@/assets/Indian_Comforts/pineapple-raita.jpg";

import LasooniPalak from "@/assets/Main_Course/lasooni-palak.jpg";
import KadhaiPaneer from "@/assets/Main_Course/kadhai-paneer.jpg";
import ShahiPaneer from "@/assets/Main_Course/shahi-paneer.jpg";
import PaneerButterMasala from "@/assets/Main_Course/paneer-butter-masala.jpg";
import PaneerDopyaza from "@/assets/Main_Course/paneer-dopyaza.jpg";
import PaneerMakhani from "@/assets/Main_Course/paneer-makhani.jpg";
import PaneerTikkaLazeez from "@/assets/Main_Course/paneer-tikka-lazeez.jpg";
import VegetableRara from "@/assets/Main_Course/vegetable-rara.jpg";
import MixVeg from "@/assets/Main_Course/mix-veg.jpg";
import VegKolhapuri from "@/assets/Main_Course/veg-kolhapuri.jpg";
import VegMaratha from "@/assets/Main_Course/veg-maratha.jpg";
import VegBhoona from "@/assets/Main_Course/veg-bhoona.jpg";
import MurgTikkaLazeez from "@/assets/Non_Veg_Main_Course/murg-tikka-lazeez.jpg";
import KadhaiMurg from "@/assets/Non_Veg_Main_Course/kadhai-murg.jpg";
import RaraMurg from "@/assets/Non_Veg_Main_Course/rara-murg.jpg";
import PomfretMapas from "@/assets/Non_Veg_Main_Course/pomfret-mapas.jpg";
import PrawnMapas from "@/assets/Non_Veg_Main_Course/prawn-mapas.jpg";
import PrawnMirchMasala from "@/assets/Non_Veg_Main_Course/prawn-mirch-masala.jpg";
import ChickenHandi from "@/assets/Non_Veg_Main_Course/chicken-handi.jpg";
import ButterChicken from "@/assets/Non_Veg_Main_Course/butter-chicken.jpg";

//Rice images
import JeeraRice from "@/assets/Oriental_Rice_Noodles/jeera-rice.jpg";
import SteamRice from "@/assets/Oriental_Rice_Noodles/steam-rice.jpg";
import VegPulao from "@/assets/Oriental_Rice_Noodles/veg-pulao.jpg";
import DalKhichdi from "@/assets/Oriental_Rice_Noodles/dal-khichdi.jpg";
import MatkaBiryaniVegetable from "@/assets/Oriental_Rice_Noodles/matka-biryani-vegetable.jpg";
import MatkaBiryaniEgg from "@/assets/Oriental_Rice_Noodles/matka-biryani-egg.jpg";
import MatkaBiryaniChicken from "@/assets/Oriental_Rice_Noodles/matka-biryani-chicken.jpg";
import MatkaBiryaniPrawns from "@/assets/Oriental_Rice_Noodles/matka-biryani-prawns.jpg";

//Dessert images
import GulabJamun from "@/assets/Desserts/gulab-jamun.jpg";
import GulabJamunWithIceCream from "@/assets/Desserts/gulab-jamun-with-ice-cream.jpg";
import ChoiceOfIceCream from "@/assets/Desserts/choice-of-ice-cream.jpg";

//food images
import sizzlingBrownie from "@/assets/sizzling-brownie.jpg";

// Add this new sub-component for category navigation
const categories = [
  "Cocktails",
  "Mocktails",
  "Shooters",
  "Finger Food",
  "Tandoor",
  "Continental & Oriental",
  "Pizza & Noodles",
  "Main Course",
  "Biryani & Rice",
  "Desserts",
];

const CategoryNavigation = () => {
  const [showArrow, setShowArrow] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const handleScroll = () => {
      const atEnd =
        container.scrollLeft + container.clientWidth >=
        container.scrollWidth - 10;

      setShowArrow(!atEnd);
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="sticky top-20 bg-background/95 backdrop-blur-md z-40 shadow-md py-3">
      <div className="relative">
        {/* gradient fade edges */}
        <div className="absolute left-0 top-0 h-full w-8 bg-gradient-to-r from-background to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 h-full w-8 bg-gradient-to-l from-background to-transparent pointer-events-none" />

        {/* scrollable list */}
        <div
          ref={scrollRef}
          className="flex gap-4 sm:gap-6 px-4 sm:px-8 text-sm sm:text-base font-medium overflow-x-auto scrollbar-hide whitespace-nowrap scroll-smooth snap-x"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                const section = document.getElementById(
                  category.toLowerCase().replace(/\s+/g, "-")
                );
                if (section) {
                  const w = window.innerWidth;
                  let offset = 140; // default (tablet/desktop)

                  if (w < 360) offset = 200; // very small phones
                  else if (w < 480) offset = 180; // small phones
                  else if (w < 640) offset = 160; // regular phones

                  const sectionTop =
                    section.getBoundingClientRect().top +
                    window.scrollY -
                    offset;
                  window.scrollTo({ top: sectionTop, behavior: "smooth" });
                }
              }}
              className="px-3 py-1 sm:px-4 sm:py-2 rounded-md flex-shrink-0 snap-center hover:text-primary transition-colors duration-300"
            >
              {category}
            </button>
          ))}
        </div>

        {/* animated scroll hint for mobile */}
        {showArrow && (
          <div className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 text-lg sm:hidden animate-scrollHint pointer-events-none transition-opacity duration-500">
            →
          </div>
        )}
      </div>
    </div>
  );
};

interface MenuItem {
  name: string;
  description?: string;
  price?: string;
  image?: string;
  type?: "veg" | "non-veg";
}

interface MenuCategory {
  title: string;
  description?: string;
  items: MenuItem[];
}

const Menu = () => {
  // Scroll to top and handle hash navigation
  useEffect(() => {
    window.scrollTo({ top: 0 });
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) element.scrollIntoView({ behavior: "smooth" });
      }, 300);
    }
  }, []);

  const menuCategories: MenuCategory[] = [
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
    //MOCKTAILS
    {
      title: "MOCKTAILS",
      description:
        "Refreshing handcrafted blends bursting with fruity flavors and a tropical twist — perfect for those who love vibrance without the spirits.",
      items: [
        {
          name: "Peach Blossom",
          description:
            "A smooth blend of juicy peach syrup and lime soda — light, floral, and refreshingly elegant.",
          price: "₹245",
          image: PeachBlossom,
        },
        {
          name: "Green Apple Mojito",
          description:
            "Crisp green apple stirred with mint, lime, and soda — zesty, sparkling, and full of flavor.",
          price: "₹245",
          image: GreenAppleMojito,
        },
        {
          name: "Minty Mango",
          description:
            "Tropical mango infused with cool mint — sweet, vibrant, and perfectly chilled.",
          price: "₹245",
          image: MintyMango,
        },
        {
          name: "Virgin Mojito",
          description:
            "A refreshing mix of mint, lime, and soda — fizzy, fresh, and timelessly cool.",
          price: "₹245",
          image: VirginMojito,
        },
        {
          name: "Cinderella",
          description:
            "Orange, pineapple, and grenadine unite in a fruity, golden delight fit for royalty.",
          price: "₹245",
          image: Cinderella,
        },
        {
          name: "Blue Lagoon",
          description:
            "Blue curacao syrup with lemonade and lime — bright, tangy, and ocean-breeze cool.",
          price: "₹245",
          image: BlueLagoonMocktail,
        },
        {
          name: "Sunrise",
          description:
            "A radiant blend of orange juice and grenadine — sweet, citrusy, and sunrise-gorgeous.",
          price: "₹245",
          image: Sunrise,
        },
        {
          name: "Red Devil",
          description:
            "Cranberry and lime come together in a bold red burst of flavor — sweet, sharp, and daring.",
          price: "₹245",
          image: RedDevil,
        },
        {
          name: "Fruit Punch",
          description:
            "A tropical medley of mixed fruit juices — juicy, colorful, and crowd-pleasing.",
          price: "₹245",
          image: FruitPunch,
        },
        {
          name: "Chocolate Milkshake",
          description:
            "Thick, rich, and creamy — a chocolate lover’s dream in every sip.",
          price: "₹245",
          image: ChocolateMilkshake,
        },
        {
          name: "Cold Coffee",
          description:
            "Silky, strong, and ice-cold — the ultimate caffeine chill to keep you refreshed.",
          price: "₹245",
          image: ColdCoffee,
        },
        {
          name: "Virgin Pina Colada",
          description:
            "Creamy coconut and pineapple bliss — smooth, tropical, and pure paradise in a glass.",
          price: "₹245",
          image: VirginPinaColada,
        },
      ],
    },
    //SHOOTERS
    {
      title: "SHOOTERS",
      description:
        "Quick, bold, and full of character — our shooters pack a punch with every shot. Perfect for starting the night or turning up the energy.",
      items: [
        {
          name: "Kamikaze",
          description:
            "A sharp mix of vodka, triple sec, and lime — clean, crisp, and straight to the point.",
          price: "₹395",
          image: Kamikaze,
        },
        {
          name: "B-52",
          description:
            "Layered perfection — Kahlua, Baileys, and triple sec stacked smooth and creamy.",
          price: "₹395",
          image: B52,
        },
        {
          name: "Jägerbomb",
          description:
            "A high-voltage shot — Jägermeister dropped in energy drink for an instant rush.",
          price: "₹395",
          image: Jagerbomb,
        },
        {
          name: "Brain Hemorrhage",
          description:
            "Baileys, peach schnapps, and grenadine — spooky, sweet, and visually wicked.",
          price: "₹395",
          image: BrainHemorrhage,
        },
        {
          name: "Lemon Drop",
          description:
            "Vodka with lemon juice and sugar rim — bright, tangy, and refreshingly bold.",
          price: "₹395",
          image: LemonDrop,
        },
        {
          name: "Slippery Nipple",
          description:
            "Smooth sambuca topped with Baileys — cheeky, creamy, and deliciously daring.",
          price: "₹395",
          image: SlipperyNipple,
        },
        {
          name: "Baby Guinness",
          description:
            "Kahlua and Baileys layered to look like a mini pint — smooth, sweet, and shot-sized fun.",
          price: "₹395",
          image: BabyGuinness,
        },
        {
          name: "Fireball",
          description:
            "Cinnamon whisky served straight — hot, spicy, and full of kick.",
          price: "₹395",
          image: Fireball,
        },
        {
          name: "Blow Job",
          description:
            "Baileys and Kahlua topped with whipped cream — fun, bold, and guaranteed to turn heads.",
          price: "₹395",
          image: BlowJob,
        },
        {
          name: "Tequila Slammer",
          description:
            "Tequila with a splash of soda — slam it, feel the fizz, and let the party begin.",
          price: "₹395",
          image: TequilaSlammer,
        },
      ],
    },
    //FINGER FOOD
    {
      title: "FINGER FOOD",
      description:
        "Delightful quick bites, crispy and flavorful — perfect for sharing or pairing with your favorite drink.",
      items: [
        {
          name: "Masala Papad",
          description:
            "Crisp papad topped with tangy masala and fresh veggies — a crunchy, spicy starter.",
          price: "₹49",
          image: MasalaPapad,
        },
        {
          name: "Roasted Papad",
          description:
            "Light, crisp, and perfectly roasted for that traditional touch.",
          price: "₹39",
          image: RoastedPapad,
        },
        {
          name: "Fry Papad",
          description:
            "Golden and crunchy — the simplest yet most satisfying munch.",
          price: "₹39",
          image: FryPapad,
        },
        {
          name: "French Fries",
          description:
            "Classic golden fries — crisp on the outside, soft inside, always a favorite.",
          price: "₹149",
          image: FrenchFries,
        },
        {
          name: "Peri-Peri French Fries",
          description:
            "Tossed in zesty peri-peri seasoning for that bold, spicy kick.",
          price: "₹189",
          image: PeriPeriFrenchFries,
        },
        {
          name: "Garlic Bread",
          description:
            "Freshly baked with rich garlic butter — simple, aromatic, and irresistible.",
          price: "₹189",
          image: GarlicBread,
        },
        {
          name: "Garlic Bread with Cheese",
          description:
            "The ultimate comfort snack — gooey cheese melted over warm, garlicky bread.",
          price: "₹199",
          image: GarlicBreadWithCheese,
        },
        {
          name: "Manchow Soup (Veg)",
          description:
            "A hearty Indo-Chinese favorite — spicy, savory, and packed with flavor.",
          price: "₹169",
          image: ManchowSoupVeg,
        },
        {
          name: "Manchow Soup (Non-Veg)",
          description:
            "Rich chicken broth with veggies and Asian spices — comfort in a bowl.",
          price: "₹169",
          image: ManchowSoupNonVeg,
          type: "non-veg",
        },
        {
          name: "Exotic Vegetable Soup with Fried Noodles",
          description:
            "A wholesome mix of exotic veggies topped with crispy noodles — fresh and flavorful.",
          price: "₹169",
          image: ExoticVegetableSoup,
        },
        {
          name: "Watermelon Greek Salad",
          description:
            "Juicy watermelon cubes, feta, and greens — refreshing, sweet, and tangy perfection.",
          price: "₹330",
          image: WatermelonGreekSalad,
        },
        {
          name: "Orange and Walnut Salad",
          description:
            "Crunchy walnuts and zesty oranges tossed in a light dressing — elegant and energizing.",
          price: "₹330",
          image: OrangeAndWalnutSalad,
        },
        {
          name: "Romain and Chicken Salad",
          description:
            "Tender chicken and crisp lettuce in a creamy dressing — a protein-packed delight.",
          price: "₹350",
          image: RomainAndChickenSalad,
          type: "non-veg",
        },
        {
          name: "Indian Green Salad",
          description:
            "A classic mix of fresh seasonal greens — light, crisp, and full of natural flavor.",
          price: "₹150",
          image: IndianGreenSalad,
        },
      ],
    },
    //TANDOOR
    {
      title: "TANDOOR",
      description:
        "Authentic tandoori delights straight from the clay oven — smoky, spiced, and irresistibly flavorful. Includes both vegetarian and non-vegetarian options.",
      items: [
        //Vegetarian
        {
          name: "Veg Platter",
          description:
            "A chef’s selection of tandoori favorites — smoky, spiced, and perfectly grilled.",
          price: "₹799",
          image: VegPlatter,
          type: "veg",
        },
        {
          name: "Peri Peri Paneer Tikka",
          description:
            "Soft paneer cubes marinated in fiery peri-peri spices, grilled to golden perfection.",
          price: "₹299",
          image: PeriPeriPaneerTikka,
          type: "veg",
        },
        {
          name: "Paneer Malai Tikka",
          description:
            "Creamy, melt-in-mouth paneer infused with rich malai and subtle Indian herbs.",
          price: "₹319",
          image: PaneerMalaiTikka,
          type: "veg",
        },
        {
          name: "Vegetable Almond Seekh",
          description:
            "A nutty twist to the classic seekh — minced veggies blended with almonds and spices.",
          price: "₹299",
          image: VegetableAlmondSeekh,
          type: "veg",
        },
        {
          name: "Kumbh Ki Nazakat",
          description:
            "Juicy mushrooms stuffed with herbs and cheese, slow-roasted in the tandoor.",
          price: "₹299",
          image: KumbhKiNazakat,
          type: "veg",
        },
        {
          name: "Paneer Tikka",
          description:
            "The timeless favorite — succulent paneer, marinated in yogurt and aromatic spices.",
          price: "₹299",
          image: PaneerTikka,
          type: "veg",
        },
        {
          name: "Paneer Zafran Tikka",
          description:
            "Luxurious saffron-infused paneer — rich, fragrant, and full of royal flavor.",
          price: "₹299",
          image: PaneerZafranTikka,
          type: "veg",
        },
        {
          name: "Hara Bhara Kabab",
          description:
            "Spinach, peas, and herbs come together for this crisp and wholesome classic.",
          price: "₹269",
          image: HaraBharaKabab,
          type: "veg",
        },

        //Non-Vegetarian
        {
          name: "Murgh Dum Kabab",
          description:
            "Tender chicken marinated in yogurt and slow-cooked over charcoal — juicy and flavorful.",
          price: "₹349",
          image: MurghDumKabab,
          type: "non-veg",
        },
        {
          name: "Murgh Platter",
          description:
            "A grand assortment of chicken delights — perfect for sharing and savoring.",
          price: "₹999",
          image: MurghPlatter,
          type: "non-veg",
        },
        {
          name: "Murgh Tandoori (Half)",
          description:
            "Half-portion of the signature tandoori chicken — smoky, spicy, and irresistible.",
          price: "₹299",
          image: MurghTandooriHalf,
          type: "non-veg",
        },
        {
          name: "Murgh Tandoori (Full)",
          description:
            "A whole tandoori masterpiece — char-grilled perfection with bold Indian spices.",
          price: "₹499",
          image: MurghTandooriFull,
          type: "non-veg",
        },
        //starters
        {
          name: "Chicken Chilli",
          description:
            "Crispy chicken tossed in spicy Indo-Chinese sauce — bold, tangy, and full of bite.",
          price: "₹299",
          image: ChickenChilly,
          type: "non-veg",
        },
        {
          name: "Chicken Teriyaki",
          description:
            "Grilled chicken glazed in a rich Japanese teriyaki sauce — sweet, smoky, and irresistible.",
          price: "₹329",
          image: ChickenTeriyaki,
          type: "non-veg",
        },
        {
          name: "Chicken Lollipop",
          description:
            "Classic bar favorite — crispy, juicy wings served with a fiery Schezwan dip.",
          price: "₹299",
          image: ChickenLollipop,
          type: "non-veg",
        },
        {
          name: "Chicken Tai Pai",
          description:
            "Tender chicken wok-tossed with oriental spices — flavorful, aromatic, and perfectly seasoned.",
          price: "₹299",
          image: ChickenTaiPai,
          type: "non-veg",
        },
        {
          name: "Kung Pao Chicken",
          description:
            "A balance of sweet, spicy, and nutty — a wok classic with a kick.",
          price: "₹307",
          image: KungPaoChicken,
          type: "non-veg",
        },
        {
          name: "Chicken Hunon",
          description:
            "Crispy chicken in a savoury garlic-soy glaze — packed with depth and crunch.",
          price: "₹317",
          image: ChickenHunon,
          type: "non-veg",
        },
      ],
    },
    //CONTINENTAL & ORIENTAL
    {
      title: "CONTINENTAL & ORIENTAL",
      description:
        "From bold Continental grills to flavorful Oriental delights — a fusion of world cuisines crafted to excite every palate.",
      items: [
        // Oriental Starters – Vegetarian
        {
          name: "Thai Spring Roll",
          description:
            "Crispy rolls stuffed with veggies and Thai spices — crunchy outside, bursting with flavor inside.",
          price: "₹249",
          image: ThaiSpringRoll,
          type: "veg",
        },
        {
          name: "Paneer Chilly",
          description:
            "Indian cottage cheese tossed with bell peppers, soy, and a hit of heat — a sizzling crowd-favorite.",
          price: "₹249",
          image: PaneerChilly,
          type: "veg",
        },
        {
          name: "Veg Manchurian Dry",
          description:
            "Crispy veggie balls in a spicy garlic-soy glaze — the perfect Indo-Chinese classic.",
          price: "₹199",
          image: VegManchurianDry,
          type: "veg",
        },
        {
          name: "Teriyaki Mushroom",
          description:
            "Button mushrooms wok-tossed in rich teriyaki glaze — umami-packed and deliciously sticky.",
          price: "₹249",
          image: TeriyakiMushroom,
          type: "veg",
        },
        {
          name: "Honey Chilli Potato",
          description:
            "Crispy potato fingers glazed with honey and chilli — sweet, spicy, and totally addictive.",
          price: "₹249",
          image: HoneyChilliPotato,
          type: "veg",
        },
        // Continental – Non-Veg
        {
          name: "Chicken Akitri",
          description:
            "Juicy chicken bites tossed in a signature spiced sauce — bold, smoky, and irresistibly tender.",
          price: "₹349",
          image: ChickenAkitri,
          type: "non-veg",
        },
        {
          name: "Lemon Basil Chicken",
          description:
            "Refreshing notes of basil and lemon meet grilled chicken — light, fragrant, and full of zest.",
          price: "₹349",
          image: LemonBasilChicken,
          type: "non-veg",
        },
        {
          name: "Chicken Black Pepper",
          description:
            "Cracked pepper, garlic, and butter-seared chicken — fiery and full of depth.",
          price: "₹349",
          image: ChickenBlackPepper,
          type: "non-veg",
        },
        {
          name: "Fish Finger",
          description:
            "Crispy golden fish fillets served with tangy tartar dip — a crunchy, ocean-fresh indulgence.",
          price: "₹450",
          image: FishFinger,
          type: "non-veg",
        },
        {
          name: "Chimichurri Chicken Wings",
          description:
            "Spicy, smoky wings drenched in Argentine-style chimichurri — messy, bold, and worth every bite.",
          price: "₹349",
          image: ChimichurriChickenWings,
          type: "non-veg",
        },
      ],
    },
    //PIZZA & NOODLES
    {
      title: "PIZZA & NOODLES",
      description:
        "Wood-fired perfection — from classic vegetarian to meaty indulgence, every slice crafted with love and flavor.",
      items: [
        {
          name: "Margherita Pizza",
          description:
            "A timeless favorite — fresh tomato sauce, mozzarella, and basil baked to perfection.",
          price: "₹279",
          image: MargheritaPizza,
          type: "veg",
        },
        {
          name: "Alfredo Pizza",
          description:
            "Creamy alfredo base topped with cheese and herbs — rich, smooth, and indulgent.",
          price: "₹349",
          image: AlfredoPizza,
          type: "veg",
        },
        {
          name: "Peri Peri Chicken Pizza",
          description:
            "Loaded with spicy peri-peri grilled chicken — bold, fiery, and addictive.",
          price: "₹397",
          image: PeriPeriChickenPizza,
          type: "non-veg",
        },
        {
          name: "Jamaican Jerk Spiced Chicken",
          description:
            "Smoky jerk-marinated chicken meets melty cheese — a tropical twist with heat.",
          price: "₹399",
          image: JamaicanJerkSpicedChicken,
          type: "non-veg",
        },
        {
          name: "Double Decker Pizza",
          description:
            "Two layers of cheesy, saucy perfection — double the flavor, double the fun.",
          price: "₹399",
          image: DoubleDeckerPizza,
          type: "non-veg",
        },
        {
          name: "Chicken Pepperoni Pizza",
          description:
            "Classic pepperoni layered over molten cheese — simple, iconic, and deliciously meaty.",
          price: "₹447",
          image: ChickenPepperoniPizza,
          type: "non-veg",
        },
        // Noodles
        {
          name: "Bamigoring Veg",
          description:
            "Indonesian-style fried noodles with crunchy vegetables and rich soy seasoning.",
          price: "₹200",
          image: BamigoringVeg,
          type: "veg",
        },
        {
          name: "Bamigoring Chicken",
          description:
            "Aromatic noodles with spiced chicken — a perfect blend of sweet, savory, and spicy.",
          price: "₹300",
          image: BamigoringChicken,
          type: "non-veg",
        },
        {
          name: "Bamigoring Prawns",
          description:
            "Juicy prawns tossed with exotic noodles and bold Asian flavors.",
          price: "₹400",
          image: BamigoringPrawns,
          type: "non-veg",
        },
        {
          name: "Hakka Noodles Veg",
          description:
            "Classic wok-tossed noodles with colorful veggies and a burst of umami flavor.",
          price: "₹250",
          image: HakkaNoodlesVeg,
          type: "veg",
        },
        {
          name: "Hakka Noodles Chicken",
          description:
            "Soft noodles with tender chicken and tossed in smoky wok essence.",
          price: "₹300",
          image: HakkaNoodlesChicken,
          type: "non-veg",
        },
        {
          name: "Hakka Noodles Prawns",
          description:
            "A coastal twist on the classic — prawns, veggies, and noodles in perfect harmony.",
          price: "₹400",
          image: HakkaNoodlesPrawns,
          type: "non-veg",
        },
        {
          name: "Schezwan Noodles Veg",
          description:
            "A spicy noodle delight packed with flavor, color, and crunch.",
          price: "₹250",
          image: SchezwanNoodlesVeg,
          type: "veg",
        },
        {
          name: "Schezwan Noodles Chicken",
          description:
            "Chicken and noodles tossed in Schezwan sauce — bold, tangy, and satisfying.",
          price: "₹300",
          image: SchezwanNoodlesChicken,
          type: "non-veg",
        },
        {
          name: "Schezwan Noodles Prawns",
          description:
            "Sizzling Schezwan prawns meet perfectly cooked noodles — fiery and full of flavor.",
          price: "₹400",
          image: SchezwanNoodlesPrawns,
          type: "non-veg",
        },
      ],
    },
    //Main Course
    {
      title: "MAIN COURSE",
      description:
        "A flavorful selection of authentic Indian curries and breads — rich, aromatic, and made to satisfy every craving.",
      items: [
        // INDIAN BREAD
        {
          name: "Roti",
          description: "Soft whole wheat bread — the classic Indian staple.",
          price: "₹35",
          image: Roti,
        },
        {
          name: "Butter Roti",
          description:
            "Fluffy roti brushed with golden butter for extra flavor.",
          price: "₹45",
          image: ButterRoti,
        },
        {
          name: "Lachha Paratha",
          description:
            "Layered flaky paratha cooked to perfection — crispy outside, soft inside.",
          price: "₹60",
          image: LacchaParatha,
        },
        {
          name: "Naan",
          description:
            "Traditional tandoor-baked bread — soft, chewy, and warm.",
          price: "₹60",
          image: Naan,
        },
        {
          name: "Butter Naan",
          description:
            "Tandoori naan coated in melted butter — the perfect pairing with rich gravies.",
          price: "₹70",
          image: ButterNaan,
        },
        {
          name: "Garlic Naan",
          description:
            "Naan infused with roasted garlic and herbs — aromatic and flavorful.",
          price: "₹109",
          image: GarlicNaan,
        },
        {
          name: "Cheese Garlic Naan",
          description:
            "Soft, cheesy delight stuffed with gooey cheese and garlic — indulgence at its best.",
          price: "₹150",
          image: CheeseGarlicNaan,
        },

        // MAIN COURSE – VEGETARIAN
        {
          name: "Lasooni Palak",
          description:
            "A rich blend of spinach and garlic, cooked to perfection with traditional Indian spices.",
          price: "₹289",
          image: LasooniPalak,
          type: "veg",
        },
        {
          name: "Paneer Makhani",
          description:
            "Soft paneer cubes in a velvety tomato-butter gravy — smooth, creamy, and mildly spiced.",
          price: "₹299",
          image: PaneerMakhani,
          type: "veg",
        },
        {
          name: "Paneer Tikka Lazeez",
          description:
            "Char-grilled paneer simmered in a spiced, smoky gravy bursting with flavor.",
          price: "₹289",
          image: PaneerTikkaLazeez,
          type: "veg",
        },
        {
          name: "Kadhai Paneer",
          description:
            "Paneer cooked with bell peppers, onions, and aromatic kadhai masala for a bold, rustic taste.",
          price: "₹289",
          image: KadhaiPaneer,
          type: "veg",
        },
        {
          name: "Vegetable Rara",
          description:
            "A hearty medley of vegetables cooked in a rich, spiced curry — full-bodied and satisfying.",
          price: "₹289",
          image: VegetableRara,
          type: "veg",
        },
        {
          name: "Shahi Paneer",
          description:
            "A royal delicacy — paneer in a creamy cashew-based gravy with subtle sweetness.",
          price: "₹289",
          image: ShahiPaneer,
          type: "veg",
        },
        {
          name: "Paneer Butter Masala",
          description:
            "Classic comfort — butter, cream, and paneer unite in a rich, indulgent gravy.",
          price: "₹289",
          image: PaneerButterMasala,
          type: "veg",
        },
        {
          name: "Paneer Dopyaza",
          description:
            "Paneer cooked with double onions and earthy spices for a flavorful twist.",
          price: "₹289",
          image: PaneerDopyaza,
          type: "veg",
        },
        {
          name: "Mix Veg",
          description:
            "A colorful blend of seasonal vegetables tossed in flavorful Indian masalas.",
          price: "₹269",
          image: MixVeg,
          type: "veg",
        },
        {
          name: "Veg Kolhapuri",
          description:
            "A spicy, fiery Maharashtrian curry bursting with bold regional flavors.",
          price: "₹269",
          image: VegKolhapuri,
          type: "veg",
        },
        {
          name: "Veg Maratha",
          description:
            "A rich, spicy curry with a roasted coconut base — authentic, aromatic, and indulgent.",
          price: "₹279",
          image: VegMaratha,
          type: "veg",
        },
        {
          name: "Veg Bhoona",
          description:
            "Slow-cooked vegetables in a thick, masala-rich gravy — bold, balanced, and soulful.",
          price: "₹279",
          image: VegBhoona,
          type: "veg",
        },
        {
          name: "Veg Raita",
          description:
            "Cool, creamy yogurt blended with fresh vegetables and a hint of spice.",
          price: "₹279",
          image: VegRaita,
          type: "veg",
        },
        {
          name: "Pineapple Raita",
          description:
            "Sweet and tangy pineapple folded into chilled yogurt — a refreshing twist to your meal.",
          price: "₹130",
          image: PineappleRaita,
          type: "veg",
        },
        {
          name: "Dal Fry",
          description:
            "Golden lentils tempered with garlic, cumin, and ghee — rich in flavor, perfect with any bread or rice.",
          price: "₹199",
          image: DalFry,
          type: "veg",
        },
        {
          name: "Dal Tadka",
          description:
            "Classic yellow dal topped with sizzling ghee tadka — smoky, aromatic, and deliciously hearty.",
          price: "₹219",
          image: DalTadka,
          type: "veg",
        },

        // MAIN COURSE – NON-VEG
        {
          name: "Butter Chicken",
          description:
            "Tender chicken simmered in rich, buttery tomato gravy — smooth, creamy, and irresistible.",
          price: "₹330",
          image: ButterChicken,
          type: "non-veg",
        },
        {
          name: "Murg Tikka Lazeez",
          description:
            "Char-grilled chicken tikka cooked in a luscious spiced gravy — smoky and full of flavor.",
          price: "₹330",
          image: MurgTikkaLazeez,
          type: "non-veg",
        },
        {
          name: "Kadhai Murg",
          description:
            "A bold North Indian classic — chicken tossed with peppers and aromatic spices.",
          price: "₹350",
          image: KadhaiMurg,
          type: "non-veg",
        },
        {
          name: "Rara Murg",
          description:
            "Slow-cooked chicken in a thick, meaty gravy — hearty and indulgent.",
          price: "₹350",
          image: RaraMurg,
          type: "non-veg",
        },
        {
          name: "Pomfret Mapas",
          description:
            "Fresh pomfret cooked in coastal-style coconut gravy — fragrant and mildly spiced.",
          price: "₹380",
          image: PomfretMapas,
          type: "non-veg",
        },
        {
          name: "Prawn Mapas",
          description:
            "Succulent prawns in a coastal coconut curry — rich, aromatic, and beautifully balanced.",
          price: "₹450",
          image: PrawnMapas,
          type: "non-veg",
        },
        {
          name: "Prawn Mirch Masala",
          description:
            "Juicy prawns in a fiery chili masala — bold, spicy, and full of zest.",
          price: "₹399",
          image: PrawnMirchMasala,
          type: "non-veg",
        },
        {
          name: "Chicken Handi",
          description:
            "Home-style chicken curry cooked in a clay pot — tender, aromatic, and deeply flavorful.",
          price: "₹399",
          image: ChickenHandi,
          type: "non-veg",
        },
      ],
    },
    //BIRYANI & RICE
    {
      title: "BIRYANI & RICE",
      description:
        "From aromatic matka biryanis to flavorful oriental rice and noodles — every grain cooked with perfection and spice.",
      items: [
        //RICE SELECTIONS
        {
          name: "Steam Rice",
          description:
            "Soft, fluffy steamed basmati rice — perfect with every curry.",
          price: "₹149",
          image: SteamRice,
          type: "veg",
        },
        {
          name: "Jeera Rice",
          description:
            "Fragrant cumin-flavored rice — a timeless Indian favorite.",
          price: "₹199",
          image: JeeraRice,
          type: "veg",
        },

        //INDIAN COMFORTS
        {
          name: "Veg Pulao",
          description:
            "Aromatic basmati rice tossed with garden-fresh vegetables and mild spices — simple, wholesome, and flavorful.",
          price: "₹189",
          image: VegPulao,
          type: "veg",
        },
        {
          name: "Dal Khichdi",
          description:
            "A cozy comfort dish made with lentils and rice — light, nourishing, and soul-satisfying.",
          price: "₹189",
          image: DalKhichdi,
          type: "veg",
        },
        // ORIENTAL – RICE
        {
          name: "Schezwan Rice (Veg)",
          description:
            "Fiery and flavorful rice tossed with Schezwan sauce, fresh veggies, and a hint of spice.",
          price: "₹250",
          image: SchezwanRiceVeg,
          type: "veg",
        },
        {
          name: "Schezwan Rice (Chicken)",
          description:
            "Smoky stir-fried rice loaded with tender chicken and Schezwan heat.",
          price: "₹300",
          image: SchezwanRiceChicken,
          type: "non-veg",
        },
        {
          name: "Schezwan Rice (Prawns)",
          description:
            "Perfectly cooked prawns tossed in Schezwan rice — bold, spicy, and deliciously coastal.",
          price: "₹399",
          image: SchezwanRicePrawns,
          type: "non-veg",
        },

        //MATKA BIRYANI
        {
          name: "Matka Biryani Vegetable",
          description:
            "Aromatic basmati rice layered with spiced vegetables, slow-cooked to perfection.",
          price: "₹249",
          image: MatkaBiryaniVegetable,
          type: "veg",
        },
        {
          name: "Matka Biryani Egg",
          description:
            "Classic biryani with boiled eggs and signature spiced masala — simple yet satisfying.",
          price: "₹299",
          image: MatkaBiryaniEgg,
          type: "non-veg",
        },
        {
          name: "Matka Biryani Chicken",
          description:
            "Flavorful chicken biryani cooked in a sealed clay pot — juicy, fragrant, and rich.",
          price: "₹349",
          image: MatkaBiryaniChicken,
          type: "non-veg",
        },
        {
          name: "Matka Biryani Prawns",
          description:
            "Delicate prawns layered with fragrant rice and spices — coastal perfection in a matka.",
          price: "₹399",
          image: MatkaBiryaniPrawns,
          type: "non-veg",
        },
      ],
    },
    //DESSERTS
    {
      title: "DESSERTS",
      description:
        "Sweet endings to your feast — from sizzling brownies to classic Indian favorites, each dessert crafted to melt your heart.",
      items: [
        {
          name: "Sizzling Brownie with Ice Cream",
          description:
            "A rich, gooey chocolate brownie served sizzling hot with a scoop of creamy vanilla ice cream — a timeless indulgence that melts hearts and chocolate alike.",
          price: "₹199",
          image: sizzlingBrownie,
        },
        {
          name: "Gulab Jamun",
          description:
            "Soft, golden dumplings soaked in warm saffron syrup — sweet, simple, and soul-satisfying.",
          price: "₹79",
          image: GulabJamun,
        },
        {
          name: "Gulab Jamun with Ice Cream",
          description:
            "A royal twist on a classic — hot, syrupy gulab jamuns paired with cold vanilla ice cream for that perfect contrast.",
          price: "₹100",
          image: GulabJamunWithIceCream,
        },
        {
          name: "Choice of Ice Cream",
          description:
            "Select from our range of creamy, refreshing ice creams to end your meal on a cool note.",
          price: "₹69",
          image: ChoiceOfIceCream,
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
        {/* Menu Title and Intro */}
        <div className="container mx-auto px-4 mb-12 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-10 tracking-wide">
            MENU
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Explore our signature cocktails, mocktails, and delicious bites —
            handcrafted for every taste and occasion.
          </p>
        </div>

        {/* Sticky Category Navigation */}
        <CategoryNavigation />

        {/* Menu Categories */}
        <div className="container mx-auto px-4 max-w-5xl">
          {menuCategories.map((category, index) => (
            <div
              id={category.title.toLowerCase().replace(/\s+/g, "-")}
              key={index}
              className="mb-16 scroll-mt-32"
            >
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
                        <div className="flex items-start gap-2 mb-2 leading-snug flex-wrap">
                          <h3 className="text-xl font-bold tracking-wide">
                            {item.name}
                          </h3>

                          {/* Veg / Non-Veg Symbol */}
                          {item.type ? (
                            <span className="inline-flex items-center mt-0.5">
                              <div
                                className="relative w-4 h-4 border border-gray-400 flex items-center justify-center rounded-sm"
                                title={
                                  item.type === "veg"
                                    ? "Vegetarian"
                                    : "Non-Vegetarian"
                                }
                              >
                                <div
                                  className={`w-2.5 h-2.5 ${
                                    item.type === "veg"
                                      ? "bg-green-600"
                                      : "bg-red-600"
                                  }`}
                                ></div>
                              </div>
                            </span>
                          ) : (
                            <div className="w-4 h-4 opacity-0"></div> //placeholder for alignment
                          )}
                        </div>

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
