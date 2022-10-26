import React from "react"
import "./Console.css"
import {NavLink} from "react-router-dom";


export default (props)=>{
    return(
        <section id={"SectionAdminConsole"}>
            {props.state.AdminLoggedIn
                ?
                <div className={"ConsoleContainer"}>
                    <div className={"ConsoleWindow"}>
                        <div className={"ConsoleContentContainer"}></div>
                    </div>
                    <input value={props.state.ConsoleTextArea} onChange={props.ConsoleTextAreaCode} required></input>
                    <button id={"ConsoleAddBTN"} onClick={props.AdminConsoleTextArea}>Send</button>
                </div>
                :
                <div className={"DontLogInAdminConsolePermissions"}>
                    <h1>Log in to the Admin Panel to access the console - <NavLink to={"/Admin"}>Log In</NavLink></h1>
                </div>
            }
        </section>
    )
}