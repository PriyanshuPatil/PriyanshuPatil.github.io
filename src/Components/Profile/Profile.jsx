import React from "react";
import { useSelector } from "react-redux";
import TypeWriterEffect from "react-typewriter-effect";
import ProfilePhoto from "../../Assets/png/profilePic.jpg";
import { Box, Button, Tooltip } from "@chakra-ui/react";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub, FiTwitter } from "react-icons/fi";
import Resume from "../../Assets/fw20_1043-Priyanshu-Patil-Resume.pdf" ;
const About = () => {
  const themeColor = useSelector((store) => store.Theme.theme);
  return (
    <div name="Home" style={{paddingTop:"100px"}}>
  
    <div
      style={{
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        margin: "auto",
        width: "80%",
        borderRadius: "20px",
      }}
    >
     <div
        style={{
        backgroundColor: themeColor,
          color: "white",
          padding: "40px",
          display: "grid",
          justifyContent: "space-between",
          gridTemplateColumns: "repeat(2,1fr)",
          borderRadius: "20px 20px 0px 0px",
        }}
      >
        <div style={{ marginLeft: "0px" }}>
          <img
            style={{
              width: "55%",
              height: "100%",
              border: "5px solid white",
              display: "box",
              marginLeft: "10%",
            }}
            src={ProfilePhoto}
          />
        </div>
        <div
          style={{
            margin: "auto",
            display: "grid",
            gap: "13px",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <h2 style={{ fontSize: "45px", fontWeight: "700", margin: "auto" }}>
            Priyanshu Patil
          </h2>
          <div
            style={{
              display: "flex",
              gap: "10px",
              borderRadius: "20px",
              margin: "auto",
            }}
          >
            <TypeWriterEffect
              textStyle={{
                fontFamily: "Montserrat, Helvetica, sans-serif",
                color: "white",
                fontWeight: 500,
                fontSize: "20px",
              }}
              startDelay={10}
              cursorColor="white" 
              
              multiText={[
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
              ]}
              multiTextDelay={1000}
              typeSpeed={40}
            />
          </div>
          <div
            style={{
              display: "flex",
              gap: "10px",
              borderRadius: "20px",
              margin: "auto",
            }}
          >
            {SocialIcon.map((el) => {
              return (
                <Tooltip key={el.label} label={el.label} aria-label="A tooltip">
                  <div
                 
                    style={{
                      color: "gray",
                      backgroundColor: "white",
                      borderRadius: "20px",
                      padding: "10px",
                    }}
                  >
                  <a href={el.link} target={"_blank"}> {el.plateform}</a> 
                  </div>
                </Tooltip>
              );
            })}
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundColor: "white",
          color: "black",
          margin: "auto",
          width: "90%",
          padding: "20px",
          display: "grid",
          justifyContent: "space-between",
          gridTemplateColumns: "repeat(2,1fr)",
        }}
      >
        <div style={{ display: "grid", gap: "10px" }}>
          <div style={{ fontWeight: "700", fontSize: "25px" }}>
            About <span style={{ color: themeColor }}>Me</span>
          </div>
          Adoptable and accountable team player, driven to deliver the best in
          any situation. A passionate Website Developer with proficiency in MERN
          Stack and Data Structure and Algorithms.
          <div   onClick={()=>{window.open("https://drive.google.com/file/d/1BJEbGf9EUvbjV5OwCTlqJqKcSgVc_MlD/view?usp=sharing","_blank")}} >
           <a download target={"_blank"} href={Resume} >
            <Button
            style={{
              backgroundColor: themeColor,
              color:"white",
              boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
              display: "block",
              margin: "20px 0px",
              width: "150px",
              fontWeight: "300",
            }}
          >
            Resume
            
          </Button>
           </a>
          </div>
         
        </div>
        <div
          style={{
            width: "50%",
            height: "70%",
            margin: "auto",
            marginLeft: "10%",
            paddingLeft: "50px",
            display: "grid",
            justifyContent: "space-between",
            gridTemplateColumns: "1fr 2fr",
            gap: "0px 20px",
          }}
        >
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

export default About;

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
    link: "https://github.com/PriyanshuPatil",
  },
];

