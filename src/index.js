import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ProbaContext, { ProbaContextProvider } from './Context/Context';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { Switch, Route, NavLink, Link, Router } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { StarWarsApi } from './components/StarWarsApi';
import { Home } from './components/Home';
import { Store } from 'redux';
import { Provider } from 'react-redux';
import store from './store/redux';
import { StarWarsProvider } from './Context/StarWarsContext';
import { configureStore } from './components/toDo/todoStore/configureStore';


// const root = ReactDOM.createRoot(document.getElementById('root'));
const firebaseConfig = {
  apiKey: "AIzaSyCG3xQfREggZCTrVUkCxev2S_ZAxD7jRy8",
  authDomain: "test-322a3.firebaseapp.com",
  projectId: "test-322a3",
  storageBucket: "test-322a3.appspot.com",
  messagingSenderId: "222334182086",
  appId: "1:222334182086:web:bd329d84331da78746edc7",
  measurementId: "G-CZFHWEP76M"
};

configureStore();
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
ReactDOM.render(
  <React.StrictMode>
    <StarWarsProvider>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </StarWarsProvider>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

