import { Fragment } from "react";
import "../../css/style.css";

export default function Greet() {
  return (
    <Fragment>
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
    </Fragment>
  );
}
