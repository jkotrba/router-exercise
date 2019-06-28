import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Authors from './Authors'
import Books from './Books'
import Home from './Home'
import SearchForm from './SearchForm'
import Search from './Search'

import './App.css'

function App() {

  return (
    <div className="App">
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/authors">Authors</Link>
            </li>
            <li>
              <Link to="/books">Books</Link>
            </li>
          </ul>
          <hr />
          <div>
            <SearchForm />
          </div>
          <Route exact path="/" component={Home} />
          <Route path="/authors" component={Authors} />
          <Route path="/books" component={Books} />
          <Route exact path="/search" component={Search} />
        </div>
      </Router>
    </div>
  )
}

export default App
