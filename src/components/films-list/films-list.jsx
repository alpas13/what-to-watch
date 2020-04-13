import React from "react";
import PreviewFilm from "../preview-film/preview-film.jsx";

const FilmsList = React.memo(function FilmsList() {
  return (
      <div className="catalog__movies-list">
        <PreviewFilm />
      </div>
  );
});

export default FilmsList;
