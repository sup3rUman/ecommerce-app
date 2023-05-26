import React from "react";

const SocialLogos = ({ Logos }) => {
  return (
    <div className="text-teal-500 pr-2">
      {Logos.map((logo) => (
        <span
          key={logo.name}
          className="p-2 cursor-pointer inline-flex items-center
        rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-teal-500
        duration-300 "
        >
         <img src={`../images/${logo.name}.svg`} alt="" />
        </span>
      ))}
    </div>
  );
};

export default SocialLogos;
