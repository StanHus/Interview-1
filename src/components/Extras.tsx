import "../css/style.css";
import { Row } from "react-bootstrap";
import Project from "./Card";

export default function Extras() {
  return (
    <div>
      <h1 className="question">
        Mini-projects and GitHub Repositories go here
      </h1>
      <section className="cards">
        <Row xs={1} md={2} className="g-4">
          <Project
            title="Website Crawler"
            text="App for fully crawling any specific website without leaving the domain"
            points="Python"
            image="https://www.digital-photo-secrets.com/images/lotus_low.jpg"
            link="https://github.com/StanHus/Python_Web_Crawler"
          />
          <Project
            title="Link Shortner"
            text="One of my first full-stack projects, developed in a team of 2"
            points="PostreSQL, TS"
            image="https://www.digital-photo-secrets.com/images/lotus_low.jpg"
            link="https://brushland-link-shortener.netlify.app"
          />
          <Project
            title="TV-shows displayer"
            text="First app ever, Sep 2021. Simplest converter of JSON data into a table"
            points="JSON, TS"
            image="https://www.digital-photo-secrets.com/images/lotus_low.jpg"
            link="https://tv-shows-stan.netlify.app"
          />
        </Row>
      </section>
    </div>
  );
}
