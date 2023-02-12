import React from "react";
import HeroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import {Link} from 'react-scroll'

const Home = () => {
  return (
    <div name="home" className="h-screen w-full pt-36 bg-gradient-to-b from-black via-black to-gray-800 ">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full pt-5">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">I'm Front-End Developer</h2>
          <p className="text-gray-500 py-4 max-w-md">
            Career switcher with a passion for web development. have strong foundation in HTML, CSS, JavaScript, and frameworks such as React, demonstrate my commitment to mastering the technical aspects of front-end development.
          </p>

          <div>
            <Link to="portfolio" smooth duration={500} className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-600 to-blue-600">
              Portofolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={20} />
              </span>
            </Link>
          </div>
        </div>
        <div className="pt-5">
          <img src={HeroImage} alt="my profile" className="rounded-2xl mx-auto w-2/3 md:w-full" />
        </div>
      </div>
    </div>
  );
};

export default Home;
