import React from 'react'
import { Link } from 'react-router-dom';

export default class Forside extends React.Component {
    render () {
        return ( 
            <section>
                    <div className="[ textbox ] [ container ]">
                    <div className="[ textbox__text ]">
                        <h1>En verdig avskjed</h1>
                            <p>Det er tungt når en av våre kjære dør. Døden kommer brått, selv når den er ventet! 
                            Tiden etter et dødsfall kan være tung, forvirrende og vanskelig for enhver å takle. 
                            Det er mye som må tilrettelegges, planlegges og ordnes.</p>
                            <p>Vi gjør vårt ytterste for å komme de etterlatte i møte i den situasjonen de står i 
                            og kan på en trygg og respektfull måte ta hånd om alle de praktiske og formelle 
                            gjøremål ved gravferden.</p>
                            <p><i><b>Din tillit er vårt ansvar.</b></i></p>
                        </div>
                    </div>
                    <div className="[ container ]">
                        <div className="[ row ]">
                            <div className="[ col-md-4 ]">
                                <div className="[ mainBlocks ]">
                                    <img className="[ mainBlocks__image ]" src={require('../images/lys.jpg')}alt="Lys som brenner"></img>
                                        <h2 className="[ mainBlocks__header ]">Hjelp ved dødsfall</h2>
                                        <p>Les mer om hva som skjer i forbindelse med dødsfall</p>
                                        <Link to="/hjelp-ved-dødsfall"><button className="[ mainBlocks__button ]">Les mer</button></Link>
                                </div>
                            </div>
                            <div className="[ col-md-4 ]">
                                <div className="[ mainBlocks ]">
                                    <img className="[ mainBlocks__image ]" src={require('../images/kirke.jpg')}alt="Kirke"></img>
                                        <h2 className="[ mainBlocks__header ]">Planlegging</h2>
                                        <p>Les mer om hva som skjer i forbindelse med en gravferd</p>
                                        <Link to="/hjelp-ved-dødsfall"><button className="[ mainBlocks__button ]">Les mer</button></Link>
                                </div>
                            </div>
                            <div className="[ col-md-4 ]">
                                <div className="[ mainBlocks ]">
                                    <img className="[ mainBlocks__image ]" src={require('../images/blomster.jpg')}alt="Blomster"></img>
                                        <h2 className="[ mainBlocks__header ]">Blomster/Donasjon</h2>
                                        <p>Blomster eller donasjoner kan bestilles på vår minneside</p>
                                        <a href={'https://gravferdshjelpen.vareminnesider.no/'} className="[ btn ]" role="button">Vis Minneside</a>
                                </div>
                            </div>
                            <div className="[ col-md-4 ]">
                                <div className="[ mainBlocks ]">
                                    <img className="[ mainBlocks__image ]" src={require('../images/kiste_med_blomster.jpg')}alt="Lys som brenner"></img>
                                        <h2 className="[ mainBlocks__header ]">Produkter</h2>
                                        <p>Les mer om våre produkter og tjenester</p>
                                        <Link to="/pris"><button className="[ mainBlocks__button ]">Les mer</button></Link>
                                </div>
                            </div>
                            <div className="[ col-md-4 ]">
                                <div className="[ mainBlocks ]">
                                    <img className="[ mainBlocks__image ]" src={require('../images/roser.jpg')}alt="Lys som brenner"></img>
                                        <h2 className="[ mainBlocks__header ]">Seremonien</h2>
                                        <p>Les mer om hva som skjer i forbindelse med seremonien</p>
                                        <Link to="/seremonien"><button className="[ mainBlocks__button ]">Les mer</button></Link>
                                </div>
                            </div>
                            <div className="[ col-md-4 ]">
                                <div className="[ mainBlocks ]">
                                    <img className="[ mainBlocks__image ]" src={require('../images/minner.jpg')}alt="Lys som brenner"></img>
                                        <h2 className="[ mainBlocks__header ]">Minneside</h2>
                                        <p>Vi oppretter en minneside ved alle begravelser</p>
                                        <Link to="/minneside"><button className="[ mainBlocks__button ]">Les mer</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
            </section>
        );
    }
}

