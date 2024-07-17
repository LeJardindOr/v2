import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import ConfirmationPopup from "./ConfirmationPopup";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ReserveImg from "../assets/images/reserve.jpg";
import Food1 from "../assets/images/Food1.jpg";
import Food2 from "../assets/images/Food2.jpg";
import Food3 from "../assets/images/Food3.jpg";

function Reserve() {
  const { t } = useTranslation();
  const [startDate, setStartDate] = useState(new Date());
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [seatings, setSeatings] = useState("");
  const [isConfirmationPopupOpen, setIsConfirmationPopupOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      setIsConfirmationPopupOpen(true);
    }
  };

  const isFormValid = name && email && seatings && startDate;

  return (
    <div className="max-w-screen-4xl mx-auto">
      <div className="container mx-auto mt-5 p-8">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full md:w-1/2">
            <img
              src={ReserveImg}
              alt={t("ContactImageAlt")}
              className="overflow-hidden rounded-lg shadow-md w-full h-full object-cover"
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <h3 className="mb-2">{t("BookAReservation")}</h3>
            <h4 className="text-lg mb-4">{t("ReservationInstructions")}</h4>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  {t("Name")}
                </label>
                <input
                  type="text"
                  className="mt-1 p-1 block w-full rounded-lg border border-gray-300 focus:border-black"
                  id="name"
                  placeholder="John Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  aria-required="true"
                  aria-label={t("Name")}
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  {t("Email")}
                </label>
                <input
                  type="email"
                  className="mt-1 p-1 block w-full rounded-lg border border-gray-300 focus:border-black"
                  id="email"
                  placeholder="john.doe@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  aria-required="true"
                  aria-label={t("Email")}
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="seatings"
                  className="block text-sm font-medium text-gray-700"
                >
                  {t("Seatings")}
                </label>
                <input
                  type="number"
                  className="mt-1 p-1 block w-full rounded-lg border border-gray-300 focus:border-black"
                  id="seatings"
                  placeholder="2"
                  value={seatings}
                  onChange={(e) => setSeatings(e.target.value)}
                  required
                  aria-required="true"
                  aria-label={t("Seatings")}
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="startDate"
                  className="block text-sm font-medium text-gray-700"
                >
                  {t("Date")}
                </label>
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  className="mt-1 p-1 block w-full rounded-lg border border-gray-300 focus:border-black"
                  required
                  aria-required="true"
                  aria-label={t("Date")}
                />
              </div>
              <button
                type="submit"
                className={`flex items-center justify-center w-full py-2 text-white bg-dark-green hover:bg-light-green rounded-lg transition duration-200 ease-in-out ${
                  !isFormValid ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={!isFormValid}
                aria-disabled={!isFormValid}
              >
                {t("Submit")}
              </button>
            </form>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-10 pt-24 pb-8">
          <div className="aspect-square overflow-hidden rounded-lg">
            <img
              src={Food1}
              alt={t("Food1Alt")}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-square overflow-hidden rounded-lg">
            <img
              src={Food2}
              alt={t("Food2Alt")}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-square overflow-hidden rounded-lg">
            <img
              src={Food3}
              alt={t("Food3Alt")}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <ConfirmationPopup
          isOpen={isConfirmationPopupOpen}
          onClose={() => setIsConfirmationPopupOpen(false)}
          message={[
            { label: t("Name"), value: name },
            { label: t("Email"), value: email },
            { label: t("Date"), value: startDate },
            { label: t("Seatings"), value: seatings },
          ]}
        />
      </div>
    </div>
  );
}

export default Reserve;
