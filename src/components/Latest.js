import React from 'react'
import useFetch from '../hooks/useFetch'

const Latest = () => {
  const { loading, response, error } = useFetch('/latest')

  console.log('lastest', { loading, response, error })

  return (
    <div>
      <h3>Latest</h3>
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
          </div>
        </div>
      )}
    </div>
  )
}

export default Latest
