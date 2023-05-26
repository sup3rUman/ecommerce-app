import React from "react";
import ItemsContainer from "../footerSubComponents/ItemsContainer";
import SocialLogos from "../footerSubComponents/SocialLogos";
import { Logos } from "../footerSubComponents/Menus";

const Footer = () => {
  return (
    <footer className="bg-sky-400 text-white">
 <ItemsContainer />
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-x-20 gap-y-5
      text-center pt-2 text-gray-900 text-sm pb-8"
      >
        <span>&copy; {new Date().getFullYear()} Powered by Codebakes</span>
        <SocialLogos Logos={Logos} />
      </div>
    </footer>
  );
};

export default Footer;
