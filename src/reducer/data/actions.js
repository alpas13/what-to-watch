import films from "../../mocks/films.js";

export const ActionType = {
  LOAD_FILMS: `LOAD_FILMS`,
};

export const ActionCreator = {
  loadFilms: () => {
    return {
      type: ActionType.LOAD_FILMS,
      payload: films,
    };
  }
};
