import React from "react";
import "./createreport.scss";
import { Route, Switch } from "react-router-dom"
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Section1 from "../../Components/Section1/Section1";
import Section2 from "../../Components/Section2/Section2";
import Section3 from "../../Components/Section3/Section3";


const CreateReport = () => {
    return ( 
        <div>
            
            <Switch>
                <Route path="/dashboard/create-report/section" component={Section1}></Route>
            </Switch>
        </div>
     );
}
 
export default CreateReport;