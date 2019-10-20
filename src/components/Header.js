import React from 'react'
import { Link } from 'react-router-dom';

export default class Header extends React.Component {
    render() {
      return (
        <div className="[ header ]">
            <img className="[ header__image ]" src={require('../images/bakgrunnsbilde.jpg')}alt="Bakgrunnsbilde" />
              <div>
              <img className="[ header__icon ]" src={require('../images/begravelsesbyrå_icon.png')}alt=""></img>
              </div>
              <div className="[ header__textblock ] text-block" >
                <h4>Ring oss - hele døgnet</h4>
                  <p className="[ header__p ]"><b>55 27 28 29</b></p>
              </div>
              <Link to="/kontakt"><button className="[ header__button ]">Kontakt oss</button></Link>
        </div>
      );
    }
  }

            