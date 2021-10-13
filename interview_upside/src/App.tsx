import { Fragment } from "react"
import {BrowserRouter, Link, Switch, Route} from "react-router-dom";
import Personal_project from "./components/pp_redirect"

export default function App(){
    return(
        <>
         <BrowserRouter>
            <nav>
                    <button className="switchButton"> 
                        <Link className = "navlink" to="/pp">Personal Project</Link>
                    </button>  
                    <button className="switchButton"> 
                        <Link className = "navlink" to="/role">Developer Role</Link>
                    </button>                          
            </nav>
            <main>
                <Switch>
                    <Route exact path = "/pp">
                    <section>
                        <Personal_project />
                      </section> 
                    </Route>
                    {/* <Route exact path = "/progress">
                        <section>
                            <ListProgress />
                            <Footer />
                        </section>
                    </Route>
                    <Route exact path = "/analysis">
                        <section>
                            <Analysis />
                            <Footer />
                        </section>
                    </Route> */}
                    {/* <Route exact path = "/userPage">
                        <section>
                            <SignUp />
                        </section>
                    </Route> */}
                </Switch>
            </main>
         </BrowserRouter>
        </>
)}