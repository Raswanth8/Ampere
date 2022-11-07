import "./App.css";
import Navbar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Achievements from "./components/Achievements";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import FAQ from "./FAQ";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Testimonials />
      <Achievements />
      <Gallery />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
