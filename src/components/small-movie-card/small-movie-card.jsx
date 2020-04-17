import React from "react";
import PropTypes from "prop-types";

const SmallMovieCard = React.memo(function SmallMovieCard(props) {
  const {film} = props;
  return (
    <article key={film.id} className="small-movie-card catalog__movies-card" onMouseEnter={
      () => film
    }>
      <div className="small-movie-card__image">
        <img src={film.previewImage}
          alt={film.name} width="280" height="175" />
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href={film.previewVideoLink}>{film.name}</a>
      </h3>
    </article>
  );
});

SmallMovieCard.propTypes = {
  film: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    previewImage: PropTypes.string.isRequired,
    previewVideoLink: PropTypes.string.isRequired,
  }),
};

export default SmallMovieCard;
