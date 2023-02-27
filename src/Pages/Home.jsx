import React from 'react'
import About from '../Components/About/About'
import Profile from '../Components/Profile/Profile'
import Contact from '../Components/Contact/Contact'
import Footer from '../Components/Footer/Footer'
import GitHub from '../Components/GitHub/GitHub'
import Navbar from '../Components/Navbar/Navbar'
import Projects from '../Components/Projects/Projects'
import Skills from '../Components/Skills/Skills'

const Home = () => {
  return (
    <div name="Home" >
   <div>
<Navbar />
<Profile/>
<About/>
<Skills/>
<GitHub/>
<Projects/>
<Contact/>
<Footer/> 
    </div>
    </div>
  )
}

export default Home