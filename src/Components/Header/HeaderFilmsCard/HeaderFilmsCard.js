import React from "react"
import "./HeaderFilmsCard.css"
import {NavLink} from "react-router-dom";


export default (props)=>{
    return(
        <div className={"HeaderFilmCard"}>
            <NavLink to={`/FilmWatch/${props.NewReplacerAddedSymbolHrefHeader}`} key = {props.FilmIndex}>
                <div className={"HeaderFilmCardContainer"}>
                    <div className={"FilmTitleAndQuality"}>
                        <i className="fas fa-film"></i>
                        <div className={"FilmTitle"}>{props.FilmElem.FilmTitle}</div>
                        <div className={"FilmQuality"}>{props.FilmElem.FilmVideoQuality}</div>
                    </div>
                    <div className={"FilmAdded"}>
                        <div><i><i className="fas fa-calendar-alt"></i> <span>Добавлен:</span> {props.FilmElem.FilmAdded}</i></div>
                    </div>
                    <div className={"FilmInfoContainer"}>
                        <div className={"FilmInfoPoster"}>
                            <img src={props.FilmElem.FilmPoster} alt={props.NewReplacerAddedSymbolHrefHeader}/>
                        </div>
                        <div className={"FilmInfoInfo"}>
                            <div className={"FilmInfoShortInfo"}>
                                <li>Год выпуска: <span style={{color:"darkblue"}}>{props.FilmElem.FilmYearOFRelease}</span></li>
                                <li>Жанр: <span style={{color:"darkblue"}}>{props.FilmElem.FilmGenre.join(" ")}</span></li>
                                <li>Актеры: <span style={{color:"darkblue"}}>{props.FilmElem.FilmActors.join(" ")}</span></li>
                                <li>Качество: <span style={{color:"lime"}}>{props.FilmElem.FilmVideoQuality}</span></li>
                                <li>Длительность: <span style={{color:"orange"}}>{props.FilmElem.FilmDuration}</span></li>
                                <li>Премьера: <span style={{color:"lime"}}></span></li>
                            </div>
                            <div className={"FilmInfoDescription"}>
                                <p>{props.FilmElem.FilmDescription.length > 0 ? props.FilmElem.FilmDescription : <span>Описание отсутсвует</span>}</p>
                            </div>
                        </div>
                    </div>
                    <div className={"FilmLikesDisLikeRatingNumOfView"}>
                        <div className={"ViewFilm"}>
                            Смотреть фильм <i className="far fa-play-circle"></i>
                        </div>
                        <div className={"FilmNumberOfViews"}>
                            Просмотров: <span style={props.FilmElem.FilmNumberOfViews > 0 ? {color:"#1b8837"} : {color:"red"}}>{props.FilmElem.FilmNumberOfViews}</span>
                        </div>
                        <div className={"FilmRating"}>
                            Рейтинг: <span style={props.FilmElem.FilmRating > 0 ? {color:"#1b8837"} : {color:"red"}}>{props.FilmElem.FilmRating}</span>
                        </div>
                        <div className={"FilmLikeDisLikeContainer"}>
                            <div className={"ThisFilmLikes"}>
                                <i className="fas fa-thumbs-up"></i> <span style={props.FilmElem.FilmLikes > 0 ? {color:"#1b8837"} : {color:"red"}}>{props.FilmElem.FilmLikes}</span>
                            </div>
                            <div className={"ThisFilmDisLikes"}>
                                <i className="fas fa-thumbs-down"></i> <span style={props.FilmElem.FilmDisLikes > 0 ? {color:"red"} : {color:"#1b8837"}}>{props.FilmElem.FilmDisLikes}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </NavLink>
        </div>
    )
}