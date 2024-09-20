import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

const tracks = [
  {
      src: 'https://content.codecademy.com/courses/React/react_photo-guineapig-1.jpg',
      album: 'Test album',
      artist: 'Test artist',
      title: 'Test Title',
      id: 1
  },
  {
      src: 'https://content.codecademy.com/courses/React/react_photo-guineapig-1.jpg',
      album: 'Test album',
      artist: 'Test artist',
      title: 'Test Title',
      id: 2
  },
  {
      src: 'https://content.codecademy.com/courses/React/react_photo-guineapig-1.jpg',
      album: 'Test album',
      artist: 'Test artist',
      title: 'Test Title',
      id: 3
  }
  
]
function App() {
  return (
    <div>
      <h1>
        Jammming
      </h1>
      <div className="App">
        <SearchBar />
        <div className='App-playlist'>
          <SearchResults searchResults={tracks}/>
          <Playlist/>
        </div>
      </div>
    </div>
  );
};

export default App;
