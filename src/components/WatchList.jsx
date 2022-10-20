import React from "react";
import MovieCard from "./MovieCard";

const Watchlist = ({ list, removeMovie }) => {
  
  const movieDisplay = list.map((movie, index) => {
    
    return (
      <MovieCard movie={movie} removeMovie={removeMovie} list={list} />
    );
  })
  return (
    <div className="watchlist">
        <div>
            <h1>My Watchlist</h1>
            <div className="movie-container">
                {movieDisplay}
            </div>
        </div>
    </div>
  );
};

export default Watchlist;