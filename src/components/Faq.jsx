import { useTranslation } from "react-i18next";

function Faq() {
  const { t } = useTranslation();

  const faqs = [
    {
      question: t("faqQuestion1"),
      answer: t("faqAnswer1"),
    },
    {
      question: t("faqQuestion2"),
      answer: t("faqAnswer2"),
    },
    {
      question: t("faqQuestion3"),
      answer: t("faqAnswer3"),
    },
  ];

  /*
    // we dont need a whole lot of faqs, so ill cut these out for now
    {
      question: t("faqQuestion4"),
      answer: t("faqAnswer4"),
    },
    {
      question: t("faqQuestion5"),
      answer: t("faqAnswer5"),
    },
  */

  return (
    <div className="mt-5 mx-16 mb-8">
      <h3 className="font-bold mb-4" tabIndex="0">
        {t("faqTitle")}
      </h3>
      <div className="flex flex-col" role="list">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="w-full mb-6 p-4 border rounded-lg transition duration-500 ease-in-out shadow-md hover:shadow-none"
            role="listitem"
          >
            <h4 className="text-lg text-black font-semibold mb-2" tabIndex="0">
              {faq.question}
            </h4>
            <p className="text-justify" tabIndex="0">
              {faq.answer}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Faq;
