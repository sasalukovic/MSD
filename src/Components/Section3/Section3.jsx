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
            <div onChange={(e)=>props.pickNewCandidate("interviewDate", e.target.value)}>
                <p>Interview Date:</p>
                <input type="date"/>
            </div>
            <form action="">
                <p>Phase:</p>
                <select onChange={(e)=>props.pickNewCandidate("phase", e.target.value)} name="phase" id="">
                    <option value="CV">CV</option>
                    <option value="HR">HR</option>
                    <option value="Technical">Technical</option>
                </select>
            </form>
            <form action="">
                <p>Status:</p>
                <select onChange={(e)=>props.pickNewCandidate("status", e.target.value)} name="status">
                    <option selected value="-">-</option>
                    <option value="passed">passed</option>
                    <option value="declined">declined</option>
                </select>
            </form>
        </div>
        <div onChange={(e)=>props.pickNewCandidate("note", e.target.value)} className="notes">
            <p>Notes:</p>
            <textarea name="textarea" id="" cols="130" rows="10" placeholder="Enter your comments"></textarea>
        </div>
        <div className="buttons">
            <button onClick={Back}>BACK</button>
            <Link to="/dashboard">
                <button onClick={props.submitReport}>Submit</button>
            </Link>
        </div>
    </div>
 );
}
export default Section3;
