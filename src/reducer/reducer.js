import {combineReducers} from "redux";
import NameSpace from "./name-space.js";
import {reducer as data} from "./data/data-reducer.js";
import {reducer as user} from "./user/user-reducer.js";
import {reducer as main} from "./main/main-reducer.js";

export default combineReducers({
  [NameSpace.DATA]: data,
  [NameSpace.USER]: user,
  [NameSpace.MAIN]: main,
});
