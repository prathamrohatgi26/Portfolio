
import { lazy, Suspense } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";

const About = lazy(() => import("./components/about/About"));
const Skills = lazy(() => import("./components/skills/Skills"));
const Qualification = lazy(() => import("./components/qualification/Qualification"));
const Work = lazy(() => import("./components/work/Work"));
const RecentWork = lazy(() => import("./components/recentWork/RecentWork"));
const Contact = lazy(() => import("./components/contact/Contact"));
const Footer = lazy(() => import("./components/footer/Footer"));
const Scrollup = lazy(() => import("./components/scrollup/Scrollup"));
const FloatingBrackets = lazy(() => import("./components/floatingBrackets/FloatingBrackets"));

function App() {
  return (
    <>
      <Header />

      <div className="main">
        <Home />
        <Suspense fallback={null}>
          <About />
          <Skills />
          <Qualification />
          <Work />
          <RecentWork />
          <Contact />
        </Suspense>
      </div>

      <Suspense fallback={null}>
        <Footer />
        <Scrollup />
        <FloatingBrackets />
      </Suspense>
    </>
  );
}

export default App;
