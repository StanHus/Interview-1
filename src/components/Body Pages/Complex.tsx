import "../../css/style.css";
import Project from "../Utils/Card";

export default function Applications() {
  return (
    <div>
      <h1 className="question">Full-Stack Applications</h1>
      <section className="projects-container">
        <Project
          title="Training Routine"
          text="App for tracking training, able to accept data, analyse it, provide insights, and illustrate the findings. Built-in authentication using Firebase"
          points="React, Auth, PostreSQL, TS"
          image="https://i.ibb.co/zsGf4bd/image.png"
          link="https://training-routine.netlify.app"
          special={true}
        />
        <Project
          title="Elimination Tournament"
          text="I love elimination-tournaments so much that I was spending way too much time in excel drawing brackets. Being a developer, I decided to automate the process!"
          points="React, PostreSQL, TS, CSS"
          image="https://i.ibb.co/G2kD24M/image.png"
          link="https://picker-game.netlify.app"
        />
      </section>
    </div>
  );
}
