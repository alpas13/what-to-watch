import React from "react";
import renderer from "react-test-renderer";
import MovieReviews from "./movie-reviews.jsx";

test(`Correctly render MovieReviews component`, () => {
  const tree = renderer.create(
      <MovieReviews />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
