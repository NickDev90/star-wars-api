import { applyMiddleware, createStore } from "redux";
import { rootReducer } from "./reducers/rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { setLocalStorage } from "../utils/localStorage";

const store = createStore(
        rootReducer, 
        composeWithDevTools(applyMiddleware(thunk)) 
    );

    store.subscribe(() => {
        setLocalStorage('store', store.getState().favorites)
    })

export default store;