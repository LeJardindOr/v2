import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import HomeMenuExcerpt from "./HomeMenuExcerpt";
import Reviews from "./Reviews";
import HeroImg from "../assets/images/hero.jpg";

function Home() {
  const { t } = useTranslation();

  return (
    <>
      <div className="relative pb-5 px-5 rounded-lg overflow-hidden bg-gray-900 m-16">
        <div className="absolute inset-0 z-0">
          <img
            src={HeroImg}
            alt="Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative z-10 mb-24 mt-32 flex flex-col items-center justify-center h-full">
          <h1 className="text-center mb-4 text-6xl">Le Jardin d'OR</h1>
          <p className="text-white text-center mt-2">{t("DiningExperience")}</p>
          <Link to="/reserve">
            <button className="bg-dark-green hover:bg-light-green text-white py-3 px-16 mt-16 rounded-lg transition duration-200 ease-in-out">
              {t("Reservation")}
            </button>
          </Link>
        </div>
      </div>

      <HomeMenuExcerpt />

      <div className="m-16">
        <h3 className="mb-8">{t("Location")}</h3>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2800.215222161104!2d-75.6938464237709!3d45.425162671073366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce05010b10aa09%3A0xadb5eb264eeb2625!2sCF%20Rideau%20Centre!5e0!3m2!1sen!2sse!4v1720020750253!5m2!1sen!2sse"
          width="100%"
          height="450"
          className="mx-auto"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <Reviews />
    </>
  );
}

export default Home;
