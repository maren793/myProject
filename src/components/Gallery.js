import React from 'react'
import Image1 from '../images/Lille_kapell_med_rosebølge.jpg'
import Image2 from '../images/plexi-Arna2.jpg'
import Image3 from '../images/Plexi_med_roser_og_roseblad_fra_siden.jpg'

export default class Gallery extends React.Component {
    render() {
      return ( <section>
          <div className="[ gallery ] [ container ]">
    
  <div id="myCarousel" className="[ carousel slide ]" data-ride="carousel">
   
    <ol className="[ carousel-indicators ]">
      <li data-target="#myCarousel" data-slide-to="0" className="[ active ]"></li>
      <li data-target="#myCarousel" data-slide-to="1"></li>
      <li data-target="#myCarousel" data-slide-to="2"></li>
    </ol>

   
    <div className="[ carousel-inner ]">
      <div className="[ item active ]">
        <img src={Image1} alt="Pyntet seremoni" />
      </div>

      <div className="[ item ]">
        <img src={Image2} alt="Pyntet seremoni" />
      </div>
    
      <div className="[ item ]">
        <img src={Image3} alt="Pyntet seremoni" />
      </div>
    </div>

    
    <a className="[ left carousel-control ]" href="#myCarousel" data-slide="prev">
      <span className="[ glyphicon glyphicon-chevron-left ]"></span>
      <span className="[ sr-only ]">Previous</span>
    </a>
    <a className="[ right carousel-control ]" href="#myCarousel" data-slide="next">
      <span className="[ glyphicon glyphicon-chevron-right ]"></span>
      <span className="[ sr-only ]">Next</span>
    </a>
  </div>
</div>


      </section>
      );
    }
  }