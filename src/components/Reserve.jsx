import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ReserveImg from "../assets/images/reserve.jpg";
import Food1 from "../assets/images/Food1.jpg";
import Food2 from "../assets/images/Food2.jpg";
import Food3 from "../assets/images/Food3.jpg";

function Reserve() {
  const [startDate, setStartDate] = React.useState(new Date());

  return (
    <div className="container mx-auto mt-5 p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="w-full">
          {" "}
          <div className="overflow-hidden rounded-lg shadow-md">
            {" "}
            <img
              src={ReserveImg}
              alt="Contact image"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="px-3 mb-6 md:mb-0">
          <h3 className="mb-2">Book a Reservation</h3>
          <h4 className="text-lg mb-4">
            Fill the information boxes below, and we will get you set up with a
            table.
          </h4>
          <form>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                className="mt-1 p-1 block w-full rounded-lg border border-gray-300 focus:border-black"
                id="name"
                placeholder="John Doe"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                className="mt-1 p-1 block w-full rounded-lg border border-gray-300 focus:border-black"
                id="email"
                placeholder="john.doe@example.com"
              />
            </div>
            <div className="flex justify-between gap-4 mb-6">
              <div className="flex-1">
                <label
                  htmlFor="date-time"
                  className="block text-sm font-medium text-gray-700"
                >
                  Date and Time
                </label>
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  showTimeSelect
                  dateFormat="Pp"
                  className="mt-1 p-1 block w-full rounded-lg border border-gray-300 focus:border-black"
                />
              </div>
              <div className="flex-1">
                <label
                  htmlFor="seatings"
                  className="block text-sm font-medium text-gray-700"
                >
                  Number of Seatings
                </label>
                <input
                  type="number"
                  className="mt-1 p-1 block w-full rounded-lg border border-gray-300 focus:border-black"
                  id="seatings"
                  placeholder="4"
                />
              </div>
            </div>
            <button
              type="submit"
              className="flex items-center justify-center w-full py-2 text-white bg-dark-green hover:bg-light-green rounded-lg transition duration-200 ease-in-out"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-10 pt-24 pb-8">
        <div className="aspect-square overflow-hidden rounded-lg">
          <img
            src={Food1}
            alt="Food 1"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="aspect-square overflow-hidden rounded-lg">
          <img
            src={Food2}
            alt="Food 2"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="aspect-square overflow-hidden rounded-lg">
          <img
            src={Food3}
            alt="Food 3"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default Reserve;
