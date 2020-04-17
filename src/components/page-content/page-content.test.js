import React from "react";
import renderer from "react-test-renderer";
import PageContent from "./page-content.jsx";
import Footer from "../footer/footer.jsx";

test(`Correctly render PageContent component`, () => {
  const tree = renderer.create(
      <PageContent>
        <Footer />
      </PageContent>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
