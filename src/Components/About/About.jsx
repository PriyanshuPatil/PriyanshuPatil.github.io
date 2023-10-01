import { Tooltip } from "@chakra-ui/react";
import React from "react";
import AboutPhoto from "../../Assets/png/About.png";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub, FiTwitter } from "react-icons/fi";
import { useSelector } from "react-redux";
import TypeWriterEffect from "react-typewriter-effect";
import style from "./About.module.css";
const About = () => {
  const themeColor = useSelector((store) => store.Theme.theme);
  return (
    <div name="About" style={{ paddingTop: "100px" }}>
      <div className={style.AboutParent}>
        <div
          className={style.AboutChild}
          style={{
            backgroundColor: themeColor,
            padding: "20px",
            justifyContent: "space-between",
            gridTemplateColumns: "repeat(1,1fr)",
          }}
        >
          <h2 className={style.AboutHeading}>About</h2>
        </div>

        <div className={style.AboutInfoParent}>
          <div>
            <img className={style.AboutInfoImage} src={AboutPhoto} />
          </div>

          <div className={style.AboutInfoChild}>
            <div style={{ fontWeight: "700", fontSize: "25px" }}>
              Priyanshu<span style={{ color: themeColor }}> Patil</span>
            </div>{" "}
            <TypeWriterEffect
              textStyle={{
                fontFamily: "Montserrat, Helvetica, sans-serif",
                color: "black",
                fontWeight: 500,
                fontSize: "20px",
                textAlign: "center",
              }}
              startDelay={10}
              cursorColor="white"
              multiText={TypeData}
              multiTextDelay={1000}
              typeSpeed={40}
            />
            {aboutMe}
            <div className={style.AboutSocialIconParent}>
              {SocialIcon.map((el) => {
                return (
                  <Tooltip
                    key={el.label}
                    label={el.label}
                    aria-label="A tooltip"
                  >
                    <div className={style.AboutSocialIconChild}>
                      <a href={el.link} target={"_blank"}>
                        {" "}
                        {el.plateform}
                      </a>
                    </div>
                  </Tooltip>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

const aboutMe = (
  <div>
    Adoptable and accountable team player, driven to deliver the best in any
    situation. A passionate Website Developer with proficiency in MERN Stack and
    Data Structure and Algorithms. Looking forward to utilizing my current skill
    set to start a career as a web developer. Hope to work in a challenging
    environment as a specialized MERN stack developer and play a key role in a
    company's growth.
  </div>
);

const TypeData = [
  "Full-Stack Developer",
  "Web Designer",
  "UX Designer/Developer",
  "Full-Stack Developer",
  "Web Designer",
  "UX Designer/Developer",
  "Full-Stack Developer",
  "Web Designer",
  "UX Designer/Developer",
  "Full-Stack Developer",
  "Web Designer",
  "UX Designer/Developer",
];

const SocialIcon = [
  {
    plateform: <FaLinkedinIn size={30} />,
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/priyanshu-patil/",
  },
  {
    plateform: <FiGithub size={30} />,
    label: "GitHub",
    link: "https://github.com/PriyanshuPatil",
  },
  {
    plateform: <FiTwitter size={30} />,
    label: "Twitter",
    link: "https://twitter.com/priyanshu2710_",
  },
];
