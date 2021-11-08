import "../css/style.css";
import { Row } from "react-bootstrap";
import Project from "./Card";

export default function Applications() {
  return (
    <div>
      <h1 className="question">Full-Stack Applications</h1>
      <section className="cards">
        <Row xs={1} md={2} className="g-4">
          <Project
            title="Training Routine"
            text="App for tracking training, able to accept data, analyse it, provide insights, and illustrate the findings. Built-in authentication using Firebase"
            points="Authentication, PostreSQL, TS"
            image="https://www.digital-photo-secrets.com/images/lotus_low.jpg"
            link="#"
          />
          <Project
            title="CRUK Campaign"
            text="The result of a 1-working day input. Features a forum and a quiz. Needs improvement in CSS"
            points="PostreSQL, TS"
            image="https://www.digital-photo-secrets.com/images/lotus_low.jpg"
            link="#"
          />
        </Row>
      </section>
    </div>
  );
}
