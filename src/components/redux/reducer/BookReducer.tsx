import Reacts from "react";
import { combineReducers } from "redux";

type BookState = {
  masach: string;
  tensach: string;
  nhaxuatban: string;
  namxuatban: number;
}[];

type BookAction = {
  type: "Add" | "Update" | "Delete";
  book: {
    masach: string;
    tensach: string;
    nhaxuatban: string;
    namxuatban: number;
  };
};

const data = [
  {
    masach: "00001",
    tensach: "Object Oriented Programming",
    nhaxuatban: "Kim Đồng",
    namxuatban: 2012,
  },
  {
    masach: "00002",
    tensach: "Asp.Net Programming",
    nhaxuatban: "Tuổi trẻ",
    namxuatban: 2015,
  },
  {
    masach: "00003",
    tensach: "Principle of Database Design",
    nhaxuatban: "Khoa học kỹ thuật",
    namxuatban: 2020,
  },
  {
    masach: "00004",
    tensach: "Frontend Development with React",
    nhaxuatban: "Văn Lang",
    namxuatban: 2022,
  },
];

export const BookReducer = (state: BookState = data, action: BookAction) => {
  switch (action.type) {
    case "Add":
      return [...state, action.book];
    case "Update":
      let index = state.findIndex((c) => c.masach === action.book.masach);
      let newState = [...state];
      newState[index] = {
        masach: action.book.masach,
        tensach: action.book.tensach,
        nhaxuatban: action.book.nhaxuatban,
        namxuatban: action.book.namxuatban,
      };
      return newState;
    case "Delete":
      let i = state.findIndex((c) => c.masach === action.book.masach);
      let newState1 = [...state];
      newState1.splice(i, 1);
      return newState1;
    default:
      return state;
  }
};
