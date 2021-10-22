import NavBar from "./Components/Landing Page/NavBar/NavBar";
import LandingPage from "./Components/Landing Page/Landing Page/LandingPage";
import About from "./Components/Landing Page/About/About";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <LandingPage />
      <About />
    </div>
  );
}

export default App;
