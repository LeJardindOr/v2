import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import ContactImg from "../assets/images/contact.jpg";
import ConfirmationPopup from "./ConfirmationPopup";

function Contact() {
  const { t } = useTranslation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isConfirmationPopupOpen, setIsConfirmationPopupOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      setIsConfirmationPopupOpen(true);
    }
  };

  const isFormValid = name && email && message;

  return (
    <div className="container mx-auto mt-5 p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="px-3 mb-6 md:mb-0">
          <h3 className="mb-2">{t("ContactUs")}</h3>
          <h4 className="text-lg mb-4">{t("QuestionsCommentsFeedback")}</h4>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                {t("Name")}
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                {t("Email")}
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="message"
              >
                {t("Message")}
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <button
              type="submit"
              className={`flex items-center justify-center w-full py-2 text-white bg-dark-green hover:bg-light-green rounded-lg transition duration-200 ease-in-out ${
                !isFormValid ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={!isFormValid}
            >
              {t("Submit")}
            </button>
          </form>
        </div>
        <div className="w-full">
          <div className="overflow-hidden rounded-lg shadow-md">
            <img
              src={ContactImg}
              alt="Contact image"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      <ConfirmationPopup
        isOpen={isConfirmationPopupOpen}
        onClose={() => setIsConfirmationPopupOpen(false)}
        message={[
          { label: t("Name"), value: name },
          { label: t("Email"), value: email },
          { label: t("Message"), value: message },
        ]}
      />
    </div>
  );
}

export default Contact;
