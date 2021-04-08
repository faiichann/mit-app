import React  from 'react'
import {NavLink} from 'react-router-dom'

const Head = (props) => { 
    return (
    <>
    <nav className="navbar navber-default">
        <div className="container">
            <div className="navbar-header">
                <ul className="nav navbar-nav">
                    <li><NavLink to={"/design"} activeStyle={{color: "red"}}>Design</NavLink></li>
                    <li><NavLink to={"/block"} activeStyle={{color: "red"}}>Block</NavLink></li>
                </ul>
            </div>
        </div>
    </nav>
    </>
    )
  }
  
export default Head