import React from "react"
import "./Register.css"


export default (props)=>{
    return(
        <section id={"SectionRegister"}>
            <div className={"RegisterContainer"}>
                <h1>Registration</h1>
                <form action={"/"} id={"RegisterForm"}>
                    <div>
                        <label htmlFor={"Name"}>Your Name</label>
                        <div>
                            <i className="fas fa-user"></i>
                            <input id={"Name"} type={"name"} autocomplete={"on"} autoFocus required placeholder={"Enter Your Name"}/>
                        </div>
                    </div>
                    <div>
                        <label htmlFor={"UserName"}>Your UserName</label>
                        <div>
                            <i className="fas fa-users"></i>
                            <input id={"UserName"} autocomplete={"on"} type={"username"} required placeholder={"Enter Your UserName"}/>
                        </div>
                    </div>
                    <div>
                        <label htmlFor={"EMail"}>Your E-Mail</label>
                        <div>
                            <i className="fas fa-envelope"></i>
                            <input id={"EMail"} autocomplete={"on"} type={"email"} required placeholder={"Enter Your Email"}/>
                        </div>
                    </div>
                    <div>
                        <label htmlFor={"Phone"}>Your Phone</label>
                        <div>
                            <i className={"fas fa-phone"}></i>
                            <select required>
                                <option disabled selected value={""}>+</option>
                                <option value={"ARM"}>+374</option>
                                <option value={"TR"}>+7</option>
                                <option value={"TD"}>+1</option>
                            </select>
                            -
                            <input value={props.state.test} onChange={props.test1} style={{width:"220px", padding:"5px 10px 5px 0px"}} pattern={"[0-9]{2}-[0-9]{3}-[0-9]{3}"} id={"Phone"} maxLength={"10"} autoComplete={"off"} type={"tel"} required placeholder={"Enter Your Phone 00-000-000"}/>
                        </div>
                    </div>
                    <div>
                        <label htmlFor={"Password"}>Your Password</label>
                        <div>
                            <i className="fas fa-lock"></i>
                            <input id={"Password"} autocomplete={"new-password"} type={"password"} required placeholder={"Enter Your Password"}/>
                        </div>
                    </div>
                    <div>
                        <label htmlFor={"ConfPassword"}>Confirm Password</label>
                        <div>
                            <i className="fas fa-shield-alt"></i>
                            <input id={"ConfPassword"} autocomplete={"on"} type={"password"} required placeholder={"Confirm Your Password"}/>
                        </div>
                    </div>
                    <div>
                    <button>SEND</button>
                    </div>
                </form>
            </div>
        </section>
    )
}
