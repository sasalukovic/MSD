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

                <div>
                  <div>Name:</div> 
                  <div>{candidate.name}</div>
                </div>
                <div>
                  <div>Date of birth:</div>  
                  <div>{candidate.birthday.slice(4,15).split(" ").join(".")}</div>
                </div>
                <div>
                  <div>Email:</div> 
                  <div>{candidate.email}</div>
                </div>
                <div>
                  <div>Education:</div> 
                  <div>{candidate.education}</div>
                </div>

            </div>
        </div>
        <br />
            Reports
        <br />
        <table className="single-reports">
            <tr className="header-reports">
                 <th><h3>Company</h3></th>
                 <th><h3>Interview date</h3></th>
                 <th><h3>Status</h3></th>
                 <th><h3>View</h3></th>
            </tr>
            {reports.map((e)=>
            <tr className="reports-info">                               
                    <td>{e.companyName}</td>                   
                    <td>{(e.interviewDate).length > 15 ? (e.interviewDate).slice(4,15) : e.interviewDate}</td>                                                
                    <td>{e.status}</td>                        
                    <td className="btn"><button onClick={()=>{setModal(true)
                       setSelectedReport(e)}}>More info</button></td>
            </tr>
            )}
        </table>
      
          
      <Link className="goback" to="/dashboard">Back to Dashboard</Link>
    </div>
  );
};

export default SingleCandidate;