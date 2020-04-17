import React from "react";
import renderer from "react-test-renderer";
import CardDescription from "./card-description.jsx";

test(`Correctly render CardDescription component`, () => {
  const tree = renderer.create(
      <CardDescription
        isMoviePage={false}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
