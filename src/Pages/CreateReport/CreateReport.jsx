import React, { useContext, useState } from "react";
import "./createreport.scss";
import { Route, Switch } from "react-router-dom";
import Section1 from "../../Components/Section1/Section1";
import Section2 from "../../Components/Section2/Section2";
import Section3 from "../../Components/Section3/Section3";
import { ctx } from "../../Components/Provider/Provider";

const CreateReport = () => {
  const value = useContext(ctx);

  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [details, setDetails] = useState({
        interviewDate: "",
        phase: "",
        status: "",
        notes: "",
  });

//   console.log(details);



//   const pickSelectedCandidate = (clicked) => {
//     console.log(clicked);
//     setSelectedCandidate(clicked);
//   };

//   const pickSelectedCompany = (clicked) => {
//     console.log(clicked);
//     setSelectedCompany(clicked);
//   };

  const pickSelectedCandidate = (key, value) => {
    console.log(value);
    setSelectedCandidate({
      [key]: value,
    });
  };


  const pickSelectedCompany = (key, value) => {
    console.log(value);
    setSelectedCompany({
      [key]: value,
    });
  };

  const pickDetails = (key, value) => {
    setDetails({
      ...details,
      [key]: value,
    });
  };

  const submitReport = () => {
    console.log("radim");
    fetch("http://localhost:3333/api/reports", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${value.token}`
      },
      body: JSON.stringify(details)
      ,})
      .then((res) => res.json())
      .then((res) => console.log(res))
  };

  return (
    <div className="create-report">
      <Switch>
        <Route exact path="/dashboard/create-report/section1">
          <Section1 pickSelectedCandidate={pickSelectedCandidate}></Section1>
        </Route>
        <Route path="/dashboard/create-report/section2">
          <Section2 pickSelectedCompany={pickSelectedCompany}></Section2>
        </Route>
        <Route path="/dashboard/create-report/section3">
          <Section3
            pickDetails={pickDetails}
            submitReport={submitReport}
          ></Section3>
        </Route>
      </Switch>
    </div>
  );
};

export default CreateReport;
