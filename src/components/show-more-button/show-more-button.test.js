import React from "react";
import renderer from "react-test-renderer";
import ShowMoreButton from "./show-more-button.jsx";

test(`Correctly render ShowMoreButton component`, () => {
  const tree = renderer.create(
      <ShowMoreButton />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
