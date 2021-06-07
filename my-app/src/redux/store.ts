import { createStore, combineReducers } from "redux";
import { roomReducer } from "../modules/Rooms/reducers";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
    rooms: roomReducer,
});

export const store = createStore(rootReducer, composeWithDevTools());