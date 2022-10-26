import React,{Component} from 'react';
import "./App.css";
import "./NeonBTN.css";
import {Route,Redirect,Switch} from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import Error404 from "./Components/Error404/Error404";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Register from "./Components/Register/Register";
import Admin from "./Components/Admin/Admin";
import LogIn from "./Components/LogIn/LogIn";
import TopPreview from "./Components/TopPreview/TopPreview";
import BFooterInfo from "./Components/BFooterInfo/BFooterInfo";
import Console from "./Components/Console/Console";
import Film from "./Components/Film/Film";
import {Helmet} from "react-helmet";
import $ from "jquery";
import Bounce from 'react-reveal/Bounce';


export default class App extends Component {

    state = {

        // All Films Data Base ---------------
        AllFilmsArray:[
            {
                id:0,
                FilmTitle:"Последний богатырь: Корень зла",
                FilmDescription:"Во второй части зрители узнают об истоках древнего зла, с которым героям пришлось столкнуться в первом фильме, увидят новые уголки сказочного Белогорья, и станут свидетелями захватывающих схваток с участием былинных богатырей.\n",
                FilmYearOFRelease:2020,
                FilmDuration:"",
                FilmNumberOfViews:108645,
                FilmGenre:["Жанр1","Жанр2","Жанр3"],
                FilmActors:["Актер1","Актер2","Актер3"],
                FilmLikes:5642,
                FilmDisLikes:1562,
                FilmRating:10,
                FilmUrl:"",
                FilmPoster:"https://ru.bobfilm.org/uploads/pdb/b/39068f7623897a380927613adc79ff62.jpg",
                FilmAdded:"",
                FilmStatus:"",
                FilmVideoQuality:"HD",
                CarouselClassActive:"active",
            },
            {
                id:1,
                FilmTitle:"Конёк-горбунок",
                FilmDescription:"",
                FilmYearOFRelease:2020,
                FilmDuration:"",
                FilmNumberOfViews:0,
                FilmGenre:[],
                FilmActors:[],
                FilmLikes:0,
                FilmDisLikes:0,
                FilmRating:10,
                FilmUrl:"",
                FilmPoster:"https://ru.bobfilm.org/uploads/pdb/b/d2b6ca8870049b8a774fa3bcb5013327.jpg",
                FilmAdded:"",
                FilmStatus:"",
                FilmVideoQuality:"760R",
                CarouselClassActive:"",
            },
            {
                id:2,
                FilmTitle:"Морбиус",
                FilmDescription:"",
                FilmYearOFRelease:2022,
                FilmDuration:"",
                FilmNumberOfViews:0,
                FilmGenre:[],
                FilmActors:[],
                FilmLikes:0,
                FilmDisLikes:0,
                FilmRating:10,
                FilmUrl:"",
                FilmPoster:"https://ru.bobfilm.org/uploads/pdb/b/ad633cb59f23091ed4409a60f238d6a3.jpg",
                FilmAdded:"",
                FilmStatus:"",
                FilmVideoQuality:"HD",
                CarouselClassActive:"",
            },
            {
                id:3,
                FilmTitle:"Игра престолов",
                FilmDescription:"К концу подходит время благоденствия, и лето, длившееся почти десятилетие, угасает. Вокруг средоточия власти Семи королевств, Железного трона, зреет заговор, и в это непростое время король решает искать поддержки у друга юности Эддарда Старка. В мире, где все — от короля до наемника — рвутся к власти, плетут интриги и готовы вонзить нож в спину, есть место и благородству, состраданию и любви. Между тем, никто не замечает пробуждение тьмы из легенд далеко на Севере — и лишь Стена защищает живых к югу от нее.",
                FilmYearOFRelease:2011,
                FilmDuration:"",
                FilmNumberOfViews:0,
                FilmGenre:[],
                FilmActors:[],
                FilmLikes:0,
                FilmDisLikes:0,
                FilmRating:10,
                FilmUrl:"",
                FilmPoster:"https://ru.bobfilm.org/uploads/pdb/b/abca6a96391bdf68b7a33af3ccf59dd7.jpg",
                FilmAdded:"",
                FilmStatus:"",
                FilmVideoQuality:"720R",
                CarouselClassActive:"",
            },
            {
                id:4,
                FilmTitle:"Чёрная Вдова",
                FilmDescription:"Наташе Романофф предстоит лицом к лицу встретиться со своим прошлым. Чёрной Вдове придется вспомнить о том, что было в её жизни задолго до присоединения к команде Мстителей, и узнать об опасном заговоре, в который оказываются втянуты её старые знакомые - Елена, Алексей, также известный как Красный Страж, и Мелина.\n",
                FilmYearOFRelease:2020,
                FilmDuration:"",
                FilmNumberOfViews:0,
                FilmGenre:[],
                FilmActors:[],
                FilmLikes:0,
                FilmDisLikes:0,
                FilmRating:10,
                FilmUrl:"",
                FilmPoster:"https://ru.bobfilm.org/uploads/pdb/b/b57111e71f9c411d8592d7366f03b70b.jpg",
                FilmAdded:"",
                FilmStatus:"",
                FilmVideoQuality:"720R",
                CarouselClassActive:"",
            },
            {
                id:5,
                FilmTitle:"Бладшот",
                FilmDescription:"Военный Рэй Гаррисон возвращается из очередной горячей точки к любимой красавице-жене. Супруги проводят отпуск в Европе, но счастье длится недолго - террористы, не сумев вытянуть из Рэя нужную им информацию, убивают жену, а затем и его самого. Но вскоре корпорация RST возвращает его к жизни. Армия нанороботов в крови превратила Рэя в бессмертного Бладшота, и теперь солдат наделен сверхсилой и способностью мгновенно самоисцеляться, вот только память оставляет желать лучшего. Но вскоре воспоминания о последних мгновениях жизни возвращаются, и Бладшот отправляется мстить за смерть жены.\n",
                FilmYearOFRelease:2020,
                FilmDuration:"",
                FilmNumberOfViews:0,
                FilmGenre:[],
                FilmActors:[],
                FilmLikes:0,
                FilmDisLikes:0,
                FilmRating:5,
                FilmUrl:"",
                FilmPoster:"https://ru.bobfilm.org/uploads/pdb/b/86f5e5733ef08041aaa68aea3e1c0612.jpg",
                FilmAdded:"",
                FilmStatus:"",
                FilmVideoQuality:"HD",
                CarouselClassActive:"",
            },
            {
                id:6,
                FilmTitle:"Снега больше не будет",
                FilmDescription:"Женя был в Чернобыле в момент аварии. Возможно, из-за нее он обрел особые способности. Сейчас он – успешный массажист, который лечит не только тело, но и душу. Богатые клиенты доверяют ему свои тревоги, переживания и сокровенные секреты. Так Женя превратился в гуру: одинокие и несчастные, несмотря на своё богатство, люди спешат на массаж, чтобы услышать, как жить дальше.",
                FilmYearOFRelease:2020,
                FilmDuration:"",
                FilmNumberOfViews:0,
                FilmGenre:[],
                FilmActors:[],
                FilmLikes:0,
                FilmDisLikes:0,
                FilmRating:5,
                FilmUrl:"",
                FilmPoster:"https://ru.bobfilm.org/uploads/pdb/b/3fe1e5994f898218679cf80773bb4fd5.jpg",
                FilmAdded:"",
                FilmStatus:"",
                FilmVideoQuality:"720R",
                CarouselClassActive:"",
            },
            {
                id:7,
                FilmTitle:"Тихое место 2",
                FilmDescription:"Семья Эбботт продолжает бороться за жизнь в полной тишине. Вслед за смертельной угрозой, с которой они столкнулись в собственном доме, им предстоит познать ужасы внешнего мира. Они вынуждены отправиться в неизвестность, где быстро обнаруживают, что существа, охотящиеся на звук, – не единственные враги за пределами безопасной песчаной тропы.",
                FilmYearOFRelease:2020,
                FilmDuration:"",
                FilmNumberOfViews:0,
                FilmGenre:[],
                FilmActors:[],
                FilmLikes:0,
                FilmDisLikes:0,
                FilmRating:5,
                FilmUrl:"",
                FilmPoster:"https://ru.bobfilm.org/uploads/pdb/b/47a2dd0c7a303da166a12ee5cb45f9dd.jpg",
                FilmAdded:"",
                FilmStatus:"",
                FilmVideoQuality:"HD",
                CarouselClassActive:"",
            },
            {
                id:8,
                FilmTitle:"ЗОЖ",
                FilmDescription:"У Сильвии много подписчиков в «Инстаграме». Она шикарно выглядит и ведет популярный фитнес-тренинг. В сети ее боготворят, но в жизни девушка одинока. Однажды в порыве чувств она записывает очень личный ролик и признается, что у нее нет парня. Видео становится вирусным, и вскоре у Сильвии появляется сталкер.",
                FilmYearOFRelease:2020,
                FilmDuration:"",
                FilmNumberOfViews:0,
                FilmGenre:[],
                FilmActors:[],
                FilmLikes:0,
                FilmDisLikes:0,
                FilmRating:5,
                FilmUrl:"",
                FilmPoster:"https://ru.bobfilm.org/uploads/pdb/b/255ee047a6762a2db64af6bf557ba856.jpg",
                FilmAdded:"",
                FilmStatus:"",
                FilmVideoQuality:"640R",
                CarouselClassActive:"",
            },
            {
                id:9,
                FilmTitle:"Гоголь. Начало",
                FilmDescription:"Казаки, ведьмы, русалки, утопленницы и другие обитатели Диканьки встречаются лицом к лицу со своим создателем Николаем Гоголем, молодым писарем из Петербурга, который страдает загадочными припадками и может общаться с персонажами из потустороннего мира. Вместе со своим начальником, блестящим столичным следователем Яковом Гуро, начинающий писатель приезжает на Полтавщину расследовать таинственные убийства девушек. Здесь же он встречает свою любовь, которой суждено сыграть роковую роль в его судьбе. Но хватит ли юному литератору духу противостоять невообразимому? Ведь по слухам, которые активно разносят напуганные местные жители, за преступлениями стоит не кто иной, как сам Дьявол в обличии черного всадника.\n",
                FilmYearOFRelease:2017,
                FilmDuration:"",
                FilmNumberOfViews:0,
                FilmGenre:[],
                FilmActors:[],
                FilmLikes:0,
                FilmDisLikes:0,
                FilmRating:5,
                FilmUrl:"",
                FilmPoster:"https://ru.bobfilm.org/uploads/pdb/b/4b8f9db4f8ab94bbf7b403d94ec2d20d.jpg",
                FilmAdded:"",
                FilmStatus:"",
                FilmVideoQuality:"1080R",
                CarouselClassActive:"",
            },
        ],
        // -----------------------------------

        // Film Search -----------------------
        SearchFoundFilms:[],
        FilmSearchInput:"",
        // -----------------------------------

        // Top Films -------------------------
        TopFilmsArray:[],
        // -----------------------------------

        // All Users Data Base ---------------
        AllUsers:[],
        // -----------------------------------

        // Logged In User Date ---------------
        LoggedInUserDate:[],
        LoggedIn:false,
        LoggedInWindow:false,
        LogInCheckBoxStayOnline:false,
        // -----------------------------------

        // ADMIN -----------------------------
        Admin:{
            AdminUserName:"Admin",
            AdminPassword:"Admin",
        },
        AdminUserName:"",
        AdminPassword:"",
        AdminLoggedIn:false,
        LogInAdminCheckBoxStayOnline:false,
        // -----------------------------------

        // Console ---------------------------
        ConsoleTextArea:"",
        ConsoleCommand:"",
        AdminConsoleContentNumbers:0,
        // -----------------------------------

        // Other -----------------------------
        Null:0,
        Nothing:"",
        test:"",
        // SliderIndex:0,
        // -----------------------------------

    }



    componentDidMount(){

        document.body.addEventListener('keypress',this.KeyPress)
        document.body.addEventListener('keyup',this.KeyUp)
        document.body.addEventListener('keydown',this.KeyDown)
        this.state.AdminLoggedIn = JSON.parse(localStorage.getItem("AdminLoggedIn"))

        let TopFilmsFilters = this.state.AllFilmsArray.filter(TopFilms => TopFilms.FilmRating > 8)
        this.state.TopFilmsArray = TopFilmsFilters.slice(0,25)

        this.setState({})

    }

    componentWillMount() {
        this.setState({})
    }

    KeyPress(e){
    }

    KeyUp(e){

    }

    KeyDown(e){

    }

    NavBar = () =>{
        return <NavBar
            state = {this.state}
            LoggedInWindowOC = {this.LoggedInWindowOC}
            FilmSearch = {this.FilmSearch}
            FilmSearchInputValue = {this.FilmSearchInputValue}
        />
    }

    FilmSearchInputValue = (e) =>{
        this.state.FilmSearchInput = e.target.value
        this.setState({})
    }

    FilmSearch = () =>{
        let FilmSearch = this.state.AllFilmsArray.filter(Elem => Elem.FilmTitle.toLowerCase().toLocaleString().indexOf(this.state.FilmSearchInput.toLowerCase().toLocaleString()) !== -1)
        if(FilmSearch !== undefined){
            this.state.SearchFoundFilms = []
            this.state.SearchFoundFilms = FilmSearch
            this.state.FilmSearchInput = ""
            $("html").scrollTop(500)
            this.setState({})
        }
        if(FilmSearch.length === 0){
            alert("Not Found")
        }
        this.setState({})
    }

    LoggedInWindowOC = () =>{
        this.state.LoggedInWindow =! this.state.LoggedInWindow
        this.setState({})
    }

    Header = () =>{
        return <Header
            state = {this.state}
        />
    }

    Footer = () =>{
        return <Footer
            state = {this.state}
        />
    }

    Register = () =>{
        return <Register
            state = {this.state}
            test1={this.test1}
        />
    }

    test1 = (e) =>{
        this.state.test = e.target.value
        if(this.state.test.length == 2){
            this.state.test = this.state.test+"-"
            this.setState({})
        }
        if(this.state.test.length == 6){
            this.state.test = this.state.test+"-"
            this.setState({})
        }
        this.setState({})
    }

    Error404 = () =>{
        return <Error404
            state = {this.state}
        />
    }

    Admin = () =>{
        return <Admin
            state = {this.state}
            LogInAdminCheckBoxClick = {this.LogInAdminCheckBoxClick}
            AdminUserNameInput = {this.AdminUserNameInput}
            AdminPasswordInput = {this.AdminPasswordInput}
            AdminAccountLoggedIn = {this.AdminAccountLoggedIn}
            AdminAccountLoggedOut = {this.AdminAccountLoggedOut}
        />
    }

    AdminAccountLoggedIn = () =>{
        if(this.state.AdminUserName == this.state.Admin.AdminUserName && this.state.AdminPassword == this.state.Admin.AdminPassword){
            this.state.AdminLoggedIn =! this.state.AdminLoggedIn
            localStorage.setItem('AdminLoggedIn', JSON.parse(this.state.AdminLoggedIn));
        }
        this.setState({})
    }

    AdminAccountLoggedOut = () =>{
        this.state.AdminLoggedIn =! this.state.AdminLoggedIn
        localStorage.setItem('AdminLoggedIn', JSON.parse(this.state.AdminLoggedIn));
        this.setState({})
    }

    AdminUserNameInput = (e) =>{
        this.state.AdminUserName = e.target.value
        this.setState({})
    }

    AdminPasswordInput = (e) =>{
        this.state.AdminPassword = e.target.value
        this.setState({})
    }

    LogInAdminCheckBoxClick = () =>{
        this.state.LogInAdminCheckBoxStayOnline =! this.state.LogInAdminCheckBoxStayOnline
        this.setState({})
    }

    Login = () =>{
        return <LogIn
            state = {this.state}
            LoggedInWindowOC = {this.LoggedInWindowOC}
            LogInCheckBoxClick = {this.LogInCheckBoxClick}
        />
    }

    LogInCheckBoxClick = () =>{
        this.state.LogInCheckBoxStayOnline =! this.state.LogInCheckBoxStayOnline
        this.setState({})
    }

    TopPreview = () =>{
        return <TopPreview
            state = {this.state}
            // SliderClick = {this.SliderClick}
            // TopPrevClick = {this.TopPrevClick}
            // TopNextClick = {this.TopNextClick}
        />
    }

    // SliderClick = (e) => {
    //     for(var i = 0; i < this.state.AllFilmsArray.length; i++){
    //         this.state.AllFilmsArray[i].CarouselClassActive = ""
    //     }
    //     e.CarouselClassActive = "active"
    //     this.state.SliderIndex = e.id
    //     this.setState({})
    // }
    //
    // TopPrevClick = () =>{
    //     if(this.state.SliderIndex === 0){
    //         this.state.SliderIndex = 9
    //     }else{
    //         this.state.SliderIndex--
    //     }
    //     for(var i = 0; i < this.state.AllFilmsArray.length; i++){
    //         this.state.AllFilmsArray[i].CarouselClassActive = ""
    //     }
    //     this.state.AllFilmsArray[this.state.SliderIndex].CarouselClassActive = "active"
    //     this.setState({})
    // }
    //
    // TopNextClick = () =>{
    //     if(this.state.SliderIndex === 9){
    //         this.state.SliderIndex = 0
    //     }else{
    //         this.state.SliderIndex++
    //     }
    //     for(var i = 0; i < this.state.AllFilmsArray.length; i++){
    //         this.state.AllFilmsArray[i].CarouselClassActive = ""
    //     }
    //     this.state.AllFilmsArray[this.state.SliderIndex].CarouselClassActive = "active"
    //     this.setState({})
    // }

    BFooterInfo = () =>{
        return <BFooterInfo
            state = {this.state}
        />
    }

    Console = () =>{
        return <Console
            state = {this.state}
            ConsoleTextAreaCode = {this.ConsoleTextAreaCode}
            AdminConsoleTextArea = {this.AdminConsoleTextArea}
        />
    }

    AdminConsoleTextArea = () =>{
        let CodeMaxDown = document.querySelector(".ConsoleContentContainer").scrollHeight
        let code = document.querySelector(".ConsoleContentContainer")
        let createDivInConsole = document.createElement("div")
        let date = new Date()

        if(this.state.ConsoleTextArea.length > 0){
            createDivInConsole.innerHTML = date.toLocaleDateString() + " - " + date.toLocaleTimeString() + " - " + "Console:" + " -->" + " " + this.state.ConsoleTextArea
            createDivInConsole.setAttribute("id", `ConsoleContentNumber_${this.state.AdminConsoleContentNumbers}`)
            createDivInConsole.setAttribute("class", "ConsoleContent")
            code.appendChild(createDivInConsole)
            this.state.AdminConsoleContentNumbers++
            this.state.ConsoleCommand = this.state.ConsoleTextArea
            this.state.ConsoleTextArea = ""
            $(".ConsoleWindow").scrollTop(CodeMaxDown)

            if(this.state.ConsoleCommand === "/start"){
                setTimeout(()=>{
                    let createDivInConsoleTwo = document.createElement("div")
                    createDivInConsoleTwo.innerHTML = date.toLocaleDateString() + " - " + date.toLocaleTimeString() + " - " + "Console:" + " -->" + " " + "Starting ..."
                    setTimeout(()=>{
                        createDivInConsoleTwo.innerHTML = date.toLocaleDateString() + " - " + date.toLocaleTimeString() + " - " + "Console:" + " -->" + " " + "Started"
                    }, 2000)
                    createDivInConsoleTwo.setAttribute("id", `ConsoleContentNumber_${this.state.AdminConsoleContentNumbers}`)
                    createDivInConsoleTwo.setAttribute("class", "ConsoleContent")
                    code.appendChild(createDivInConsoleTwo)
                    this.state.AdminConsoleContentNumbers++
                    this.state.ConsoleCommand = ""
                    $(".ConsoleWindow").scrollTop(CodeMaxDown)
                    this.setState({})
                },1000)
            }

            if(this.state.ConsoleCommand === "/films"){
                setTimeout(()=>{
                    for(var FT = 0; FT < this.state.AllFilmsArray.length; FT++){
                        let createDivInConsoleTwo = document.createElement("div")
                        createDivInConsoleTwo.innerHTML = date.toLocaleDateString() + " - " + date.toLocaleTimeString() + " - " + "Console:" + " -->" + " " + "Фильм ->" + " " + this.state.AllFilmsArray[FT].FilmTitle
                        createDivInConsoleTwo.setAttribute("id", `ConsoleContentNumber_${this.state.AdminConsoleContentNumbers}`)
                        createDivInConsoleTwo.setAttribute("class", "ConsoleContent")
                        code.appendChild(createDivInConsoleTwo)
                        this.state.AdminConsoleContentNumbers++
                    }
                    let createDivInConsoleTwo = document.createElement("div")
                    createDivInConsoleTwo.innerHTML = date.toLocaleDateString() + " - " + date.toLocaleTimeString() + " - " + "Console:" + " -->" + " " + "Количество фильмов ->" + " " + this.state.AllFilmsArray.length
                    createDivInConsoleTwo.setAttribute("id", `ConsoleContentNumber_${this.state.AdminConsoleContentNumbers}`)
                    createDivInConsoleTwo.setAttribute("class", "ConsoleContent")
                    code.appendChild(createDivInConsoleTwo)
                    this.state.AdminConsoleContentNumbers++
                    this.state.ConsoleCommand = ""
                    $(".ConsoleWindow").scrollTop(CodeMaxDown)
                    this.setState({})
                },1000)
            }

            if(this.state.ConsoleCommand === "/commands"){
                setTimeout(()=>{
                    let createDivInConsoleTwo = document.createElement("div")
                    createDivInConsoleTwo.innerHTML = date.toLocaleDateString() + " - " + date.toLocaleTimeString() + " - " + "Console:" + " -->" + " " + "Комманды -> /Start"
                    createDivInConsoleTwo.setAttribute("id", `ConsoleContentNumber_${this.state.AdminConsoleContentNumbers}`)
                    createDivInConsoleTwo.setAttribute("class", "ConsoleContent")
                    code.appendChild(createDivInConsoleTwo)
                    this.state.AdminConsoleContentNumbers++
                    this.state.ConsoleCommand = ""
                    $(".ConsoleWindow").scrollTop(CodeMaxDown)
                    this.setState({})
                },1000)
            }
            this.setState({})
        }
        this.setState({})
    }

    ConsoleTextAreaCode = (e) =>{
        this.state.ConsoleTextArea = e.target.value
        this.setState({})
    }


    render() {

        var WindowWidth = window.screen.width - 100 + "px"

        return (
            window.screen.width > 960
            ?
                <div style={{width:WindowWidth,margin:"0 auto"}}>
                    <Switch>

                        <Route exact path={'/'}>
                            {this.Login()}
                            <Bounce top>
                                {this.NavBar()}
                            </Bounce>
                            <Bounce left>
                                {this.TopPreview()}
                                {this.Header()}
                                {this.BFooterInfo()}
                            </Bounce>
                            <Bounce bottom>
                                {this.Footer()}
                            </Bounce>
                            <Helmet>
                                <title>EpicFilms - Home</title>
                            </Helmet>
                        </Route>

                        <Route path={"/Error404"}>
                            {this.Login()}
                            <Bounce top>
                                {this.NavBar()}
                            </Bounce>
                            <Bounce right>
                                {this.Error404()}
                                {this.BFooterInfo()}
                            </Bounce>
                            <Bounce bottom>
                                {this.Footer()}
                            </Bounce>
                            <Helmet>
                                <title>EpicFilms - Error404</title>
                            </Helmet>
                        </Route>

                        <Route path={"/Register"}>
                            {this.Login()}
                            <Bounce top>
                                {this.NavBar()}
                            </Bounce>
                            <Bounce left>
                                {this.Register()}
                                {this.BFooterInfo()}
                            </Bounce>
                            <Bounce bottom>
                                {this.Footer()}
                            </Bounce>
                            <Helmet>
                                <title>EpicFilms - Registration</title>
                            </Helmet>
                        </Route>

                        <Route path={"/Admin"}>
                            {this.Login()}
                            <Bounce top>
                                {this.NavBar()}
                            </Bounce>
                            <Bounce right>
                                {this.Admin()}
                                {this.BFooterInfo()}
                            </Bounce>
                            <Bounce bottom>
                                {this.Footer()}
                            </Bounce>
                            <Helmet>
                                <title>EpicFilms - Admin</title>
                            </Helmet>
                        </Route>

                        <Route path={"/Console"}>
                            {this.Login()}
                            <Bounce top>
                                {this.NavBar()}
                            </Bounce>
                            <Bounce left>
                                {this.Console()}
                                {this.BFooterInfo()}
                            </Bounce>
                            <Bounce bottom>
                                {this.Footer()}
                            </Bounce>
                            <Helmet>
                                <title>EpicFilms - Console</title>
                            </Helmet>
                        </Route>

                        {this.state.AllFilmsArray.map((elem,index)=>{

                            let NewReplacerAddedSymbolHref = elem.FilmTitle.toLowerCase()
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
                                <Route path={`/FilmWatch/${NewReplacerAddedSymbolHref}`} key={index}>
                                    {this.Login()}
                                    <Bounce top>
                                        {this.NavBar()}
                                    </Bounce>
                                    <Bounce right>
                                        <Film
                                            stats = {this.stats}
                                            FilmElem = {elem}
                                            FilmIndex = {index}
                                        />
                                    </Bounce>
                                    <Bounce bottom>
                                        {this.Footer()}
                                    </Bounce>
                                    <Helmet>
                                        <title>EpicFilms - {elem.FilmTitle}</title>
                                    </Helmet>
                                </Route>
                            )
                        })}

                        <Redirect to={"/Error404"}/>

                    </Switch>
                </div>
                :
                <div
                    style={{width:"100%",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"}}
                >
                    <h1
                        style={{color:"red",fontSize:"23px",fontWeight:"bold",textAlign:"center"}}
                    >
                        Сайт не предназначен для телефонов, мы решаем эту проблему, пока вы можете использовать сайт только на компьютерах или Планшетах
                    </h1>
                </div>
        )

    }


}





