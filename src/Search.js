import React from 'react'

function Search({ history }) {
  let queryParams = new URLSearchParams(history.location.search)
  let q = queryParams.get('q')

  return (
    <div>
      <h3>You searched</h3>
      <p>{q}</p>
    </div>
  )
}

export default Search
