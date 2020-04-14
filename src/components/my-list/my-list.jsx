import React from "react";
import CardHeader from "../card-header/card-header.jsx";
import PageContent from "../page-content/page-content.jsx";
import FilmsList from "../films-list/films-list.jsx"

const MyList = React.memo(function MyList() {
  return (
      <div className="user-page">
        <CardHeader
            authorizationStatus={`NO_AUTH`}
            isMyList={true}
        />
        <PageContent>
            <FilmsList />
        </PageContent>

      </div>
  );
});

export default MyList;
