import React from "react";
import CardHeader from "../card-header/card-header.jsx";
import AddReviewForm from "../add-review-form/add-review-form.jsx";

const AddReview = React.memo(function AddReview() {

  return (
    <section className="movie-card movie-card--full">
      <div className="movie-card__header">
        <CardHeader
          authorizationStatus={`AUTH`}
          currentPage={`ADD_REVIEW`}
        />
        <div className="movie-card__poster movie-card__poster--small">
          <img src={`img/the-grand-budapest-hotel-poster.jpg`} alt="The Grand Budapest Hotel poster" width="218" height="327"/>
        </div>
      </div>
      <AddReviewForm/>
    </section>
  );
});

export default AddReview;
