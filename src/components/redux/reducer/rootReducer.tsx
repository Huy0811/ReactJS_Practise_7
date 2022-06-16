import React from "react";
import { combineReducers } from "redux";
import { BookReducer } from "./BookReducer";
import { MathReducer } from "./MathReducer";

export const Reducer = combineReducers({
  books: BookReducer,
  math: MathReducer,
});

export type State = ReturnType<typeof Reducer>;
