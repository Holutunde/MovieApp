import React from 'react'
import { useParams, Link } from 'react-router-dom'
import useFetch from '../hooks/useFetch'

const MovieDetail = () => {
  const { id } = useParams()
  const { loading, response, error } = useFetch(`/${id}`)

  console.log('Moviedetail', { loading, response, error })
  return (
    <div>
      <h3>{response?.title} Details</h3>
      {loading ? (
        <span>Loading...</span>
      ) : error ? (
        <span>{error?.message}</span>
      ) : (
        <div className="row">
          <div className="latest" key={response?.id}>
            <img
              src={`https://image.tmdb.org/t/p/w500${response?.poster_path}`}
              alt=""
            />
            <h2>Title: {response?.title}</h2>
            <p>Overview: {response?.overview}</p>
            <p>Original Language: {response?.original_language}</p>
            <p>Run Time: {response?.runtime} mins</p>
            <p>Release Date: {response?.release_date}</p>
            <p>
              Rating: {response?.vote_average} ({response?.vote_count} votes)
            </p>
            <Link to="/">Go back to movies</Link>
          </div>
        </div>
      )}
    </div>
  )
}

export default MovieDetail
