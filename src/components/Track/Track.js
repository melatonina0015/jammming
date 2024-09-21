import React from 'react'
import './Track.css'

function Track(props) {
  function handleAddTrack() {
    props.onAdd(props.track)
  }

  function handleRemoveTrack() {
    props.onRemove(props.track)
  }

  function renderButton() {
    if(props.isRemoval) {
      return(
        <button className='Add-to-playlist' onClick={handleRemoveTrack}>-</button>
      )
    } else {
      return(
        <button className='Add-to-playlist' onClick={handleAddTrack}>+</button>
      )
    }
  }

  return (
    <div className="Track">
      <img src={props.track.src} alt='alt'/>
      <div className='Track-details'>
        <h3>{props.track.title}</h3>
        <p>{props.track.artist} | {props.track.album}</p>
      </div>
      {renderButton()}
    </div>
  )
}

export default Track;
