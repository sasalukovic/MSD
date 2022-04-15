import React from "react";
import "./modal.scss";

const Modal = (props) => {

    return ( 
        <div className="modal-wrapper">
            <div className="modal-content">
                <div>
                    <h2>{props.candidate.name}</h2>
                    <button className="modal-close" onClick={()=>props.setModal(false)}>X</button>
                </div>
                <div>
                    <div>
                        <div>
                            <p>Company</p>
                            <h3>{props.report.companyName}</h3>
                        </div>
                        <div>
                            <p>Date</p>
                            <h3>{(props.report.interviewDate).length > 15 ? (props.report.interviewDate).slice(4,15) : props.report.interviewDate}</h3>
                        </div>
                        <div>
                            <p>Phase</p>
                            <h3>{props.report.phase}</h3>
                        </div>
                        <div>
                            <p>Status</p>
                            <h3>{props.report.status}</h3>
                        </div>
                    </div>
                    <div>
                        <p>Note</p>
                        <div>{props.report.note}</div>
                    </div>
                </div>

            </div>
        </div>
     );
}
 
export default Modal;