//React stuff
import React from 'react'
import ReactDOM from 'react-dom'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

//Stylesheet and logo
import './styles/styles.scss'
import logo from './images/logo_landås.png'

//Pages
import Forside from './pages/forside'
import Hjelp from './pages/hjelp-ved-dødsfall'
import Seremonien from './pages/seremonien'
import Produkter from './pages/produkter'
import OmOss from './pages/om-oss'
import Kontakt from './pages/kontakt'
import Minneside from './pages/minneside'
import Pris from './pages/priser'

//Components
import Header from './components/Header'
import Footer from './components/Footer'
import Gravferdsgruppen from './components/Gravferdsgruppen'

const routing = (
    <Router>
        <div>
            <nav className="[ topNavbar ] [ navbar navbar-default ] ">
              <div className="[ topNavbar__container ] [ container-fluid ]">
                <ul className="[ topNav ] [ nav navbar-nav navbar-right ]">
                  <li className="[ topNav__item ]"><Link className="[ topNav__link ]" to="/minneside">Minneside</Link></li>
                  <li className="[ topNav__item ]"><Link className="[ topNav__link ]" to="/pris">Priser</Link></li>
                  <li className="[ topNav__item ]"><p><b>Døgnvakt<br />55 27 28 29</b></p></li>
                </ul>
              </div>
            </nav>
            <nav className="[ secondNavbar ] [ navbar navbar-default ]">
              <div className="[ secondNavbar__container ] [ container-fluid ]">
                <div className="[ navbar-header ]">
                  <button type="button" className=" [ navbar-toggle ]" data-toggle="collapse" data-target="#myNavbar">
                    <span className="[ icon-bar ]"></span>
                    <span className="[ icon-bar ]"></span>
                    <span className="[ icon-bar ]"></span>
                  </button>
                  <Link to="/"><li className=" [ secondNavbar__brand ] [ navbar-brand ]"><img className="[ secondNavbar__logo ]" src={logo} alt="Logo Gravferdshjelpen"></img></li></Link>
                </div>
                <div className="[ collapse navbar-collapse ]" id="myNavbar">
                  <ul className="[ secondNav ] [ nav navbar-nav navbar-right ]">
                    <li className="[ secondNav__item ]"><Link className="[ secondNav__link ]" to="/">Forside</Link></li>
                    <li className="[ secondNav__item ]"><Link className="[ secondNav__link ]" to="/hjelp-ved-dødsfall">Hjelp ved dødsfall</Link></li>
                    <li className="[ secondNav__item ]"><Link className="[ secondNav__link ]" to="/seremonien">Seremonien</Link></li>
                    <li className="[ secondNav__item ]"><Link className="[ secondNav__link ]" to="/produkter">Produkter</Link></li>   
                    <li className="[ secondNav__item ]"><Link className="[ secondNav__link ]" to="/om-oss">Om oss</Link></li>
                    <li className="[ secondNav__item ]"><Link className="[ secondNav__link ]" to="/kontakt">Kontakt</Link></li>                
                  </ul>
                </div>
              </div>
              <Header></Header>
              </nav>
            
            <Route exact path="/" component={Forside}></Route>
            <Route path="/hjelp-ved-dødsfall" component={Hjelp}></Route>
            <Route path="/seremonien" component={Seremonien}></Route>
            <Route path="/produkter" component={Produkter}></Route>
            <Route path="/om-oss" component={OmOss}></Route>
            <Route path="/kontakt" component={Kontakt}></Route>
            <Route path="/minneside" component={Minneside}></Route>
            <Route path="/pris" component={Pris}></Route>


            <Gravferdsgruppen></Gravferdsgruppen>
            <Footer></Footer>           
        </div>
    </Router>
)

ReactDOM.render(
      routing, document.getElementById('root')
)