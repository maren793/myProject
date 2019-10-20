import React from 'react'
import Form from '../components/Form'
import GoogleMap from '../components/GoogleMap'

export default class Kontakt extends React.Component {
    render () {
        return <div className="content">
            
            <div className="[ textBox ] [ container ]">
                <div className="[ textbox__text ]">
                    <h1>Kontakt</h1>
                        <p>Vi holder til i nærheten av Sletten senter. Ved kontoret er det god plass til å parkere. 
                            Dersom du tar bybanen, er det ca 5-10 minutter å gå fra Sletten senter.</p>
                        <p>Kom gjerne innom oss for en uforpliktende samtale dersom det er noe du lurer på i forbindelse med gravferd.</p>
                </div>  
                <div className="[ textbox__text ]">
                    <h2>Kontakt informasjon</h2>
                        <p><b>Besøksadresse:</b><br></br>
                            Hagerups vei 32 X (se kart under)<br></br>
                            5093 Bergen<br></br>
                            Kontortid: 08.30 - 16.00</p>
                        <p><b>Epost:</b><br></br>
                            gravferdshjelpen@gfgruppen.no</p>
                        <p><b>Vi har døgnbetjent telefon: 55 27 28 29</b></p>
                </div>        
                        <Form></Form>
                        <GoogleMap></GoogleMap>
                    <div className="[ empty ]"></div>      
               </div>            
            </div>
        }
    }

