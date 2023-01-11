import style from  "./Navbar.module.css" ;
import React, { useState } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { Link } from "react-scroll";;

const Navbar = () => {
   const [sidebar, setSidebar] = useState(false);
   const themeColor=useSelector((store)=>store.Theme.theme);
    // if (window.matchMedia("max-width:440px").matches) {
    //   setSidebar(!sidebar);
    // }

  
  return (
    <div className={style.NavParentD} >
      <div className={style.NavHeadingD}>Pri<span style={{color:themeColor}}>yanshu</span></div>
      <div className={style.NavMenuD}>
         {NavLinks.map(({ id, link }) => (
          <div key={id} >
            <Link to={link} smooth duration={500} className={style.NavLinkD} > {link} </Link>
          </div>
        ))}
     </div>
     <div className={style.NavMenuM}>
      <div onClick={()=>{setSidebar(!sidebar)}}>{sidebar? <FaTimes size={30}  /> : <FaBars size={30} />}</div>
     
     {sidebar && <ul className={style.NavMenuM}>
          {NavLinks.map(({ id, link }) => (
            <li
              key={id}
              className={style.NavLinkM} 
            >
              <Link
                to={link}
                smooth
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
        }
     
     </div>
    </div>
  )
}

export default Navbar


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
  }
];



// @media (max-width: 767px) {
//   .hidden-mobile {
//     display: none;
//   }
// }


// .nav-link::before {
//   transition: 300ms;
//   height: 1px;
//   content: "";
//   position: absolute;
//   background-color: yellow;
// }

// body {
//   padding: 0;
//   margin: 0;
  
//   font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
//   background-color: #DDD;
// }

// .navbar {
//   border-bottom: 1px solid #BBBBBB;
// }

// .nav-link {
//   font-weight: bold;
//   font-size: 14px;
//   text-transform: uppercase;
//   text-decoration: none;
//   color: #031D44;
//   padding: 20px 0px;
//   margin: 0px 20px;
//   display: inline-block;
//   position: relative;
//   opacity: 0.75;
// }
