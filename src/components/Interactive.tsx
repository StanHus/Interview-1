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
            text="Game vs computer. For now, its my own simple TS algorithm behind computer moves. Planning to make the computer smarter"
            points="CSS, TS, Testing"
            image="https://i.ibb.co/cx4vYWJ/image-2021-11-08-172045.png"
            link="https://tic-tac-toe-stan.netlify.app"
          />
          <Project
            title="Quiz Game"
            text="Game template for now (with dummy questions). Needs impoving the scoring system and the countdown mechanics"
            points="CSS, TS, Databases"
            image="https://i.ibb.co/kSmbzpZ/Quiz.png"
            link="https://family-quiz.netlify.app"
          />
        </Row>
      </section>
    </div>
  );
}
