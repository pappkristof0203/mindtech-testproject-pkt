import React from "react";
import ReduxThunk from "redux-thunk";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";

import HomePage from "./containers/pages/HomePage";
import dataReducer from "./store/reducers/data";
import Layout from "./hoc-HighOrderContainer/Layout/Layout";

export const rootReducer = combineReducers({
  data: dataReducer,
});

// I create a "store" which contain the merged reducers.
const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

function App() {
  return (
    <Provider store={store}>
      <Layout>
        <HomePage />
      </Layout>
    </Provider>
  );
}

export default App;
