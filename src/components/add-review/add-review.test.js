import React from "react";
import renderer from "react-test-renderer";
import AddReview from "./add-review.jsx";
import CardHeader from "../card-header/card-header.jsx";
import AddReviewForm from "../add-review-form/add-review-form.jsx";
import {Pages} from "../../const.js";

test(`Correctly render AddReview component`, () => {
  const tree = renderer.create(
      <AddReview>
        <CardHeader
          authorizationStatus={`NO_AUTH`}
          currentPage={Pages.ADD_REVIEW}
        />
        <AddReviewForm/>
      </AddReview>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
