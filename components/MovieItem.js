// src/components/MovieItem.js
import React from 'react';

const MovieItem = ({ movie, onMovieClick }) => {
  return (
    <div className="movie-item" onClick={() => onMovieClick(movie)}>
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>Rating: {movie.vote_average}</p>
      </div>
    </div>
  );
};

export default MovieItem;
