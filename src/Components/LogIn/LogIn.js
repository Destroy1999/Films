import React from "react"
import "./LogIn.css"
import {NavLink} from "react-router-dom";


export default (props)=>{
    return(
        <div style={props.state.LoggedInWindow ? {right:"0"} : {right:"-100%"}} className={"LogInWindow"}>
            <button id={"LogInCloseBTN"} onClick={props.LoggedInWindowOC}><i className={"fas fa-times"}></i></button>
            <div className={"LogInContainer"}>
                <h2>Log In</h2>
                <form action={"/"}>
                    <label htmlFor={"LogInUserName"}>UserName</label>
                    <div className={"FormInputsControl"}>
                        <i className="fas fa-user"></i>
                        <input placeholder={"Enter UserName"} required id={"LogInUserName"} type={"user"}/>
                    </div>
                    <label htmlFor={"LogInPassword"}>Password</label>
                    <div className={"FormInputsControl"}>
                        <i className="fas fa-unlock-alt"></i>
                        <input placeholder={"Enter Password"} required id={"LogInPassword"} type={"password"}/>
                    </div>
                    <button>Log In</button>
                    <div className={"LogInSetting"}>
                        <div onClick={props.LogInCheckBoxClick}>
                            <div style={props.state.LogInCheckBoxStayOnline ? {backgroundColor:"lime"} : {backgroundColor:"red"}} id={"RememberME"}>
                                <div
                                    style={props.state.LogInCheckBoxStayOnline ? {transform:"translateX(-50%)"} : {transform:"translateX(50%)"}}
                                    id={"CheckboxCircle"}
                                ></div>
                            </div>
                            <p>Remember Me</p>
                        </div>
                        <div>
                            <NavLink to={"/"}>Forgot Password</NavLink>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}