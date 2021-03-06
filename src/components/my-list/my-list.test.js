import React from "react";
import renderer from "react-test-renderer";
import MyList from "./my-list.jsx";
import CardHeader from "../card-header/card-header";
import {Pages} from "../../const";
import PageContent from "../page-content/page-content";
import FilmsList from "../films-list/films-list";

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

test(`Correctly render MovieReviews component`, () => {
  const {films} = mock;

  const tree = renderer.create(
      <MyList>
        <CardHeader
          authorizationStatus={`NO_AUTH`}
          currentPage={Pages.MY_LIST}
        />
        <PageContent>
          <FilmsList
            films={films}
          />
        </PageContent>
      </MyList>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
