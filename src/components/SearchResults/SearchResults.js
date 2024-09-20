import React from 'react'
import './SearchResults.css'
import TrackList from '../TrackList/TrackList';

function SearchResults(props) {
    return (
      <div className='Search-results'>
        <h2>
          Search
        </h2>
        <TrackList tracks={props.searchResults}/>
      </div>
    )
}

export default SearchResults;