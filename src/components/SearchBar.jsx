import React from 'react'

const SearchBar = () => {
  return (
    <div id='SearchBar'>
      <div id='input-box'>
      <img id='searchIcon' src="https://cdn3.iconfinder.com/data/icons/feather-5/24/search-512.png" alt="search-icon" />
        <input type='text' id='inputField' placeholder='Search by name or email'/>
      </div>
      <div id='download'>
      <img width="20" height="20" id='download-img' src="https://img.icons8.com/sf-black-filled/64/000000/downloading-updates.png" alt="downloading-updates"/>
      </div>
    </div>
  )
}

export default SearchBar
