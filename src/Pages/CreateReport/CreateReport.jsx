import React, { useContext, useState } from "react";
import "./createreport.scss";
import { Route, Switch } from "react-router-dom";
import Section1 from "../../Components/Section1/Section1";
import Section2 from "../../Components/Section2/Section2";
import Section3 from "../../Components/Section3/Section3";
import { ctx } from "../../Components/Provider/Provider";

const CreateReport = () => {
  const value = useContext(ctx);

  const [newCandidate, setNewCandidate] = useState({
    candidateId: "",
    companyId: "",
    interviewDate: "",
    phase: "",
    status: "",
    note: "",
  });

  const pickNewCandidate = (key, value) => {
    setNewCandidate((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  const submitReport = () => {
    const candidate = value.candidates.find(
      (e) => e.id === newCandidate.candidateId
    );
    const company = value.companies.find(
      (e) => e.id === newCandidate.companyId
    );

    fetch("http://localhost:3333/api/reports", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${value.token}`,
      },
      body: JSON.stringify({
        ...newCandidate,
        candidateName: candidate.name,
        companyName: company.name,
      }),
    })
      .then((res) => res.json())
      .then((res) => value.changeValidData());
  };

  return (
    <div className="create-report">
      <Switch>
        <Route exact path="/dashboard/create-report/section1">
          <Section1 selectedCandidateId={newCandidate.candidateId} pickNewCandidate={pickNewCandidate}></Section1>
        </Route>
        <Route path="/dashboard/create-report/section2">
          <Section2 selectedCompanyId={newCandidate.companyId} pickNewCandidate={pickNewCandidate}></Section2>
        </Route>
        <Route path="/dashboard/create-report/section3">
          <Section3
            pickNewCandidate={pickNewCandidate}
            submitReport={submitReport}
          ></Section3>
        </Route>
      </Switch>
    </div>
  );
};

export default CreateReport;