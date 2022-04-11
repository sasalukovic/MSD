import React from "react";
import './app.scss';
import { Route, Switch, Redirect } from "react-router-dom";
import Login from "./Pages/Login/Login"
import Dashboard from "./Pages/Dashboard/Dashboard"
import { useState } from "react";


//store the token in memory using State
//So far we created an application with private components and a login component that will display until we set a token
// NEXT STEP : fetch an API that will return a user token
// GOAL : call the API from the Login component and save the token to memory on success.
function App() {
    const [token, setToken] = useState(localStorage.getItem("storedToken"));
    // display Login Page if the token is falsy - so by default even if we navigate to Dashboard
    // we will be in the Login page because token were not fetched yet

    return (
        <div>
                {!token && 
                    <Switch>
                        <Route exact path="/">
                            <Login setToken={setToken}></Login>
                        </Route>
                        <Redirect from="/dashboard" to="/"/>
                    </Switch>
                    } 
                {token && 
                    <Switch>
                        <Route path="/dashboard" component={Dashboard}></Route>
                        <Redirect from="/" to="/dashboard"/>
                    </Switch>
                }
        </div>
     );
}

export default App;