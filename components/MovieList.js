// src/components/MovieList.js
import React from 'react';
import MovieItem from './MovieItem';

const MovieList = ({ movies, onMovieClick }) => {
  return (
    <div className="movie-list">
      {movies.map(movie => (
        <MovieItem 
          key={movie.id} 
          movie={movie} 
          onMovieClick={onMovieClick}  // Ensure this is passed correctly
        />
      ))}
    </div>
  );
};

export default MovieList;
