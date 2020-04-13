import React from "react";
import PageContent from "../page-content/page-content.jsx";
import Genre from "../genre/genre.jsx";
import FilmsList from "../films-list/films-list.jsx";
import ShowMoreButton from "../show-more-button/show-more-button.jsx";

const Main = React.memo(function Main() {
  return (
      <PageContent>
        <Genre />
        <FilmsList />
        <ShowMoreButton />
      </PageContent>
  );
});

export default Main;
