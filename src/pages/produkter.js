import React from 'react'
import BlomsterPdf from '../images/Blomsterkatalog_2018[1899].pdf'

export default class Produkter extends React.Component {
    render () {
        return <section>
                    <div className="[ textbox ] [ container ]">
                        <div className="[ textbox__text ]">
                            <h1>Produkter og tjenester</h1>
                                <p>Gravferdshjelpen tilbyr en rekke produkter, som kister, urner, dødsannonse, blomster, 
                                    sanghefter og takkekort i forbindelse med begravelse.</p>
                        </div>
                        <div className="[ textbox__text ]">
                            <h2>Kister</h2>
                                <p>Her er et utvalg av våre tradisjonelle kister. Dette er kvalitetskister med detaljer 
                                    som er trygge og gode til bruk i både begravelse og bisettelse.</p>
                                <p>Vi har egen utstilling hvor de vanligste modellene er utstilt. 
                                    Kister er som de fleste andre produkter, de kan leveres i mange farger og fasonger.</p>
                        </div>
                                <div className="[ container ]">
                                        <div className="[ row ]">
                                            <div className="[ col-md-3">
                                            <img className="[ img-responsive ]" src={require('../images/furu_66_web.jpg')}alt="Kiste Furu"></img>
                                                    <p>Furu</p>
                                                    <p>8 650 kr</p>
                                            </div>
                                            <div className="[ col-md-3">
                                                <img className="[ img-responsive ]" src={require('../images/nobel.jpg')}alt="Kiste Nobel"></img>
                                                    <p>Nobel</p>
                                                    <p>Pris</p>
                                            </div>
                                            <div className="[ col-md-3">
                                                <img className="[ img-responsive ]" src={require('../images/Skandinavia.jpg')}alt="Kiste Skandinavia"></img>
                                                    <p>Skandinavia</p>
                                                    <p>10 800</p>
                                            </div>
                                            <div className="[ col-md-3">
                                                <img className="[ img-responsive ]" src={require('../images/solid.jpg')}alt="Kiste Solid"></img>
                                                    <p>Solid</p>
                                                    <p>14 450 kr</p>
                                            </div>
                                            <div className="[ col-md-3">
                                                <img className="[ img-responsive ]" src={require('../images/toten_t3_web.jpg')}alt="Kiste Toten"></img>
                                                    <p>Toten</p>
                                                    <p>Pris</p>
                                            </div>
                                            <div className="[ col-md-3">
                                                <img className="[ img-responsive ]" src={require('../images/Prisma_web.jpg')}alt="Kiste Prisma"></img>
                                                    <p>Prisma</p>
                                                    <p>3 800 kr</p>
                                            </div>
                                            <div className="[ col-md-3">
                                                <img className="[ img-responsive ]" src={require('../images/kontur_kirsebaer.jpg')}alt="Kiste Kontur"></img>
                                                    <p>Kontur</p>
                                                    <p>24 100 kr</p>
                                            </div>
                                            <div className="[ col-md-3">
                                                <img className="[ img-responsive ]" src={require('../images/BJRK_21.jpg')}alt="Kiste Bjørk"></img>
                                                    <p>Bjørk</p>
                                                    <p>20 280 kr</p>
                                            </div>
                                            <div className="[ col-md-3">
                                                <img className="[ img-responsive ]" src={require('../images/Diamant32_sort.jpg')}alt="Kiste Diamant"></img>
                                                    <p>Diamant</p>
                                                    <p>21 850 kr</p>
                                            </div>
                                            <div className="[ col-md-3">
                                                <img className="[ img-responsive ]" src={require('../images/Linnea_web.jpg')}alt="Kiste Linnea"></img>
                                                    <p>Linnea</p>
                                                    <p>12 950 kr</p>
                                            </div>
                                            <div className="[ col-md-3">
                                                <img className="[ img-responsive ]" src={require('../images/lilje.jpg')}alt="Kiste Lilje"></img>
                                                    <p>Lilje</p>
                                                    <p>10 900 kr</p>
                                            </div>
                                            <div className="[ col-md-3">
                                                <img className="[ img-responsive ]" src={require('../images/Nordica_Web.jpg')}alt="Kiste Nordica"></img>
                                                    <p>Nordica</p>
                                                    <p>8 300 kr</p>
                                            </div>
                                        </div>
                                    </div>          
                                    <h2>Urner</h2>
                                    <div className="[ container ]">
                                        <div className="[ row ]">
                                            <div className="[ col-md-3">
                                                <img className="[ img-responsive ]" src={require('../images/classic_eik.jpg')}alt="Klassisk Eik"></img>
                                                    <p>Klassisk Eik</p>
                                                    <p>1 100 kr</p>
                                            </div>
                                            <div className="[ col-md-3">
                                                <img className="[ img-responsive ]" src={require('../images/FM5_keramikk.jpg')}alt="Keramikk F5"></img>
                                                    <p>Keramikk F5</p>
                                                    <p>7 000 kr</p>
                                            </div>
                                            <div className="[ col-md-3">
                                                <img className="[ img-responsive ]" src={require('../images/ovum_kirsebar.jpg')}alt="Ovum Nr 6"></img>
                                                    <p>Ovum Nr 6</p>
                                                    <p>3 200 kr</p>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="[ textbox ] [ container ]">
                                    <div className="[ textbox__text ]">
                                    <h2>Dødsannonse</h2>
                                    <p>Det er vanlig å annonsere dødsfall i aviser som blir lest av avdødes familie og kjente. De fleste vil annonsere, 
                                        men ikke alle.</p>
                                    <p>En dødsannonse inneholder flere elementer. Den starter gjerne med en innledning på relasjoner til avdøde, 
                                        deretter avdødes navn og fakta om alder og dødsdato og sted. Mange ønsker så et dikt eller vers, før navnene 
                                        på de pårørende står. Nederst i annonsen står fakta om seremonien med tid og sted, og i noen tilfeller velger 
                                        pårørende å samle inn penger til et formål slik at informasjon om dette står</p>
                                    <p>Vi vil hjelpe til med å sette opp og bestille dødsannonse i den/de aviser dere ønsker. Dere vil også ha 
                                        mulighet til å lese korrektur før annonsen publiseres.</p>
                                </div>
                                 
                                <div className="[ container ]">
                                    <h3>Eksemel på dødsannonse</h3>
                                        <img className="[ img-responsive ]" src={require('../images/dødsannonse5.png')}alt="Kiste Furu"></img>
                                </div>
                                </div> 
                                <div className="[ textbox ] [ container ]">
                                <div className="[ textbox__text ]">
                                    <h2>Blomster</h2>
                                        <p>Mange ønsker å bruke blomster som pynt under seremonien. I samarbeid med de pårørende finner vi blomster 
                                            og dekorasjoner som gjenspeiler den avdødes liv og gir seremonien et personlig preg.</p>
                                        <p>Her kan du se i vår blomsterkatalog</p>
                                </div>
                                <a href={BlomsterPdf} target= "_blank" rel="noopener noreferrer" className="[ btn ]" role="button">Blomsterkatalog</a>                               
                            </div>
                            
         </section>
    }
}

