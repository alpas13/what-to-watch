import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import NameSpace from "../../reducer/name-space.js";
import Main from "./main.jsx";
import CardHeader from "../card-header/card-header.jsx";
import CardDescription from "../card-description/card-description.jsx";
import PageContent from "../page-content/page-content.jsx";
import Genre from "../genre/genre.jsx";
import FilmsList from "../films-list/films-list.jsx";
import ShowMoreButton from "../show-more-button/show-more-button.jsx";
import {Pages} from "../../const.js";

const mockStore = configureStore([]);

const films = [
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

test(`Correctly render Main component`, () => {
  const store = mockStore({
    [NameSpace.DATA]: {
      films
    }
  });

  const tree = renderer.create(
      <Provider store={store}>
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
            <FilmsList
              films={films}
            />
            <ShowMoreButton />
          </PageContent>
        </Main>
      </Provider>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
