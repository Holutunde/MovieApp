import React, { useState } from 'react'
import Card from './Card'

export default function Search() {
  const [movies, setMovies] = useState(null)
  const [query, setQuery] = useState('')

  const searchMovie = async (e) => {
    e.preventDefault()

    const apiURI = `https://api.themoviedb.org/3/search/movie?api_key=8063bc7c0a515fe2409caee8d299de93&language=en-US&query=${query}&page=1&include_adult=false`

    try {
      const response = await fetch(apiURI)
      const data = await response.json()

      setMovies(data)
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <>
      <form onSubmit={searchMovie}>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          type="text"
          placeholder="search for a movie"
          className="searchbox"
        />
        <button className="btn" type="submit">
          Search
        </button>
      </form>
      <Card movies={movies} />
    </>
  )
}
