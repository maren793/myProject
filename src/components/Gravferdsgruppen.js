import React from 'react'
import { Link } from 'react-router-dom';

//import logoes
import logo from '../images/logo_gravferdshjelpen.png'
import vatne from '../images/logo_vatne.png'
import arna from '../images/logo_arna.png'
import bergen from '../images/logo_bergen-begravelsesbyrå.png'
import samdals from '../images/logo_samdals.png'

export default class Gravferdsgruppen extends React.Component {
    render() {
      return (
        <div className="[ gravferdsgruppen ] [ container-fluid ] ">
          <div className="[ gravferdsgruppen__icons ] [ container-fluid ]">
            <div className="[ row ]">
                <div className="[ col-md-2 col-sm-6 ]">
                    <Link to="/"><img className="[ gravferdsgruppen__logo ]" src={logo}alt="Logo Gravferdshjelpen" /></Link>
                </div>
                <div className="[ col-md-2 col-sm-6 ]">
                <a href={'http://www.vatne-byra.no/'}><img className="[ gravferdsgruppen__logo ]" src={vatne}alt="Logo Vatne Begravelsesbyrå" /></a>
                </div>
                <div className="[ col-md-2 col-sm-6 ]">
                <a href={'http://www.arna-gravferdsbyraa.no/'}><img className="[ gravferdsgruppen__logo ]" src={arna}alt="Logo Arna Gravferdsbyrå" /></a>
                </div>
                <div className="[ col-md-2 col-sm-6 ]">
                <a href={'http://www.bergenbegravelse.no/'}><img className="[ gravferdsgruppen__logo ]" src={bergen}alt="Logo Bergen Begravelsesbyrå" /></a>
                </div>
                <div className="[ col-md-2 col-sm-6 ]">
                <a href={'http://www.samdals.no/'}><img className="[ gravferdsgruppen__logo ]" src={samdals}alt="Logo Samdals Begravelsesbyrå" /></a>
                </div>
            </div>
        </div>
        </div>
      );
    }
  }