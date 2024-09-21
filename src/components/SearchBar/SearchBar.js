import React, { useState } from 'react'
import './SearchBar.css'

function SearchBar(props) {
    const [trackToSearch, setTrackToSearch] = useState('')

    function handleTrackToSearchChange(event) {
      setTrackToSearch(event.target.value);
    }

    function search() {
      props.onSearch(trackToSearch);
    }

    return (
      <div className='SearchBar'>
        <input placeholder='Type a track name' onChange={handleTrackToSearchChange}/>
        <button type='submit' onClick={search}>Search</button>
      </div>
    )
}

export default SearchBar
