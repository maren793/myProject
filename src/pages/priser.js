import React from 'react'
import Prisoversikt from '../images/Minimum_priser.pdf'

export default class Test extends React.Component {
    render() {
      return (
        <div className="[ container ]">
            <h1>Prisoversikt</h1>
           <embed src={Prisoversikt} type="application/pdf" width="100%" height="1200px" />
        </div>
      );
    }
  }