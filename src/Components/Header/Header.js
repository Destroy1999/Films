import React from "react"
import "./Header.css"
import HeaderFilmsCard from "./HeaderFilmsCard/HeaderFilmsCard";
import Bounce from 'react-reveal/Bounce';
import Fade from "react-reveal/Fade";
import FilterCategories from "../FilterCategories/FilterCategories";


export default (props)=>{
    return(
        <header id={"HeaderSection"}>
            <div style={{width:"25%",cursor:"pointer",height:"1500px",backgroundColor:"#00000066"}}></div>
            <div className={"AllFilms"}>
                <div className={"HeaderFilmsInfo"}><i className="fas fa-video"></i> Фильмы онлайн</div>
                <div className={"FilmsContainer"}>
                {props.state.SearchFoundFilms.length > 0 && props.state.SearchFoundFilms.length !== props.state.AllFilmsArray.length
                    ?
                    <h1>По результату найдено {props.state.SearchFoundFilms.length} фильм(а)</h1>
                    :
                    null
                }
                {props.state.SearchFoundFilms.length < 1
                ?
                props.state.AllFilmsArray.map((elem,index)=>{

                    let NewReplacerAddedSymbolHrefHeader = elem.FilmTitle.toLowerCase()
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

                    let DateNow = new Date
                    elem.FilmAdded = DateNow.toLocaleDateString() + " " + DateNow.toLocaleTimeString()

                    return(
                        <Bounce>
                            <HeaderFilmsCard
                                state = {props.state}
                                FilmElem = {elem}
                                FilmIndex = {index}
                                NewReplacerAddedSymbolHrefHeader = {NewReplacerAddedSymbolHrefHeader}
                            />
                        </Bounce>
                    )
                })
                :
                props.state.SearchFoundFilms.map((elem,index)=>{
                    let NewReplacerAddedSymbolHrefHeader = elem.FilmTitle.toLowerCase()
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

                    let DateNow = new Date
                    elem.FilmAdded = DateNow.toLocaleDateString() + " " + DateNow.toLocaleTimeString()

                    return(
                        <Bounce bottom>
                            <HeaderFilmsCard
                                state = {props.state}
                                FilmElem = {elem}
                                FilmIndex = {index}
                                NewReplacerAddedSymbolHrefHeader = {NewReplacerAddedSymbolHrefHeader}
                            />
                        </Bounce>
                    )
                })
                }
            </div>
            </div>

            <FilterCategories/>

        </header>
    )
}