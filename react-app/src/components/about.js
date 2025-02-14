import arrowIcon from "../assets/arrow.png";
function About() {
  return (
    <section id="about">
      <div className="about-text">
        <p>Get To Know More</p>
        <h1>About Me</h1>
      </div>

      <div className="about-container">
        <ul>
          <li>
            I'm Nagacharan PS, 2nd-year Engineering student at Sri Venkateshwara
            College of Engineering.
          </li>
          <li>I'm building a strong foundation in computer science.</li>
          <li>With a passion for technology, development, and innovation.</li>
          <li>I'm passionate about web development.</li>
          <li>
            I'm continuously learning and exploring ways to grow as an engineer.
          </li>
          <li>
            I enjoy taking on new challenges and honing my skills to continue
            meaningful projects.
          </li>
        </ul>
      </div>

      <img
        src={arrowIcon}
        alt="Arrow icon"
        class="arrow-icon"
        onclick="location.href='#experience'"
      />
    </section>
  );
}
export default About;
