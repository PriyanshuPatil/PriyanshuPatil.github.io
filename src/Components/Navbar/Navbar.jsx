import style from "./Navbar.module.css";
import React, { useState } from "react";
import { FaBars, FaTimes,FaPaintBrush } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-scroll";
import Modalis from "./Modal";
import Resume from "../../Assets/fw20_1043-Priyanshu-Patil-Resume.pdf"
import { Box, Button } from "@chakra-ui/react";
const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);
  const themeColor = useSelector((store) => store.Theme.theme);
  // if (window.matchMedia("max-width:440px").matches) {
  //   setSidebar(!sidebar);
  // }

  return (
    <div >
      <div className={style.NavParentD}  style={{position: "fixed", top: "0", left: "10%", zIndex: "9999",backgroundColor:"white"}}>
        <div className={style.NavHeadingD} >
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
          <Button
            style={{
              backgroundColor: themeColor,
              color:"white",
              boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
              display: "block",
              margin: "0px 0px",
              width: "100px",
              fontWeight: "300",
            }}   
            
          >
            <a download={Resume}  target={"_blank"} href={Resume} >
          <Box pt="-30px"  download  onClick={()=>{window.open('https://drive.google.com/file/d/1BJEbGf9EUvbjV5OwCTlqJqKcSgVc_MlD/view?usp=sharing','_blank' 
);}} >Resume</Box>  </a>
          </Button>
        
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
