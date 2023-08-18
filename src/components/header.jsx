import React from "react";

function Header(props) {
    return ( 
    <div className="heads">
        <a href="#"><img src={props.src} /></a>

        <div className="btn-container">
            <button className="btn1">Register</button>
            <button className="btn2">Login</button>
        </div>
    </div> );
}

export default Header;
