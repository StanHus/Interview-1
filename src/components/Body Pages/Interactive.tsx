import "../../css/style.css";
import { Row } from "react-bootstrap";
import Project from "../Utils/Card";

export default function Games() {
  return (
    <div>
      <h1 className="question">Games and Interactive Sketches</h1>
      <section className="cards">
        <Row xs={1} md={2} className="g-4">
          <Project
            title="3D Car Game"
            text="Gas pedal (Shift) to the floor and lets go! Cool little game with multiple common racing game mechanics"
            points="JS, p5, OpenProcessing"
            image="https://i.ibb.co/K2PjB4j/riding.png"
            link="https://openprocessing.org/sketch/1344210"
          />
          <Project
            title="3D Plane Game"
            text="Change views, look around, flyyy. An interactive game, with multiple 3d features and fully working mechanics"
            points="JS, p5, OpenProcessing"
            image="https://i.ibb.co/WnVXqLr/image-2021-11-09-151915.png"
            link="https://openprocessing.org/sketch/1345775"
          />
          <Project
            title="Tic-Tac-Toe"
            text="Game vs computer. For now, its my own simple TS algorithm behind computer moves. Planning to make the computer smarter"
            points="React TS, Testing"
            image="https://i.ibb.co/cx4vYWJ/image-2021-11-08-172045.png"
            link="https://tic-tac-toe-stan.netlify.app"
          />
          <Project
            title="Quiz Game"
            text="Game template for now (with dummy questions). Needs impoving the scoring system and the countdown mechanics"
            points="React, TS, Databases"
            image="https://i.ibb.co/kSmbzpZ/Quiz.png"
            link="https://family-quiz.netlify.app"
          />
        </Row>
      </section>
    </div>
  );
}
