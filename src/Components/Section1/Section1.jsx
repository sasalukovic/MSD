import React, { useState, useContext, useEffect } from "react";
import "./section1.scss";
import { Link } from "react-router-dom";
import { ctx } from "../Provider/Provider";
import { useHistory } from "react-router-dom";

const Section1 = (props) => {
  const value = useContext(ctx);

  // GO BACK BUTTON
  let history = useHistory();
  const Back = () => {
    return history.goBack();
  };

  const [disabled, setDisabled] = useState(false);
  const [search, setSearch] = useState("");

  return (
    <div className="section1">
        <div className="search">
                <input type="text" onChange={((e) => setSearch(e.target.value))} placeholder="Search"/>
                <div className="single-create">
                    <div className="single-card">
                        <Link to="/dashboard">
                            Reports
                        </Link> 
                    </div>
                    <div className="create-card">
                        <Link to="/dashboard/create-report/section1">
                            Create Report
                        </Link>
                    </div>
                </div>
            </div>
      <div className="candidates-cards">
        {value.candidates
          .filter((e) => {
            if (search === "") {
              return e;
            } else if (e.name.toLowerCase().includes(search.toLowerCase())) {
              return e;
            }
          })
          .map((e) => (
            <div
              onClick={() => {
                props.pickNewCandidate("candidateId", e.id);
              }}
              className="section-candidates"
            >
              <h2>{e.name}</h2>
              <p>{e.email}</p>
            </div>
          ))}
      </div>

      <div className="buttons">
        <button onClick={Back}>BACK</button>
        <Link to="/dashboard/create-report/section2">
          <button disabled={disabled} onClick={() => setDisabled(true)}>
            NEXT
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Section1;
