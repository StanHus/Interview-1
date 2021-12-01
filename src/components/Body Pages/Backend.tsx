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
        <Project
          title="Anagram Checker"
          text="A restful api, which produces all the anagrams to the word given as a parameter"
          points="Node.js, TS"
          image="https://i.ibb.co/6Rw98WT/image-2021-12-01-152420.png"
          link="https://github.com/StanHus/anagrams_check_api"
        />
      </section>
    </div>
  );
}
