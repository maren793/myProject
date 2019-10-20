import React from 'react'
import Gallery from '../components/Gallery'

export default class Seremonien extends React.Component {
    render () {
        return ( <section>
                <div className="[ container ]">
                    <div className="[ textbox ] [ container ]">
                        <div className="[ textbox__text ]">
                            <h1>Seremonien</h1>
                                <p>Vi tilrettelegger for alle typer seremonier, uavhengig av religion eller livssyn.</p>
                                <p>Det er ikke noe krav til at man må ha seremoni, likevel ønsker nok de fleste å ha en form for avskjedsseremoni 
                                    for den døde. Det mest vanlige er en begravelse eller en bisettelse i en kirke, kapell eller annet egnet rom.</p>
                        </div>
                        <div className="[ textbox__text ]">
                                <h3>Kirkelig Seremoni</h3>
                                    <p>En kirkelig begravelse eller bisettelse innebærer at gravferdsseremonien 
                                        foregår i kirke eller et kapell, og følger kirkens litugi. Denne ledes av en prest eller pastor.</p>
                        </div>
                        <div className="[ textbox__text ]">
                                <h3>Humanetisk Seremoni</h3>
                                    <p>En humanistisk seremoni kan inneholde forskjellige innslag som for eksempel musikk, diktlesning og minnetale.</p> 
                                    <p>Det vanligste er at seremonilederen fra Human-Etisk Forbund setter opp et program sammen med pårørende.</p>
                        </div>
                        <div className="[ textbox__text ]">
                                <h3>Livsynsåpen Seremoni</h3>
                                    <p>En personlig seremoni, gjerne flerkulturelt preg. En slik begravelse eller bisettelse kan avholdes i livssynsnøytrale seremonirom, 
                                    som for eksempel Møllendal kapell. Vi kan bidra til å tilrettelegge og gjennomføre en privat seremoni som er i tråd med avdødes og pårørendes ønsker.</p>
                        </div>
                        <div className="[ textbox__text ]">
                                <h2>Etter Seremonien</h2>
                                    <p>Det kan være godt å samle familie og venner til minnesamvær, enten hjemme eller i leide lokaler. Dersom dere ønsker å leie lokale, 
                                        kan vi formidle catering; oppdekking, mat, servering og opprydding/utvask eller kun levering av mat til hjemmet etc. 
                                        Dersom dere ønsker kun å leie et lokale til minnesamvær, kan vi også være behjelpelig med det.</p>
                        </div>
                                <div>
                                    <h2>Bilder av pyntede seremonier</h2>
                                <Gallery></Gallery>
                                </div>
                            </div>
                    </div>
            </section>
        )  
    }
}

