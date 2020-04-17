import React from "react";
import renderer from "react-test-renderer";
import MyList from "./my-list.jsx";
import CardHeader from "../card-header/card-header";
import {Pages} from "../../const";
import PageContent from "../page-content/page-content";
import FilmsList from "../films-list/films-list";

test(`Correctly render MovieReviews component`, () => {
  const tree = renderer.create(
      <MyList>
        <CardHeader
          authorizationStatus={`NO_AUTH`}
          currentPage={Pages.MY_LIST}
        />
        <PageContent>
          <FilmsList />
        </PageContent>
      </MyList>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
