import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

function Reviews() {
  const { t } = useTranslation();
  const reviews = [
    {
      quote: t("quote1"),
      name: "Emily Johnson",
    },
    {
      quote: t("quote2"),
      name: "Michael Brown",
    },
    {
      quote: t("quote3"),
      name: "Sarah Davis",
    },
    {
      quote: t("quote4"),
      name: "James Wilson",
    },
    {
      quote: t("quote5"),
      name: "Olivia Martin",
    },
    {
      quote: t("quote6"),
      name: "Liam Thompson",
    },
    {
      quote: t("quote7"),
      name: "Sophia Carter",
    },
    {
      quote: t("quote8"),
      name: "Ethan Taylor",
    },
    {
      quote: t("quote9"),
      name: "Charlotte Green",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [animate, setAnimate] = useState(true);
  const [displayCount, setDisplayCount] = useState(
    window.innerWidth > 768 ? 3 : 1
  ); // 3 reviews for desktop mode, 1 review for mobile

  useEffect(() => {
    const handleResize = () => {
      setDisplayCount(window.innerWidth > 768 ? 3 : 1);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const changeReview = (direction) => {
    setAnimate(false);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => {
        let newIndex;
        if (direction === "next") {
          newIndex =
            prevIndex + displayCount < reviews.length
              ? prevIndex + displayCount
              : 0;
        } else {
          newIndex =
            prevIndex - displayCount >= 0
              ? prevIndex - displayCount
              : reviews.length -
                (reviews.length % displayCount || displayCount);
        }
        return newIndex;
      });
      setTimeout(() => setAnimate(true), 300);
    }, 300);
  };

  return (
    <div className="mx-16 mb-16">
      <h3 className="mb-8">{t("DontJustTakeItFromUs")}</h3>
      <div className="flex justify-between items-center">
        <button
          onClick={() => changeReview("prev")}
          className="text-2xl sm:text-4xl mr-2 sm:mr-8 transition-transform transform hover:scale-125"
          aria-label={t("PreviousReview")}
        >
          &#8592;
        </button>
        <div className="flex flex-grow space-x-4">
          {reviews
            .slice(currentIndex, currentIndex + displayCount)
            .map((review, index) => (
              <div
                key={index}
                className={`flex-1 flex flex-col justify-between p-4 border rounded-lg transition duration-500 ease-in-out shadow-lg hover:shadow-none ${
                  animate ? "opacity-100" : "opacity-0"
                }`}
                aria-live="polite"
              >
                <p>"{review.quote}"</p>
                <p className="mt-4 text-right">- {review.name}</p>
              </div>
            ))}
        </div>
        <button
          onClick={() => changeReview("next")}
          className="text-2xl sm:text-4xl ml-2 sm:ml-8 transition-transform transform hover:scale-125"
          aria-label={t("NextReview")}
        >
          &#8594;
        </button>
      </div>
    </div>
  );
}

export default Reviews;
