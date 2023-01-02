import React from "react";
import AOS from "aos";

import "aos/dist/aos.css";

import client1 from "../assets/clients/client-1.png";
import client2 from "../assets/clients/client-2.png";
import client3 from "../assets/clients/client-3.png";
import client4 from "../assets/clients/client-4.png";
import client5 from "../assets/clients/client-5.png";
import client6 from "../assets/clients/client-6.jpg";

AOS.init();
const Brand = () => {
  return (
    <div className="py-3 pt-6 bg-[#f3f5fa] flex justify-center">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-8 lg:gap-12 px-10 w-[350px] md:w-[68%] lg:w-[80%]" data-aos='zoom-in' data-aos-delay='300' data-aos-duration='1500'>
        <img className="transition-all grayscale hover:grayscale-0 hover:scale-110" src={client1} alt="client1" />
        <img className="transition-all grayscale hover:grayscale-0 hover:scale-110" src={client2} alt="client2" />
        <img className="transition-all grayscale hover:grayscale-0 hover:scale-110" src={client3} alt="client3" />
        <img className="transition-all grayscale hover:grayscale-0 hover:scale-110" src={client4} alt="client4" />
        <img className="transition-all grayscale hover:grayscale-0 hover:scale-110" src={client5} alt="client5" />
        <img className="transition-all grayscale hover:grayscale-0 hover:scale-110" src={client6} alt="client6" />
      </div>
    </div>
  );
};

export default Brand;
