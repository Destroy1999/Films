import React from "react"
import "./NavBar.css"
import {NavLink, Redirect} from "react-router-dom";
import Logo from "./Images/Logo.png"

export default (props)=>{
    return(
        <nav>
            <ul>
                <a id={"GoToHome"} href={"/"}>
                    <div className={"Logo"}>
                        <img src={Logo} alt={"Logo"} width={"50px"} height={"50px"}/>
                        <h1><span style={{color:"red"}}>Epic</span><span style={{color:"blue"}}>Films</span></h1>
                    </div>
                </a>
                <div className={"FilmSearch"}>
                    <input onChange={props.FilmSearchInputValue} placeholder={"Введите текст для поиска"} value={props.state.FilmSearchInput} type={"text"}/>
                    <i onClick={props.FilmSearch} className={"fas fa-search"}></i>
                </div>
                {props.state.LoggedIn
                    ?
                    <div className={"LoggedInUser"}>
                        <h5>User</h5>
                    </div>
                    :
                    <div className={"LogOrReg"}>
                        <div className={"LoggedIn"}>
                            <button onClick={props.LoggedInWindowOC}>
                                <i className={"fas fa-key"}></i>
                                <p>Log In</p>
                            </button>
                        </div>
                        <div className={"Registration"}>
                            <NavLink to={"/Register"}>
                                <i className={"fas fa-user-tag"}></i>
                                <p>Reg...</p>
                            </NavLink>
                        </div>
                    </div>
                }
            </ul>
        </nav>
    )
}