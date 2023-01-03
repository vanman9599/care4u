import Link from "next/link";

import React, { useState } from "react";

import NavItem from "./NavItem";

const MENU_LIST = [
  { text: "Home", href: "/" },
  { text: "Services", href: "/servuces" },
  { text: "About Us", href: "/about" },
  { text: "Book Appointment", href: "/booking" },
  { text: "Contact", href: "/contact" },
];
const Navbar = () => {
  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);

  return (
    <header>
      <nav className={`nav`}>
        <Link href={"/"}>
            <img className='logo' src="/care4u-bali-small.png"></img>
        {/* <a>
        <span className="logo"><i className="bi bi-heart-pulse-fill icon"></i>
        Care4U <span className="logo-light">Bali</span>
        
      </span>
        </a> */}
        </Link>
        <div
          onClick={() => setNavActive(!navActive)}
          className={`nav__menu-bar`}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={`${navActive ? "active" : ""} nav__menu-list`}>
          {MENU_LIST.map((menu, idx) => (
            <div
              onClick={() => {
                setActiveIdx(idx);
                setNavActive(false);
              }}
              key={menu.text}
            >
              <NavItem active={activeIdx === idx} {...menu} />
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;