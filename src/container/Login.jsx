import React from "react";
import { Link } from "react-router-dom";

import Logo from "../assets/logo2.png";
import LoginInput from "../components/LoginInput";

const Login = () => {
  return (
    <div className='h-screen w-full bg-cover bg-center bg-fixed bg-[url("https://images.pexels.com/photos/34221/violin-musical-instrument-music-sound.jpg?cs=srgb&dl=pexels-pixabay-34221.jpg&fm=jpg")]'>
      <div className='bg-black/80 w-full h-screen px-8 py-3'>
        <Link to='/'> <img className="w-[240px]" src={Logo} alt="Logo" /> </Link>
        <LoginInput />
        <span className="flex justify-center -mt-4 text-white text-center">© 2022 Real Jammers. All Rights Reserved</span>
      </div>
    </div>
  );
};

export default Login;
