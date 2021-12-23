import "../../css/style.css";
import FlipCard from "./AboutMeFlip";
import Skills from "./Skills_Icons";

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
          <h1 className="bio-title">About Me</h1>
          <p className="bio-text">
            A junior fullstack software engineer working with Django and Vue.
            Extensive experience creating user friendly projects in React and
            Node in Typescript and working in multidisciplinary teams. A
            technology and leadership graduate with professional training in
            both.
          </p>
        </div>
      </section>
      <Skills />
      <section className="more-about">
        <h1>More About Me</h1>
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
            title="Dog Dad"
            subtitle="A proud owner of the goodest boy"
            text="At this point, I am not even surprised my dog has more Instagram followers than me"
            image="https://i.ibb.co/wz7CxSG/photo1636657675.jpg"
            link="https://www.instagram.com/teo_thechi/?hl=en"
            linkLabel="His Instagram"
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
