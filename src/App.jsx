import ScrollAnimation from "./hooks/scrollAnimation"
import Navbar from "./components/Navbar"
import About from "./pages/about"
import Home from "./pages"
import Work from "./pages/work"
import Contact from "./pages/contact"
import Footer from "./pages/footer"
import Projects from "./pages/projects";

function App() {
  ScrollAnimation();
  return (
    <div className="App">
   
        <Navbar />
         <Home />
         <About />
         <Work />
         <Projects />
         <Contact />
         <Footer />
       
    </div>
  )
}

export default App
