import "../../css/style.css";
import Project from "../Utils/Card";

export default function Portfolios() {
  return (
    <div>
      <h1 className="question">Portfolios</h1>
      <section className="projects-container">
          <Project
            title="CodeWars Profile"
            text="A coding practice site profile. Most of the exercises solved in JS"
            points="JS, TS, Python"
            image="https://i.ibb.co/874CzPQ/codewars.png"
            link="https://www.codewars.com/users/Futuremak3r"
          />
          <Project
            title="Portfolio Website"
            text="The portfolio webiste you are looking at. Efficient use of React components and CSS"
            points="React, TS, CSS"
            image="https://i.ibb.co/dM1yVbK/image-2021-11-10-180227.png"
            link="https://portfolio-stan.netlify.app"
          />

      </section>
    </div>
  );
}
