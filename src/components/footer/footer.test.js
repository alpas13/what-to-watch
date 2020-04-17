import React from "react";
import renderer from "react-test-renderer";
import Footer from "./footer.jsx";

test(`Correctly render Footer component`, () => {
  const tree = renderer.create(
      <Footer />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
