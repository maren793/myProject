import React from 'react'

export default class Minneside extends React.Component {
    render () {
        return <section>
                    <div className="[ textbox ] [ container ]">
                        <div className="[ textbox__text ]">
                            <h1>Minneside</h1>
                                <p>Som et tilbud til pårørende oppretter vi en kostnadsfri minneside på internett. 
                                    Her legges dødsannonsen ut, og her kan det også gis en gave til ønsket formål. 
                                    Det kan også opprettes en personlig minneside der venner, bekjente og andre kan 
                                    skrive en siste hilsen eller tenne et lys for avdøde. Pårørende kan legge inn 
                                    personlige minner om avdøde i form av tekst, bilder og film.</p>
                                <p>Siden kan deles på sosiale medier, slik at det kanskje ikke er behov for en annonse i avisen. 
                                    Praktisk informasjon om gravferden finnes også på siden.</p>
                                <p>Det er de pårørende selv som vil ha full kontroll over en slik minneside, og blir 
                                    tildelt brukernavn og passord. Familien kan også stenge minnesiden om de ønsker det etter en stund.</p>
                                        <a href={'https://gravferdshjelpen.vareminnesider.no/'} className="[ btn ]" role="button">Vis Minneside</a>
                        </div>
                    </div>
            </section>
    }
}

