import React from 'react'
import './Nav.scss';
import { Link,NavLink } from "react-router-dom";


const Nav = () => {

    

    return (
        <>
            
                <header>
                    <div className="nav_body">
                        <div className='nav_logo'>
                            <h1>Logo</h1>
                        </div>

                        <div className="nav_left">
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
                        <div className='nav_arrow'>

                        </div>


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

                            <i className="fa-solid fa-bars"></i>
                            
                        </div>

                    </div>
                </header>
        
        </>
    )
}

export default Nav;