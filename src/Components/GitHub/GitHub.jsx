import React from 'react'
import { useSelector } from 'react-redux';
import { SkillsData } from '../../Data/SkillsData';
import GitHubCalendar from 'react-github-calendar'
const GitHub = () => {
    const themeColor = useSelector((store) => store.Theme.theme);
  return (
     <div 
     name="GitHub"
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
   GitHub Calendar
    </h2>
 </div>
        <div  style={{width:"full",display:"grid",gridTemplateColumns:"repeat(1,1fr)",gap:"15px",textAlign:"center",padding:"8px 12px"}} >
             <GitHubCalendar
            username="PriyanshuPatil"
            blockSize={20}
            blockMargin={5}
            fontSize={18}
          />
      
       

        </div>
        </div>
 
      


  )
}

export default GitHub 