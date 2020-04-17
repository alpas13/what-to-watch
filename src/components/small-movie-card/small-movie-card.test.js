import React from "react";
import renderer from "react-test-renderer";
import SmallMovieCard from "./small-movie-card.jsx";

const film =
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
  };

test(`Correctly render SmallMovieCard component`, () => {
  const tree = renderer.create(
      <SmallMovieCard
        film={film}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
