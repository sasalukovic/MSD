import React, { useContext } from "react";
import "./singlecandidate.scss";
import { Link } from "react-router-dom";
import { ctx } from "../../Components/Provider/Provider";

const SingleCandidate = (props) => {
  const value = useContext(ctx);
  const candidate = value.candidates.find(
    (e) => e.id === Number(props.match.params.id)
  );
  const reports = value.reports.filter(
      (e)=>e.candidateId ===  Number(props.match.params.id)
  )
  console.log(props);
    console.log(value);
  return (
    <div className="single">
 
        <div className="single-candidate">
            <div><img src="https://freesvg.org/img/abstract-user-flat-3.png" alt="img" /></div>
            <div className="candidate-info">

                <div>Name: {candidate.name}</div>
                <div>Date of birth: {candidate.birthday.slice(4,15).split(" ").join(".")}</div>
                <div>Email: {candidate.email}</div>
                <div>Education: {candidate.education}</div>

            </div>
        </div>
        <br />
        <table><div className="single-reports">
            Reports
            <br />
            <tr><div className="header-reports">
                 <td><div><h3>Company</h3></div></td>
                 <td><div><h3>Interview date</h3></div></td>
                 <td rowspan="2"><div><h3>Status</h3></div></td>
            </div>
            </tr>
            {reports.map((e)=>
            <tr><div className="reports-info">                                   
                    <div>{e.companyName}</div>                   
                    <div>{(e.interviewDate).slice(4,15)}</div>                                                
                    <div>{e.status}</div>                        
                    <div>Modal</div>
            </div>
            </tr>
            )}
        </div>
        </table>
      
          
      <Link to="/dashboard">Back to Dashboard</Link>
    </div>
  );
};

export default SingleCandidate;