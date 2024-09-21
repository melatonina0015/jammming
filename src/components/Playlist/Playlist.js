import React from 'react'
import './Playlist.css';
import TrackList from '../TrackList/TrackList';

function Playlist(props) {
    function handleNameChange(event) {
      props.onNameChange(event.target.value)
    }

    return (
      <div className='Playlist'>
        <input className='Playlist-input' type='text' value={props.playlistName} onChange={handleNameChange}/>
        <TrackList tracks={props.playlistTracks} isRemoval={true} onRemove={props.onRemove}/>
        <button className='Save' type='submit'>Save to spotify</button>
      </div>
    )
}

export default Playlist
