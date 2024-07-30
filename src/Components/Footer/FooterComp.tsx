import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link, Navigate, useNavigate } from "react-router-dom";

export const FooterComp = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full flex justify-center items-center ">
      <footer className="flex w-full justify-center items-center mt-5 flex-col">
        <p>Made with ❤️ in 🇨🇭</p>
        <div className="flex mt-3">
          <Link
            className=" text-xl text-blue-500"
            to={"https://www.linkedin.com/in/nugzar-nugo-marjanidze-76616228b/"}
          >
            <FaLinkedin />
          </Link>

          <Link
            className=" text-xl text-black ml-2"
            to={"https://github.com/nuuu-gooo"}
          >
            <FaGithub />
          </Link>
        </div>
      </footer>
    </div>
  );
};
