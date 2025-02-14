import profileImg from "../assets/profile-1.png";
import resume from "../assets/updated-resume.pdf.pdf";

function Profile() {
  return (
    <section id="profile">
      <div className="profile-pic-container">
        <img src={profileImg} alt="profile-pic" />
      </div>

      <div className="profile-about-container">
        <div className="profile-text">
          <p>Hello I'm</p>
          <h1 className="typing">Nagacharan P S</h1>
          <h2>Fullstack Developer</h2>
        </div>

        <div className="profile-btn-container">
          <button onClick={() => window.open(resume)}>Download Resume</button>
          <button onClick={() => (window.location.href = "./#contact")}>
            Contact Info
          </button>
        </div>
      </div>
    </section>
  );
}

export default Profile;
