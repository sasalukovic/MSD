import React from "react";
import "./login.scss"
import { Link } from "react-router-dom"

const Login = () => {
    return ( 
        <div className="login">
            <div className="form">
                <div>
                This is Login
                </div>
                <br />
                <Link to="/dashboard">
                Submit
                </Link>
            </div>
        </div>
     );
}
 
export default Login;