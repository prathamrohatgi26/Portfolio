
import "./App.css";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Qualification from "./components/qualification/Qualification";
import Scrollup from "./components/scrollup/Scrollup";
import Skills from "./components/skills/Skills";
import Work from "./components/work/Work";
import RecentWork from "./components/recentWork/RecentWork";
import FloatingBrackets from "./components/floatingBrackets/FloatingBrackets";

function App() {
  return (
    <>
      <Header />

      <div className="main">
        <Home />
        <About />
        <Skills />
        <Qualification />
        <Work />
        <RecentWork />
        <Contact />
      </div>

      <Footer />
      <Scrollup />
      <FloatingBrackets />
    </>
  );
}

export default App;
