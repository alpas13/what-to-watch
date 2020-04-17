import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";
import CardHeader from "../card-header/card-header.jsx";
import CardDescription from "../card-description/card-description.jsx";
import PageContent from "../page-content/page-content.jsx";
import Genre from "../genre/genre.jsx";
import FilmsList from "../films-list/films-list.jsx";
import ShowMoreButton from "../show-more-button/show-more-button.jsx";
import {Pages} from "../../const.js";

test(`Correctly render Main component`, () => {
  const tree = renderer.create(
      <Main>
        <CardHeader
          currentPage={Pages.MAIN}
          authorizationStatus={`NO_AUTH`}
        />
        <CardDescription
          isMoviePage={false}
        />
        <PageContent>
          <Genre />
          <FilmsList />
          <ShowMoreButton />
        </PageContent>
      </Main>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
