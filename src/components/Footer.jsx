import React from "react";
import { useTranslation } from "react-i18next";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-gradient text-dark mt-auto px-4 md:px-16 pt-5 pb-3">
      <div className="flex flex-col md:flex-row justify-center items-center text-center md:text-left">
        <div className="flex flex-col mb-4 w-full">
          <h2>Le Jardin d&#39;Or</h2>
          <p className="text-muted text-sm">
            <i>© 2001-2024, Le Jardin d&#39;Or, Inc. {t("OrAffiliates")}</i>
          </p>
        </div>
        <div className="flex justify-center items-center mb-4 w-full">
          <div className="flex items-center justify-center">
            <FaFacebookF
              className="text-black mr-2.5 hover:text-[#FFD700]"
              size={36}
              style={{ transition: "color 0.3s" }}
            />
            <FaLinkedinIn
              className="text-black mr-2.5 hover:text-[#FFD700]"
              size={36}
              style={{ transition: "color 0.3s" }}
            />
            <FaTwitter
              className="text-black mr-2.5 hover:text-[#FFD700]"
              size={36}
              style={{ transition: "color 0.3s" }}
            />
            <FaInstagram
              className="text-black mr-2.5 hover:text-[#FFD700]"
              size={36}
              style={{ transition: "color 0.3s" }}
            />
            <FaYoutube
              className="text-black hover:text-[#FFD700]"
              size={36}
              style={{ transition: "color 0.3s" }}
            />
          </div>
        </div>
        <div className="flex flex-col mb-4 mt-2 w-full">
          <ul className="text-small md:ml-auto">
            <li>
              <p className="text-muted text-sm">
                <a
                  href="mailto:support@lejardindor.com"
                  className="text-muted no-underline font-medium"
                >
                  {t("Email")}:{" "}
                  <i className="text-[#FFD700]">support@lejardindor.com</i>
                </a>
              </p>
            </li>
            <li>
              <p className="text-muted text-sm font-medium">
                {t("Phone")}: <i className="text-[#FFD700]">1-800-JARDIN</i>
              </p>
            </li>
            <li>
              <p className="text-muted text-sm font-medium">
                {t("Address")}:{" "}
                <i className="text-[#FFD700]">123 Road Dr, A1A 1A1</i>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
