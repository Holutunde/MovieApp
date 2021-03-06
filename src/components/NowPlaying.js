import React from 'react'
import useFetch from '../hooks/useFetch'

const NowPlaying = () => {
  const { loading, response, error } = useFetch('/now_playing')

  console.log('now playing', { loading, response, error })
  return (
    <div>
      <div className="header">
        <h3>Now Playing</h3>
      </div>
      {loading ? (
        <span>Loading...</span>
      ) : error ? (
        <span>{error?.message}</span>
      ) : (
        <div className="row">
          {response?.results?.map((movie) => {
            return (
              <div className="column" key={movie?.id}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
                  alt=""
                />
                <h4 className="title">{movie?.title}</h4>
                <p>{movie?.overview}</p>
                <p>
                  Rating: {movie?.vote_average} ({movie?.vote_count} votes)
                </p>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default NowPlaying
