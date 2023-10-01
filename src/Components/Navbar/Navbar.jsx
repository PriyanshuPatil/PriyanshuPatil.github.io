import style from "./Navbar.module.css";
import React, { useState } from "react";
import { FaBars, FaTimes, FaPaintBrush } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-scroll";
import Modalis from "./Modal";
import Resume from "../../Assets/pdf/fw20_1043-Priyanshu-Patil-Resume.pdf";
import { Box, Button } from "@chakra-ui/react";
const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);
  const themeColor = useSelector((store) => store.Theme.theme);
  // if (window.matchMedia("max-width:440px").matches) {
  //   setSidebar(!sidebar);
  // }

  const openLink = (link) => {
    window.open(
      "https://drive.google.com/file/d/1BJEbGf9EUvbjV5OwCTlqJqKcSgVc_MlD/view?usp=sharing",
      "_blank"
    );
  };

  return (
    <div>
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
          <div className={style.NavMenuD}>
            <div
              onclick={() => {
                openLink(
                  "https://drive.google.com/file/d/1BJEbGf9EUvbjV5OwCTlqJqKcSgVc_MlD/view?usp=sharing"
                );
              }}
            >
              <a download target={"_blank"} href={Resume}>
                <Button
                  className={style.NavResumeButton}
                  style={{ backgroundColor: themeColor }}
                  onClick={() => {
                    openLink(
                      "https://drive.google.com/file/d/1BJEbGf9EUvbjV5OwCTlqJqKcSgVc_MlD/view?usp=sharing"
                    );
                  }}
                >
                  <Box pt="-30px" download>
                    Resume
                  </Box>
                </Button>
              </a>
            </div>
          </div>
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
