import React from "react"
import "./TopPreview.css"
import TopPreviewCard from "./TopPreviewCard/TopPreviewCard";


export default (props)=>{
    return(
        <section id={"TopFilmsPreview"}>
            <div className={"TopFilmInfo"}>Топ {props.state.TopFilmsArray.length} Фильм(а)</div>
            <div className={"TopFilmsPreviewContainer"}>
                {
                    props.state.TopFilmsArray.length > 0
                        ?
                        props.state.TopFilmsArray.map((elem,index)=>{
                            return(
                                <TopPreviewCard
                                    state = {props.state}
                                    TopFilmElem = {elem}
                                    TopFilmIndex = {index}
                                />
                            )
                        })
                        :
                        <h1 style={{color:"red"}}>There's nothing here yet</h1>
                }
            </div>
        </section>
    )
}



// my carousel
// import React from "react"
// import "./TopPreview.css"
// import TopPreviewCard from "./TopPreviewCard/TopPreviewCard";
// import {NavLink} from "react-router-dom";
//
//
// export default (props)=>{
//     let NewReplacerAddedSymbolHrefTop = props.state.AllFilmsArray[props.state.SliderIndex].FilmTitle.toLowerCase()
//         .replace(/ /g,"_").replace(/\:/g,"").replace(/\./g,"")
//         .replace(/а/g,"a").replace(/б/g,"b").replace(/в/g,"v").replace(/г/g,"g")
//         .replace(/д/g,"d").replace(/е/g,"e").replace(/ё/g,"io").replace(/ж/g,"j")
//         .replace(/з/g,"z").replace(/и/g,"i").replace(/й/g,"iy").replace(/к/g,"k")
//         .replace(/л/g,"l").replace(/м/g,"m").replace(/н/g,"n").replace(/о/g,"o")
//         .replace(/п/g,"p").replace(/р/g,"r").replace(/с/g,"c").replace(/т/g,"t")
//         .replace(/у/g,"u").replace(/ф/g,"f").replace(/х/g,"x").replace(/ц/g,"th")
//         .replace(/ч/g,"ch").replace(/ш/g,"sh").replace(/щ/g,"ssh").replace(/ъ/g,"")
//         .replace(/ы/g,"ii").replace(/ь/g,"").replace(/э/g,"e").replace(/ю/g,"iu")
//         .replace(/я/g,"ia")
//     return(
//         <section id={"TopFilmsPreview"}>
//             <div className={"TopFilmInfo"}>Топ {props.state.TopFilmsArray.length} Фильм(а)</div>
//             <div className={"TopFilmsPreviewContainer"}>
//
//                 <ul className={"C-SlideQuantity"}>
//                     {props.state.TopFilmsArray.map((e,i)=>{
//                         return <li onClick={props.SliderClick.bind(this, e)} style={e.CarouselClassActive === "active" ? {color:"white"} : {color:"gray"}}>
//                             <i className="fas fa-circle"></i></li>
//                     })}
//                 </ul>
//
//                 <div className={"SlideItemsContainer"}>
//
//                     <div className={`C-Item`}>
//                         <NavLink to={`/FilmWatch/${NewReplacerAddedSymbolHrefTop}`} key={props.state.AllFilmsArray[props.state.SliderIndex].id}>
//                         <div className={"TopFilmCard"}>
//                             <img width={"120px"} height={"200px"} src={props.state.AllFilmsArray[props.state.SliderIndex].FilmPoster} alt={""}/>
//                             <h5>Text</h5>
//                         </div>
//                         </NavLink>
//                     </div>
//                 </div>
//
//
//                 <div onClick={props.TopPrevClick} className={"C-Prev"}>
//                     <i className={"fas fa-angle-left"}></i>
//                 </div>
//                 <div onClick={props.TopNextClick} className={"C-Next"}>
//                     <i className={"fas fa-angle-right"}></i>
//                 </div>
//
//
//             </div>
//         </section>
//     )
// }

// Auto carousel
            // <div className={"container-fluid"}>
            //     <div id={"demo"} className={"carousel slide"} data-ride={"carousel"}>
            //
            //
            //         <ul className={"carousel-indicators"}>
            //             {props.state.TopFilmsArray.map((e,i)=>{
            //                 return <li data-target={"#demo"} data-slide-to={`${i}`} className={e.CarouselClassActive}></li>
            //             })}
            //         </ul>
            //
            //
            //         <div className={"carousel-inner"}>
            //             {
            //                 props.state.TopFilmsArray.length > 0
            //                     ?
            //                     props.state.TopFilmsArray.map((elem,index)=>{
            //                         return(
            //                             <div className={`carousel-item ${elem.CarouselClassActive}`}>
            //                             <TopPreviewCard
            //                                 state = {props.state}
            //                                 TopFilmElem = {elem}
            //                                 TopFilmIndex = {index}
            //                             />
            //                             </div>
            //                         )
            //                     })
            //                     :
            //                     <h1 style={{color:"red"}}>There's nothing here yet</h1>
            //             }
            //         </div>
            //
            //
            //         <a className={"carousel-control-prev"} href={"#demo"} data-slide={"prev"}>
            //             <i className={"fas fa-angle-left"}></i>
            //         </a>
            //         <a className={"carousel-control-next"} href={"#demo"} data-slide={"next"}>
            //             <i className={"fas fa-angle-right"}></i>
            //         </a>
            //
            //     </div>
            // </div>
