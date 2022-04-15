import React, { useState } from "react";
import "./section3.scss";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const Section3 = (props) => {
  // GO BACK BUTTON
  let history = useHistory();
  const Back = () => {
    return history.goBack();
  };

  return (
    <div className="section3">
      <div className="date-phase-status">
        <div>
          <p>Interview Date:</p>
          <input
            type="date"
            onChange={(e) => props.pickDetails("interviewDate", e.target.value)}
          />
        </div>

        <form action="">
          <p>Phase:</p>
          <select
            name="phase"
            id=""
            onChange={(e) => props.pickDetails("phase", e.target.value)}
          >
            <option value="CV">CV</option>
            <option value="HR">HR</option>
            <option value="Technical">Technical</option>
          </select>
        </form>

        <form action="">
          <p>Status:</p>
          <select
            name="status"
            onChange={(e) => props.pickDetails("status", e.target.value)}
          >
            <option selected value="-">-</option>
            <option value="passed">passed</option>
            <option value="declined">declined</option>
          </select>
        </form>
      </div>
      <div className="notes">
        <p>Notes:</p>
        <textarea
          name="message"
          onChange={(e) => props.pickDetails("notes", e.target.value)}
          placeholder="Enter your comments"
        ></textarea>
        |
      </div>

      <div className="buttons">
        <button onClick={Back}>BACK</button>
        <Link to="/dashboard">
            <button onClick={props.submitReport}>Submit</button>
        </Link>
      </div>
    </div>
  );
};

export default Section3;
