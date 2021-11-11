import "../css/style.css";

export default function About() {
  return (
    <div>
      <section className="hero" id="about">
        <img
          src="https://i.ibb.co/q7fHNgw/photo1634156874.jpg"
          alt="my avatar"
          loading="lazy"
          className="hero-img"
        />
        <div className="bio animate__animated animate__shakeX">
          <h2 className="bio-title">About Me</h2>
          <p className="bio-text">
            Recent technical leadership graduate coding full stack app
            development using React.ts, HTML, CSS, and PostgreSQL looking for an
            engineering role in a fast paced and collaborative growth-oriented
            environment. With extensive experience creating user friendly
            projects and working in multidisciplinary teams I am excited to
            continue my progress into software engineering.
          </p>
        </div>
      </section>
      <section className="more-about">
        <h2>More About Me</h2>
        <ul>
          <li>I am an Economics Graduate from Univeersity of nottingham</li>
          <li>I am a chess enthusiast</li>
          <li>I am a runner</li>
        </ul>
      </section>
      <h2 className="skill-header">My Top Skills</h2>
      <section className="skills" id="skills">
        <div className="skills-wrapper">
          <div className="first-set animate__animated animate__pulse">
            <img
              src="https://i.ibb.co/j5FHCQM/pngaaa-com-2507896.png"
              alt=""
              loading="lazy"
              className="icon icon-card"
            />

            <img
              src="icons/icons8-css3.svg"
              alt=""
              loading="lazy"
              className="icon icon-card"
            />
            <img
              src="icons/icons8-javascript.svg"
              alt=""
              loading="lazy"
              className="icon icon-card"
            />
          </div>
          <div className="second-set animate__animated animate__pulse">
            <img
              src="icons/icons8-bootstrap.svg"
              alt=""
              loading="lazy"
              className="icon icon-card"
            />
            <img
              src="icons/icons8-react-native.svg"
              alt=""
              loading="lazy"
              className="icon icon-card"
            />
            <img
              src="icons/icons8-git.svg"
              alt=""
              loading="lazy"
              className="icon icon-card"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
