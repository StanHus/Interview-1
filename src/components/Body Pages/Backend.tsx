import "../../css/style.css";
import Project from "../Utils/Card";

export default function Backend() {
  return (
    <div>
      <h1 className="question">Backend focused projects</h1>
      <section className="projects-container">
        <Project
          title="Website Crawler"
          text="An app for fully crawling any specific website without going outside the domain"
          points="Python"
          image="https://i.ibb.co/F0f98tj/crawler.png"
          link="https://github.com/StanHus/Python_Web_Crawler"
        />
      </section>
    </div>
  );
}
