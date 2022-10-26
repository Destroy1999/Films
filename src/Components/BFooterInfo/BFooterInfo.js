import React from "react"
import "./BFooterInfo.css"


export default (props)=>{
    return(
        <section id={"BFooter"}>
            <div className={"SiteInfo"}>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, nam, optio? Atque dolorum in ipsum. Cum dolore dolorum fuga nemo provident? Atque aut consequuntur deserunt dicta doloremque dolorum eaque excepturi explicabo facere ipsam maiores nemo nesciunt nihil odio, officia officiis omnis pariatur ratione recusandae sequi similique tempora totam velit vitae.</p>
            </div>
            <div className={"CallBack"}>
                <span>EpicFilmsWebSite@gmail.com <i className="fas fa-envelope"></i> </span>
                <span>+374-96-352156<i className="fas fa-phone"></i></span>
            </div>
        </section>
    )
}