import React from "react";
import './app.scss';
import { Route, Switch } from "react-router-dom";
import Login from "./Pages/Login/Login"
import Dashboard from "./Pages/Dashboard/Dashboard"
import { useState, useEffect } from "react";

const App = () => {



    

    return ( 
        <div>

            <Switch>
                <Route exact path="/" component={Login}></Route>
                <Route path="/dashboard" component={Dashboard}></Route>
            </Switch>
                
        </div>
     );
}
 
export default App;