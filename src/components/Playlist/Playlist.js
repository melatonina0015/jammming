import React from 'react'
import './Playlist.css';
import TrackList from '../TrackList/TrackList';

function Playlist() {
    return (
      <div className='Playlist'>
        <input className='Playlist-input' type='text' placeholder='enter a playlist name'/>
        <TrackList/>
        <button className='Save' type='submit'>Save to spotify</button>
      </div>
    )
}

export default Playlist
