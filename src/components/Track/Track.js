import React from 'react'
import './Track.css'

function Track(props) {
    
    return (
      <div className="Track">
        <img src={props.src} alt='alt'/>
        <div className='Track-details'>
            <h3>{props.title}</h3>
            <p>{props.artist} | {props.album}</p>
        </div>
        <button className='Add-to-playlist'>+</button>
      </div>
    )
}

export default Track;
