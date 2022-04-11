import React from "react";
import "./dashboard.scss";
import { Route, Switch, Link } from "react-router-dom";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import SingleCandidate from "../SingleCandidate/SingleCandidate";
import CreateReport from "../CreateReport/CreateReport";
import Report from "../../Components/Report/Report"
import { useState, useEffect } from "react";

const Dashboard = () => {
    const [candidates, setCandidates] = useState([])
    const [companies, setCompanies] = useState([])
    const [reports, setReports] = useState([])

    useEffect(()=>{
        fetch("http://localhost:3333/api/candidates")
        .then(res=>res.json())
        .then(data=>setCandidates({candidates: data}))
    },[])
    
    useEffect(()=>{
        fetch("http://localhost:3333/api/companies")
        .then(res=>res.json())
        .then(res=>setCompanies({companies: res}))
    },[])

     useEffect(()=>{
        fetch("http://localhost:3333/api/reports")
        .then(res=>res.json())
        .then(res=>setReports({reports: res}))
    },[])
    
    return ( 
        <div className="dashboard">
            <Header></Header>
            <div className="list">
                <Switch>
                        <Route exact path="/dashboard" component={Report}></Route>                    
                        <Route path="/dashboard/create-report/" component={CreateReport}></Route>
                        <Route path="/dashboard/single" component={SingleCandidate}></Route>
                </Switch>
            </div>
            <Footer></Footer>
        </div>
     );
}
 
export default Dashboard;