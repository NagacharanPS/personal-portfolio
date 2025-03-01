import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import WelcomeModal from "./components/welcomeModal";
import HamburgerNav from "./components/hamburger-nav";
import Header from "./components/header";
import Profile from "./components/profile";
import About from "./components/about";
import Experience from "./components/experience";
import Certificates from "./components/certificates";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Footer from "./components/footer";
import { createContext, useState } from "react";

export const themeContext = createContext(null);
function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  return (
    <themeContext.Provider value={{ theme, toggleTheme }}>
      <div className="app" id={theme}>
        <ToastContainer />
        <WelcomeModal />
        <HamburgerNav />
        <Header />
        <Profile />
        <About />
        <Experience />
        <Certificates />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </themeContext.Provider>
  );
}

export default App;
