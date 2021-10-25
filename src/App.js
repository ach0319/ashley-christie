import NavBar from "./Components/Landing Page/NavBar/NavBar";
import LandingPage from "./Components/Landing Page/Landing Page/LandingPage";
import About from "./Components/Landing Page/About/About";
import Projects from "./Components/Landing Page/MyWork/MyWork";
import Contact from "./Components/Landing Page/Contact/Contact";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <LandingPage />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
