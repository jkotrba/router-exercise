import React from 'react';
import { Route, Link } from 'react-router-dom';
import Book from './Book';

function Books({ match }) {
  return (
    <div>
      <h2>Books</h2>
      <ul>
        <li>
          <Link to={`${match.url}/war-and-peace`}>War and Peace</Link>
        </li>
        <li>
          <Link to={`${match.url}/great-expectations`}>Great Expectations</Link>
        </li>
        <li>
          <Link to={`${match.url}/catch-22`}>Catch 22</Link>
        </li>
      </ul>

      <Route path={`${match.path}/:bookTitle`} component={Book} />
      <Route
        exact
        path={match.path}
        render={() => <h3>Please select a book.</h3>}
      />
    </div>
  )
}

export default Books