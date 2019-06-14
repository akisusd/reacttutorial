import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import {Home} from './pages/home';
import {Search} from './pages/search';
import {ProductPage} from './pages/product';
import {Navigation} from './components/navigation';

function AppRouter() {
  return (
    <Router>
      <div className="page">
        <Navigation/>
        <Route path="/" exact component={Home} />
        <Route path="/category/:query" component={Search} />
        <Route path="/brand/:query" component={Search} />
        <Route path="/product/:query" component={ProductPage} />
        <Route path="/search/" component={Search} />
      </div>
    </Router>
  );
}

export default AppRouter;
