// react redux example

// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App";
// import store from "./components/simple-redux-demo/redux/store";
// import { Provider } from "react-redux";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <Provider store={store}>
//     <React.StrictMode>
//       <App />
//     </React.StrictMode>
//   </Provider>
// );

//react toolki

// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App";
// import { Provider } from "react-redux";
// import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from './components/redux-toolkit-demo/features/counter/counterSlice'

// const root = ReactDOM.createRoot(document.getElementById("root"));

// const store = configureStore({
//   reducer : {
//     counter : counterReducer
//   }
// })
// root.render(
//   <Provider store={store} >
//     <React.StrictMode>
//       <App />
//     </React.StrictMode>
//   </Provider>
// );

// readux toolkit with asynck thunk

// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App";
// import { Provider } from "react-redux";
// import { configureStore } from "@reduxjs/toolkit";
// import postsReducer from './components/redux-toolkit-demo/features/posts/postsSliice'

// const root = ReactDOM.createRoot(document.getElementById("root"));

// const store = configureStore({
//   reducer : {
//     posts : postsReducer
//   }
// })
// root.render(
//   <Provider store={store} >
//     <React.StrictMode>
//       <App />
//     </React.StrictMode>
//   </Provider>
// );

// reduxjs toolkit query

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./components/rtk-query/api/apiSlice";

const root = ReactDOM.createRoot(document.getElementById("root"));

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(apiSlice.middleware);
  },
});
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
