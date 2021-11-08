import "../css/style.css";
import { Row } from "react-bootstrap";
import Project from "./Card";

export default function Extras() {
  return (
    <div>
      <h1 className="question">
        Mini-projects, GitHub Repos, and other Extras
      </h1>
      <section className="cards">
        <Row xs={1} md={2} className="g-4">
          <Project
            title="Website Crawler"
            text="An app for fully crawling any specific website without leaving the domain"
            points="Python"
            image="https://i.ibb.co/F0f98tj/crawler.png"
            link="https://github.com/StanHus/Python_Web_Crawler"
          />

          <Project
            title="TV-shows displayer"
            text="First app ever, Sep 2021. Simplest converter of JSON data into a table"
            points="JSON, TS"
            image="https://i.ibb.co/QHQqDQd/TV-shows.png"
            link="https://tv-shows-stan.netlify.app"
          />
          <Project
            title="CodeWars Profile"
            text="A coding practice site profile. Most of the exercises solved in JS"
            points="JS, TS, Python"
            image="https://i.ibb.co/874CzPQ/codewars.png"
            link="https://www.codewars.com/users/Futuremak3r"
          />
          <Project
            title="Link Shortner"
            text="One of my first full-stack projects, developed in a team of 2"
            points="PostreSQL, TS"
            image="https://i.ibb.co/XYGpDRk/linkshortner.png"
            link="https://brushland-link-shortener.netlify.app"
          />
        </Row>
      </section>
    </div>
  );
}
