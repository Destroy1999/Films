import React from "react"
import "./FilterCategories.css"


export default ()=>{
    return(
        <div className={"FilterCategories"}>
            <div className={"FilterTitle"}>
                <h2>Котегории</h2> <i className="fas fa-list"></i>
            </div>
            <div className={"CategoriesList"}>
                <ul>
                    <li onClick={(e)=>{console.log(e.nativeEvent.srcElement);alert("done")}}> Трейлеры</li>
                    <li onClick={(e)=>{console.log(e.nativeEvent.srcElement);alert("done")}}> Сериалы</li>
                    <li onClick={(e)=>{console.log(e.nativeEvent.srcElement);alert("done")}}> Боевики</li>
                    <li onClick={(e)=>{console.log(e.nativeEvent.srcElement);alert("done")}}> Комедии</li>
                    <li onClick={(e)=>{console.log(e.nativeEvent.srcElement);alert("done")}}> Семейные</li>
                    <li onClick={(e)=>{console.log(e.nativeEvent.srcElement);alert("done")}}> Фантастика</li>
                    <li onClick={(e)=>{console.log(e.nativeEvent.srcElement);alert("done")}}> Приключения</li>
                    <li onClick={(e)=>{console.log(e.nativeEvent.srcElement);alert("done")}}> Исторические</li>
                    <li onClick={(e)=>{console.log(e.nativeEvent.srcElement);alert("done")}}> Документальные</li>
                    <li onClick={(e)=>{console.log(e.nativeEvent.srcElement);alert("done")}}> Мультсериалы</li>
                    <li onClick={(e)=>{console.log(e.nativeEvent.srcElement);alert("done")}}> Мультфильмы</li>
                    <li onClick={(e)=>{console.log(e.nativeEvent.srcElement);alert("done")}}> Мелодрама</li>
                    <li onClick={(e)=>{console.log(e.nativeEvent.srcElement);alert("done")}}> Детективы</li>
                    <li onClick={(e)=>{console.log(e.nativeEvent.srcElement);alert("done")}}> Триллеры</li>
                    <li onClick={(e)=>{console.log(e.nativeEvent.srcElement);alert("done")}}> Криминал</li>
                    <li onClick={(e)=>{console.log(e.nativeEvent.srcElement);alert("done")}}> Военные</li>
                    <li onClick={(e)=>{console.log(e.nativeEvent.srcElement);alert("done")}}> Фэнтези</li>
                    <li onClick={(e)=>{console.log(e.nativeEvent.srcElement);alert("done")}}> Драма</li>
                    <li onClick={(e)=>{console.log(e.nativeEvent.srcElement);alert("done")}}> Спорт</li>
                    <li onClick={(e)=>{console.log(e.nativeEvent.srcElement);alert("done")}}> Ужасы</li>
                    <li onClick={(e)=>{console.log(e.nativeEvent.srcElement);alert("done")}}> Аниме</li>
                </ul>
            </div>
            <div>
                <img width={"100%"} height={150} src={"https://sun9-74.userapi.com/impf/c636216/v636216790/5596a/B8HHLbaivrQ.jpg?size=520x0&quality=95&sign=333f391dde500049fbb29bd615a5b0f1"} alt={""}/>
            </div>
        </div>
    )
}