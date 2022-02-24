import Topbar from "./components/topbar/Topbar";
import Portfolio from "./components/portfolio/Portfolio";
import Works from "./components/works/Works";
// import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import Menu from "./components/sidemenu/Menu";
import "./app.scss";
import {useState} from "react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="App">
      <Topbar menuOpen = {menuOpen} setMenuOpen = {setMenuOpen}/>
      <Menu  menuOpen = {menuOpen} setMenuOpen = {setMenuOpen}/>
      <div className = "sections">
        <Intro />
        <Portfolio />
        <Works />
        {/* The testimonials has been commented because right now there is no testimonials, make the testimonials section in future */}
        {/* <Testimonials /> */}
        <Contact />
      </div>
    </div>
  );
}

export default App;
