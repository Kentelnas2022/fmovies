// src/components/MovieModal.js
import React from 'react';

const MovieModal = ({ movie, onClose }) => {
  if (!movie) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>{movie.title}</h2>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          style={{ width: '100%', maxHeight: '400px', objectFit: 'cover' }}
        />
        <p><strong>Overview:</strong> {movie.overview}</p>
        <p><strong>Rating:</strong> {movie.vote_average}</p>
        <p><strong>Release Date:</strong> {movie.release_date}</p>
      </div>
    </div>
  );
};

export default MovieModal;
