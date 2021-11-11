import "../../css/style.css";
import { Row } from "react-bootstrap";
import Project from "../Utils/Card";

export default function Mini() {
  return (
    <div>
      <h1 className="question">Mini-projects and GitHub Repos</h1>
      <section className="cards">
        <Row xs={1} md={2} className="g-4">
          <Project
            title="TV-shows displayer"
            text="First app ever, Sep 2021. Simplest converter of JSON data into a table + search and sort"
            points="React, APIs, TS"
            image="https://i.ibb.co/QHQqDQd/TV-shows.png"
            link="https://tv-shows-stan.netlify.app"
          />
          <Project
            title="Link Shortner"
            text="One of my first full-stack projects, developed in a team of 2"
            points="React, PostreSQL, TS"
            image="https://i.ibb.co/XYGpDRk/linkshortner.png"
            link="https://brushland-link-shortener.netlify.app"
          />
        </Row>
      </section>
    </div>
  );
}
