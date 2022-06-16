import Reacts from "react";
import { combineReducers } from "redux";

type MathAction = {
  type: "Calculate";
  payload: number;
};

export const MathReducer = (state: number = 1, action: MathAction) => {
  switch (action.type) {
    case "Calculate":
      let result: number = 1;
      let i: number;
      for (i = 1; i <= action.payload; i++) {
        result *= i;
      }
      state = result;
      return state;

    default:
      return state;
  }
};
