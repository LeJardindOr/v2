import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { MdOutlineEco } from "react-icons/md";
import { BiFoodMenu } from "react-icons/bi";
import { TbMeat } from "react-icons/tb";
import { AiOutlineStar } from "react-icons/ai";
import AboutUsImg from "../assets/images/about-us.jpg";

function About() {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto mt-5 p-4">
      <div className="flex flex-wrap m-16">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 md:pr-6">
          <h3 className="mb-2">{t("aboutUs")}</h3>
          <h4 className="text-lg mb-4">{t("exquisiteDiningSubtitle")}</h4>
          <p className="mt-1 text-justify">
            {t("restaurantTributeDescription")}
            <br />
            <br />
            {t("diningExperienceDescription")}
            <br />
            <br />
            {t("diverseMenuDescription")}
            <br />
            <br />
            {t("freshFoodsDescription")}
          </p>
        </div>
        <div className="w-full md:w-1/2 px-3">
          <img
            src={AboutUsImg}
            alt="About Us image"
            className="w-full rounded-lg shadow-md"
          />
        </div>
      </div>

      <div className="m-16">
        <h3 className="text-left mb-6">{t("OurCommitments")}</h3>
        <div className="flex flex-wrap -mx-3">
          <div className="w-full md:w-1/2 px-3 mb-6">
            <MdOutlineEco alt="Eco-friendly" className="block" size={24} />
            <h4 className="mt-2">{t("EcofriendlyPractices")}</h4>
            <p className="mt-1 max-w-lg text-justify">
              {t("EcofriendlyPracticesDescription")}
            </p>
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6">
            <BiFoodMenu alt="Diverse Menu" className="block" size={24} />
            <h4 className="mt-2">{t("DiverseMenu")}</h4>
            <p className="mt-1 max-w-lg text-justify">
              {t("DiverseMenuDescription")}
            </p>
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6">
            <TbMeat alt="Fresh Foods" className="block" size={24} />
            <h4 className="mt-2">{t("FreshFoods")}</h4>
            <p className="mt-1 max-w-lg text-justify">
              {t("FreshFoodsDescription")}
            </p>
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6">
            <AiOutlineStar
              alt="Unmatched Quality"
              className="block"
              size={24}
            />
            <h4 className="mt-2">{t("UnmatchedQuality")}</h4>
            <p className="mt-1 max-w-lg text-justify">
              {t("UnmatchedQualityDescription")}
            </p>
          </div>
        </div>
      </div>

      <div className="m-16">
        <h3>{t("ComeVisitUs")}</h3>
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

      <div className="flex justify-center items-center mb-8">
        <Link to="/reserve">
          <button className="bg-dark-green hover:bg-light-green text-white py-3 px-32 rounded-lg transition duration-200 ease-in-out">
            {t("BookAReservation")}
          </button>
        </Link>
      </div>
    </div>
  );
}

export default About;
