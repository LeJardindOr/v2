import React from "react";
import { Link } from "react-router-dom";
import AboutUsImg from "../assets/images/about-us.jpg";
import { MdOutlineEco } from "react-icons/md";
import { BiFoodMenu } from "react-icons/bi";
import { TbMeat } from "react-icons/tb";
import { AiOutlineStar } from "react-icons/ai";

function About() {
  return (
    <div className="container mx-auto mt-5 p-4">
      <div className="flex flex-wrap m-16">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 md:pr-6">
          <h3 className="mb-2">About Us</h3>
          <h4 className="text-lg mb-4">
            Exquisite Dining in the Heart of the City
          </h4>
          <p className="mt-1 text-justify">
            Nestled in the bustling heart of the city, Le Jardin d'Or offers an
            escape to a world of refined elegance and unmatched culinary
            excellence. Our restaurant is a tribute to the timeless traditions
            of French cuisine, reimagined with a modern twist. Each dish is a
            masterpiece, crafted with the finest locally sourced ingredients and
            an unwavering commitment to quality.
            <br />
            <br />
            At Le Jardin d'Or, we believe that dining is not just about food;
            it's an experience. From the moment you step through our doors, you
            are transported to a place where every detail is curated for your
            enjoyment. Our lush, garden-inspired interiors provide the perfect
            backdrop for intimate dinners, special celebrations, or a leisurely
            evening of indulgence.
            <br />
            <br />
            Our dedicated team, led by renowned chefs, is passionate about
            creating unforgettable moments for our guests. Whether it's a
            perfectly paired wine or a custom-designed menu for your event, we
            go above and beyond to ensure your visit is memorable.
            <br />
            <br />
            We invite you to join us at Le Jardin d'Or, where every visit is a
            journey to the heart of culinary artistry.
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
        <h3 className="text-left mb-6">Our Commitments</h3>
        <div className="flex flex-wrap -mx-3">
          <div className="w-full md:w-1/2 px-3 mb-6">
            <MdOutlineEco alt="Eco-friendly" className="block" size={24} />
            <h4 className="mt-2">Eco-friendly Practices</h4>
            <p className="mt-1 max-w-lg text-justify">
              We prioritize sustainability in our operations, from sourcing
              ingredients to minimizing waste. Our eco-friendly approach extends
              to all aspects of our business, including energy use, water
              conservation, and waste reduction.
            </p>
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6">
            <BiFoodMenu alt="Diverse Menu" className="block" size={24} />
            <h4 className="mt-2">Diverse Menu</h4>
            <p className="mt-1 max-w-lg text-justify">
              Our menu caters to various dietary needs, ensuring everyone can
              enjoy our culinary creations. From vegan to gluten-free options,
              we strive to accommodate all preferences with our diverse and
              flavorful selections.
            </p>
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6">
            <TbMeat alt="Fresh Foods" className="block" size={24} />
            <h4 className="mt-2">Fresh Foods</h4>
            <p className="mt-1 max-w-lg text-justify">
              We use only the freshest, highest quality ingredients to prepare
              our dishes. Our commitment to freshness not only enhances the
              taste but also ensures the nutritional value of every meal we
              serve.
            </p>
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6">
            <AiOutlineStar
              alt="Unmatched Quality"
              className="block"
              size={24}
            />
            <h4 className="mt-2">Unmatched Quality</h4>
            <p className="mt-1 max-w-lg text-justify">
              Our commitment to excellence is evident in every dish we serve,
              from presentation to flavor. We go above and beyond to ensure that
              each dining experience is memorable and of the highest quality.
            </p>
          </div>
        </div>
      </div>

      <div className="m-16">
        <h3>Come Visit Us</h3>
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
            Book a reservation
          </button>
        </Link>
      </div>
    </div>
  );
}

export default About;
