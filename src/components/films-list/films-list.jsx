import React from "react";
import SmallMovieCard from "../small-movie-card/small-movie-card.jsx";
import films from "../../mocks/films.js";

const FilmsList = React.memo(function FilmsList() {
  return (
    <div className="catalog__movies-list">
      <SmallMovieCard
        films={films}
      />
    </div>
  );
});

export default FilmsList;
