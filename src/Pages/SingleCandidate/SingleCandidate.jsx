import React, { useContext, useState } from "react";
import "./singlecandidate.scss";
import { Link } from "react-router-dom";
import { ctx } from "../../Components/Provider/Provider";
import Modal from "../../Components/Modal/Modal";

const SingleCandidate = (props) => {
  
  const value = useContext(ctx);

  const candidate = value.candidates.find(
    (e) => e.id === Number(props.match.params.id)
    );
  const reports = value.reports.filter(
    (e)=>e.candidateId ===  Number(props.match.params.id)
    )
    
  const [isModalOpen, setModalOpen] = useState(false)
  const [report, setReport] = useState([])

  const setSelectedReport = (selectedReport)=> {
    setReport(selectedReport)
  }

  const setModal = (modalState) => {
    setModalOpen(modalState)
  }

  return (
    <div className="single">
      {isModalOpen && <Modal setModal={setModal} candidate={candidate} report={report}></Modal>}
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
            Reports
        <table className="single-reports">
            <tr className="header-reports">
                 <th><h3>Company</h3></th>
                 <th><h3>Interview date</h3></th>
                 <th><h3>Status</h3></th>
                 <th>View</th>
            </tr>
            {reports.map((e)=>
            <tr className="reports-info">                               
                    <td>{e.companyName}</td>                   
                    <td>{(e.interviewDate).slice(4,15)}</td>                                                
                    <td>{e.status}</td>                        
                    <td><button onClick={()=>{setModal(true)
                       setSelectedReport(e)}}>More info</button></td>
            </tr>
            )}
        </table>
      
          
      <Link to="/dashboard">Back to Dashboard</Link>
    </div>
  );
};

export default SingleCandidate;