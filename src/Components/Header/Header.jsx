import React from "react";
import "./header.scss";
import { Link } from "react-router-dom";

function Header (props){
    const logout = () => {
        props.logOut(null)  
        localStorage.clear();
        }

    return ( 
        <>
            <div className="heder">
                <Link to="/">
                    <button onClick={logout}> Logout </button>
                </Link>
            </div>
       </>
     );
}
 
export default Header;
