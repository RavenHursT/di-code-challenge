import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  search,
  clear
} from './store/modules/users'
import { push } from 'connected-react-router'
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
      clear,
      goToProfile
    } = this.props
    const {searchInputVal} = this.state
    return <div className="App-intro">
      Search for a Behance user to view their profile.
      <br/>
      <Autosuggest {...{
        suggestions: usernames,
        onSuggestionsFetchRequested: ({value}) => (value && value.length > 2) ?
          search(value) : null,
        onSuggestionsClearRequested: clear,
        getSuggestionValue: (suggestion) => suggestion,
        renderSuggestion: (suggestion) => <span>{suggestion}</span>,
        inputProps: {
          value: searchInputVal,
          onChange: this.onInputChange
        },
        onSuggestionSelected: (e, {suggestionValue: username}) => goToProfile(username)
      }} />
    </div>
  }
}

export default connect(
  ({userStore}) => ({
    usernames: userStore.users.map(user => user.username),
    fetching: userStore.fetching,
  }),
  (dispatch) => bindActionCreators({
    search,
    clear,
    goToProfile: username => push(`/${username}`)
  }, dispatch)
)(Home)