
import React from "react";
import { useParams, Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const MovieDetail= () => {
  const { id } = useParams();
  const { loading, response, error } = useFetch(`/${id}`);

  console.log("Moviedetail", { loading, response, error });
  return (
    <div>
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
            <h5>{response?.title}</h5>
            <p>{response?.overview}</p>
            <p>
              Rating: {response?.vote_average} ({response?.vote_count} votes)
            </p>
            <Link to="/">back to movies</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieDetail;