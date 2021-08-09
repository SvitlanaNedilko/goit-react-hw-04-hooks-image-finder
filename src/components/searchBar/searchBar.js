import React, { useState } from 'react'
import './searchBar.scss'

export default function SearchBar({ onSubmit }) {
  const [pictureName, setstatePictureName] = useState('')

  const handleNameChange = (event) => {
    setstatePictureName(event.currentTarget.value.toLowerCase())
  }

  const handelSubmit = (event) => {
    event.preventDefault()
    if (pictureName.trim() === '') {
      alert('введите название изображения')
      return
    }
    onSubmit(pictureName)
    setstatePictureName('')
  }

  return (
    <header className="Searchbar">
      <form onSubmit={handelSubmit} className="SearchForm">
        <button type="submit" className="SearchForm-button">
          <span className="SearchForm-button-label">Search</span>
        </button>

        <input
          value={pictureName}
          onChange={handleNameChange}
          className="SearchForm-input"
          type="text"
          placeholder="Search images and photos"
        />
      </form>
    </header>
  )
}
