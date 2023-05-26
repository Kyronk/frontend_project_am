import React from 'react'
import './Nav.scss';
import { Link,NavLink } from "react-router-dom";


const Nav = () => {
    return (
        <>
            <div className="nav_body">
                <header>
                    <div className="nav_left">
                        <h1>Logo</h1>

                        <ul className='navbar'>
                            <li>
                                <NavLink>
                                    <p>Home</p>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink>
                                    <p>Library</p>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink>
                                    <p>About</p>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    {/* <div className="navBar"> */}

                            
                        
                    {/* </div> */}
                    <div className='nav_right'>
                        <button
                            className="btn_github"
                        >
                            <i className="fa fa-github"></i>
                            Github
                        </button>
                        <button
                            className="btn_source"
                        >
                            Source code
                        </button>
                    </div>
                </header>
            </div>
        </>
    )
}

export default Nav;