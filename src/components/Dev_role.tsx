import { Fragment } from "react";
import "../css/style.css"

export default function Role(){

const actions = ["______________", "Accessible and readable", "Reusable and adaptable", "Sustainable", "Tailored to the client's needs", "______________"]
const ways = ["______________", "Teamwork and collaboration", "Constant learning", "Staying on top of the digital trends", "______________"]

    return (
        <Fragment>
            <h1 className="question">How I see the role of developer in delivering digital services</h1>
            <section className ="show">
                <div className="lefthalf">
                    <h2>Building software</h2>
                    {actions.map((action) => <h4>{action}</h4>)}
                </div>
                <div className="righthalf">
                    <h2>How one does it</h2>
                    {ways.map((way) => <h4>{way}</h4>)}
                </div>
            </section>
        </Fragment>
    )
}