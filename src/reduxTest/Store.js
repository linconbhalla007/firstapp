import { createStore } from "redux";
import counterReducer from "./Reduce";

const store = createStore(counterReducer);

export default store;
