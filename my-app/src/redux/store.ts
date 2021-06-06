import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { roomReducer } from "../modules/Rooms/reducers";

const rootReducer = combineReducers({
    rooms: roomReducer,
});

export const store = createStore(rootReducer, composeWithDevTools());