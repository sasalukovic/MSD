import React, { useState, useContext } from "react";
import "./section1.scss";
import { Link } from "react-router-dom"
import { ctx } from "../Provider/Provider";
import { useHistory } from "react-router-dom";

const Section1 = () => {
   const value = useContext(ctx)

// GO BACK BUTTON
let history = useHistory()
const Back = () => {
    return history.goBack()
}

const [disabled, setDisabled] = useState(false)
const [search, setSearch] = useState("")


    return ( 
        <div className="section1">
            Section 1
            <br />
            <input type="text" onChange={((e) => setSearch(e.target.value))} placeholder="Search"/>
            <div className="candidates-cards">
            {value.candidates.filter((e)=>{
                if(search === ""){
                    return e
                }
                
                else if(e.name.toLowerCase().includes(search.toLowerCase())){
                    return e
                }
                
            }).map((e)=>
                            <div className="section-candidates">
                                <h2>{e.name}</h2>
                                <p>{e.email}</p>
                            </div>
            )}

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