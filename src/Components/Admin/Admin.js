import React from "react"
import "./Admin.css"
import {NavLink} from "react-router-dom";


export default (props)=>{
    return(
        <section id={"SectionAdminLogIn"}>
            {props.state.AdminLoggedIn
                ?
                <>
                    <button onClick={props.AdminAccountLoggedOut}>Log Out</button>
                    <NavLink to={"/Console"}>Console</NavLink>
                </>
                :
                <div className={"LogInAdminContainer"}>
                    <h1>LogIn Admin</h1>
                    <form action={"/"}>
                        <div>
                            <label htmlFor={"AdminUserName"}>Admin UserName</label>
                            <div>
                                <i className="fas fa-user-cog"></i>
                                <input onChange={props.AdminUserNameInput} value={props.state.AdminUserName} id={"AdminUserName"} type={"username"} required placeholder={"Enter UserName"}/>
                            </div>
                        </div>
                        <div>
                            <label htmlFor={"AdminPassword"}>Admin Password</label>
                            <div>
                                <i className="fas fa-unlock-alt"></i>
                                <input onChange={props.AdminPasswordInput} value={props.state.AdminPassword} id={"AdminPassword"} type={"password"} required placeholder={"Enter Password"}/>
                            </div>
                        </div>
                        <div>
                            <button type={"submit"} onClick={props.AdminAccountLoggedIn}>Log In</button>
                        </div>
                    </form>
                    <div className={"LogInAdminSettings"}>
                        <div onClick={props.LogInAdminCheckBoxClick}>
                            <div style={props.state.LogInAdminCheckBoxStayOnline ? {backgroundColor:"lime"} : {backgroundColor:"red"}} id={"AdminRememberME"}>
                                <div style={props.state.LogInAdminCheckBoxStayOnline ? {transform:"translateX(-50%)"} : {transform:"translateX(50%)"}} id={"AdminCheckboxCircle"}></div>
                            </div>
                            <p>Remember Me</p>
                        </div>
                        <div>
                            <NavLink to={"/Console"}>Console</NavLink>
                            <NavLink to={"/"}>Forgot Password</NavLink>
                        </div>
                    </div>
                </div>
            }
        </section>
    )
}