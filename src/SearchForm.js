import React from 'react'
import { withRouter } from 'react-router-dom'

class SearchForm extends React.Component {
  searchBox

  constructor(props) {
    super(props)
    this.searchBox = React.createRef()
  }

  componentDidMount() {
    this.updateSearchBox()
  }

  updateSearchBox() {
    const queryParams = new URLSearchParams(this.props.location.search)
    const q = queryParams.get('q')
    this.searchBox.current.value = q || ''
  }

  onSearchSubmit = evt => {
    evt.preventDefault()

    let q = this.searchBox.current.value.trim()
    q = encodeURIComponent(q)
    this.props.history.push(`/search?q=${q}`)
  }

  render() {
    return (
      <form onSubmit={this.onSearchSubmit}>
        <label htmlFor="searchBox">Search</label>
        <input id="searchBox" type="text" ref={this.searchBox} />
        <button type="submit">Search</button>
      </form>
    )
  }
}

export default withRouter(SearchForm)
