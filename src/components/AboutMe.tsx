import "../css/style.css";
import FlipCard from "./AboutMeFlip";

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
      <section className="more-about">
        <h2>More About Me</h2>
        <div className="flipcards">
          <FlipCard
            title="Economics Graduate"
            subtitle="Business School"
            text="BSc (Hons) Industrial Economics, University of Nottingham"
            image="https://i.ibb.co/kXRWSH9/image-2021-11-11-155138.png"
            link="https://www.nottingham.ac.uk/ugstudy/course/Industrial-Economics-BSc"
            linkLabel="Course"
          />
          <FlipCard
            title="Tech Trainee"
            subtitle="Software Engineering and Leadership"
            text="Boot camp, focused on full-stack training with high usage of teamwork and pair-programming, and regular seminars from leading experts"
            image="https://i.ibb.co/YPQbxDm/pngwing-com.png"
            link="https://academy.tech"
            linkLabel="Academy.tech"
          />

          <FlipCard
            title="IMC Holder"
            subtitle="Level 4 Qualification by CFA UK"
            text="Benchmark entry-level qualification focused on economics, accounting, investment practice, regulation, and ethics"
            image="https://i.ibb.co/XSYtP46/kisspng-chartered-financial-analyst-cfa-institute-investme-5b0f3c5204cc24-3057339215277251380197.png"
            link="https://www.credly.com/badges/d974a786-a3d9-4e5e-a244-370606a46ebc/public_url"
            linkLabel="Course"
            smallImage={true}
          />

          <FlipCard
            title="Running enthusiast"
            subtitle="Personal best: 16k"
            text="Currently training for a half-marathon on behalf of NSPCC, feel free to support me by following the link below"
            image="https://i.ibb.co/PMXsS1W/favpng-people-running.png"
            link="https://www.justgiving.com/fundraising/stan-hus"
            linkLabel="Donations"
          />
          <FlipCard
            title="Chess Player"
            subtitle="Fide Rating: 1889"
            text="#3 player in Uni 1 Team, Founder of Brighton Chess Enthusiasts Online Club, Club #3 player. Join us by following the link below!"
            image="https://i.ibb.co/k9Dgryd/clipart-619430.png"
            link="https://www.chess.com/club/brighton-chess-enthusiasts"
            linkLabel="Chess Club"
          />
        </div>
      </section>
    </div>
  );
}
