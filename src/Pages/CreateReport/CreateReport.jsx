import React, { useContext, useState } from "react";
import "./createreport.scss";
import { Route, Switch } from "react-router-dom"
import Section1 from "../../Components/Section1/Section1";
import Section2 from "../../Components/Section2/Section2";
import Section3 from "../../Components/Section3/Section3";
import { ctx } from "../../Components/Provider/Provider";

const CreateReport = () => {

    const value = useContext(ctx)

    const [data, setData] = useState([])
    const [selectedCandidate, setSelectedCandidate] = useState("")
    const [selectedCompanie, setSelectedCompanie] = useState("")
    const [details, setDetails] = useState([])

    const pickSelectedCandidate = (clicked) => {
        setSelectedCandidate(clicked)
    }

    const submitReport = () => {
        console.log("radim");
        fetch("http://localhost:3333/api/reports", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(selectedCandidate),
        })
        .then((res)=>res.json())
        .then(res=>console.log(res))
    }
    
    return ( 
        <div className="create-report"> 
            <Switch>
                <Route exact path="/dashboard/create-report/section1">
                    <Section1 pickSelectedCandidate={pickSelectedCandidate}></Section1>    
                </Route>
                <Route path="/dashboard/create-report/section2">
                    <Section2></Section2>    
                </Route>
                <Route path="/dashboard/create-report/section3" >
                    <Section3 submitReport={submitReport}></Section3>    
                </Route>
            </Switch>
        </div>
     );
}
 
export default CreateReport;