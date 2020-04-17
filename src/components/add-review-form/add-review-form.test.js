import React from "react";
import renderer from "react-test-renderer";
import AddReviewForm from "./add-review-form.jsx";

test(`Correctly render AddReviewForm component`, () => {
  const tree = renderer.create(
      <AddReviewForm/>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
