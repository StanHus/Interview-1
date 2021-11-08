import "../css/style.css";
import { Row } from "react-bootstrap";
import Project from "./Card";

export default function Games() {
  return (
    <div>
      <h1 className="question">Games and other interactive apps</h1>
      <section className="cards">
        <Row xs={1} md={2} className="g-4">
          <Project
            title="Tic-Tac-Toe"
            text="Working on making the computer smarter "
            points="css, ts, testing"
            image="https://www.digital-photo-secrets.com/images/lotus_low.jpg"
            link="#"
          />
          <Project
            title="Quiz Game"
            text="Impoving the scoring system and the countdown mechanics"
            points="css, ts, databases"
            image="https://www.digital-photo-secrets.com/images/lotus_low.jpg"
            link="#"
          />
        </Row>
      </section>
    </div>
  );
}
