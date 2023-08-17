import { Link } from "react-router-dom";
/* import React from "react";

function Header(){
    return(
        <div>First React Component</div>
    )
} */

const Header = () => {
    return (
        <div className="ui fixed menu">
            <div className="ui container center" style={{ height: "55px"}}>
                <h1><Link exact to = "/">ReduxEcomm</Link></h1>
            </div>
        </div>
    )
}
export default Header;