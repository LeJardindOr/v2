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
    <footer
      className="bg-gradient text-dark mt-auto px-4 md:px-16 pt-5 pb-3"
      role="contentinfo"
    >
      <div className="flex flex-col md:flex-row justify-center items-center text-center md:text-left">
        <div className="flex flex-col mb-4 w-full">
          <h2 tabIndex="0">Le Jardin d&#39;Or</h2>
          <p className="text-muted text-sm">
            <i>© 2001-2024, Le Jardin d&#39;Or, Inc. {t("OrAffiliates")}</i>
          </p>
        </div>
        <div className="flex justify-center items-center mb-4 w-full">
          <div
            className="flex items-center justify-center"
            role="navigation"
            aria-label="Social Media Links"
          >
            <FaFacebookF
              className="text-black mr-2.5 hover:text-[#FFD700]"
              size={36}
              style={{ transition: "color 0.3s" }}
              aria-label="Facebook"
              tabIndex="0"
            />
            <FaLinkedinIn
              className="text-black mr-2.5 hover:text-[#FFD700]"
              size={36}
              style={{ transition: "color 0.3s" }}
              aria-label="LinkedIn"
              tabIndex="0"
            />
            <FaTwitter
              className="text-black mr-2.5 hover:text-[#FFD700]"
              size={36}
              style={{ transition: "color 0.3s" }}
              aria-label="Twitter"
              tabIndex="0"
            />
            <FaInstagram
              className="text-black mr-2.5 hover:text-[#FFD700]"
              size={36}
              style={{ transition: "color 0.3s" }}
              aria-label="Instagram"
              tabIndex="0"
            />
            <FaYoutube
              className="text-black hover:text-[#FFD700]"
              size={36}
              style={{ transition: "color 0.3s" }}
              aria-label="YouTube"
              tabIndex="0"
            />
          </div>
        </div>
        <div className="flex flex-col mb-4 mt-2 w-full">
          <ul className="text-small md:ml-auto" role="list">
            <li role="listitem">
              <p className="text-muted text-sm">
                <a
                  href="mailto:support@lejardindor.com"
                  className="text-muted no-underline font-medium"
                  aria-label={t("Email")}
                >
                  {t("Email")}:{" "}
                  <i className="text-[#FFD700]">support@lejardindor.com</i>
                </a>
              </p>
            </li>
            <li role="listitem">
              <p className="text-muted text-sm font-medium">
                {t("Phone")}: <i className="text-[#FFD700]">1-800-JARDIN</i>
              </p>
            </li>
            <li role="listitem">
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
