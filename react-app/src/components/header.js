import SearchSuggestions from "./searchSuggestions";
import ToggleSwitch from "./toggleSwitch";
function Header() {
  return (
    <header id="header">
      <nav id="desktop-nav">
        {/* <div className="logo">NAGACHARAN P S</div> */}
        <ToggleSwitch />
        <SearchSuggestions />
        <div>
          <ul className="header-nav-links">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#certifications">Certifications</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
