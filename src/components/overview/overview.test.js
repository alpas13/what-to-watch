import React from "react";
import renderer from "react-test-renderer";
import Overview from "./overview";

test(`Correctly render Overview component`, () => {
  const tree = renderer.create(
      <Overview />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
