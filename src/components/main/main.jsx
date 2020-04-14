import React, {Fragment} from "react";
import PageContent from "../page-content/page-content.jsx";
import Genre from "../genre/genre.jsx";
import FilmsList from "../films-list/films-list.jsx";
import ShowMoreButton from "../show-more-button/show-more-button.jsx";
import MovieCard from "../movie-card/movie-card.jsx";
import Footer from "../footer/footer.jsx";
import MovieCardWrapper from "../movie-card-wrapper/movie-card-wrapper.jsx";

const Main = React.memo(function Main() {
  return (
      <Fragment>
        <MovieCardWrapper>
          <MovieCard />
        </MovieCardWrapper>
        <PageContent>
          <Genre/>
          <FilmsList/>
          <ShowMoreButton/>
          <Footer/>
        </PageContent>
      </Fragment>
  );
});

export default Main;
