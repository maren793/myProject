import React from 'react'

export default class Footer extends React.Component {
    render() {
      return (
        <div className="[ footer ]">
          <div className="[ container-fluid ]">
            <div className="[ row ]">
              <div className="[ col-md-4 ]">
                  <h3>Kontaktinformasjon</h3>
                  <p><b>Besøksadresse:</b><br />
                        Hagerups vei 32 X<br />
                        5093 Bergen<br />
                        Kontortid: 08.30 - 16.00
                  </p>
                  <p>
                    <b>Epost:</b><br />
                       gravferdshjelpen@gfgruppen.no
                  </p>
                  <p>
                    <b>Vi har døgnbetjent telefon: 55 27 28 29</b>
                  </p>
              </div>
              <div className="[ col-md-4 ]">
                  <h3>Gravferdsgruppen</h3>
                  <p>Gravferdshjelpen er en del av Gravferdsgruppen,<br /> 
                    som også består av:<br />
                    Vatnes Begravelsesbyrå<br />
                    Arna Gravferdsbyrå<br />
                    Bergen Bergravelsesbyrå og<br />
                    Samdals Begravelsesbyrå
                  </p>
                  <img src={require('../images/Ikon_gravferdsgruppen.jpg')}alt="Logo for Gravferdsgruppen"></img>
              </div>
              <div className="[ col-md-4 ]">
                <img className="[ footer__logo ]" src={require('../images/virkelogo2.png')}alt="Logo for Virke Gravferd"></img>
                  <p>Gravferdshjelpen er medlem  i Virke Gravferd. Vi følger Virke Gravferds strenge
                    etiske krav og våre ansatte etterutdannes gjennom Virke Gravferd sine kurs for vår 
                    bransje. Pårørende skal være trygge på at vår fagkunnskap og etikk holder et høyt nivå.
                  </p>
              </div>
            </div>
          </div>
        </div>  
      );
    }
  }