import React from "react";
import "./createreport.scss";
import { Route, Switch } from "react-router-dom"
import Section1 from "../../Components/Section1/Section1";
import Section2 from "../../Components/Section2/Section2";
import Section3 from "../../Components/Section3/Section3";

const CreateReport = () => {
    return ( 
        <div className="create-report"> 
            <Switch>
                <Route exact path="/dashboard/create-report/section1" component={Section1}></Route>
                <Route path="/dashboard/create-report/section2" component={Section2}></Route>
                <Route path="/dashboard/create-report/section3" component={Section3}></Route>
            </Switch>
        </div>
     );
}
 
export default CreateReport;