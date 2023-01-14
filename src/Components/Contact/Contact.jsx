import React from 'react'
import { useSelector } from 'react-redux';
import { SkillsData } from '../../Data/SkillsData';
import GitHubCalendar from 'react-github-calendar'
import { ProjectData } from '../../Data/ProjectData';
import { Button } from '@chakra-ui/react';
import { FiGithub } from "react-icons/fi";
import { ImLink} from "react-icons/im";

const Contact = () => {
    const themeColor = useSelector((store) => store.Theme.theme);
  return (
     <div 
     name="Project"
    style={{
      boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
      margin: "auto",
      width: "80%",
      borderRadius: "20px",
      margin:"50px auto"
      
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
   Contact
    </h2>
 </div>
        <div  style={{width:"full",display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"60px 30px",padding:"3%",textAlign:"center"}} >
        {ProjectData.map(({ id, src,netlify,github,des }) => (
            <div key={id} style={{ display:"grid",gridTemplateColumns:"repeat(1,1fr)",borderRadius: "0.5rem",padding:"10px",boxShadow: `0 4px 6px -1px  ${themeColor}, 0 2px 4px -1px rgba(0, 0, 0, 0.06)`}} >
              <div>
                 <img 
                 width={"100%"}
                src={src} 
                
                alt=""
                style={{transitionDuration: "200ms",borderRadius: "0.375rem"}}/>
              </div>
              <div>
                <div style={{padding:"10px"}} >{des}</div>
                <div style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:"20px",width:"20%",margin:"auto",alignItems:"center",justifyContent:"center"}}>
                <Button
            style={{
              backgroundColor: themeColor,
              boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
              display: "block",
              color:"white",
              margin: "20px 0px",
              width: "100px",
              fontWeight: "300",
              display:"flex",gap:"10px",
            }}
          >
           <a href={netlify}> Demo </a><ImLink/>
          </Button>
          <Button
            style={{
              backgroundColor: themeColor,
              color:"white",
              boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
              display: "block",
              margin: "20px 0px",
              width: "100px",
              fontWeight: "300",
              display:"flex",gap:"10px"
            }}
          >
           <a href={github}>Code </a><FiGithub/>
          </Button>
                
              </div>
              </div>
             
            </div>
          ))}
        </div>
        </div>
 
      


  )
}

export default Contact