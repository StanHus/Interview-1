import { Fragment } from "react";

export default function Role(){

const actions = ["Accessible and readable", "Reusable and adaptable", "Sustainable", "Tailored to the client’s needs"]

    return (
        <Fragment>
            <h2>How I see the role of developer in delivering digital services</h2>
            <div>
                <h3>What one does</h3>
                {actions.map((action) => <h4>{action}</h4>)}
            </div>
        </Fragment>
    )
}