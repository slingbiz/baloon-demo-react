import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CategoryPage from './CategoryPage';
import ListingPage from './ListingPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/category/:categoryId">
            <CategoryPage />
          </Route>
          <Route path="/listing/:listingId">
            <ListingPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;