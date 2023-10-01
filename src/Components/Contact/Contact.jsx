import React, { useRef, useState } from 'react'
import { useSelector } from 'react-redux';
import { SkillsData } from '../../Data/SkillsData';
import GitHubCalendar from 'react-github-calendar'
import { ProjectData } from '../../Data/ProjectData';
import { Button } from '@chakra-ui/react';
import { FiGithub } from "react-icons/fi";
import { ImLink} from "react-icons/im";
import emailjs from '@emailjs/browser';
import style from "./Contact.module.css";
const Contact = () => {
    const themeColor = useSelector((store) => store.Theme.theme);
    const [email,setemail]=useState("")
    const [name,setname]=useState("")
    const [message,setmessage]=useState("")
  const form = useRef();
const sendEmail = (e) => {
  e.preventDefault();
  setemail("")
  setmessage("")
  setname("")
console.log(form.value)
  emailjs.send('service_7jahfx6', 'template_70yxz7u', {user_name:name,user_email:email,message:message},"f0lRtS6l6EPLja1av")
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
};
return (
  <div name="Contact" style={{paddingTop:"100px"}}>
  
     <div 
    className={style.ContactParent} >
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
        <div  style={{width:"full",display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:"60px 30px",padding:"3%"}} >

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

        <form ref={form} onSubmit={sendEmail}>
<label style={{}}>Name</label><br></br>
<input value={name} style={{border: "1px solid #E0E1E7", borderRadius: "5px", type: "text",width:"40%,",padding:"5px"}} onChange={(e)=>{setname(e.target.value)}} type="text" name="user_name" /><br></br>
<label>Email</label><br></br>
<input value={email} style={{border: "1px solid #E0E1E7", borderRadius: "5px", type: "text",width:"40%,",padding:"5px"}} onChange={(e)=>{setemail(e.target.value)}} type="email" name="user_email" /><br></br>
<label>Message</label><br></br>
<textarea value={message}  onChange={(e)=>{setmessage(e.target.value)}} name="message" style={{width:"30%,",padding:"5px",border:"1px solid #E0E1E7", borderRadius: "5px"}}></textarea><br></br>
<input style={{variant:"solid", backgroundColor:themeColor,color:"white", padding:"5px 20px", borderRadius:"5px"}} type="submit" value="Send" />
</form>


        </div>
        </div>
 
      
</div>

  )
}

export default Contact


