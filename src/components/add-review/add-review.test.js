import React from "react";
import renderer from "react-test-renderer";
import AddReview from "./add-review.jsx";

test(`Correctly render AddReview component`, () => {
  const tree = renderer.create(
      <AddReview />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
