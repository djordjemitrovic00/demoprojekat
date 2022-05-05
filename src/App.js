import logo from './logo.svg';
import './App.css';
import React, { useContext, useEffect, useReducer, useState } from 'react';
import { ProbaContext } from './Context/Context';
import { useFirebase } from './useFetch';
import { app } from './index';
import { GET_METHOD, POST_METHOD } from './constants/httpConstants';
import { NavLink, Switch, Route, Link } from 'react-router-dom';
import { Home } from './components/Home';
import { StarWarsApi } from './components/StarWarsApi';
import { Login } from './components/Login';
import { useSelector } from 'react-redux';
import { Forma } from './components/Forma';




function App() {

  const isLogined = useSelector(state => state.auth.authenticated);


  return(
    <div className='App'>
      <nav>
        <ul>
          <li>
            <Link to="/" className='stil'>Home</Link>
          </li>
          <li>
            <Link to="/forma" className="stil">Forma</Link>
          </li>
          <li>
            <Link to="/starwars" className='stil'>Star Wars</Link>
          </li>
          {!isLogined && <li>
            <Link to="/login" className='stil'>Login</Link>
          </li> }
          {isLogined && <li>
            <a href="" className='stil'>Logout</a>
          </li> }

        </ul>
      </nav>
      <Route exact path="/forma"><Forma/></Route>
      <Route exact path="/starwars"><StarWarsApi/></Route>  
      <Route exact path="/"><Home/></Route>
      <Route exact path="/login"><Login/></Route>
    </div>
  )
}

export default App;
