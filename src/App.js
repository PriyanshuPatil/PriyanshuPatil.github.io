import About from './Components/About/About';
import Navbar from './Components/Navbar/Navbar';
import Skills from './Components/Skills/Skills';
import GitHub from './Components/GitHub/GitHub';

function App() {
  return (
<div style={{fontFamily:"Montserrat, Helvetica, sans-serif",height:"100%"}}>
 <Navbar />
<About/>
<Skills/>
<GitHub/>
  </div>  
   
  );
}

export default App;
