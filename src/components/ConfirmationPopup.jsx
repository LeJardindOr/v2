import React from "react";
import { useTranslation } from "react-i18next";
import { FaCheck } from "react-icons/fa";

function ConfirmationPopup({ isOpen, onClose, message }) {
  const { t } = useTranslation();
  if (!isOpen) return null;

  const hasDate = message.some((item) => item.label === "Date");
  const headerText = hasDate ? t("reservationConfirmed") : t("messageSent");

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby="confirmation-header"
    >
      <div className="bg-white p-6 rounded-lg shadow-lg w-1/2 max-w-3xl">
        <div className="text-center mb-4">
          <p
            id="confirmation-header"
            className="text-3xl font-bold"
            tabIndex="0"
          >
            {headerText}
          </p>
          <FaCheck
            className="mt-2 text-5xl text-dark-green mx-auto"
            aria-hidden="true"
          />
        </div>
        {message && (
          <div className="mt-4">
            <ul className="mx-3">
              {message.map((item, index) => (
                <li key={index} className="mb-1 break-words" tabIndex="0">
                  <strong>{item.label}:</strong>{" "}
                  {item.value instanceof Date
                    ? item.value.toLocaleString()
                    : item.value}
                </li>
              ))}
            </ul>
          </div>
        )}
        <div className="flex justify-center mt-8">
          <button
            onClick={onClose}
            className="bg-dark-green hover:bg-light-green text-white py-3 px-16 rounded-lg transition duration-200 ease-in-out flex items-center justify-center"
            aria-label={t("Close")}
          >
            {t("Close")}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmationPopup;
