import { Fragment } from "react";
import "../css/style.css"

export default function Role(){

const actions = ["Accessible and readable", "Reusable and adaptable", "Sustainable", "Tailored to the client's needs"]
const ways = ["Teamwork and collaboration", "Constant learning", "Staying on top of the digital trends"]

    return (
        <Fragment>
            <h2>How I see the role of developer in delivering digital services</h2>
            <section className ="show">
                <div className="lefthalf">
                    <h3>What one does</h3>
                    {actions.map((action) => <h4>{action}</h4>)}
                </div>
                <div className="righthalf">
                    <h3>How one does it</h3>
                    {ways.map((way) => <h4>{way}</h4>)}
                </div>
            </section>
        </Fragment>
    )
}