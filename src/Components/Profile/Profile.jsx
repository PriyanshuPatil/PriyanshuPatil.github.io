import React from "react";
import style from "./Profile.module.css";
import { useSelector } from "react-redux";
import TypeWriterEffect from "react-typewriter-effect";
import ProfilePhoto from "../../Assets/png/profilePic.jpg";
import { Box, Button, Tooltip } from "@chakra-ui/react";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub, FiTwitter } from "react-icons/fi";
import Resume from "../../Assets/pdf/fw20_1043-Priyanshu-Patil-Resume.pdf";
const Profile = () => {
  const themeColor = useSelector((store) => store.Theme.theme);
  return (
    <div name="Home" style={{ paddingTop: "100px" }}>
      <div className={style.ProfileParent}>
        <div
          className={style.ProfileImgParent}
          style={{ backgroundColor: themeColor }}
        >
          <div style={{ marginLeft: "0px" }}>
            <img className={style.ProfileImg} src={ProfilePhoto} />
          </div>
          <div className={style.ProfileNameParent}>
            <h2 className={style.ProfileNameHeading}>Priyanshu Patil</h2>
            <div className={style.ProfileTypeWriterParent}>
              <TypeWriterEffect
                textStyle={{
                  fontFamily: "Montserrat, Helvetica, sans-serif",
                  color: "white",
                  fontWeight: 500,
                  fontSize: "20px",
                }}
                startDelay={10}
                cursorColor="white"
                multiText={TypeData}
                multiTextDelay={1000}
                typeSpeed={40}
              />
            </div>
            <div className={style.ProfileSocialIconParent}>
              {SocialIcon.map((el) => {
                return (
                  <Tooltip
                    key={el.label}
                    label={el.label}
                    aria-label="A tooltip"
                  >
                    <div className={style.ProfileSocialIconChild}>
                      <a href={el.link} target={"_blank"}>
                        {" "}
                        {el.plateform}{" "}
                      </a>
                    </div>
                  </Tooltip>
                );
              })}{" "}
            </div>
          </div>
        </div>
        <div className={style.ProfileAbouMeParent}>
          <div
            style={{
              display: "grid",
              gap: "10px",
            }}
          >
            <div
              style={{
                fontWeight: "700",
                fontSize: "25px",
              }}
            >
              About
              <span style={{ color: themeColor }}>Me</span>
            </div>
            Adoptable and accountable team player, driven to deliver the best in
            any situation. A passionate Website Developer with proficiency in
            MERN Stack and Data Structure and Algorithms.
            <div
              onClick={() => {
                window.open(
                  "https://drive.google.com/file/d/1BJEbGf9EUvbjV5OwCTlqJqKcSgVc_MlD/view?usp=sharing",
                  "_blank"
                );
              }}
            >
              <a download target={"_blank"} href={Resume}>
                <Button
                  className={style.ProfileResumeButton}
                  style={{ backgroundColor: themeColor }}
                >
                  Resume
                </Button>
              </a>
            </div>
          </div>
          <div className={style.ProfileContactParent}>
            <div>Email</div>
            <div>pantuugurjar@gmail.com</div>
            <div>Phone</div>
            <div>+91 9009474709</div>
            <div>Birth</div>
            <div>27-10-2001</div>
            <div>Residence</div>
            <div>India</div>
            <div>Address</div>
            <div>Indore, Madhya Pradesh</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
const TypeData=[
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
  "UX Designer/Developer"
]
const SocialIcon = [
  {
    plateform: <FaLinkedinIn />,
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/priyanshu-patil/",
  },
  {
    plateform: <FiGithub />,
    label: "GitHub",
    link: "https://github.com/PriyanshuPatil",
  },
  {
    plateform: <FiTwitter />,
    label: "Twitter",
    link: "https://twitter.com/priyanshu2710_",
  },
];
