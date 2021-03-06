import React from 'react'
import useFetch from '../hooks/useFetch'

const Toprated = () => {
  const { loading, response, error } = useFetch('/top_rated')

  console.log('top rated', { loading, response, error })

  return (
    <div>
      <h3>Toprated Movies</h3>
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

export default Toprated
