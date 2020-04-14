import React, {Fragment} from "react";
import Main from "../main/main.jsx";
import MoviePage from "../movie-page/movie-page.jsx";
import MyList from "../my-list/my-list.jsx";
import Player from "../player/player.jsx"
import AddReview from "../add-review/add-review.jsx"
import AuthScreen from "../auth-screen/auth-screen.jsx"

const App = React.memo(function App() {
  const cur = `authScreen`;

  return (
      <Fragment>
        {cur === `moviePage` && <MoviePage
            currentTab={`overview`}
        />}
        {cur === `main` && <Main/>}
        {cur === `myList` && <MyList/>}
        {cur === `player` && <Player/>}
        {cur === `addReview` && <AddReview/>}
        {cur === `authScreen` && <AuthScreen/>}
      </Fragment>
  );
});

export default App;
