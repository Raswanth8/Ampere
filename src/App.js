import "./App.css";
import Navbar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Achievements from "./components/Achievements";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Achievements />
    </div>
  );
}

export default App;
