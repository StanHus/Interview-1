import { Fragment } from "react";
import Fade from "react-reveal/Fade";
import "../../css/style.css";

export default function Greet() {
  return (
    <Fragment>
      <Fade bottom>
        <div className="greetList">
          <img
            className="avatar"
            src="https://i.ibb.co/q7fHNgw/photo1634156874.jpg"
            alt="my avatar"
          />
          <h1 className="greetEl">
            Hi there, my name is Stanislav!
            <br />
            <br /> Welcome to my Portfolio Website
          </h1>
        </div>
      </Fade>
    </Fragment>
  );
}
