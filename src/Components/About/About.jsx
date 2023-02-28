import { Tooltip } from '@chakra-ui/react';
import React from 'react'
import AboutPhoto from "../../Assets/png/About.png" ;
import { FaLinkedinIn } from 'react-icons/fa';
import { FiGithub, FiTwitter } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import TypeWriterEffect from "react-typewriter-effect";
const About = () => {
    const themeColor = useSelector((store) => store.Theme.theme);
  return (
    <div name="About" style={{paddingTop:"100px"}}>
 
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
        padding: "20px",
        display: "grid",
        justifyContent: "space-between",
        gridTemplateColumns: "repeat(1,1fr)",
        borderRadius: "20px 20px 0px 0px",
      }}
    >
   <h2 style={{ fontSize: "45px", fontWeight: "700", margin: "auto",textAlign:"center" }}>
  About
    </h2>
 </div>
 
        <div style={{ marginLeft: "0px",display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:"20px" }} >
         <div>
          <img
            style={{
              width: "80%",
              height: "100%",
              border: "5px solid white",
              display: "box",
              marginLeft: "10%",
            }}
            src={AboutPhoto}
          />
          </div> 

      
        <div
          style={{
            margin: "auto",
            display: "grid",
            gap: "13px",
            alignItems: "center",
            textAlign: "center",
            width:"70%",
            margin:"30px" ,

          }}
        >
         <div style={{ fontWeight: "700", fontSize: "25px"}}>
            Priyanshu<span style={{ color: themeColor }}> Patil</span>
          </div>
          Adoptable and accountable team player, driven to deliver the best in any
situation. A passionate Website Developer with proficiency in MERN
Stack and Data Structure and Algorithms. Looking forward to utilizing my
current skill set to start a career as a web developer. Hope to work in a
challenging environment as a specialized MERN stack developer and
play a key role in a company's growth.
        
        
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
              marginTop:"-60px"
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
        </div>
       
 
      </div>


  )
}

export default About ;

const SocialIcon = [
  {
    plateform: <FaLinkedinIn size={30} />,
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/priyanshu-patil/",
  },
  {
    plateform: <FiGithub size={30}/>,
    label: "GitHub",
    link: "https://github.com/PriyanshuPatil",
  },
  {
    plateform: <FiTwitter size={30}/>,
    label: "Twitter",
    link: "https://twitter.com/priyanshu2710_",
  },
];

