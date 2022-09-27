import { legacy_createStore as createStore } from "redux";
import { counterReducer } from "../reducers/reducers";

const store = createStore(counterReducer);

export { store };
