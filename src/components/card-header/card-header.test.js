import React from "react";
import renderer from "react-test-renderer";
import CardHeader from "./card-header.jsx";
import {Pages} from "../../const.js";

test(`Correctly render CardHeader component`, () => {
  const tree = renderer.create(
      <CardHeader
        currentPage={Pages.LOGIN_PAGE}
        authorizationStatus={`NO_AUTH`}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
