import '../App.css';
import React, { useContext, useReducer } from 'react';
import { ProbaContext } from '../Context/Context';

const reducerfn = (state, action) => {
  if (action.type === 'UNOS') {
    return { value: [...state.value, action.val] }
  }
  if (action.type === 'IZBRISI') {
    let polje = [...state.value]
    polje.splice(action.val, 1)
    return { value: [...polje] }
  }
}

export const Home = () => {
  const [stanje, dispatch] = useReducer(reducerfn, { value: [] });

  const inputHandler = (event) => {
    dispatch({ type: "UNOS", val: event.target.value });
  }

  const ctx = useContext(ProbaContext);
  const naz2 = ctx.crnaTema ? "AppCrna" : "AppBela"
  const naz = "App " + naz2;

  return (
    <div className={naz}>
      <input onChange={inputHandler} type="text" />
      <button onClick={() => { dispatch({ type: "IZBRISI", val: 1 }) }} />
    </div>
  );
}