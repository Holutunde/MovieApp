import React from "react";
import useFetch from "../hooks/useFetch";
import { Link } from "react-router-dom";

const Popular = () => {
  const { loading, response, error } = useFetch("/popular");

  console.log("popular", { loading, response, error });
  return (
    <div>
      <h3>Popular Movies</h3>
      {loading ? (
        <span>Loading...</span>
      ) : error ? (
        <span>{error?.message}</span>
      ) : (
        <div className="row">
          {response?.results?.map((movie) => {
            return (
             <Link to={`/movies/${movie.id}`} key={movie.id} className='column'>    
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
                  alt=""
                  />
                <h5>{movie?.title}</h5>
                <p>{movie?.overview}</p>
                <p>
                  Rating: {movie?.vote_average} ({movie?.vote_count} votes)
                </p>
               </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Popular;
