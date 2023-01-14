import React from 'react'
import { useSelector } from 'react-redux';
import { SkillsData } from '../../Data/SkillsData';
const Skills = () => {
    const themeColor = useSelector((store) => store.Theme.theme);
  return (
    <div name="Skills" style={{paddingTop:"100px"}}>
  
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
   Skills
    </h2>
 </div>
        <div  style={{width:"full",display:"grid",gridTemplateColumns:"repeat(1,1fr)",gap:"15px",textAlign:"center",padding:"30px 20px"}} >

   <div style={{width:"full",display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"20px 30px",textAlign:"center",padding:"8px 12px"}} >
          {SkillsData.map(({ id, src, title, style }) => (
            <div
              key={id}
              style={{display:"grid",gridTemplateColumns:"repeat(1,1fr)",gap:"10px",textAlign:"center",boxShadow: `green 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px; `}}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" style={{width:"35%",margin:"auto"}} />
              <p    className="mt-4">{title}</p>
            </div>
          ))}
        </div>
        </div>
        </div>
 
      </div>


  )
}

export default Skills