import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
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
  const { t } = useTranslation();

  const menuItems = [
    {
      id: 1,
      src: HomeFood1,
      subtitle: t("SalmonRoyaleSubtitle"),
      desc: t("SalmonRoyaleDesc"),
    },
    {
      id: 2,
      src: HomeFood2,
      subtitle: t("GardenFreshSaladSubtitle"),
      desc: t("GardenFreshSaladDesc"),
    },
    {
      id: 3,
      src: HomeFood3,
      subtitle: t("ImperialChickenSubtitle"),
      desc: t("ImperialChickenDesc"),
    },
    {
      id: 4,
      src: HomeFood4,
      subtitle: t("BarbecueRibFeastSubtitle"),
      desc: t("BarbecueRibFeastDesc"),
    },
    {
      id: 5,
      src: HomeFood5,
      subtitle: t("ShrimpPastaDelightSubtitle"),
      desc: t("ShrimpPastaDelightDesc"),
    },
    {
      id: 6,
      src: HomeFood6,
      subtitle: t("ExoticCocktailFusionSubtitle"),
      desc: t("ExoticCocktailFusionDesc"),
    },
  ];

  const secondRowMenuItems = [
    {
      id: 7,
      src: HomeFood7,
      subtitle: t("FamilyPlatterExtravaganzaSubtitle"),
      desc: t("FamilyPlatterExtravaganzaDesc"),
    },
    {
      id: 8,
      src: HomeFood8,
      subtitle: t("GoldenMangoBlissSubtitle"),
      desc: t("GoldenMangoBlissDesc"),
    },
    {
      id: 9,
      src: HomeFood9,
      subtitle: t("FancyChocolateDecadenceSubtitle"),
      desc: t("FancyChocolateDecadenceDesc"),
    },
  ];

  return (
    <div className="px-16">
      <h3 className="mb-8">{t("BestMenuItems")}</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        {menuItems.map((item) => (
          <Link to="/menu">
            <div key={item.id} className="flex flex-col overflow-hidden h-full">
              <img
                src={item.src}
                alt={`Menu Item ${item.id}`}
                className="w-full h-48 object-cover rounded-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:scale-105"
              />
              <div className="flex-1 py-4 flex flex-col">
                <div className="font-bold text-xl mb-2">{item.subtitle}</div>
                <p className="text-gray-600 text-base text-justify flex-1">
                  {item.desc}
                </p>
                <div className="mt-4">
                  <div className="group inline-flex items-center text-black">
                    {t("SeeMenu")}
                    <span className="ml-2 transition-transform transform group-hover:translate-x-1">
                      →
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
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
          <Link to="/menu">
            <div className="py-4 flex flex-col">
              <div className="font-bold text-xl mb-2">
                {secondRowMenuItems[0].subtitle}
              </div>
              <p className="text-gray-600 text-base text-justify flex-1">
                {secondRowMenuItems[0].desc}
              </p>
              <div className="mt-4">
                <div className="group inline-flex items-center text-black">
                  {t("SeeMenu")}
                  <span className="ml-2 transition-transform transform group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="flex flex-col col-span-1 space-y-8">
          {secondRowMenuItems.slice(1).map((item) => (
            <Link to="/menu">
              <div
                key={item.id}
                className="flex-1 flex flex-col overflow-hidden h-full"
              >
                <img
                  src={item.src}
                  alt={`Menu Item ${item.id}`}
                  className="w-full h-48 object-cover rounded-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:scale-105"
                />
                <div className="py-4 flex flex-col">
                  <div className="font-bold text-xl mb-2">{item.subtitle}</div>
                  <p className="text-gray-600 text-base text-justify flex-1">
                    {item.desc}
                  </p>
                  <div className="mt-4">
                    <div className="group inline-flex items-center text-black">
                      {t("SeeMenu")}
                      <span className="ml-2 transition-transform transform group-hover:translate-x-1">
                        →
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomeMenuExcerpt;
