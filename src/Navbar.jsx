import React from "react";
import {Link, NavLink} from "react-router-dom"
const Navbar =(()=>{

    return(
        <div>
           <nav className="f6 fw6 ttu tracked">
            <Link to='/' >Főoldal
            <NavLink className={"link dim white dib"} to='/ermesek'>Az olimpia érmesei</NavLink>
            <NavLink className="link dim white dib mr3" to='/mermesek'>A magyar érmesek</NavLink>
            </Link>
           </nav>
           
        </div>
    )

}

)
export default Navbar