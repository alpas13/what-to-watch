import {reducer} from "./data-reducer.js";

test(`reducer return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    films: [],
  });
});
