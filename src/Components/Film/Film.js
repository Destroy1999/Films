import React from "react"
import "./Film.css"


export default (props)=>{
    return(
        <section style={{backgroundColor:"darkgoldenrod"}} key = {props.FilmIndex}>
            <div className={"FilmContainer"}>
                <h1>{props.FilmElem.FilmTitle}</h1>
                <h5 style={{width:"50%",margin:"0 auto"}}><i>{props.FilmElem.FilmDescription}</i></h5>
                <img width={"200px"} height={"300"} src={props.FilmElem.FilmPoster} alt={props.FilmElem.FilmTitle}/>
            </div>
        </section>
    )
}