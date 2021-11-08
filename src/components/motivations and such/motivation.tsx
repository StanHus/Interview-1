import { Fragment } from "react"
import "../../css/style.css"

export default function Motivation(){

    const motivations = ["______________", "Pursuit of my best self", "Seeing my work and its impact", "Adding Value", "______________"]

    return (
        <Fragment>
            <h2 className="question">What motivates me?</h2>
            <div className="list">{motivations.map((motive)=> <h4>{motive}</h4>)}</div>
        </Fragment>
    )
}