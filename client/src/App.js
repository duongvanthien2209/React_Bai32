import React from 'react';
import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Mainbar from './components/Mainbar';
import Products from './components/Products';
import CartProvider from './components/CartProvider';

const Home = () => <h1>Home</h1>;

function App() {
  return (
    <Router>
      <div className="App">
        <CartProvider>
          <Mainbar />

          <Switch>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route exact path="/products">
              <Products />
            </Route>
          </Switch>
        </CartProvider>
      </div>
    </Router>
  );
}

export default App;
