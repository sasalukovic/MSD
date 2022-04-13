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
                <div>
                    <img src="https://st.depositphotos.com/46079520/54991/v/450/depositphotos_549918768-stock-illustration-msd-letter-logo-design-black.jpg" alt="logo" height="150px" />
                </div>
                <div className="heder-right">
                    <p>Hello Developer!</p>
                    <Link to="/">
                        <button onClick={logout} className="logout"> Logout </button>
                    </Link>
                </div>
            </div>
       </>
     );
}
 
export default Header;
