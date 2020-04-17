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

const mock = [
  {
    id: 1,
    name: `Shutter Island`,
    posterImage: `img/shutter-island-poster.jpg`,
    previewImage: `img/shutter-island.jpg`,
    backgroundImage: `img/shutter-island-bg.jpg`,
    backgroundColor: `#ffffff`,
    videoLink: `https://some-link`,
    previewVideoLink: `https://some-link`,
    description: `In 1954, a U.S. Marshal investigates the disappearance of a murderer who escaped from a hospital for the criminally insane.`,
    rating: 8.1,
    scoresCount: 610,
    director: `Martin Scorsese`,
    starring: [`Leonardo DiCaprio`, `Emily Mortimer`, `Mark Ruffalo`],
    runTime: 138,
    genre: `Mystery`,
    released: 2010,
    isFavorite: false
  }
];

test(`Correctly render MoviePage component`, () => {
  const {films} = mock;

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
          <FilmsList
            films={films}
          />
        </PageContent>
      </MoviePage>

  ).toJSON();

  expect(tree).toMatchSnapshot();
});
