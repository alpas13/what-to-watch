export const ActionType = {
  LOAD_FILMS: `LOAD_FILMS`,
};

export const ActionCreator = {
  loadFilms: (films) => {
    return {
      type: ActionType.LOAD_FILMS,
      payload: films,
    };
  }
};
