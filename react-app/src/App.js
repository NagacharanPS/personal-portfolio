import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import SideBar from "./components/side-bar";
import HamburgerNav from "./components/hamburger-nav";
import Header from "./components/header";
import Profile from "./components/profile";
import About from "./components/about";
import Experience from "./components/experience";
import Certificates from "./components/certificates";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <ToastContainer />
      <SideBar />
      <HamburgerNav />
      <Header />
      <Profile />
      <About />
      <Experience />
      <Certificates />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
