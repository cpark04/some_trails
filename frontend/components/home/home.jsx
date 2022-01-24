import React from "react";
import PhotoSlides from "./photo_slides";
import SearchBar from "../search/search_bar";
import TrailCards from "../trail_cards/trail_cards";

class Home extends React.Component {
  render(){
    return <div className="home-page">
      
      <div className='bg-slides'>
        <PhotoSlides />
      </div>

      <div className='trail-cards'>
        <TrailCards />
      </div>
      
      <div className="module-picture">
        <div className="module-text">
          <h1 className="module-title">Explore with</h1>
          <h1 className="module-title2">confidence</h1>
          <div className="module-description">Inspiration and guidance for wherever your trail may lead.</div>
          <div className="app-rating"></div>
        </div>
      </div>
      
      <div className="phone-module">
        
      </div>
    </div>
  }
}

export default Home;