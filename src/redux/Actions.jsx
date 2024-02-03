import React from "react";

export function showUser(data) {
  return {
    type: "Success",
    payload: data,
  };
}

export function showError(error) {
  return {
    type: "Error",
    payload: error,
  };
}