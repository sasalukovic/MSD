import React, { useContext, useState } from "react";
import "./section2.scss";
import { Link } from "react-router-dom"
import { ctx } from "../Provider/Provider";
import { useHistory } from "react-router-dom";

const Section2 = () => {
    const value = useContext(ctx)
 
// GO BACK BUTTON
let history = useHistory()

const Back = () => {
    return history.goBack()
}


const [search, setSearch] = useState("")

     return ( 
         <div className="section2">
             Section 2
             <br />
             <input type="text" onChange={((e) => setSearch(e.target.value))} placeholder="Search"/>
             <div className="companies-cards">
             {value.companies.filter((e)=>{
                if(search === ""){
                    return e
                }
                
                else if(e.name.toLowerCase().includes(search.toLowerCase())){
                    return e
                }
                
            }).map((e)=>
                        <div className="section-companies">
                                <h2>{e.name}</h2>
                                <p>{e.email}</p>
                        </div>
                )}
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