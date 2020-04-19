import {ActionType} from "./actions.js";
import {extend} from "../../utils.js";

export const initialState = {
  films: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_FILMS:
      return extend(state, {
        films: action.payload
      });
  }
  return state;
};
