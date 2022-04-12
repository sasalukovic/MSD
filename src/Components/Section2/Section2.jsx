import React, { useContext } from "react";
import "./section2.scss";
import { Link } from "react-router-dom"
import { ctx } from "../Provider/Provider";
import { useHistory } from "react-router-dom";

const Section2 = () => {
    const value = useContext(ctx)
    console.log(value);
 
// GO BACK BUTTON
let history = useHistory()
const Back = () => {
    return history.goBack()
}

     return ( 
         <div className="section2">
             Section 2
             <div className="companies-cards">
                {value.companies.map((e)=>{
                    return <div className="section-companies">
                                <h2>{e.name}</h2>
                                <p>{e.email}</p>
                        </div>
                })}
        </div>
        
        <div className="buttons2">
                <button onClick={Back}>BACK</button>
                <br />
                <br />
                <Link to="/dashboard/create-report/section3">
                <button type="button">NEXT</button>
                </Link>
        </div>
     </div>
     );
}
 
export default Section2;