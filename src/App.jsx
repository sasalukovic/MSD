import React from "react";
import './app.scss';
import { Route, Switch } from "react-router-dom";
import Login from "./Pages/Login/Login"
import Dashboard from "./Pages/Dashboard/Dashboard"

const App = () => {
    return ( 
        <div>
            <Switch>
            
                <Route path="/dashboard" component={Dashboard}></Route>
                <Route exact path="/" component={Login}></Route>

            </Switch>
                

        </div>
     );
}
 
export default App;