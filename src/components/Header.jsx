import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const navItems = [
    {
      title: "Home",
      link: "/home",
      id:'1'
    },
    {
      title: "About",
      link: "/about",
      id:'2'
    },
  ];

  return (
    <div className="flex justify-between px-6 bg-gray-300 h-18 pt-4   ">
      <div>Humble</div>
      <div className="flex gap-3  ">
        {navItems.map((item) => 
          <div key={item.id}>
            {" "}
            <a to={item.link}> {item.title} </a>{" "}
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
