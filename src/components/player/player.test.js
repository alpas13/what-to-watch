import React from "react";
import renderer from "react-test-renderer";
import Player from "./player.jsx";

test(`Correctly render Player component`, () => {
  const tree = renderer.create(
      <Player />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
