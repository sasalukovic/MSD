import React, { createContext } from "react";
import "./dashboard.scss";
import { Route, Switch, Link } from "react-router-dom";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import SingleCandidate from "../SingleCandidate/SingleCandidate";
import CreateReport from "../CreateReport/CreateReport";
import Report from "../../Components/Report/Report"
import { useState, useEffect } from "react";
import { Provider } from "../../Components/Provider/Provider";
import { ctx } from "../../Components/Provider/Provider"; 
import Modal from "../../Components/Modal/Modal";

const Dashboard = (props) => {

    const [candidates, setCandidates] = useState([])
    const [companies, setCompanies] = useState([])
    const [reports, setReports] = useState([])
    const [validData, setValidData] = useState(false)
    const token = props.token
   
    useEffect(()=>{
        fetch("http://localhost:3333/api/candidates")
        .then(res=>res.json())
        .then(data=>setCandidates(data))
    },[])
    
    useEffect(()=>{
        fetch("http://localhost:3333/api/companies")
        .then(res=>res.json())
        .then(res=>setCompanies(res))
    },[])

     useEffect(()=>{
        fetch("http://localhost:3333/api/reports")
        .then(res=>res.json())
        .then(res=>setReports(res))
    },[validData])

    const changeValidData = () => {
        setValidData(!validData)
    }

    return ( 
        <div className="dashboard">
            <Provider value={{candidates, companies, reports, token, setValidData, changeValidData}}>
                <Header logOut={props.setToken}></Header>     
                <div className="list">
                    <Switch>
                        <Route exact path="/dashboard" component={Report}></Route>                    
                        <Route path="/dashboard/create-report/" component={CreateReport}></Route>
                        <Route path="/dashboard/single/:id" component={SingleCandidate}></Route>
                    </Switch>
                </div>
                <Footer></Footer>
            </Provider>
        </div>
     );
}
 
export default Dashboard;