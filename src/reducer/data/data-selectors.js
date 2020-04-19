import NameSpace from "../name-space.js";

export const getFilms = (state) => {
  return state[NameSpace.DATA].films;
};
