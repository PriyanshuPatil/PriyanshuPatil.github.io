import React from 'react'
import { useSelector } from 'react-redux';
import { SkillsData } from '../../Data/SkillsData';
import GitHubCalendar from 'react-github-calendar'
import { Heading } from '@chakra-ui/react';
import { BsGithub } from 'react-icons/bs';
const Projects = () => {
    const themeColor = useSelector((store) => store.Theme.theme);
  return (
    <div name="GitHub" style={{paddingTop:"100px"}}>
  
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
   GitHub Calendar
    </h2>
 </div>
 
        <div  style={{width:"full",display:"grid",gridTemplateColumns:"repeat(1,1fr)",gap:"15px",textAlign:"center",padding:"40px"}} >
             <GitHubCalendar
            username="PriyanshuPatil"
            blockSize={20}
            blockMargin={5}
            fontSize={18}
          />  
          <div style={{display:"flex",margin:"auto", fontWeight: "700", fontSize: "27px",textAlign:"center",marginTop:"30px"}}>
          Username : <span style={{ color: themeColor ,display:"flex",gap:"10px",marginLeft:"5px"}}>  PriyanshuPatil <BsGithub size={30}/></span>
          </div> 
       <img style={{margin:"auto",padding:"10px"}} align={'center'} src="https://github-readme-stats.vercel.app/api?username=priyanshupatil&show_icons=true&locale=en&border_radius=2&theme=light" alt="PriyanshuPatil"></img>
       <img style={{margin:"auto",padding:"10px"}} align={'center'} src="https://github-readme-streak-stats.herokuapp.com/?user=priyanshupatil&show_icons=true&locale=en&border_radius=2&theme=light" alt="PriyanshuPatil"></img>
       {/* <img style={{margin:"auto",padding:"10px"}}
          src="https://github-readme-streak-stats.herokuapp.com/?user=user=priyanshupatil&show_icons=true&locale=en&border_radius=2&theme=light"
          alt="user=priyanshupatil"
        /> */}
        </div>
        </div>
 
    </div>


  )
}

export default Projects 