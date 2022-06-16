import React from "react";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { Reducer } from "../reducer/rootReducer";

export const myStore = createStore(Reducer, {}, applyMiddleware(thunk));
