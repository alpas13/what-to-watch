import React from "react";
import renderer from "react-test-renderer";
import Genre from "./genre.jsx";

test(`Correctly render Genre component`, () => {
  const tree = renderer.create(
      <Genre />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
