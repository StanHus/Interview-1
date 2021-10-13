import { Fragment } from "react"
import "../css/style.css"

export default function Motivation(){

    const motivations = ["New Horizons", "New Technologies", "Adding Value"]

    return (
        <Fragment>
            <h2 className="question">What motivates me?</h2>
            <div className="list">{motivations.map((motive)=> <h4>{motive}</h4>)}</div>
        </Fragment>
    )
}