import React, { useState } from "react";
import axios from "axios";
import { createStore, applyMiddleware } from "redux";
import Reducer from "./Reducer";
import { showUser, showError } from "./Actions";
import { thunk } from "redux-thunk";
import "../App.css";

const store = createStore(Reducer, applyMiddleware(thunk));

function fetchData() {
  return function () {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        console.log(res);
        console.log(res.data);
        store.dispatch(showUser(res.data));
      })
      .catch((err) => {
        console.log(err);
        store.dispatch(showError(err));
      });
  };
}

export default function Data() {
  const [data, setData] = useState([]);

  store.subscribe(() => {
    console.log(store.getState());
    setData(store.getState().user);
  });

  return (
    <>
      <button onClick={store.dispatch(fetchData)}>Click to get data</button>{" "}
      <br />
      {data.length > 0 ? (
        <button onClick={() => setData([])}>Click to remove data</button>
      ) : null}
      {data
        ? data.map((i) => {
            return (
              <div key={i.id}>
                <h3>{i.name}</h3>
                <h5>{i.email}</h5>
                <hr></hr>
              </div>
            );
          })
        : null}
    </>
  );
}
