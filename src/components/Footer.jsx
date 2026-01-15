import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-full py-4 bg-black-100/55 text-white flex justify-center gap-6">
      <a
        href="https://github.com/arham-729"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub size={24} />
      </a>

      <a
        href="https://www.linkedin.com/in/arham-haroon-7a6bb8243/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin size={24} />
      </a>
    </footer>
  );
};

export default Footer;
