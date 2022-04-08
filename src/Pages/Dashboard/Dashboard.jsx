import React from "react";
import "./dashboard.scss";
import { Route, Switch } from "react-router-dom";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import SingleCandidate from "../SingleCandidate/SingleCandidate";
import CreateReport from "../CreateReport/CreateReport";
import Report from "../../Components/Report/Report"


const Dashboard = () => {
    return ( 
        <div>
            <Header></Header>
            <Switch>
                <Route path="/dashboard/reports" component={Report}></Route>
                <Route path="/dashboard/single" component={SingleCandidate}></Route>
                <Route path="/dashboard/create-report" component={CreateReport}></Route>
            </Switch>
            <Footer></Footer>
        </div>
     );
}
 
export default Dashboard;