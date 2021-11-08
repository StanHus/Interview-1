import { Fragment } from "react";
import "../../css/style.css"

export default function Impact (){
const meanings = ["______________", "Making a difference", "Being a digital inclusion ambassador", "Distributing opportunities and innovation (open-source coding)", "Narrowing the digital divide", "______________"]

    return(
        <Fragment>
            <h2 className="question">What socially impactful work means to me</h2>
            <div className="list">{meanings.map((meaning)=><h4>{meaning}</h4>)}</div>
        </Fragment>
    )
}