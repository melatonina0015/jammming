import React from 'react'
import Track from '../Track/Track';

function TrackList(props) {
    return (
        <div>
            {props.tracks && props.tracks.map((track) => {
                return (
                    <Track 
                        src={track.src} 
                        key={track.id} 
                        title={track.title} 
                        artist={track.artist} 
                        album={track.album}
                    />
                )
         })}
        </div>
    )
}

export default TrackList;
