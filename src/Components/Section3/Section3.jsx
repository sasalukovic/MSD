import React from "react";
import "./section3.scss";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const Section3 = (props) => {

// GO BACK BUTTON
let history = useHistory()
const Back = () => {
    return history.goBack()
}


    return ( 
        <div className="section3">
            <div className="date-phase-status">
                <div>
                    <p>Interview Date:</p>
                    <input type="date"/>
                </div>

                <form action="">
                    <p>Phase:</p>            
                    <select name="phase" id="">
                        <option value="">CV</option>    
                        <option value="">HR</option>    
                        <option value="">Technical</option>    
                    </select>    
                </form>

                  
                <form action="">
                    <p>Status:</p>
                    <select name="status">
                        <option value="">Passed</option>    
                        <option value="">Declined</option>                        
                    </select>    
                </form>
            
            
            
            </div>
            <div className="notes">
                <p>Notes:</p>
                <textarea name="textarea" id="" cols="130" rows="10" placeholder="Enter your comments"></textarea>
            </div>
            
          
            <div className="buttons">
                <button onClick={Back}>BACK</button>
                {/* <Link> */}
                    <button onClick={props.submitReport}>Submit</button> 
                {/* </Link> */}
            </div>

  
        </div>
     );
}
 
export default Section3;