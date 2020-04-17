import React from "react";
import renderer from "react-test-renderer";
import FilmsList from "./films-list.jsx";
import PreviewFilm from "../preview-film/preview-film.jsx";

test(`Correctly render FilmsList component`, () => {
  const tree = renderer.create(
      <FilmsList>
        <PreviewFilm />
      </FilmsList>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
