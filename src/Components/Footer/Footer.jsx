import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Button, Tooltip } from "@chakra-ui/react";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub, FiTwitter } from "react-icons/fi";
import {BsFillHeartFill } from 'react-icons/bs';

const Footer = () => {
  const themeColor = useSelector((store) => store.Theme.theme);
  return (
    <div name="Footer" style={{paddingTop:"100px"}}>
  
    <div
     
      style={{
        backgroundColor: themeColor,
        width: "100%",
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        margin: "50px 0px 0px 0px",
        height: "300px",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "10px",
          borderRadius: "20px",
          margin: "auto",
          alignItems: "center",
          width:"15%",
          paddingTop:"120px"
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
                  display: "block",
                }}
              >
                <a href={el.link}> {el.plateform}</a>
              </div>
            </Tooltip>
          );
        })}
      
      </div>
        <div style={{display:"flex",textAlign:"center",alignItems:"center",color:"white",fontSize:"22px",fontWeight:"500",marginTop:"40px",marginLeft:"41%"}}>Made By <BsFillHeartFill style={{color:"blue",margin:"5px"}}/> Priyanshu Patil</div>
    </div>
    </div>
  );
};

export default Footer;

const SocialIcon = [
  {
    plateform: <FaLinkedinIn size={40} />,
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/priyanshu-patil/",
  },
  {
    plateform: <FiGithub size={40} />,
    label: "GitHub",
    link: "https://github.com/PriyanshuPatil",
  },
  {
    plateform: <FiTwitter size={40} />,
    label: "Twitter",
    link: "https://github.com/PriyanshuPatil",
  },
];
