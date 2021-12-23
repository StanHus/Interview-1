import "../../css/style.css";
import Project from "../Utils/Card";

export default function Mini() {
  return (
    <div>
      <h1 className="question">Mini-projects and GitHub Repos</h1>
      <section className="projects-container">
        <Project
          title="Tech Test, Nov, 3 hours"
          text="November 2021 take-home tech assessment. 3 hours to complete. Completely operational full-stack project. A visible step-up from the previous tech test (P.S. I got the job!!!!)"
          points="React, Node, TS, PostgreSQL"
          image="https://i.ibb.co/3cLHjnF/image-2021-11-25-134004.png"
          link="https://tech-test-beauhurst.netlify.app"
          special={true}
        />
        <Project
          title="Tech Test, Oct, 7 hours"
          text="October 2021 take-home tech assessment. Took me 7 hours to complete. Completely operational full-stack project. My first tech test ever, one of the first full-stack projects"
          points="React, Node, TS, PostgreSQL"
          image="https://i.ibb.co/s3HYdFg/cruk.png"
          link="https://cruk-campaign.netlify.app"
        />
        <Project
          title="TV-shows displayer"
          text="First app ever, Sep 2021. Simplest converter of JSON data into a table + search and sort"
          points="React, APIs, TS"
          image="https://i.ibb.co/QHQqDQd/TV-shows.png"
          link="https://tv-shows-stan.netlify.app"
        />
      </section>
    </div>
  );
}
