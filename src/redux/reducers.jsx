// reducers/index.js
import { combineReducers } from "redux";
import objectReducer from "./action";

const rootReducer = combineReducers({
  objects: objectReducer,
  // Add more reducers as needed
});

export default rootReducer;
