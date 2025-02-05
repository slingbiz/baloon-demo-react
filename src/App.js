import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CategoryPage from './CategoryPage';
import ListingPage from './ListingPage';

function App() {
  return (
<<<<<<< Updated upstream
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
=======
    <div className="App">
<<<<<<< Updated upstream
<<<<<<< Updated upstream
=======
<<<<<<< Updated upstream
<<<<<<< Updated upstream
=======
<<<<<<< Updated upstream
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
<<<<<<< Updated upstream
>>>>>>> Stashed changes
>>>>>>> Stashed changes
=======
<<<<<<< Updated upstream
>>>>>>> Stashed changes
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
<<<<<<< Updated upstream
=======
<<<<<<< Updated upstream
=======
=======
      <h1>Hello World</h1>
      <ProductListing />
>>>>>>> Stashed changes
=======
      <h1>Hello World</h1>
      <ProductListing />
>>>>>>> Stashed changes
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
>>>>>>> Stashed changes
    </div>
>>>>>>> Stashed changes
  );
}

export default App;