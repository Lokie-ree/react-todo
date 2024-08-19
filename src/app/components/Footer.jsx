import React from "react";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaGithubSquare,
} from "react-icons/fa";

import { MdGamepad } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="footer footer-center bg-primary text-primary-content items-center p-6 text-2xl">
      <aside className="grid-flow-col items-center mt-2">
        <MdGamepad />
        <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
      </aside>
      <nav className="flex flex-row text-4xl gap-4">
        <FaFacebookSquare />
        <FaInstagramSquare />
        <FaGithubSquare />
      </nav>
    </footer>
  );
};

export default Footer;
