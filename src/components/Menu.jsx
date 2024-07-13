import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { MdOutlineEco } from "react-icons/md";
import AppetizersImg from "../assets/images/HomeFood2.jpg";
import MainCourseImg from "../assets/images/HomeFood1.jpg";
import DessertsImg from "../assets/images/HomeFood9.jpg";
import DrinksImg from "../assets/images/HomeFood6.jpg";

const Appetizers = [
  {
    name: "Garden Salad",
    price: 5.99,
    vegan: true,
    vegetarian: true,
    ecoFriendly: true,
  },
  {
    name: "Bruschetta",
    price: 6.99,
    vegetarian: true,
    gluten: true,
    dairy: true,
    ecoFriendly: true,
  },
  {
    name: "Nachos",
    price: 8.99,
    vegetarian: true,
    dairy: true,
    ecoFriendly: true,
  },
  {
    name: "Spinach Artichoke Dip",
    price: 7.99,
    vegetarian: true,
    gluten: true,
    dairy: true,
  },
  {
    name: "Stuffed Jalapeños",
    price: 9.49,
    vegetarian: true,
    dairy: true,
    ecoFriendly: true,
  },
  {
    name: "Hummus Platter",
    price: 10.99,
    vegan: true,
    vegetarian: true,
    nuts: true,
    ecoFriendly: true,
  },
  {
    name: "Sweet Potato Fries",
    price: 6.99,
    vegan: true,
    vegetarian: true,
    ecoFriendly: true,
  },
];

const MainCourse = [
  {
    name: "Veggie Burger",
    price: 9.99,
    vegan: true,
    vegetarian: true,
    gluten: true,
    ecoFriendly: true,
  },
  {
    name: "Grilled Salmon",
    price: 15.99,
  },
  {
    name: "Chicken Curry",
    price: 12.99,
    gluten: true,
  },
  {
    name: "Quinoa Salad",
    price: 11.99,
    vegan: true,
    vegetarian: true,
    nuts: true,
    ecoFriendly: true,
  },
  {
    name: "Beef Stroganoff",
    price: 14.99,
    dairy: true,
  },
  {
    name: "Pasta Primavera",
    price: 13.99,
    vegetarian: true,
    gluten: true,
    dairy: true,
    ecoFriendly: true,
  },
  {
    name: "Mushroom Risotto",
    price: 12.99,
    vegetarian: true,
    dairy: true,
    ecoFriendly: true,
  },
  {
    name: "Lamb Kebabs",
    price: 16.99,
  },
  {
    name: "Tofu Stir-Fry",
    price: 11.99,
    vegan: true,
    vegetarian: true,
    soy: true,
    ecoFriendly: true,
  },
];

const Desserts = [
  {
    name: "Chocolate Cake",
    price: 6.99,
    vegetarian: true,
    gluten: true,
    dairy: true,
    ecoFriendly: true,
  },
  {
    name: "Fruit Sorbet",
    price: 5.99,
    vegan: true,
    vegetarian: true,
    ecoFriendly: true,
  },
  {
    name: "Apple Pie",
    price: 7.99,
    vegetarian: true,
    nuts: true,
    gluten: true,
    dairy: true,
  },
  {
    name: "Lemon Cheesecake",
    price: 8.99,
    vegetarian: true,
    gluten: true,
    dairy: true,
    ecoFriendly: true,
  },
  {
    name: "Vegan Brownie",
    price: 6.99,
    vegan: true,
    vegetarian: true,
    ecoFriendly: true,
  },
];

const Drinks = [
  {
    name: "Mineral Water",
    price: 1.99,
    vegan: true,
    vegetarian: true,
    ecoFriendly: true,
  },
  {
    name: "Organic Red Wine",
    price: 7.99,
    vegan: true,
    vegetarian: true,
    ecoFriendly: true,
  },
  {
    name: "Almond Milk Latte",
    price: 4.99,
    vegan: true,
    vegetarian: true,
    gluten: true,
    nuts: true,
    ecoFriendly: true,
  },
  {
    name: "Green Tea",
    price: 2.99,
    vegan: true,
    vegetarian: true,
  },
  {
    name: "Vintage Champagne",
    price: 99.99,
    vegan: false,
    vegetarian: true,
    ecoFriendly: true,
  },
  {
    name: "Single Malt Whisky",
    price: 15.99,
    vegan: true,
    vegetarian: true,
  },
  {
    name: "Organic Craft Gin",
    price: 12.99,
    vegan: true,
    vegetarian: true,
    ecoFriendly: true,
  },
  {
    name: "Premium Vodka",
    price: 9.99,
    vegan: true,
    vegetarian: true,
  },
  {
    name: "Rose Wine",
    price: 8.99,
    vegan: true,
    vegetarian: true,
    ecoFriendly: true,
  },
  {
    name: "Espresso Martini",
    price: 11.99,
    vegan: true,
    vegetarian: true,
    containsAlcohol: true,
  },
];

const Filters = [
  "Nut",
  "Dairy",
  "Eggs",
  "Soy",
  "Gluten",
  "Vegan",
  "Vegetarian",
];

function Menu() {
  const { t } = useTranslation();

  const Filters = [
    { key: "Nut", label: t("filterNut") },
    { key: "Dairy", label: t("filterDairy") },
    { key: "Eggs", label: t("filterEggs") },
    { key: "Soy", label: t("filterSoy") },
    { key: "Gluten", label: t("filterGluten") },
    { key: "Vegan", label: t("filterVegan") },
    { key: "Vegetarian", label: t("filterVegetarian") },
  ];

  const [searchQuery, setSearchQuery] = useState("");
  const [filterStates, setFilterStates] = useState(
    Filters.reduce((acc, filter) => ({ ...acc, [filter.key]: false }), {})
  );

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  const handleFilterChange = (event) => {
    const { name, checked } = event.target;
    setFilterStates((prev) => ({ ...prev, [name]: checked }));
  };

  const filterItems = (items) => {
    return items.filter((item) => {
      const matchesSearchQuery = item.name.toLowerCase().includes(searchQuery);
      const oppositeFilters = ["nut", "dairy", "eggs", "soy", "gluten"];
      const matchesFilters = Object.entries(filterStates).every(
        ([filter, isActive]) => {
          const isOppositeFilter = oppositeFilters.includes(
            filter.toLowerCase()
          );
          if (isActive) {
            const itemProperty = item[filter.toLowerCase()];
            return isOppositeFilter ? !itemProperty : itemProperty;
          }
          return true;
        }
      );
      return matchesSearchQuery && matchesFilters;
    });
  };

  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="mx-16 my-8">
        <h3 className="text-center">{t("Menu")}</h3>
        <div className="mt-2">
          <div className="flex flex-col items-center">
            <div className="relative mt-4 mb-2">
              <input
                type="text"
                placeholder={t("SearchMenuItems")}
                value={searchQuery}
                onChange={handleSearchChange}
                className="border-2 border-gray-300 bg-white h-10 pl-10 pr-16 rounded-lg text-sm focus:outline-none"
              />
              <svg
                className="w-4 h-4 absolute left-3 top-3"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </div>
            <div className="flex flex-wrap justify-center my-4">
              {Filters.map((filter) => (
                <label key={filter.key} className="flex items-center mr-4 mb-2">
                  <input
                    type="checkbox"
                    name={filter.key}
                    checked={filterStates[filter.key]}
                    onChange={handleFilterChange}
                    className="form-checkbox text-green-500 mr-2"
                  />
                  {filter.label}
                </label>
              ))}
            </div>
          </div>
          <div className="flex items-center my-1">
            <MdOutlineEco style={{ fontSize: "16px", color: "#4B5563" }} />{" "}
            <p className="ml-2 text-sm text-gray-600 font-medium">
              = {t("EcoFriendly")}
            </p>
          </div>
          <div className="section-container">
            <img
              src={AppetizersImg}
              alt="Appetizers"
              className="section-image rounded-lg mb-4"
            />
            <h4 className="section-title">{t("Apetizers")}</h4>
            <ul>
              {filterItems(Appetizers).map((item, index) => (
                <li key={index} className="menu-item">
                  <div className="menu-item-content">
                    <span className="menu-item-name pr-2">
                      {item.name}
                      {item.ecoFriendly && (
                        <MdOutlineEco className="eco-friendly-icon mx-1 inline-block" />
                      )}
                    </span>
                    <span className="menu-item-price pl-2">
                      ${item.price.toFixed(2)}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="section-container">
            <img
              src={MainCourseImg}
              alt="Main Course"
              className="section-image rounded-lg my-4"
            />
            <h4 className="section-title">{t("MainCourses")}</h4>
            <ul>
              {filterItems(MainCourse).map((item, index) => (
                <li key={index} className="menu-item">
                  <div className="menu-item-content">
                    <span className="menu-item-name pr-2">
                      {item.name}
                      {item.ecoFriendly && (
                        <MdOutlineEco className="eco-friendly-icon mx-1 inline-block" />
                      )}
                    </span>
                    <span className="menu-item-price pl-2">
                      ${item.price.toFixed(2)}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="section-container">
            <img
              src={DessertsImg}
              alt="Desserts"
              className="section-image rounded-lg my-4"
            />
            <h4 className="section-title">{t("Desserts")}</h4>
            <ul>
              {filterItems(Desserts).map((item, index) => (
                <li key={index} className="menu-item">
                  <div className="menu-item-content">
                    <span className="menu-item-name pr-2">
                      {item.name}
                      {item.ecoFriendly && (
                        <MdOutlineEco className="eco-friendly-icon mx-1 inline-block" />
                      )}
                    </span>
                    <span className="menu-item-price pl-2">
                      ${item.price.toFixed(2)}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="section-container">
            <img
              src={DrinksImg}
              alt="Drinks"
              className="section-image rounded-lg my-4"
            />
            <h4 className="section-title">{t("Drinks")}</h4>
            <ul>
              {filterItems(Drinks).map((item, index) => (
                <li key={index} className="menu-item">
                  <div className="menu-item-content">
                    <span className="menu-item-name pr-2">
                      {item.name}
                      {item.ecoFriendly && (
                        <MdOutlineEco className="eco-friendly-icon mx-1 inline-block" />
                      )}
                    </span>
                    <span className="menu-item-price pl-2">
                      ${item.price.toFixed(2)}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex justify-center">
            <Link to="/reserve">
              <button className="bg-dark-green hover:bg-light-green text-white py-3 px-16 mt-8 rounded-lg transition duration-200 ease-in-out">
                {t("BookAReservation")}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
