import React from "react";
import renderer from "react-test-renderer";
import MoviePage from "./movie-page.jsx";
import CardHeader from "../card-header/card-header.jsx";
import CardDescription from "../card-description/card-description.jsx";
import Overview from "../overview/overview.jsx";
import Details from "../details/details.jsx";
import MovieReviews from "../movie-reviews/movie-reviews.jsx";
import PageContent from "../page-content/page-content.jsx";
import FilmsList from "../films-list/films-list.jsx";
import {Pages} from "../../const.js";

test(`Correctly render MoviePage component`, () => {
  const tree = renderer.create(
      <MoviePage
        currentTab={`overview`}
      >
        <CardHeader
          currentPage={Pages.MOVIE_PAGE}
          authorizationStatus={`NO_AUTH`}
        />
        <CardDescription
          isMoviePage={true}
        />
        <Overview/>
        <Details/>
        <MovieReviews/>
        <PageContent>
          <FilmsList/>
        </PageContent>
      </MoviePage>

  ).toJSON();

  expect(tree).toMatchSnapshot();
});
