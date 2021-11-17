import "../../css/style.css";
import Project from "../Utils/Card";

export default function Software() {
  return (
    <div>
      <h1 className="question">Reusable Raw Pieces of Software</h1>
      <section className="projects-container">
        <Project
          title="Website Crawler"
          text="An app for fully crawling any specific website without going outside the domain"
          points="Python"
          image="https://i.ibb.co/F0f98tj/crawler.png"
          link="https://github.com/StanHus/Python_Web_Crawler"
          special={true}
        />
        <Project
          title="Connecting Lines"
          text="Simple cool interactive interface, which can be used as a background or animation"
          points="JS, Animation"
          image="https://i.ibb.co/VC1s0Wv/lines.png"
          link="https://openprocessing.org/sketch/1344339"
        />
      </section>
    </div>
  );
}
