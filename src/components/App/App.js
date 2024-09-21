import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import { useState } from 'react';

const tracks = [
  {
      src: 'https://content.codecademy.com/courses/React/react_photo-guineapig-1.jpg',
      album: 'Test album 1',
      artist: 'Test artist 1',
      title: 'Test Title 1',
      id: 1
  },
  {
      src: 'https://content.codecademy.com/courses/React/react_photo-guineapig-1.jpg',
      album: 'Test album 2',
      artist: 'Test artist 2',
      title: 'Test Title 2',
      id: 2
  },
  {
      src: 'https://content.codecademy.com/courses/React/react_photo-guineapig-1.jpg',
      album: 'Test album 3',
      artist: 'Test artist 3',
      title: 'Test Title 3',
      id: 3
  }
  
]
function App() {
  const [playlistName, setPlaylistName] = useState('New Playlist');
  const [playlistTracks, setPlaylistTracks] = useState([]);

  const handleNameChange = newPlaylistChange => setPlaylistName(newPlaylistChange);

  const handleAddTrackToPlaylist = track => {
    if(playlistTracks.some((savedTrack) => savedTrack.id === track.id)) {
      return;
    }

    setPlaylistTracks(prev => [...prev, track]);
  }

  const handleRemoveTrackFromPlaylist = track => {
    const filteredTracks = playlistTracks.filter(savedTrack => savedTrack.id !== track.id)

    setPlaylistTracks(filteredTracks);
  }

  return (
    <div>
      <h1>
        Jammming
      </h1>
      <div className="App">
        <SearchBar />
        <div className='App-playlist'>
          <SearchResults searchResults={tracks} onAdd={handleAddTrackToPlaylist}/>
          <Playlist 
            playlistName={playlistName}
            playlistTracks={playlistTracks}
            onNameChange={handleNameChange}
            onRemove={handleRemoveTrackFromPlaylist} />
        </div>
      </div>
    </div>
  );
};

export default App;
