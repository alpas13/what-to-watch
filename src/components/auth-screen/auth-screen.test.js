import React from "react";
import renderer from "react-test-renderer";
import AuthScreen from "./auth-screen.jsx";
import CardHeader from "../card-header/card-header.jsx";
import Footer from "../footer/footer.jsx";
import {Pages} from "../../const.js";

test(`Correctly render AuthScreen component`, () => {
  const tree = renderer.create(
      <AuthScreen>
        <CardHeader
          currentPage={Pages.LOGIN_PAGE}
          authorizationStatus={`NO_AUTH`}
        />
        <Footer/>
      </AuthScreen>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
