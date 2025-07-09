import Navbar from "./components/Navbar";
import Home from "./pages";
import About from "./pages/about";
import Work from "./pages/work";
import Contact from "./pages/contact";
import Footer from "./pages/footer";
import ProjectsPage from "./pages/projects"; // ✅

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Work />
      <ProjectsPage /> 
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
