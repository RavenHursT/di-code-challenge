import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  search,
  clear
} from './store/modules/user-search'
import Autosuggest from 'react-autosuggest'

class Home extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      searchInputVal: ``
    }
    this.onInputChange = this.onInputChange.bind(this)
  }

  onInputChange (event, { newValue: searchInputVal }) {
    this.setState({
      searchInputVal
    })
  }

  render() {
    const {
      usernames = [],
      search,
      clear
    } = this.props
    const {searchInputVal} = this.state
    return <div className="App-intro">
      To get started, edit <code>src/App.js</code> and save to reload.
      <br/>
      <Autosuggest {...{
        suggestions: usernames,
        onSuggestionsFetchRequested: ({value}) => (value && value.length > 3) ?
          search(value) : null,
        onSuggestionsClearRequested: clear,
        getSuggestionValue: (suggestion) => suggestion,
        renderSuggestion: (suggestion) => <span>{suggestion}</span>,
        inputProps: {
          value: searchInputVal,
          onChange: this.onInputChange
        }
      }} />
    </div>
  }
}

export default connect(
  ({userSearch}) => ({
    usernames: userSearch.users.map(user => user.username),
    isSearching: userSearch.isSearching,
  }),
  (dispatch) => bindActionCreators({
    search,
    clear
  }, dispatch)
)(Home)