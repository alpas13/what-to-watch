import React from "react";
import PropTypes from "prop-types";
import CardHeader from "../card-header/card-header.jsx";
import PageContent from "../page-content/page-content.jsx";
import FilmsList from "../films-list/films-list.jsx";
import {Pages} from "../../const.js";
import films from "../../mocks/films.js";

const MyList = React.memo(function MyList() {
  return (
    <div className="user-page">
      <CardHeader
        authorizationStatus={`NO_AUTH`}
        currentPage={Pages.MY_LIST}
      />
      <PageContent>
        <FilmsList
          films={films}
        />
      </PageContent>

    </div>
  );
});

MyList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    previewImage: PropTypes.string.isRequired,
    previewVideoLink: PropTypes.string.isRequired,
  })),
};

export default MyList;
