import React from "react";

export default function Reducer(state = { user: [], error: "" }, action) {
  switch (action.type) {
    case "Success":
      return {
        user: action.payload,
        error: "",
      };
    case "Error":
      return {
        user: [],
        error: action.payload,
      };
    default:
      return state;
  }
}
