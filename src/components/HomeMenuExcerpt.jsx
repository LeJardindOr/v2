import React from "react";
import { Link } from "react-router-dom";

import HomeFood1 from "../assets/images/HomeFood1.jpg";
import HomeFood2 from "../assets/images/HomeFood2.jpg";
import HomeFood3 from "../assets/images/HomeFood3.jpg";
import HomeFood4 from "../assets/images/HomeFood4.jpg";
import HomeFood5 from "../assets/images/HomeFood5.jpg";
import HomeFood6 from "../assets/images/HomeFood6.jpg";
import HomeFood7 from "../assets/images/HomeFood7.jpg";
import HomeFood8 from "../assets/images/HomeFood8.jpg";
import HomeFood9 from "../assets/images/HomeFood9.jpg";

function HomeMenuExcerpt() {
  const menuItems = [
    {
      id: 1,
      src: HomeFood1,
      subtitle: "Salmon Royale",
      desc: "Exquisite salmon steak, gently grilled, served with a side of asparagus and a rich, creamy hollandaise sauce.",
    },
    {
      id: 2,
      src: HomeFood2,
      subtitle: "Garden Fresh Salad",
      desc: "A vibrant mix of fresh garden greens, cherry tomatoes, cucumbers, and avocados, tossed in a light vinaigrette.",
    },
    {
      id: 3,
      src: HomeFood3,
      subtitle: "Imperial Chicken",
      desc: "Tender chicken breast, marinated and cooked with exotic herbs, served with quail eggs and a side of truffle-infused mashed potatoes.",
    },
    {
      id: 4,
      src: HomeFood4,
      subtitle: "Barbecue Rib Feast",
      desc: "Slow-cooked ribs, glazed with our signature barbecue sauce, accompanied by crispy fries and a refreshing vegetable medley.",
    },
    {
      id: 5,
      src: HomeFood5,
      subtitle: "Shrimp Pasta Delight",
      desc: "Al dente pasta tossed with succulent shrimp, in a rich garlic butter sauce, garnished with freshly grated Parmesan.",
    },
    {
      id: 6,
      src: HomeFood6,
      subtitle: "Exotic Cocktail Fusion",
      desc: "A mesmerizing blend of premium spirits, infused with fresh tropical fruits and exotic spices, served chilled.",
    },
  ];

  const secondRowMenuItems = [
    {
      id: 7,
      src: HomeFood7,
      subtitle: "Family Platter Extravaganza",
      desc: "A generous platter filled with an assortment of our finest selections, perfect for sharing with loved ones.",
    },
    {
      id: 8,
      src: HomeFood8,
      subtitle: "Golden Mango Bliss",
      desc: "Luscious mango slices paired with a golden cream, a true dessert masterpiece that's as delightful to the eye as it is to the palate.",
    },
    {
      id: 9,
      src: HomeFood9,
      subtitle: "Fancy Chocolate Decadence",
      desc: "Rich, indulgent chocolate cake, layered with a luxurious chocolate ganache, and adorned with edible gold leaf for that extra touch of elegance.",
    },
  ];

  return (
    <div className="px-16">
      <h3 className="mb-8">See Some Of Our Best Menu Items</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        {menuItems.map((item) => (
          <div key={item.id} className="flex flex-col overflow-hidden h-full">
            <Link to="/menu">
              <img
                src={item.src}
                alt={`Menu Item ${item.id}`}
                className="w-full h-48 object-cover rounded-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:scale-105"
              />
            </Link>
            <div className="flex-1 py-4 flex flex-col">
              <div className="font-bold text-xl mb-2">{item.subtitle}</div>
              <p className="text-gray-600 text-base text-justify flex-1">
                {item.desc}
              </p>
              <div className="mt-4">
                <Link
                  to="/menu"
                  className="group inline-flex items-center text-black"
                >
                  See menu
                  <span className="ml-2 transition-transform transform group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 flex flex-col overflow-hidden h-full">
          <Link
            to="/menu"
            style={{ display: "block", width: "100%", height: "100%" }}
          >
            <img
              src={secondRowMenuItems[0].src}
              alt={`Menu Item ${secondRowMenuItems[0].id}`}
              className="w-full md:h-full h-48 object-cover rounded-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:scale-105"
            />
          </Link>
          <div className="py-4 flex flex-col">
            <div className="font-bold text-xl mb-2">
              {secondRowMenuItems[0].subtitle}
            </div>
            <p className="text-gray-600 text-base text-justify flex-1">
              {secondRowMenuItems[0].desc}
            </p>
            <div className="mt-4">
              <Link
                to="/menu"
                className="group inline-flex items-center text-black"
              >
                See menu
                <span className="ml-2 transition-transform transform group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col col-span-1 space-y-8">
          {secondRowMenuItems.slice(1).map((item) => (
            <div
              key={item.id}
              className="flex-1 flex flex-col overflow-hidden h-full"
            >
              <Link to="/menu">
                <img
                  src={item.src}
                  alt={`Menu Item ${item.id}`}
                  className="w-full h-48 object-cover rounded-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:scale-105"
                />
              </Link>
              <div className="py-4 flex flex-col">
                <div className="font-bold text-xl mb-2">{item.subtitle}</div>
                <p className="text-gray-600 text-base text-justify flex-1">
                  {item.desc}
                </p>
                <div className="mt-4">
                  <Link
                    to="/menu"
                    className="group inline-flex items-center text-black"
                  >
                    See menu
                    <span className="ml-2 transition-transform transform group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomeMenuExcerpt;
