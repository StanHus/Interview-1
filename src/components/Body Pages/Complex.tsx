import "../../css/style.css";
import { Row } from "react-bootstrap";
import Project from "../Utils/Card";

export default function Applications() {
  return (
    <div>
      <h1 className="question">Full-Stack Applications</h1>
      <section className="cards">
        <Row xs={1} md={2} className="g-4">
          <Project
            title="Training Routine"
            text="App for tracking training, able to accept data, analyse it, provide insights, and illustrate the findings. Built-in authentication using Firebase"
            points="React, Auth, PostreSQL, TS"
            image="https://i.ibb.co/ZfkMLMP/training.png"
            link="https://training-routine.netlify.app"
            special={true}
          />
          <Project
            title="CRUK Campaign"
            text="The result of a 1-working day input as a technical take-home test. Features a forum and a quiz. Needs improvement in CSS"
            points="React, PostreSQL, TS"
            image="https://i.ibb.co/s3HYdFg/cruk.png"
            link="https://cruk-campaign.netlify.app"
          />
        </Row>
      </section>
    </div>
  );
}
