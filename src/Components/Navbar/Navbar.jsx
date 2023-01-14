import style from "./Navbar.module.css";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-scroll";

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);
  const themeColor = useSelector((store) => store.Theme.theme);
  // if (window.matchMedia("max-width:440px").matches) {
  //   setSidebar(!sidebar);
  // }

  return (
    <div style={{position:"relative"}}>
      <div className={style.NavParentD}>
        <div className={style.NavHeadingD}>
          Pri<span style={{ color: themeColor }}>yanshu</span>
        </div>
        <div className={style.NavMenuD}>
          {NavLinks.map(({ id, link }) => (
            <div key={id}>
              <Link to={link} smooth duration={500} className={style.NavLinkD}>
                {" "}
                {link}{" "}
              </Link>
            </div>
          ))}
        </div>
        <div className={style.NavMenuM}>
          <div
            onClick={() => {
              setSidebar(!sidebar);
            }}
          >
            {sidebar ? <FaTimes size={30} /> : <FaBars size={30} />}
          </div>
        </div>
      </div>
      {sidebar && (
        <div
          className={style.NavMenuListM}
          style={{ backgroundColor: themeColor }}
        >
          {NavLinks.map(({ id, link }) => (
            <div key={id} className={style.NavMenuListDivM}>
              <Link
                to={link}
                onClick={() => {
                  setSidebar(!sidebar);
                }}
                smooth
                duration={200}
                className={style.NavLinkD}
              >
                {" "}
                {link}{" "}
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;


const NavLinks = [
  {
    id: 1,
    link: "Home",
  },
  {
    id: 2,
    link: "About",
  },
  {
    id: 3,
    link: "Skills",
  },
  {
    id: 4,
    link: "Project",
  },
  {
    id: 5,
    link: "Contact",
  },
];
