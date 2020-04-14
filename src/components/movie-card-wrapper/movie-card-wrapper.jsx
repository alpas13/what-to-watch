import React from "react";

const MovieCardWrapper = React.memo(function MovieCardWrapper(props) {
  const {children} = props;
  return (
      <section className="movie-card">
        {children}
      </section>
  );
});

export default MovieCardWrapper;
