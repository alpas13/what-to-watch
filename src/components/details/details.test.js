import React from "react";
import renderer from "react-test-renderer";
import Details from "./details.jsx";

test(`Correctly render Details component`, () => {
  const tree = renderer.create(
      <Details />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
