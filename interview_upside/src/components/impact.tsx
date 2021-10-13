import { Fragment } from "react";

export default function Impact (){
const meanings = ["Systematic and targeted", "Making a difference", "Distributing opportunities and innovation (open-source coding)"]

    return(
        <Fragment>
            <h2>What socially impactful work means to me?</h2>
            {meanings.map((meaning)=><h4>{meaning}</h4>)}
        </Fragment>
    )
}