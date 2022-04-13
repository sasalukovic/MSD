import React, { useState, useContext, useEffect } from "react";
import "./section1.scss";
import { Link } from "react-router-dom"
import { ctx } from "../Provider/Provider";
import { useHistory } from "react-router-dom";

const Section1 = () => {

// GO BACK BUTTON
let history = useHistory()
const Back = () => {
    return history.goBack()
}

const [disabled, setDisabled] = useState(false)

// CREATE STATES TO STORE CANDIDATES ID
const [selectCandidate, setSelectCandidate] = useState('')
const value = useContext(ctx)
console.log(value)


return ( 
    <div className="section1">
            Section 1
        <div className="candidates-cards">
            {value.candidates.map((e)=>{
                return <div className={`section-candidates ${selectCandidate === e.id  ? 'active-candidate' : null }`} onClick={() => {setSelectCandidate(e.id)}}>
                            <h2>{e.name}</h2>
                            <p>{e.email}</p>
                    </div>
            })}
        </div>

        <div className="buttons">
            <button onClick={Back}>BACK</button>
            <br />
            <Link to="/dashboard/create-report/section2">
            <button disabled={disabled} onClick={() => setDisabled(true)}>NEXT</button>
            </Link>
        </div>
    </div>
 );

}


export default Section1;