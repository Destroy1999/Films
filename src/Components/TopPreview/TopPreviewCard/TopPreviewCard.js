import React from 'react'
import "./TopPreviewCard.css"
import {NavLink} from "react-router-dom";

export default (props)=>{
    let NewReplacerAddedSymbolHrefTop = props.TopFilmElem.FilmTitle.toLowerCase()
        .replace(/ /g,"_").replace(/\:/g,"").replace(/\./g,"")
        .replace(/а/g,"a").replace(/б/g,"b").replace(/в/g,"v").replace(/г/g,"g")
        .replace(/д/g,"d").replace(/е/g,"e").replace(/ё/g,"io").replace(/ж/g,"j")
        .replace(/з/g,"z").replace(/и/g,"i").replace(/й/g,"iy").replace(/к/g,"k")
        .replace(/л/g,"l").replace(/м/g,"m").replace(/н/g,"n").replace(/о/g,"o")
        .replace(/п/g,"p").replace(/р/g,"r").replace(/с/g,"c").replace(/т/g,"t")
        .replace(/у/g,"u").replace(/ф/g,"f").replace(/х/g,"x").replace(/ц/g,"th")
        .replace(/ч/g,"ch").replace(/ш/g,"sh").replace(/щ/g,"ssh").replace(/ъ/g,"")
        .replace(/ы/g,"ii").replace(/ь/g,"").replace(/э/g,"e").replace(/ю/g,"iu")
        .replace(/я/g,"ia")

    return(
        <NavLink to={`/FilmWatch/${NewReplacerAddedSymbolHrefTop}`} key={props.TopFilmIndex}>
            <div className={"TopFilmCard"} id={`FilmCardNumber_${props.TopFilmIndex}`}>
                <img width={"120px"} height={"200px"} src={props.TopFilmElem.FilmPoster} alt={props.TopFilmElem.FilmTitle}/>
                <h5>{props.TopFilmElem.FilmTitle}</h5>
            </div>
        </NavLink>
    )
}