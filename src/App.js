import NavBar from "./Components/Landing Page/NavBar/NavBar";
import About from "./Components/Landing Page/About/About";
import Projects from "./Components/Landing Page/MyWork/MyWork";
import Contact from "./Components/Landing Page/Contact/Contact";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" exact element={<LandingPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

const LandingPage = () => (
  <div className="landing-app">
    <div className="typewriter">
      <p className="type_1">Hi, I'm Ashley Christie.</p>
      <p className="type_2">I am a Front-End</p>
      <p className="type_3">Developer.</p>
    </div>
    <div className="star-grid">
      <div className="star-one"></div>
      <div className="star-two"></div>
      <div className="star-three"></div>
      <div className="star-four"></div>
      <div className="star-five"></div>
    </div>
  </div>
);

export default App;
