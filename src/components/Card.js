import React from 'react'

const Card = ({ movies }) => {
  const _movies = movies ? movies : { results: [] }
  return (
    <div className="row">
      {_movies.results.map((movie) => {
        return (
          <div className="column" key={movie?.id}>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
              alt=" "
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
  )
}

export default Card
