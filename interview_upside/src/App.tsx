import {BrowserRouter, Link, Switch, Route} from "react-router-dom";
import PersonalProject from "./components/pp_redirect"
import Role from "./components/Dev_role"
import Motivation from "./components/motivation";
import Impact from "./components/impact";
import Greet from "./components/greeting";

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
                    <button className="switchButton"> 
                        <Link className = "navlink" to="/motivation">Motivation</Link>
                    </button>
                    <button className="switchButton"> 
                        <Link className = "navlink" to="/impact">Social Impact</Link>
                    </button>                            
            </nav>
            <main>
                <Switch>
                <Route exact path = "/">
                        <section>
                            <Greet />
                         </section> 
                    </Route>
                    <Route exact path = "/pp">
                        <section>
                            <PersonalProject />
                         </section> 
                    </Route>
                    <Route exact path = "/role">
                        <section>
                            <Role />
                         </section> 
                    </Route>
                    <Route exact path = "/motivation">
                        <section>
                            <Motivation />
                         </section> 
                    </Route>
                    <Route exact path = "/impact">
                        <section>
                            <Impact />
                         </section> 
                    </Route>
                </Switch>
            </main>
         </BrowserRouter>
        </>
)}