import { Fragment } from "react"

export default function Motivation(){

    const motivations = ["New Horizons", "New Technologies", "Adding Value"]

    return (
        <Fragment>
            <h2>What motivates me?</h2>
            {motivations.map((motive)=> <h4>{motive}</h4>)}
        </Fragment>
    )
}