import React from "react";
import ReactDOM from "react-dom";
import configureStore from './store/store'
import Root from './components/root'
import { fetchParks } from "./actions/park_actions";
// require('dotenv').config()

document.addEventListener("DOMContentLoaded", () => {
  let store = configureStore();

  if (window.currentUser) {
    const preloadedState = {
      session: { id: window.currentUser.id },
      entities: {
          users: { [window.currentUser.id]: window.currentUser }
        },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.fetchParks = fetchParks;

  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, root);
});